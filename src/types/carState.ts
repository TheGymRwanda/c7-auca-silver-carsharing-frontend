import type { CarDto, CarTypeDto } from '@/utils/api'

export interface CarState {
  cars: CarDto[]
  carTypes: CarTypeDto[]
  loading: boolean
  error: string | null
}

export type CarAction =
  // Loading actions
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }

  // Data loading
  | { type: 'LOAD_SUCCESS'; payload: { cars: CarDto[]; carTypes: CarTypeDto[] } }

  // Car operations
  | { type: 'ADD_CAR'; payload: CarDto }
  | { type: 'DELETE_CAR'; payload: number }
