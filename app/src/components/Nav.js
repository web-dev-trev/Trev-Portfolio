import React from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import '../styles/Nav.css'

const Nav = () => {
  return (
    <nav>
        <div className='navLogo'>
            <a href='#'><h1>WebDevTrev</h1></a>
        </div>
        <div className='navLinkCont'>
            <Dropdown>
                <DropdownButton variant='transparent' title="Projects" style={{marginRight: "6px"}}>
                    <Dropdown.Item as="button">CHANEL-INV</Dropdown.Item>
                    <Dropdown.Item as="button">Washing Well</Dropdown.Item>
                    <Dropdown.Item as="button">47 Tech Solutions</Dropdown.Item>
                </DropdownButton>
            </Dropdown>
            <Dropdown>
                <DropdownButton variant='transparent' title="Socials" style={{marginRight: "10px"}}>
                    <Dropdown.Item as="button">LinkedIn</Dropdown.Item>
                    <Dropdown.Item as="button">GitHub</Dropdown.Item>
                    <Dropdown.Item as="button">Twitter</Dropdown.Item>
                </DropdownButton>
            </Dropdown>
            <Button variant='transparent' style={{marginRight: "6px", outline: "1px solid white"}}>
                Contact
            </Button>
        </div>
    </nav>
  )
}

export default Nav