import React from 'react'
import moneybags from '../assets/investment-calculator-logo.png'

export const Header = () => {
  return (
    <header id="header">
        <img src={moneybags} alt="Money Bagzz"/>
        <h1>Profit Calculator</h1>
    </header>
  )
}
