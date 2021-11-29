import ScrollReveal from "scrollreveal"

type Elements = {
  element: string | HTMLElement
  animation: any
}[]

export const initScrollReveal = (targetElements: Elements, defaultProps: any) => {
  if (!targetElements.length) return

  ScrollReveal({ reset: false })

  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation))
  })
  
}

export default initScrollReveal