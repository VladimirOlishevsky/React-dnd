import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelChange, changeVisibility, saveChangedItem } from '../../actions/actionCreators';

import { InputButtonCancel, InputButtonSave, InputChange, ChangeContainer, ChangeButtons } from './styles';


function InputItem() {

    const { inputVisibility, itemEditedValue, columnChangedId, itemChangedId } = useSelector(state => state.serviceReducer);

    console.log(columnChangedId, itemChangedId)

    const [itemValue, setItemValue] = useState(itemEditedValue ? itemEditedValue : '');

    const dispatch = useDispatch();

    const handleChange = evt => {
        const { value } = evt.target;
        setItemValue(value)
        dispatch(changeVisibility(true, value, columnChangedId, itemChangedId))
    }

    const sendValue = (val, defaultValue) => val ? val : defaultValue;

    const cancelChangeButton = () => {
        dispatch(cancelChange(null))
    }

    const saveChangeButton = () => {
        dispatch(saveChangedItem(columnChangedId, itemChangedId, itemValue));
        dispatch(changeVisibility(null, null, null, null))

    }

    return ( 
        <ChangeContainer inputVisibility={inputVisibility}>
            <InputChange
                value={sendValue(itemEditedValue, itemValue)}
                onChange={handleChange}
            />
            <ChangeButtons>
                <InputButtonSave onClick={saveChangeButton}>
                ok
                </InputButtonSave>
                <InputButtonCancel onClick={cancelChangeButton}>
                cancel
                </InputButtonCancel>
            </ChangeButtons>


        </ChangeContainer>
    )
}


export default InputItem
