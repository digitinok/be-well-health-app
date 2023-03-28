// https://github.com/aulneau/next.js-with-react-plotly.js/
import dynamic from 'next/dynamic'

const DynamicPlot = dynamic(import('../components/plot'), {
  ssr: false
})

export default DynamicPlot;