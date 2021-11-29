import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'

import App from './app/app'

import { initScrollReveal, initTiltAnimation } from "@natfoo/util"
import { targetElements, defaultProps } from "./app/config/scroll-reveal"

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)

initScrollReveal(targetElements, defaultProps)
initTiltAnimation()