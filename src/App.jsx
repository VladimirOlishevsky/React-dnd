import React from 'react';
import { useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import Column from './components/Column/index';
import { Container } from './stylesAppContainer';
import ChangeItemField from './components/ChangeItemField';

export default function App() {

  const { items } = useSelector(state => state.serviceReducer);

  const onDragEnd = (props) => {
    const { source, destination, draggableId } = props;

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId &&
      destination.index === source.index) {
      return
    }

    const sourceColumn = items.find(
      item => item.id === source.droppableId
    )
    const destinationColumn = items.find(
      item => item.id === destination.droppableId
    )

    const task = sourceColumn.tasks.find(item => item.id === draggableId)

    sourceColumn.tasks.splice(source.index, 1)
    destinationColumn.tasks.splice(destination.index, 0, task)
  }
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd} >
        <Container>
          {
            items.map(column => (<
              Column column={column}
              key={column.id}> </Column>
            ))
          }
        </Container>
      </DragDropContext>
      <ChangeItemField />
    </>
  )
}