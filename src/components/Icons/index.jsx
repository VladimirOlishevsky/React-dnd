import React from 'react';
import { useDispatch } from 'react-redux';

import editIcon from '../../img/pencil.png';
import deleteIcon from '../../img/garbage.png';

import { ImageContainer, IconEdit, IconDelete } from './styles'
import { changeVisibility, deleteItem } from '../../actions/actionCreators';

const Icons = ({ value, columnId, taskId }) => {

    const dispatch = useDispatch();

    const remove = () => {
        dispatch(deleteItem(columnId, taskId))
    }

    const edit = () => {
        dispatch(changeVisibility(true, value, columnId, taskId))
    }
    return (
        <ImageContainer>
            <IconEdit onClick={edit} src={editIcon}></IconEdit>
            <IconDelete onClick={remove} src={deleteIcon} />
        </ImageContainer>
    )
}

export default Icons;