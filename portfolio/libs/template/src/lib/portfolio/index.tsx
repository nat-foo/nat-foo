import {
  SplashSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
  FooterSection,
  ProjectProps
} from "@natfoo/section"

export interface PortfolioProps
{
  config: {
    splash: {
      name: string
      description: string
      callout: string
    }
    about: {
      title: string
      imagePath: string
      info: string[]
    }
    projects: {
      projects: ProjectProps[]
    }
    contact: {
      title: string
      callTo: string
      action: string
    }
    footer: {
      github: string
    }
  }
}

export const PortfolioTemplate = ({ config }: PortfolioProps) => {
  // You could easily create other kinds of templates that use the same config data in different ways.
  return (
    <>
      <div id="top"></div>
      <SplashSection {...config.splash} />
      <AboutSection {...config.about} />
      <ProjectsSection {...config.projects} />
      <ContactSection {...config.contact} />
      <FooterSection {...config.footer} />
    </>
  )
}

export default PortfolioTemplate