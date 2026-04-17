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
      <main className="w-full flex justify-center">
        <div className="w-full max-w-[1200px]">
          <Tab />
          <BlogCard />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
