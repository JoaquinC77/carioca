import React from 'react'
import PropTypes from 'prop-types'

const DrawerBody = ({ children }) => {
  return (
    <div className='bg-gray-100 h-full flex flex-col'>
      <div className='flex items-center flex-col justify-end'>
        <img src='/icons-cards.png' className='w-7/12'/>
      </div>
      {children}
      <div className='flex items-center flex-col justify-end h-full'>
        <img src='/aces.png' className='w-4/12 my-4'/>
      </div>
    </div>
  )
}

DrawerBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default DrawerBody
