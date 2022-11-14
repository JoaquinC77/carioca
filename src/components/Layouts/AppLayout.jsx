import React from 'react'
import PropTypes from 'prop-types'
import NavDesktop from '../Menu/NavDesktop'
import { useMediaQuery } from 'react-responsive'
function AppLayout ({ children, onClose }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const renderMobileDrawer = isMobile && (
    <div className='flex justify-start items-start'>
      <button className='flex flex-col w-8 h-4 border-spacing-0 bg-transparent gap-1' onClick={onClose}>
        <div className='bg-primary-bg h-1 w-full rounded'></div>
        <div className='bg-primary-bg h-1 w-full rounded'></div>
        <div className='bg-primary-bg h-1 w-full rounded'></div>
      </button>
    </div>
  )

  // eslint-disable-next-line
  const renderNavDesktop = !isMobile && (
    <NavDesktop />
  )

  return (
    <div className='bg-gray-50'>
      {/* {renderNavDesktop} */}
      <div className="
      container-app
      grid grid-cols-1
      place-content-center
      place-items-center
      z-0
    ">
        <main className="
        overflow-hidden
        py-8
        px-6
        w-full
        h-screen
        bg-gray-50
        bg-[url('/public/bg-opthree.svg')]
        bg-contain
        bg-no-repeat
        bg-bottom
        md:max-w-lg
        md:w-5/6
        md:rounded-xl
        md:shadow-lg">
          {renderMobileDrawer}
          {children}
        </main>
      </div>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClose: PropTypes.func
}

export default AppLayout
