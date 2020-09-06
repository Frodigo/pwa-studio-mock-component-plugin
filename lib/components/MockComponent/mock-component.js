import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './mock-component.css';
import { useQuery } from '@apollo/react-hooks';
import mockedOperations from '@marcinkwiatkowski/mock-component-plugin/lib/queries/mocked-operations.gql';
import AddMockItem from "@marcinkwiatkowski/mock-component-plugin/lib/components/AddMock/add-mock";
import MockedItem from "@marcinkwiatkowski/mock-component-plugin/lib/components/MockedItem";

const MockComponent = () => {
    const classes = mergeClasses(defaultClasses);
    const { queries } = mockedOperations;
    const { getMockedData } = queries;
    const { data } = useQuery(getMockedData, {
        fetchPolicy: 'network'
    });

    return (
        <div className={classes.root}>
            <h3 className={classes.primaryHeading}>Mocked data:</h3>
            {data && data.mocked_data.map((data, i) => {
                return <MockedItem key={i} name={data.name} description={data.description}/>
            })}

            <AddMockItem/>
        </div>
    )
};

export default MockComponent;
