import React from 'react'
import PropTypes from 'prop-types'

export default function Button ({
  onClick,
  type,
  text,
  icon,
  primary
}) {
  const renderIcon = icon && (
    <svg
      aria-hidden="true"
      className="ml-2 -mr-1 w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  )

  const renderClass = primary
    ? 'text-secondary-bg hover:text-white border border-secondary-bg hover:bg-secondary-bg focus:ring-1 focus:outline-none focus:ring-secondary-bg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-secondary-bg dark:text-secondary-bg dark:hover:text-white dark:hover:bg-secondary-bg dark:focus:ring-green-800 inline-flex justify-center items-center w-full'
    : ' text-primary-bg hover:text-white border  border-primary-bg  hover:bg-primary-bg  focus:ring-1  focus:outline-none  focus:ring-gray-300  font-medium rounded-lg  text-sm px-5 py-2.5  text-center mr-2 mb-2  dark:border-primary-bg dark:text-gray-400  dark:hover:text-white  dark:hover:bg-primary-bg dark:focus:ring-primary-bg inline-flex justify-center items-center w-full'

  return (
    <>
      <button onClick={onClick} type={type} className={renderClass}>
        {text}
        {renderIcon}
      </button>
    </>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.bool,
  primary: PropTypes.bool
}

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  text: '',
  icon: false,
  primary: false
}
