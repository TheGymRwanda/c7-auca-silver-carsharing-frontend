import type { CarState, CarAction } from '@/types/carState'

const initialState: CarState = {
  cars: [],
  carTypes: [],
  users: [],
  loading: false,
  error: null,
}

export const carsReducer = (state: CarState, action: CarAction): CarState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload }

    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false }

    case 'LOAD_SUCCESS':
      return {
        ...state,
        cars: action.payload.cars,
        carTypes: action.payload.carTypes,
        users: action.payload.users,
        loading: false,
        error: null,
      }

    case 'ADD_CAR':
      return {
        ...state,
        cars: [...state.cars, action.payload],
      }

    case 'DELETE_CAR':
      return {
        ...state,
        cars: state.cars.filter(car => car.id !== action.payload),
      }

    default:
      return state
  }
}

export { initialState }
