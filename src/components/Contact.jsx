import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

export const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_suce7ty', 'template_rr7cxep', form.current, 'KXGnZ8ubQKs8gQ0C2')
      .then((result) => {
        console.log(result.text)
        form.current.reset()
        toast.success('Message sent successfully!')
      }, (error) => {
        console.log(error.text)
        toast.error('Message failed to send!')
      })
  }

  return (
    <section id='contact' className='text-black body-font relative'>
      <Toaster />
      <div className='container px-5 py-10 mx-auto'>
        <div className='flex flex-col text-center w-full mb-12'>
          <h1 className='md:text-4xl text-3xl font-medium title-font mb-4 text-black font-[Tussila] drop-shadow-lg'>Contáctame</h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-lg font-[FBB]'>
            ¿Tienes alguna pregunta o quieres trabajar conmigo? ¡No dudes en contactarme!
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label for='name' className='leading-7 text-[20px] text-black font-[Tussila]'>
                    Nombre
                  </label>
                  <input type='text' name='user_name' className='w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-600 text-lg font-medium outline-none text-black font-[FBB] py-2 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label for='email' className='leading-7 text-[20px] text-black font-[Tussila]'>
                    Email
                  </label>
                  <input type='email' name='user_email' className='w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-600 text-lg outline-none text-black font-[FBB] py-2 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label for='message' className='leading-7 text-[20px] text-black font-[Tussila]'>
                    Mensaje
                  </label>
                  <textarea name='message' className='w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-600 h-32 text-xl outline-none text-black py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out font-[FBB]'></textarea>
                </div>
              </div>
              <div className='p-2 w-full'>
                <button type='submit' value='Send' className='flex mx-auto btn-contact'>
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
