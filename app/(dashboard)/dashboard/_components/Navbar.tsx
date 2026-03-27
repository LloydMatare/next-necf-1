import React from 'react'
import Header from './Header'

function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center border-b border-border/60 bg-background/80 backdrop-blur">
      <Header />
    </header>
  )
}

export default Navbar
