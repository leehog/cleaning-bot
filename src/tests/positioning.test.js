import { convertPosToIndex, getCoords, getInitialPos, getNextPos, getNextVal, getPrevVal } from '../utils/positioning'

const coords_10 = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225]
const coords_20 = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475]

describe('Positioning utils tests', () => {
  describe('getCoords', () => {
    it('Should get coordinates based on the row length & tile size that fits 10 x 10', () => {
      const ROW_LENGTH = 10
      const TILE_SIZE = 25

      expect(getCoords(ROW_LENGTH, TILE_SIZE)).toEqual(coords_10)
    })
    it('Should get coordinates based on the col length & tile size that fits 10 x 20', () => {
      const COL_LENGTH = 20
      const TILE_SIZE = 25

      expect(getCoords(COL_LENGTH, TILE_SIZE)).toEqual(coords_20)
    })
  })
  describe('getInitialPos', () => {
    it('Should return random coordinates', () => {
      // Can't really assert on anything useful except the keys
      expect(Object.keys(getInitialPos())).toEqual(['x', 'y'])
    })
  })
  describe('getNextVal & gePrevVal', () => {
    it('Should get the next value in line', () => {
      expect(getNextVal(50, coords_10)).toEqual(75)
    })
    it('Should return the currentValue if its the last one', () => {
      expect(getNextVal(225, coords_10)).toEqual(225)
    })
    it('Should get the previous value in line', () => {
      expect(getPrevVal(25, coords_10)).toEqual(0)
    })
    it('Should return the currentValue if its the first one', () => {
      expect(getPrevVal(0, coords_10)).toEqual(0)
    })
  })
  describe('convertPosToIndex', () => {
    it('Should convert the current position to a number', () => {
      // TODO: Take another look, this is weird
      expect(convertPosToIndex({ x: 25, y: 25 })).toEqual(11)
      expect(convertPosToIndex({ x: 0, y: 25 })).toEqual(10)
      expect(convertPosToIndex({ x: 25, y: 50 })).toEqual(21)
    })
  })
})
