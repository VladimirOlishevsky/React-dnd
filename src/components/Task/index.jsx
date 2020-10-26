import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Icons from '../Icons';
import { Container } from './styles'

const Task = ({ task, index, columnId }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {task.content}
          <Icons value={task.content} columnId={columnId} taskId={task.id} />
        </Container>
      )}
    </Draggable>
  )
}

export default Task
