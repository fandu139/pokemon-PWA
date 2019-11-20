import lazySizes from 'lazysizes'

export const lazyClass = 'lazyload'

export const lazySizesInit = () => {
  Object.assign(lazySizes.cfg, {
    expand: 10,
    expFactor: 1.5,
  })
}
