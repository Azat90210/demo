// src/hooks/useCounter.ts
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../store'
import { RootState } from '../store'

export const useCounter = () => {
  const dispatch = useDispatch()
  const count = useSelector((state: RootState) => state.counter.value)

  const incrementCounter = () => {
    dispatch(increment())
  }

  const decrementCounter = () => {
    dispatch(decrement())
  }

  return { count, incrementCounter, decrementCounter }
}
