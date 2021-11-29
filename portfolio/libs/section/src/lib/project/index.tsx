import './project.module.scss'

export interface ProjectProps
{
  title: string,
  info: string[],
  primary: [string, string],
  secondary: [string, string],
  imagePath: string
}

export function ProjectSection({
  title,
  info,
  primary,
  secondary,
  imagePath
}: ProjectProps) {
  return (
    <div className="row">
      <div className="col-lg-4 col-sm-12">
        <div className="project-wrapper__text load-hidden">
          <h3 className="project-wrapper__text-title">{title}</h3>
          <div>
            <p className="mb-4">
              {info.map(para => (
                <p className="mb-4">
                  {para}
                </p>
              ))}
            </p>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn cta-btn--hero"
            href={primary[1]}
          >
            {primary[0]}
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn text-color-main"
            href={secondary[1]}
          >
            {secondary[0]}
          </a>
        </div>
      </div>
      <div className="col-lg-8 col-sm-12">
        <div className="project-wrapper__image load-hidden">
          <a rel="noreferrer" href={primary[1]} target="_blank">
            <div
              data-tilt
              data-tilt-max="4"
              data-tilt-glare="true"
              data-tilt-max-glare="0.5"
              className="thumbnail rounded js-tilt"
            >
              <img
                alt="Project"
                className="img-fluid"
                src={`assets/${imagePath}`}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection