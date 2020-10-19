import styled from 'styled-components'

export const ChangeContainer = styled.div `
    text-align: center;
    position: absolute;
    left: ${props => props.inputVisibility ? '50%' : '-50%'};
    transition: .2s ease-in-out;
    top: 25%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 130px;
    border: 1px solid rebeccapurple;
    border-radius: 30px;
    padding: 20px;
    background-color: #fff;
`

export const ChangeContainerTitle = styled.p `
    font-size: 20px;
`

export const InputChange = styled.input `
    border: none!important;
    border-bottom: solid 1px rgba(38, 44, 49, 0.1) !important;
    border-radius: 0!important;
    background-color: transparent !important;
    width: 80%!important;
    max-width: 100%!important;
    line-height: 1.5!important;
    margin-bottom: 20px;
    margin-top: 20px;
    &:focus {
        background: #ffe !important;
        outline: none;
    }
`

export const ChangeButtons = styled.div `
    justify-content: center;
    margin: -6px!important;
    display: flex!important;
    flex-direction: row!important;
    flex-wrap: wrap!important;
`
export const InputButtonSave = styled.button `
    
    margin: 6px!important;
    border-radius: 6px!important;
    color: rgba(255,255,255,1)!important;
    background: rgba(67,122,220,1)!important;
    text-decoration: none!important;
    display: block!important;
    border: solid 1px transparent!important;
    outline: 0!important;
    font-family: inherit!important;
    font-weight: bold!important;
    border-radius: 4px!important;
    transition: background-color 0.2s ease-out!important;
    line-height: 1.5!important;
    padding: 5px 16px!important;
    word-wrap: normal!important;
    overflow: hidden!important;
    text-overflow: ellipsis!important;
    white-space: nowrap!important;
    cursor: pointer
`

export const InputButtonCancel = styled.button `
    margin: 6px!important;
    border-radius: 6px!important;
    color: rgba(255,255,255,1)!important;
    background: rgba(67,122,220,1)!important;
    text-decoration: none!important;
    display: block!important;
    border: solid 1px transparent!important;
    outline: 0!important;
    font-family: inherit!important;
    font-weight: bold!important;
    border-radius: 4px!important;
    transition: background-color 0.2s ease-out!important;
    line-height: 1.5!important;
    padding: 5px 16px!important;
    word-wrap: normal!important;
    overflow: hidden!important;
    text-overflow: ellipsis!important;
    white-space: nowrap!important;
    cursor: pointer
`