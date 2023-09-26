import React from 'react'
import Container from './ui/container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='mt-[20px]'>
        <div className='w-full bg-[#3b3c4c]'>
            <Container className='p-[10px]'>
                <a href="#" className='text-[#cccccc] text-[25px] font-bold tracking-wide'>
                    <FontAwesomeIcon icon={faReact} /> ZManga
                </a>
            </Container>
        </div>
            <div className='flex justify-center p-[10px] text-[#999999] text-[15px] font-semibold tracking-wide'>© Copyright 2023 - ZManga. All rights reserved.</div>
    </footer>
  )
}

export default Footer