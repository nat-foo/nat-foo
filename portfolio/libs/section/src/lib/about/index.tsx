import './about.module.scss'

export interface AboutProps
{
  title: string
  imagePath: string
  info: string[]
}

export function AboutSection({
  title,
  imagePath,
  info
}: AboutProps) {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title load-hidden">{title}</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image load-hidden">
              <img
                alt="Profile"
                className="img-fluid shadow-lg"
                height="auto"
                width="300px"
                src={`assets/${imagePath}`}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info load-hidden">
              {
                info.map((para) => (
                  <p className="about-wrapper__info-text">
                    {para}
                  </p>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
