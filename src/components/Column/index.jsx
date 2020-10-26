import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../Task/index';

import items from './utils'

import {
    Container,
    Title,
    TaskList,
    AddNewTask,
    AddNewTaskLink,
    AddNewTaskInput,
    AddNewTaskButton
} from './styles';

import { addItem } from '../../actions/actionCreators';

const Column = ({ column }) => {

    const [item, setItem] = useState('')

    const dispatch = useDispatch();

    const addNewItem = () => {
        dispatch(addItem(column.id, item));
        setItem('')
    }
    const addNewItemKeyPress = (e) => {
        if (e.key === 'Enter') {
            dispatch(addItem(column.id, item));
            setItem('')
        }
    }
    return (
        <Container>
            <Title>{column.title}</Title>

            <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {column.tasks.map((task, index) => (
                            <Task key={task.id} task={task} index={index} columnId={column.id}></Task>
                        ))}
                        {provided.placeholder}
                    </TaskList>
                )}

            </Droppable>
            <AddNewTaskLink>{items.addNewItem}</AddNewTaskLink>
            <AddNewTask >
                <AddNewTaskInput
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    onKeyPress={addNewItemKeyPress}
                >
                </AddNewTaskInput>
                <AddNewTaskButton
                    onClick={addNewItem}
                >
                    {items.add}
                </AddNewTaskButton>
            </AddNewTask>

        </Container>
    )
}

export default Column
