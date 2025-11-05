import { createContext, useContext, useReducer, useState, useMemo, ReactNode } from 'react'
import { carsReducer, initialState } from '@/reducers/carsReducer'
import { carService } from '@/services/carService'
import { carTypeService } from '@/services/carTypeService'
import { userService } from '@/services/userService'
import type { CarState } from '@/types/carState'
import type { NewCarDto } from '@/utils/api'

interface CarContextType {
  state: CarState
  loadData: () => Promise<void>
  createCar: (carData: NewCarDto) => Promise<void>
  deleteCar: (carId: number) => Promise<void>
  clearError: () => void
}

const CarContext = createContext<CarContextType | undefined>(undefined)

export function CarProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(carsReducer, initialState)
  const [hasLoaded, setHasLoaded] = useState(false)

  const loadData = async (): Promise<void> => {
    if (hasLoaded || state.loading) return

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
  }

  const createCar = async (carData: NewCarDto): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      const newCar = await carService.create(carData)
      dispatch({ type: 'ADD_CAR', payload: newCar })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to create car' })
      throw error
    }
  }

  const deleteCar = async (carId: number): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true })
    try {
      await carService.delete(carId)
      dispatch({ type: 'DELETE_CAR', payload: carId })
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to delete car' })
      throw error
    }
  }

  const clearError = (): void => {
    dispatch({ type: 'SET_ERROR', payload: null })
  }

  const contextValue = useMemo(
    () => ({
      state,
      loadData,
      createCar,
      deleteCar,
      clearError,
    }),
    [state],
  )

  return <CarContext.Provider value={contextValue}>{children}</CarContext.Provider>
}

export const useCarContext = (): CarContextType => {
  const context = useContext(CarContext)
  if (context === undefined) {
    throw new Error('useCarContext must be used within a CarProvider')
  }
  return context
}
