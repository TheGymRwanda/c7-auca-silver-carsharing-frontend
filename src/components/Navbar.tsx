import { ReactElement } from 'react'
import ProfileIcon from '../assets/ProfileIcon'
import CarsIcon from '../assets/CarsIcon'
import { Link } from 'react-router-dom'


export default function Navbar(): ReactElement {
    return (
        <nav className={`bg-gray-900 w-full max-w-[430px] mx-auto rounded-b-[30px] relative shadow-lg`}>
            <div className="flex justify-between items-center h-16 px-4 sm:px-6">

                <div className="flex items-center">
                    <button className="text-white text-base sm:text-lg font-medium hover:text-gray-300 transition-colors py-2 px-3 -ml-3 rounded-lg active:bg-gray-800">
                        Menu
                    </button>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="bg-gray-900 rounded-b-full mt-8 px-4 sm:px-6 py-2 pb-4 -mb-2 shadow-lg">
                        <Link to="/cars" className="flex items-center justify-center text-white hover:text-gray-300 transition-colors" aria-label="Cars">
                            <CarsIcon color="white" className="w-7 h-7 sm:w-8 sm:h-8" />
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
    )
}