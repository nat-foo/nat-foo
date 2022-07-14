import { ProjectProps } from "@natfoo/section"

export const config = {
    splash: {
      name: "Nathan Foottit",
      description: "I write Ethically-Aligned Code.",
      callout: "Ethically-what?"
    },
    about: {
      title: "An Ethics-Driven Approach",
      imagePath: "profile.jpg",
      info: [
        "I'm a recent Law graduate with 8 years experience as a software developer broadly across TypeScript, the MERN-stack, Unity, C#, Machine Learning, and Solidity. I use test-driven approaches to ensure ethical considerations are inherent by design.",
        "My legal background has equipped me with an eye for detail and a scrupulous edge-case detector, and my exposure across the software spectrum has armed me with valuable experience as a generalist and fast adapter.",
        "I am fascinated by questions at the intersection of law and tech, and am looking to meet people who consider ethics first, and push my capacity as a generalist and ability to wear several hats at once."
      ]
    },
    projects: {
        projects: [
        {
          title: "Jalopy Theatre Live",
          info: [
            "Since COVID-19, the NY-based Jalopy Theatre has pivoted their business model in a big way.",
            "Working at DOTDOT, I took a pivotal role in helping Jalopy go digital as the primary developer, building on a core React library to include a Mongo emote networking interface, a live representation of the crowd, and a minimalistic chat room."
          ],
          primary: ["Read More", "https://dotdot.studio/project/jalopy-theatre-live-on-social/"],
          secondary: ["Tech Crunch", "https://techcrunch.com/2021/07/28/ascap-lab-highlights-a-quartet-of-early-stage-music-startup"],
          imagePath: "project-jalopy.jpg"
        },
        {
          title: "DOTDOT Social",
          info: [
            "What started as our team's entry into a game-jam during the early weeks of COVID-19, turned into DOTDOT's main product offering in 2020.",
            "In addition to the initial ideation and prototype design, I was involved extensively in front-end React development for the lobby, cinema, photo-booth, and trivia game, as well as server development and custom tooling across the ecosystem.",
            "Tools used primarily involved Typescript, React, MaterialUI, NX, Node, Express, and Mongo."
          ],
          primary: ["Read More", "https://dotdot.social/"],
          secondary: ["'Good Design' Award", "https://good-design.org/projects/inc-5000-marketplace/"],
          imagePath: "project-social.jpg"
        },
        {
          title: "Conversational ML",
          info: [
            "For the past year I have been working on an undisclosed machine learning project, which utilises Nvidia's NeMo docker container to run ASR, NLP, and TTS models. The net result is a conversational assistant which deploys in the cloud, liasing with a physical art installation running Unity.",
            "While I can't yet reveal much about the project, I have been involved significantly with Docker, networking and API creation, Flask app development, Python process wrapping, and ML model training.",
          ],
          primary: ["General Idea", "https://towardsdatascience.com/create-your-own-virtual-personal-assistant-94be5df65ced"],
          secondary: ["What is NeMo?", "https://docs.nvidia.com/deeplearning/nemo/user-guide/docs/en/main/core/core.html"],
          imagePath: "project-ml.jpg"
        },
        {
          title: "Does AI & the Law Speak the Same Language?",
          info: [
            "In September 2021, I gave a talk at my local university on the topic of whether AI and the Law speak the same language.",
            "While everyone agrees that AI should seek morality in some way, it is difficult to say how. When deterministic rules are applied to stochastic decision-makers, there is an inherent language barrier involved – and it’s not limited to the code itself."
          ],
          primary: ["Video", "https://www.youtube.com/watch?v: 9BhML5uWtDQ"],
          secondary: ["Transcript", "https://github.com/nat-foo/ai-ethics-talk"],
          imagePath: "project-presentation.png"
        },
        {
          title: "Aether Edit",
          info: [
            "Working at Survansix, I took the lead technical role in designing and developing their flagship game-creation game, Aether Edit. Built in Javascript, the game employs several under-the-hood tricks to keep performance lightning fast, while still enabling massive, sandbox world creation.",
            "The biggest challenge for this project was the depth-based collision system. The game takes a hybrid approach: grid-based for custom terrain placement, with object-based collisions for dynamic actors and static props. Null maps are used to fill out large voids of space, and a shader-based loader leverages the GPU's lightning speed to offload out-of-view chunks."
          ],
          primary: ["Play", "https://survansix.itch.io/aether-edit"],
          secondary: ["Other Games", "https://survansix.itch.io/"],
          imagePath: "project-aether.png"
        },
        /*
        {
          title: "Disrupting Law, First Place",
          info: [
            "In August 2016, I competed in a weekend-long inter-university hackathon with five other students. As attendees were mostly from the law faculty, our team gained a competitive advantage when I was able to bring our idea to life. This is where my passion for legaltech solutions first ignited.",
            "Our product was a social-media chatbot (before it was cool), which interfaced with socials to provide law firms with enhanced client acquisition. My involvement consisted of building the retrieval chatbot in Python, and constructing a limited ML-based demo for live audience participation."
          ],
          primary: ["Read More", "https://research.qut.edu.au/ace/2016/08/15/disrupting-law-and-enabling-entrepreneurship/"],
          secondary: ["About the Event", "https://www.thelegalforecast.com/disrupting-law-national"],
          imagePath: "project-lawbot.png"
        }
        */
      ] as ProjectProps[],
    },
    contact: {
      title: "So, what's next?",
      callTo: "Shoot me an Email :)",
      action: "natfoo@pm.me"
    },
    footer: {
      github: "https://github.com/nat-foo"
    }
}