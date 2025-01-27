import Navbar from './components/navbar'
import Footer from './components/footer'
import { FirstSection, SecondSection, ThirdSection, FourthSection } from './components/landingPage'


function App() {
  return (
    <div id="app" style={{ paddingTop: '70px' }}>
      <Navbar />
      <FirstSection />
      <img src="/assets/images/pattern-curved-line-left.svg" alt="leftCurvedLine" />
      <SecondSection />
      <ThirdSection />
      <img src="/assets/images/pattern-curved-line-right.svg" alt="rightCurvedLine"
        style={{ 'marginTop': "20px" }}
      />
      <FourthSection />
      <Footer />
    </div>
  )
}

export default App
