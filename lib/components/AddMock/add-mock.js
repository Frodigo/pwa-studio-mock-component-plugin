import {mergeClasses} from '@magento/venia-ui/lib/classify';
import defaultClasses from './add-mock.css';
import mockedOperations from '@marcinkwiatkowski/mock-component-plugin/lib/queries/mocked-operations.gql';
import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Form } from 'informed';
import TextInput from "@magento/venia-ui/lib/components/TextInput";
import {isRequired} from "@magento/venia-ui/lib/util/formValidators";
import Field from "@magento/venia-ui/lib/components/Field";
import Button from "@magento/venia-ui/lib/components/Button";
import TextArea from "@magento/venia-ui/lib/components/TextArea";

const AddMockItem = () => {
    const classes = mergeClasses(defaultClasses);
    const { mutations } = mockedOperations;
    const { addMockedItem } = mutations;
    const [addMockedItemMutation, { data }] = useMutation(addMockedItem);

    return (
        <div className={classes.root}>
            <h3 className={classes.primaryHeading}>Add new item using mocked mutation:</h3>
            <Form
                className={classes.form}
                onSubmit={formValues => {
                    const { name, description } = formValues;
                    addMockedItemMutation({
                        variables: {
                            name,
                            description
                        }
                    });
                }}
            >
                <Field id="name" label="Mock item name">
                    <TextInput
                        field="name"
                        validate={isRequired}
                    />
                </Field>
                <Field id="description" label="Mock item description">
                    <TextArea
                        field="description"
                        validate={isRequired}
                    />
                </Field>

                <div className={classes.buttons}>
                    <Button type="submit">Add Todo</Button>
                </div>


                {data && data.addMockedItem &&
                    <div className={classes.result}>

                        <h4 className={classes.secondaryHeading}>Added item:</h4>
                        <h4><strong>Name: </strong>{data.addMockedItem.name}</h4>
                        <p><strong>description: </strong>{data.addMockedItem.description}</p>
                    </div>
                }
            </Form>
        </div>
    );
};

export default AddMockItem;
