import './splash.module.scss'

export interface SplashProps
{
  name: string,
  description: string,
  callout: string
}

export function SplashSection({
  name,
  description,
  callout
}: SplashProps) {
  return (
      <section id="hero" className="jumbotron">
        <div className="container">
          <h1 className="hero-title load-hidden">
            Hi, I'm <span className="text-color-main">{name}</span>
            <br />
            {description}
          </h1>
          <p className="hero-cta load-hidden">
            <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">
              {callout}
            </a>
          </p>
        </div>
      </section>
  )
}

export default SplashSection
