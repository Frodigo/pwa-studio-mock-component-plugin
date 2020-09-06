import gql from "graphql-tag";
import faker from "faker/locale/en";

const GET_MOCKED_DATA = gql`
    query getMockedData {
        mocked_data @client {
            id
            name
            description
        }
    }
`;

const ADD_MOCKED_ITEM_MUTATION = gql`
    mutation addMockedItem(
        $name: String,
        $description: String
    ) {
        addMockedItem(
            name: $name,
            description: $description
        ) @client
    }
`;

export default {
    mutations: {
        addMockedItem: ADD_MOCKED_ITEM_MUTATION
    },
    queries: {
        getMockedData: GET_MOCKED_DATA
    }
};

export const mockedDataResolvers = {
    Query: {
        mocked_data: () => {
            let mockedData = [];
            const RANDOM_LENGTH = faker.random.number({ min: 1, max: 5 });

            for (let i = 0; i < RANDOM_LENGTH; i++) {
                mockedData.push({
                    __typename: 'MockedData',
                    id: faker.random.number(),
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription()
                })
            }
            return mockedData;
        }
    },
    Mutation: {
        addMockedItem: (
            {
                name,
                description
            }
        ) => {
            return {
                id: faker.random.number(),
                name,
                description
            };
        }
    }
};
