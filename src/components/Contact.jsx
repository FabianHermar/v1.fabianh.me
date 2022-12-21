import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

export const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_suce7ty', 'template_pk4ch58', form.current, 'KXGnZ8ubQKs8gQ0C2')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }

  return (
    <section className='bg-dark_primary text-black' id='contact'>
      contact
    </section>
  )
}
