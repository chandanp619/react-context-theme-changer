import React from 'react'
import ThemeComponent from '../ThemeComponent';
import Nav from './Nav';

export default function Header() {
  return (
    <div className='header'>
        <div className='logo'>logo</div>
        <div className='nav'><Nav /></div>
        <div className='theme'>
            <ThemeComponent />
        </div>
    </div>
  )
}
