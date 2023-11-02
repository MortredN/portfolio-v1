import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import createElement from 'react-syntax-highlighter/dist/esm/create-element'
import { useWindowSize } from '../../../../hooks/screenSize'

const codeString = `# author: Bach Viet Ha
# description: Experiences & Projects

Work Experiences 💻:
  - Company-Name: Superjoi 🩷
    Job-Title: Software Developer
    When: June.2022 - now
    Location: London, England (Remote)
    What-I-Do:
      - "Developing a link-in-bio/content fundraising webapp"

  - Company-Name: PVcomBank 🟡
    Job-Title: Software Developer
    When: Mar.2022 - Jun.2023
    Location: Hanoi, Vietnam
    What-I-Do:
      - "Providing users with multiple digital bank solutions, using Next.js as the main framework"
      - "Acquaintanced with creating cloud REST APIs using AWS Lambda"

  - Company-Name: CMC Global 🔵
    Job-Title: Software Engineer | Tech Support
    When: Jun.2020 - Dec.2021
    Location: Hanoi, Vietnam
    What-I-Do:
      - "Involvement in logistics and supply chain application"
      - "Providing users with 24/7 technical support and maintenance development"
      - "Web development tech stacks: jQWidgets and Vue.js as front-end and Java as back-end"

Projects ⚒️:
  Workplace-Projects:
    - Project-Name: Superjoi
      Description: A platform where Creators get funded by Superfans ✨
      Website: https://superjoi.com 👈

  Personal-Projects:
    - Project-Name: Personal Portfolio
      Description: This website itself!!! 🎉🎉🎉
      Website: https://bachhv.com 👈

Certificates 📜:
  - Certificate-Name: AWS Certified Solutions Architect - Associate ☁️
    Website: https://www.credly.com/badges/a1eb00a0-cf97-44a7-8f82-3729849db352
  
  - Certificate-Name: AWS Certified Developer - Associate ☁️
    Website: https://www.credly.com/badges/4538b70e-d7da-4c76-b98a-0c311e7279ea
  
  - Certificate-Name: AWS Certified Cloud Practitioner ☁️
    Website: https://www.credly.com/badges/a87b2ce2-6f95-4202-8701-9af0a3cb757b

  - Certificate-Name: Three.js Journey 🧊
    Website: https://threejs-journey.com/certificate/view/25280
`

const WorkExperience = ({ padding = `10px` }) => {
  const windowSize = useWindowSize()

  // https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/104
  // Massive thanks to jakubjafra
  const rowRenderer = ({ rows, stylesheet, useInlineStyles }) => {
    return rows.map((node, i) => {
      node.children = node.children.map((children) => {
        const text = children?.children?.[0]?.value

        if (typeof text === 'string' && text.startsWith('https')) {
          return {
            ...children,
            tagName: 'a',
            properties: {
              ...children.properties,
              href: text, // in JSON strings are enclosed with ", they need to be removed,
              target: '_blank',
              style: { textDecoration: 'underline' }
            }
          }
        }

        return children
      })

      return createElement({
        node,
        stylesheet,
        useInlineStyles,
        key: `code-segement${i}`
      })
    })
  }

  return (
    <SyntaxHighlighter
      language="yaml"
      style={atomOneDarkReasonable}
      renderer={rowRenderer}
      showLineNumbers={windowSize.width >= 1024}
      wrapLongLines
      customStyle={{ backgroundColor: 'rgba(40, 44, 52, 0.8)', padding }}
    >
      {codeString}
    </SyntaxHighlighter>
  )
}
export default WorkExperience
