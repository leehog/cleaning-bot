import React, {useState, useEffect, useRef} from 'react'
import {NUMBER_OF_TILES} from '../config'
import {renderTiles} from '../components/tile'
import {convertPosToIndex, getInitialPos, getNextPos} from '../utils/positioning'
import {CleaningBot} from '../components/cleaningBot'
import {PositionType} from '../types'
import {ActionButton, Board, Container, Title} from '../components/styled'

export interface CleanedListType {
  [key: number]: true
}

const CLEANED_INITIAL_STATE: CleanedListType = []

export function MainPage() {
  const [botPosition, setBotPosition] = useState<PositionType>(getInitialPos())
  const [cleaned, setCleaned] = useState<CleanedListType>(CLEANED_INITIAL_STATE)
  const [gameRunning, toggleGameState] = useState<boolean>(false)
  const [done, setDone] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(0)

  // TODO: Type react ref's
  const posInterval = useRef<any>(null)
  const timerInterval = useRef<any>(null)

  useEffect(() => {
    if (gameRunning) {
      timerInterval.current = setInterval(() => {
        setTimer(time => time + 1)
      }, 1000)

      posInterval.current = setInterval(() => {
        setBotPosition((prevState) => getNextPos(prevState))
        // Speed things up :)
      }, 100)
    }
    return () => {
      // Clear interval when unmounting
      posInterval.current && clearInterval(posInterval.current)
      timerInterval.current && clearInterval(timerInterval.current)
    }
  }, [gameRunning])

  useEffect(() => {
    const key = convertPosToIndex(botPosition)
    setCleaned((prevState) => ({
      ...prevState,
      [key]: true
    }))
  }, [botPosition, setCleaned])

  useEffect(() => {
    if (Object.keys(cleaned).length >= NUMBER_OF_TILES) {
      toggleGameState(false)
      setDone(true)
    }
  }, [cleaned])

  const handleStart = () => {
    toggleGameState(true)
  }

  const handleStop = () => {
    setCleaned(CLEANED_INITIAL_STATE)
    setTimer(0)
    toggleGameState(false)
    posInterval.current && clearInterval(posInterval.current)
    timerInterval.current && clearInterval(timerInterval.current)
  }

  const handleReset = () => {
    handleStop()
    handleStart()
    setDone(false)
  }

  return (
    <Container>
      <Title>Cleaning bot</Title>
      {
        gameRunning ?
          <>
            <p>{Object.keys(cleaned).length} / {NUMBER_OF_TILES} tiles cleaned</p>
            <ActionButton onClick={handleStop}>stop!</ActionButton>
            <p>time: {timer}s</p>
          </>
          : null
      }
      {
        !gameRunning && !done ?
          <ActionButton onClick={handleStart}>start!</ActionButton>
          : null
      }
      {
        done &&
        <>
          <p>Cleanup finished in {timer} seconds!</p>
          <ActionButton onClick={handleReset}>Reset!</ActionButton>
        </>
      }
      <Board>
        <CleaningBot pos={botPosition}/>
        {
          renderTiles(cleaned)
        }
      </Board>
    </Container>
  )
}
