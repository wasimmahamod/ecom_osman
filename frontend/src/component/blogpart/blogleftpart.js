// 'use client'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';

function Blogleftpart() {
    return (
        <div className='blg-left-part'>
            <div className='search'>
                <CiSearch className='srch-icon' />
                <input type='text' placeholder='Search..' />
            </div>
            <div className='blog-categories'>
                <h3>Categories</h3>
                <div>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Tecknowlodgy</Accordion.Header>
                            <Accordion.Body>
                                Computer
                            </Accordion.Body>
                            <Accordion.Body>
                                Laptop
                            </Accordion.Body>
                            <Accordion.Body>
                                Television
                            </Accordion.Body>
                            <Accordion.Body>
                                Mobile
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Blog</Accordion.Header>
                            <Accordion.Body>
                                Blog 1
                            </Accordion.Body>
                            <Accordion.Body>
                                Blog 2
                            </Accordion.Body>
                            <Accordion.Body>
                                Blog 3
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Gadget</Accordion.Header>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Gaming</Accordion.Header>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Reviews</Accordion.Header>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>News</Accordion.Header>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className='blog-tags'>
                <h3>Tags</h3>
                <div className='tag-btn'>
                    <button>Tips</button>
                    <button>Tech</button>
                    <button>Blog</button>
                    <button>News</button>
                    <button>Gaming</button>
                    <button>Reviews</button>
                </div>
            </div>
            <div className='rcnt-post'>
                <h3>Recent Post</h3>
                <div className='post-item'>
                    <Image src='/comment.jpg' width={100} height={100} alt='user-post-img' style={{ borderRadius: "10px" }} />
                    <div className='post-text'>
                        <h4>Lorem ipsum dolor sit amet, consectetur. </h4>
                        <p><span>Admin</span> - 12 June 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogleftpart
