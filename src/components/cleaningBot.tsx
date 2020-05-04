import React from 'react'
import styled from 'styled-components'
import {PositionType} from '../types'
import {TILE_SIZE} from '../config'

const BotSize = TILE_SIZE - 7
const BotWrapper = styled.div`
  position: absolute;
  left: ${(props:{ pos: PositionType }) => props.pos.x}px;
  top: ${(props:{ pos: PositionType }) => props.pos.y}px;
  border: 3px solid salmon;
  width: ${BotSize}px;
  height: ${BotSize}px;
  border-radius: ${TILE_SIZE}px;
`

interface Props {
  pos: PositionType
}

export function CleaningBot(props: Props) {
  const {pos} = props
  return (
    <BotWrapper pos={pos}>

    </BotWrapper>
  )
}
