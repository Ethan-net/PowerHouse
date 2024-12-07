import Expertise from '../components/Expertise'
import Footer from '../components/Footer'
import HeroTwo from '../components/HeroTwo'
import Moreservice from '../components/Moreservice'
import Nav from '../components/Nav'
import Heropage from '../components/heropage'
import Process from '../components/process'
import Section from '../components/section'

export default function Homepage() {
  return (
    <>
    <div>
      <Heropage/>
      <Process/>
      {/* <HeroTwo/> */}
      <Section/>
      <Expertise/>
      <Moreservice/>
      <Footer/>
    </div>
    </>
  )
}
