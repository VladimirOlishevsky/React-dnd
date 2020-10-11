import styled from 'styled-components'


export const ImageContainer = styled.div `
  height: 0.8rem;
  margin-left: auto;
  cursor: pointer;
`

export const IconEdit = styled.img.attrs(props => ({
    src: props.src,
}))
`
  height: 100%;
  margin-right: 10px;
`;

export const IconDelete = styled.img.attrs(props => ({
    src: props.src,
}))
`
  height: 100%;
`;