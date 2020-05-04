import styled from 'styled-components'
import {COL_LENGTH, ROW_LENGTH, TILE_SIZE} from '../config'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: antiquewhite;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-weight: bold;
`

export const Board = styled.div`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  width: ${TILE_SIZE * ROW_LENGTH}px;
  height: ${TILE_SIZE * COL_LENGTH}px;
  background-color: red;
  margin-top: 20px;
`

export const ActionButton = styled.button`
  background-color: salmon;
  color: antiquewhite;
  border: 1px solid antiquewhite;
  border-radius: 10px;
  padding: 10px 25px;
  cursor: pointer;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  &:hover {
      background-color: antiquewhite;
      color: salmon;
      border: 1px solid salmon;
  }
`
