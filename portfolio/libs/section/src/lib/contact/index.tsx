import './contact.module.scss'

export interface ContactProps
{
  title: string,
  callTo: string,
  action: string
}

export const ContactSection = ({
  title,
  callTo,
  action
}: ContactProps) => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="contact-wrapper load-hidden">
          <p className="contact-wrapper__text">{callTo}</p>
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn cta-btn--resume"
            href="mailto:natfoo@pm.me"
          >
              {action}
            </a>
        </div>
      </div>
  </section>
  )
}

export default ContactSection
