export enum AppRoutes {
  home = '/',
  cars = '/cars',
  carDetails = '/cars/:carId',
  profile = '/profile',
  bookCar = '/book-car',
  myBookings = '/my-bookings',
  myCars = '/my-cars',
  myCarsBookings = '/my-cars-bookings',
  addCar = '/add-car',
  logout = '/logout',
  notFound = '*',
}

export interface CarWithDetails {
  id: number
  name: string
  owner: string
  type: string
  image: string
  info?: string
}
