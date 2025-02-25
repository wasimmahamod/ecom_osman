// 'use client'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

async function getData() {
    let data = await fetch('http://localhost:8000/api/v1/product/allcart')
        .then((res) =>
            res.json()
        )

    return data;
}

async function HomeMenuBar() {

    let data = await getData();

    return (
        <div className='menubar'>
            <div className='prjt-name'>
                <h2>Tronix</h2>
            </div>
            <div className='all-menu'>
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='menu-list'>
                        <Nav className="mx-auto">
                            <Nav.Link href="/" className='list-type'>Home</Nav.Link>
                            <Nav.Link href="/pages/about" className='list-type'>About</Nav.Link>
                            <Nav.Link href="/pages/product" className='list-type'>Product</Nav.Link>
                            <NavDropdown title="Blog" id="basic-nav-dropdown" className='list-type'>
                                <NavDropdown.Item href="/pages/blog">
                                    Blog List
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/pages/blogdetails">
                                    Blog Details
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/" className='list-type'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className='search-bar'>
                <div className='search-box'>
                    <input type='text' placeholder='Search your item..' />
                    <div className='search-icon'>
                        <FaSearch />
                    </div>
                </div>
            </div>
            <div className='shopping-element'>
                <div className='shopping-icon'>
                    <MdOutlineShoppingBag />
                    <div className='number'><p>{data.length}</p></div>
                </div>
                <div className='shopping-icon'>
                    <MdMailOutline />
                </div>
            </div>
        </div>
    )
}

export default HomeMenuBar
