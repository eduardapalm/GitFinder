import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  border: 0.0625rem solid #ddd;
  height: 1.5rem;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`

export const Button = styled.button`
  height: 1.5938rem;
  border: 0.0625rem solid #000;
  background: #000;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
`

export const ErrorMessage = styled.span`
    margin-top: 1rem;
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600; 
`