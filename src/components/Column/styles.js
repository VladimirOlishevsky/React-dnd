import styled from 'styled-components'

export const Container = styled.div `
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
  width: 300px;
  height: min-content;
`

export const Title = styled.h3 `
  padding: 8px;
`

export const TaskList = styled.div `
  padding: 8px;
  background: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  transition: background-color 0.2s ease;
`

export const AddNewTaskLink = styled.div `
  cursor: pointer;
  text-align: center;
  margin-bottom: 0;
  line-height: 1.9;
  font-weight: 400;
  color: #323d47;
  letter-spacing: 0.5px;
`
export const AddNewTask = styled.div `
  margin: 8px !important;
  position: relative;
  display: flex;
  flex-direction: row;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 2px;
  padding: 0 1rem ;
  background: #f0f8ff;
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(to right, #B294FF, #57E6E6, #FEFFB8, #57E6E6, #B294FF, #57E6E6);
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }
`
export const AddNewTaskInput = styled.input `
  flex-grow: 1;
  color: #7566a0;
  line-height: 2.4rem;
  vertical-align: middle;
  &::-webkit-input-placeholder {
    color: #7881A1;
  }
  border-style: none;
  background: transparent; 
  outline: none;
`


export const AddNewTaskButton = styled.button `
  color:  #7881A1;
  font-size: 1rem;
  line-height: 2.4rem;
  vertical-align: middle;
  transition: color .25s;
  &:hover {
    color: #BFD2FF;
  }
  padding: 0; 
  background: none; 
  border: none; 
  outline: none;

`