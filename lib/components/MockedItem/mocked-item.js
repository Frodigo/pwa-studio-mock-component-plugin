import React from "react";
import {mergeClasses} from '@magento/venia-ui/lib/classify';
import defaultClasses from './mocked-item.css';

const MockedItem = props => {
    const classes = mergeClasses(defaultClasses);
    const {name, description} = props;

    return (
        <div className={classes.mockedItem}>
            <h4 className={classes.secondaryHeading}>{name}</h4>
            <p>{description}</p>
        </div>
    )
};

export default MockedItem;
