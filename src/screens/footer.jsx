import React from 'react'

function footer() {
  return (
    <>
    

    <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            {/* Add your footer sections here */}
          </div>
          <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 TERM FORCE. All Rights Reserved.</span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              {/* Social media icons */}
            </div>
          </div>
        </div>
      </footer>
</>
  )
}

export default footer
