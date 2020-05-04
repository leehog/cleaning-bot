// Didn't have time to make everything dynamic
// But i think it works if you find the right
// dimensions for the NUMBER_OF_TILES & ROW_LENGTH is always 10
// For ex. NUMBER_OF_TILES = 200 & COL_LENGTH = 20 should work

export const NUMBER_OF_TILES: number = 100

export const ROW_LENGTH: number = 10
export const COL_LENGTH: number = 10

export function TILE_LIST(): number[]{
  let arr = []
  for(let i = 0; i < NUMBER_OF_TILES; i++) {
    arr.push(i)
  }
  return arr
}

export const TILE_SIZE: number = 25
