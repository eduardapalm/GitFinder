import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Component = styled.div`
  width: 100%;
  max-width: 61.875rem;
  margin: 0 auto;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: sans-serif;
`

export const ListItem = styled.li`
  margin: .5rem 0;
  background: #222;
  color: #fff;
  padding: .5rem
`

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #000;
  padding: .5rem;
  color: #fff;
`