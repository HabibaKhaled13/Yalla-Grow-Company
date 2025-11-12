import React from 'react'
import "./btn.module.css"
import Link from 'next/link'


export default function whatsappBtn() {
  return (
   <>
<div className='fixed md:bottom-0 bottom-16 md:right-4  right-0 z-20 flex items-center'>
<Link href="https://wa.me/201552599703"><img src="/imgs/whatsapp.png" alt="whatsapp icon" className='w-22 whats-btn'/></Link> 

</div>
   
   </>
  )
}
