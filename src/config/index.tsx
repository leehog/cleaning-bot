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
