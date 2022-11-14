import React from 'react'
import PropTypes from 'prop-types'

function ContainerLayout ({ children, title }) {
  const renderTitle = title && (<h1 className="text-center text-3xl font-semibold mb-10">
    {title}
  </h1>)
  return (
    <div className="flex flex-col justify-center items-center h-full break-words overflow-y-auto overflow-x-hidden">
      {renderTitle}
      {children}
    </div>
  )
}

ContainerLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string
}

ContainerLayout.defaultProps = {
  title: '',
  children: <></>
}

export default ContainerLayout
