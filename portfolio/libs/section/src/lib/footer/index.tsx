import './footer.module.scss'

export interface FooterProps {
  github: string
}

export const FooterSection = ({
  github
}: FooterProps) => {
  return (
      <footer className="footer navbar-static-bottom">
        <div className="container">
          <a rel="noreferrer" href="#top" className="back-to-top">
            <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
          </a>
          <div className="social-links">
            <a rel="noreferrer" href={github} target="_blank">
              <i className="fa fa-github fa-inverse"></i>
            </a>
          </div>
        </div>
      </footer>
  )
}

export default FooterSection
