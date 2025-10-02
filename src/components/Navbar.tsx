import { ReactElement, useState } from 'react'
import ProfileIcon from '../assets/ProfileIcon'
import CarsIcon from '../assets/CarsIcon'
import ListIcon from '../assets/ListIcon'
import PlusIcon from '../assets/PlusIcon'
import LogoutIcon from '../assets/LogoutIcon'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo'


export default function Navbar(): ReactElement {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
            <nav className={`bg-gray-900 w-full max-w-[430px] mx-auto rounded-b-[30px] relative shadow-lg`}>
                <div className="flex justify-between items-center h-16 px-4 sm:px-6">

                    <div className="flex items-center">
                        <button 
                            onClick={handleMenuClick} 
                            className="text-white text-base sm:text-lg font-medium hover:text-gray-300 transition-colors py-2 px-3 -ml-3 rounded-lg active:bg-gray-800"
                        >
                            {isMenuOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <div className="bg-gray-900 rounded-b-full mt-8 px-4 sm:px-6 py-2 pb-4 -mb-2 shadow-lg">
                            <Link to="/cars" className="flex items-center justify-center text-white hover:text-gray-300 transition-colors" aria-label="Cars">
                                <Logo className="w-7 h-7 sm:w-8 sm:h-8" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Link to="/profile" className="p-3 text-white hover:text-gray-300 transition-colors rounded-lg active:bg-gray-800" aria-label="Profile">
                            <ProfileIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </Link>
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <>
                    {/* <div 
                        className="fixed top-16 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-30"
                        onClick={closeMenu}
                    /> */}
                    
                    <div className="fixed top-18 left-2 w-2/3 mt-4 bg-indigo-400 transform transition-transform duration-300 ease-in-out z-50 rounded-2xl translate-x-0 shadow-2xl">
                        <div className="flex flex-col">
                            
                            {/* Menu Items */}
                            <div className="flex-1 py-2">
                                <div className="px-4">
                                    <Link 
                                        to="/book-car" 
                                        className="flex items-center space-x-3 py-3 text-white hover:text-gray-300 transition-colors"
                                        onClick={closeMenu}
                                    >
                                        <CarsIcon color="white" className="w-5 h-5" />
                                        <span className="text-base">Book A Car</span>
                                    </Link>
                                    
                                    <Link 
                                        to="/my-bookings" 
                                        className="flex items-center space-x-3 py-3 text-white hover:text-gray-300 transition-colors"
                                        onClick={closeMenu}
                                    >
                                        <ListIcon />
                                        <span className="text-base">My Bookings</span>
                                    </Link>
                                </div>

                                <div className="border-t border-gray-700 my-3 mx-4"></div>

                                <div className="px-4">
                                    <div className="text-white font-semibold text-base mb-3">My cars</div>
                                    
                                    <Link 
                                        to="/my-cars" 
                                        className="flex items-center space-x-3 py-3 text-white hover:text-gray-300 transition-colors"
                                        onClick={closeMenu}
                                    >
                                        <CarsIcon color="white" className="w-5 h-5" />
                                        <span className="text-base">See My Cars</span>
                                    </Link>
                                    
                                    <Link 
                                        to="/my-cars-bookings" 
                                        className="flex items-center space-x-3 py-3 text-white hover:text-gray-300 transition-colors"
                                        onClick={closeMenu}
                                    >
                                        <ListIcon/>
                                        <span className="text-base">My Car's Bookings</span>
                                    </Link>
                                    
                                    <Link 
                                        to="/add-car" 
                                        className="flex items-center space-x-3 py-3 text-white hover:text-gray-300 transition-colors"
                                        onClick={closeMenu}
                                    >
                                        <PlusIcon />
                                        <span className="text-base">Add New Car</span>
                                    </Link>
                                </div>

                                <div className="border-t border-gray-700 my-3 mx-4"></div>

                                <div className="px-4">
                                    <Link 
                                        to="/logout" 
                                        className="flex items-center space-x-3 py-3 text-white hover:text-gray-300 transition-colors"
                                        onClick={closeMenu}
                                    >
                                        <LogoutIcon/>
                                        <span className="text-base">Log Out</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
            
    )
}