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
            title: 'To Do',
            tasks: [
                { id: uuid.v4(), content: 'Pick a language to learn' },
                { id: uuid.v4(), content: 'Listen radio podcasts' },
                { id: uuid.v4(), content: 'Sing up to practice sport' }
            ]
        },
        {
            id: uuid.v4(),
            title: 'In Process',
            tasks: [
                { id: uuid.v4(), content: 'Write daily mails' },
                { id: uuid.v4(), content: 'Wake up early' },
                { id: uuid.v4(), content: 'Reading books' }
            ]
        },
        {
            id: uuid.v4(),
            title: 'On Review',
            tasks: [
                { id: uuid.v4(), content: 'Send email' },
                { id: uuid.v4(), content: 'Buy clothes' },
                { id: uuid.v4(), content: 'Clear phone numbers' }
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
            return {
                ...state,
                ...state.items.find(el => el.id === idColumn).tasks.splice(delItem, 1)
            }

        case CHANGE_VISIBILITY:
            const { flag, itemValue, columnIdValue, taskIdValue } = action.payload;
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
            return {
                ...state,
                ...state.items.find(el => el.id === idColumnChanged).tasks.find(e => e.id === idItemChanged).content = changedItem
            }

        default:
            return state;
    }
};