import { createContext } from 'react'

import type { CarDto } from '@/utils/api'

export const carContext = createContext<CarDto[] | undefined>(undefined)

export default function carContextProvider() {}
