import { useState } from 'react'
import logo from '../public/images/logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Hero Section */}
      <section id='hero'>
        {/* Hero Container */}
        <div className="container max-w-6x mx-auto px-6 py-12 md:px-0">
          {/* Menu/Logo Container  */}
          <nav className="flex items-center justify-between font-bold text-white">
              <img src={logo} alt="Logo" />
          </nav>
        </div>
      </section>
    </>
  )
}

export default App
