import {
  createContext,
  useContext,
  useReducer,
  useState,
  useMemo,
  useCallback,
  ReactNode,
} from 'react'
import { carsReducer, initialState } from '@/reducers/carsReducer'
import { carService } from '@/services/carService'
import { carTypeService } from '@/services/carTypeService'
import { userService } from '@/services/userService'
import type { CarState } from '@/types/carState'
import type { NewCarDto } from '@/utils/api'

interface CarStateContextType {
  state: CarState
}

interface CarActionsContextType {
  loadData: () => Promise<void>
  createCar: (carData: NewCarDto) => Promise<void>
  deleteCar: (carId: number) => Promise<void>
  clearError: () => void
  retryLoad: () => Promise<void>
}

const CarStateContext = createContext<CarStateContextType | undefined>(undefined)
const CarActionsContext = createContext<CarActionsContextType | undefined>(undefined)

export function CarProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(carsReducer, initialState)
  const [hasLoaded, setHasLoaded] = useState(false)

  const loadData = useCallback(async (): Promise<void> => {
    if (hasLoaded) return

    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      const [cars, carTypes, users] = await Promise.all([
        carService.getAll(),
        carTypeService.getAll(),
        userService.getAll(),
      ])
      dispatch({ type: 'LOAD_SUCCESS', payload: { cars, carTypes, users } })
      setHasLoaded(true)
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to load car data' })
    }
  }, [hasLoaded])

  const createCar = useCallback(async (carData: NewCarDto): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      const newCar = await carService.create(carData)
      dispatch({ type: 'ADD_CAR', payload: newCar })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to create car' })
      throw error
    }
  }, [])

  const deleteCar = useCallback(async (carId: number): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      await carService.delete(carId)
      dispatch({ type: 'DELETE_CAR', payload: carId })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to delete car' })
      throw error
    }
  }, [])

  const clearError = useCallback((): void => {
    dispatch({ type: 'SET_ERROR', payload: null })
  }, [])

  const retryLoad = useCallback(async (): Promise<void> => {
    setHasLoaded(false)
    dispatch({ type: 'SET_ERROR', payload: null })
    await loadData()
  }, [loadData])

  const stateValue = useMemo(() => ({ state }), [state])
  const actionsValue = useMemo(
    () => ({
      loadData,
      createCar,
      deleteCar,
      clearError,
      retryLoad,
    }),
    [loadData, createCar, deleteCar, clearError, retryLoad],
  )

  return (
    <CarStateContext.Provider value={stateValue}>
      <CarActionsContext.Provider value={actionsValue}>{children}</CarActionsContext.Provider>
    </CarStateContext.Provider>
  )
}

export const useCarState = (): CarState => {
  const context = useContext(CarStateContext)
  if (context === undefined) {
    throw new Error('useCarState must be used within a CarProvider')
  }
  return context.state
}

export const useCarActions = (): CarActionsContextType => {
  const context = useContext(CarActionsContext)
  if (context === undefined) {
    throw new Error('useCarActions must be used within a CarProvider')
  }
  return context
}
