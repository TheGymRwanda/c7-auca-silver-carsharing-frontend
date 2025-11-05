import type { CarDto, CarTypeDto, UserDto } from '@/utils/api'

export interface CarState {
  cars: CarDto[]
  carTypes: CarTypeDto[]
  users: UserDto[]
  loading: boolean
  error: string | null
}

export type CarAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'LOAD_SUCCESS'; payload: { cars: CarDto[]; carTypes: CarTypeDto[]; users: UserDto[] } }
  | { type: 'ADD_CAR'; payload: CarDto }
  | { type: 'DELETE_CAR'; payload: number }
