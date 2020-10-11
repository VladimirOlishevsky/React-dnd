import styled from 'styled-components'

export const Container = styled.div `
  display: flex;
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;

  background: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`