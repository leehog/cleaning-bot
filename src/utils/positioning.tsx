import {PositionType} from '../types'
import {COL_LENGTH, ROW_LENGTH, TILE_SIZE} from '../config'

let xCoords = getCoords(ROW_LENGTH)
let yCoords = getCoords(COL_LENGTH)

function getCoords(length: number): number[] {
  let arr = []
  for (let i = 0; arr.length < length; i += TILE_SIZE) {
    arr.push(i)
  }
  return arr
}

export function getInitialPos(): PositionType {
  return {
    x: xCoords[Math.floor(Math.random() * xCoords.length)],
    y: yCoords[Math.floor(Math.random() * yCoords.length)]
  }
}

function getNextVal(pos: number, coords: number[]): number {
  const currentIndex = coords.indexOf(pos)
  const nextPos = currentIndex + 1
  const maxVal = coords[coords.length - 1]
  return coords[nextPos] <= maxVal ? coords[nextPos] : pos
}

function getPrevVal(pos: number, coords: number[]): number {
  const currentIndex = coords.indexOf(pos)
  const prevPos = currentIndex - 1
  return coords[prevPos] >= 0 ? coords[prevPos] : pos
}


export function getNextPos(currentPos: PositionType): PositionType {
  const {x, y} = currentPos
  const possibleX = [getNextVal(x, xCoords), getPrevVal(x, xCoords)]
  const possibleY = [getNextVal(y, yCoords), getPrevVal(y, yCoords)]

  const nextPos = [
    {x: possibleX[Math.floor(Math.random() * 2)], y},
    {y: possibleY[Math.floor(Math.random() * 2)], x}
  ]

  return nextPos[Math.floor(Math.random() * 2)]
}

export function convertPosToIndex(pos: PositionType): number {
  const rowNr = yCoords.indexOf(pos.y)
  const colNr = xCoords.indexOf(pos.x)

  // TODO: Consider other way of calculating, but this works... I think
  return parseInt(`${rowNr > 0 ? rowNr : ''}${colNr}`)
}

