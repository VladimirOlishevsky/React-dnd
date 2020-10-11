import {
    ADD_ITEM,
    ADD_COLUMN,
    CHANGE_VISIBILITY,
    DELETE_ITEM,
    CANCEL_CHANGE,
    SAVE_CHANGED_ITEM
} from "./actionTypes";

export const addItem = (id, item) => ({
    type: ADD_ITEM,
    payload: { id, item }
})

export const addColumn = (column) => ({
    type: ADD_COLUMN,
    payload: column
})

export const changeVisibility = (flag, itemValue, columnIdValue, taskIdValue) => ({
    type: CHANGE_VISIBILITY,
    payload: { flag, itemValue, columnIdValue, taskIdValue }
})

export const deleteItem = (idColumn, idItem) => ({
    type: DELETE_ITEM,
    payload: { idColumn, idItem }
})

export const cancelChange = (visible) => ({
    type: CANCEL_CHANGE,
    payload: { visible }
})

export const saveChangedItem = (idColumnChanged, idItemChanged, changedItem) => ({
    type: SAVE_CHANGED_ITEM,
    payload: { idColumnChanged, idItemChanged, changedItem }
})