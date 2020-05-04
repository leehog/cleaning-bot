import React from 'react'
import styled from 'styled-components'
import {TILE_LIST, TILE_SIZE} from '../config'
import {CleanedListType} from '../pages/main'

const TileWrapper = styled.div`
  // Subtract 2 to make place for border
  width: ${TILE_SIZE - 2}px;
  height: ${TILE_SIZE - 2}px;
  background-color: ${(props: { cleaned: boolean }) => props.cleaned ? 'greenyellow' : 'gray'};
  border: 1px solid black;
`

interface Props {
  cleaned: boolean,
  index: number
}

export function renderTiles(cleaned: CleanedListType) {
  return (
    <>
      {
        TILE_LIST().map((tile, index) =>
          <Tile cleaned={cleaned[index]} index={index}/>
        )
      }
    </>
  )
}

export function Tile(props: Props) {
  const {cleaned, index} = props
  return (
    <TileWrapper key={index} cleaned={cleaned}>
      {index + 1}
    </TileWrapper>
  )
}
