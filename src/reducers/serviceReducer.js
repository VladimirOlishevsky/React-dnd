import {
    ADD_ITEM,
    ADD_COLUMN,
    CHANGE_VISIBILITY,
    DELETE_ITEM,
    CANCEL_CHANGE,
    SAVE_CHANGED_ITEM
} from "../actions/actionTypes";

const uuid = require('uuid');

const initialState = {

    inputVisibility: null,
    itemEditedValue: null,
    columnChangedId: null,
    itemChangedId: null,
    items: [{
            id: uuid.v4(),
            title: 'column 1',
            tasks: [
                { id: '1', content: 'content 1' },
                { id: '2', content: 'content 2' },
                { id: '3', content: 'content 3' }
            ]
        },
        {
            id: uuid.v4(),
            title: 'column 2',
            tasks: [
                { id: '4', content: 'content 4' },
                { id: '5', content: 'content 5' },
                { id: '6', content: 'content 6' }
            ]
        },
        {
            id: uuid.v4(),
            title: 'column 3',
            tasks: [
                { id: '7', content: 'content 7' },
                { id: '8', content: 'content 8' },
                { id: '9', content: 'content 9' }
            ]
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {

        case ADD_ITEM:

            const { id, item } = action.payload;
            return {
                ...state,
                ...state.items.find(el => el.id === id).tasks.push({ id: uuid.v4(), content: item })
            }
        case DELETE_ITEM:

            const { idColumn, idItem } = action.payload;
            const delItem = state.items.find(el => el.id === idColumn).tasks.findIndex(e => e.id === idItem)
            console.log(delItem)

            return {
                ...state,
                ...state.items.find(el => el.id === idColumn).tasks.splice(delItem, 1)
            }

        case CHANGE_VISIBILITY:

            console.log(action.payload)

            const { flag, itemValue, columnIdValue, taskIdValue } = action.payload;

            console.log(columnIdValue, taskIdValue)

            return {
                ...state,
                inputVisibility: flag,
                itemEditedValue: itemValue,
                columnChangedId: columnIdValue,
                itemChangedId: taskIdValue
            }
        case ADD_COLUMN:
            return {
                ...action.payload
            }

        case CANCEL_CHANGE:
            const { visible } = action.payload;

            return {
                ...state,
                inputVisibility: visible,
            }
        case SAVE_CHANGED_ITEM:

            const { idColumnChanged, idItemChanged, changedItem } = action.payload;

            console.log(idColumnChanged, idItemChanged, changedItem)

            return {
                ...state,
                ...state.items.find(el => el.id === idColumnChanged).tasks.find(e => e.id === idItemChanged).content = changedItem

            }

        default:
            return state;
    }
};