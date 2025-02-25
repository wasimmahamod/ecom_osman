import React from 'react'
import Images from 'next/image'
import Container from '../container/Container'
import Image from 'next/image'

function Newsletter() {
  return (
    <div className='newsletter'>
        <Container>
            <div className='news-element'>
                <div className='news-text'>
                    <Image src='/Newsletter.svg' width={96} height={96} alt='newsletter'/>
                    <div className='text-part'>
                        <h3>Join our newsletter now!</h3>
                        <p>Register now and get our latest updates and promos.</p>
                    </div>
                </div>
                <div className='news-input'>
                    <div className='input-element'>
                        <input type='text' placeholder='Enter Your Email'/>
                        <button>Join</button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Newsletter
