import React from 'react'
import PropTypes from 'prop-types'

function ButtonItem ({ onClick, text }) {
  return (
    <li className='
          w-full
          p-4
          transition
          ease-in-out
          delay-150
          bg-gray-200
          hover:-translate-y-1
          hover:scale-110
          duration-300
        '>
      <button className='w-full bg-transparent h-full font-bold' onClick={onClick}>{text}</button>
    </li>
  )
}

ButtonItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
}

ButtonItem.defaultProps = {
  text: ''
}

export default ButtonItem
