import React, { useMemo } from 'react'
import './styles.css'
import PropTypes from 'prop-types'

const getDirectionStyle = (
  dir,
  size
) => {
  switch (dir) {
    case 'left':
      return {
        top: 0,
        left: 0,
        transform: 'translate3d(-100%, 0, 0)',
        width: size,
        height: '100vh'
      }
    case 'right':
      return {
        top: 0,
        right: 0,
        transform: 'translate3d(100%, 0, 0)',
        width: size,
        height: '100vh'
      }
    case 'bottom':
      return {
        left: 0,
        right: 0,
        bottom: 0,
        transform: 'translate3d(0, 100%, 0)',
        width: '100%',
        height: size
      }
    case 'top':
      return {
        left: 0,
        right: 0,
        top: 0,
        transform: 'translate3d(0, -100%, 0)',
        width: '100%',
        height: size
      }

    default:
      return {}
  }
}

const DrawerCustom = function ({
  open,
  onClose = () => {},
  children,
  style,
  enableOverlay = true,
  overlayColor = '#000',
  overlayOpacity = 0.4,
  zIndex = 30,
  duration = 500,
  direction,
  size = 250,
  className,
  customIdSuffix
}) {
  const idSuffix = useMemo(() => {
    return customIdSuffix || (Math.random() + 1).toString(36).substring(7)
  }, [customIdSuffix])

  const overlayStyles = {
    backgroundColor: `${overlayColor}`,
    opacity: `${overlayOpacity}`,
    zIndex
  }

  const drawerStyles = {
    zIndex: zIndex + 1,
    transitionDuration: `${duration}ms`,
    ...getDirectionStyle(direction, size),
    ...style
  }

  return (
        <div id={'DrawerCustom' + idSuffix} className='DrawerCustom'>
            <input
                type='checkbox'
                id={'DrawerCustom__checkbox' + idSuffix}
                className='DrawerCustom__checkbox'
                onChange={onClose}
                checked={open}
            />
            <nav
                role='navigation'
                id={'DrawerCustom__container' + idSuffix}
                style={drawerStyles}
                className={'DrawerCustom__container ' + className}
            >
                {children}
            </nav>
            {enableOverlay && (
                <label
                    htmlFor={'DrawerCustom__checkbox' + idSuffix}
                    id={'DrawerCustom__overlay' + idSuffix}
                    className='DrawerCustom__overlay'
                    style={overlayStyles}
                />
            )}
        </div>
  )
}

DrawerCustom.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style: PropTypes.object,
  enableOverlay: PropTypes.bool,
  overlayColor: PropTypes.string,
  overlayOpacity: PropTypes.number,
  zIndex: PropTypes.number,
  duration: PropTypes.number,
  direction: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  customIdSuffix: PropTypes.string
}

DrawerCustom.defaultProps = {
  open: false,
  onClose: () => {},
  enableOverlay: true,
  overlayColor: '#000',
  overlayOpacity: 0.4,
  zIndex: 30,
  duration: 500,
  size: 250
}

export default DrawerCustom
