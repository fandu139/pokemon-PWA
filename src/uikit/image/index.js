// @flow
import * as React from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import { lazyClass } from '../../config/lazysizes'

const StyledImage = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.radius};
`

/**
 * @param {String} props.source
 * @param {String} props.alt
 * @param {String | Number} props.radius
 * @param {String | Number} props.width
 * @param {String | Number} props.height
 * @return {React.Node}
 */
function Image({
  source,
  alt,
  radius,
  width,
  height,
  ...props
}) {
  return (
    <LazyLoad once resize>
      <StyledImage
        className={lazyClass}
        src={source}
        srcset={source}
        alt={alt}
        radius={radius}
        width={width}
        height={height}
        {...props}
      />
    </LazyLoad>
  )
}

Image.defaultProps = {
  radius: 0,
  width: '100%',
  height: 'auto',
}

export default Image
