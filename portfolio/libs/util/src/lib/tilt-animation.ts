import VanillaTilt from "vanilla-tilt"

export const initTiltAnimation = () => {
  const elements = document.querySelectorAll(".js-tilt")
  VanillaTilt.init(Array.from(elements) as HTMLElement[])
}

export default initTiltAnimation