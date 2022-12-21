const Footer = () => {
  const socialMedia = [
    { name: 'logo-linkedin', link: 'https://www.linkedin.com/in/fabianhmz/' },
    { name: 'logo-github', link: 'https://github.com/FabianHMzz' },
    { name: 'logo-twitter', link: 'https://www.twitter.com/fabianhmz_/' },
    { name: 'mail', link: 'mailto:contactofabianmartinez@gmail.com' }
  ]

  return (
    <footer className='text-center bg-gray-800 text-white'>
      <div className='container px-6 pt-4'>
        <div className='flex justify-center mb-2'>
          <div className='mt-4 text-3xl flex items-center md:justify-start justify-center gap-6'>
            {
              socialMedia?.map((social, icon) => (
                <div key={icon} className='text-white hover:text-gray-400 ease-in duration-100 cursor-pointer'>
                  <a href={social?.link} target='_blank' rel='noreferrer noopener'>
                    <ion-icon name={social?.name}>...</ion-icon>
                  </a>
                </div>
              ))
             }
          </div>
        </div>
      </div>

      <div className='text-center p-4 font-[Tussila] text-sm'>
        Desarrollado moviendo las manitas y con mucho ❤️ por <a className='font-extrabold underline decoration-sky-600 decoration-[4px] duration-200 hover:decoration-pink-600' href='https://github.com/FabianHMzz' target='_blank' rel='noreferrer noopener'>Fabian Herrera</a>
      </div>
    </footer>
  )
}

export default Footer
