import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import createElement from 'react-syntax-highlighter/dist/esm/create-element'
import { useWindowSize } from '../../../../hooks/screenSize'

const codeString = `/*
  author: Bach Viet Ha
  description: Work Experiences & Projects
*/

let workExperience = [
  {
    company: "Superjoi",
    title: "Software Developer"
    time: "Jun 2022 - now",
    location: "London, England, UK (Remote)",
    tasks: [
      "Developing a link-in-bio/content fundraising webapp"
    ]
  },
  {
    company: "PVcomBank",
    title: "Software Developer"
    time: "Mar 2022 - Jun 2023",
    location: "Hanoi, Vietnam",
    tasks: [
      "Providing users with multiple digital bank solutions, using Next.js as the main framework",
      "Acquaintanced with creating cloud REST APIs using AWS Lambda"
    ]
  },
  {
    company: "CMC Global",
    title: "Software Engineer | Tech Support"
    time: "Jun 2020 - Dec 2021",
    location: "Hanoi, Vietnam",
    tasks: [
      "Involvement in logistics and supply chain application",
      "Providing users with 24/7 technical support and maintenance development"
      "Web development tech stacks: jQWidgets and Vue.js as front-end and Java as back-end"
    ]
  }
  // TODO: Add more work experiences
]

let projects = {
  work: [
    {
      name: "Superjoi",
      description: "A platform where Creators get funded by Superfans ✨",
      website: "https://superjoi.com"
    }
    // TODO: Add more work projects here later
  ],
  personal: [
    // TODO: Add more personal projects here later
  ]
}
`

const WorkExperience = ({ padding = `10px` }) => {
  const windowSize = useWindowSize()

  // https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/104
  // Massive thanks to jakubjafra
  const rowRenderer = ({ rows, stylesheet, useInlineStyles }) => {
    return rows.map((node, i) => {
      node.children = node.children.map((children) => {
        const text = children?.children?.[0]?.value

        if (typeof text === 'string' && text.startsWith('"http')) {
          return {
            ...children,
            tagName: 'a',
            properties: {
              ...children.properties,
              href: text.slice(1, -1), // in JSON strings are enclosed with ", they need to be removed,
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
      language="javascript"
      style={atomOneDark}
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
