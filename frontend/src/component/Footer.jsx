import React from 'react'

const Footer = () => {
  return (
    <React.Fragment>
        <footer className="bg-white shadow  dark:bg-gray-800 sticky bottom-0">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="#" className="hover:underline"></a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Hire Us</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Help our community</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Support</a>
                    </li>
                </ul>
            </div>
        </footer>
    </React.Fragment>
  )
}

export default Footer
