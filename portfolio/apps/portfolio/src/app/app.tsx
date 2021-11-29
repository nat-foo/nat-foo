import "./styles.scss"
import { PortfolioTemplate } from "@natfoo/template"
import { config } from "@elsewhere/data"

export function App() {
  return (
    <PortfolioTemplate
      config={config}
    />
  )
}

export default App
