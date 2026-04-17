import './App.css'
import BlogCard from './components/layout/Card'
import Footer from './components/layout/Footer'
import Hero from './components/layout/Hero'
import Navbar from './components/layout/Navbar'
import Tab from './components/layout/Tab'

function App() {

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Tab />
      <BlogCard />
      <Footer />
    </div>
  )
}

export default App
