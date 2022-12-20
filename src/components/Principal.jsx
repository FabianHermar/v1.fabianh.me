import FHLogo from '../../assets/principal.webp'

function contact () {
  window.location.href = '#contact'
}

const Principal = () => {
  const socialMedia = [
    { name: 'logo-linkedin', link: 'https://www.linkedin.com/in/fabianhmz/' },
    { name: 'logo-github', link: 'https://github.com/FabianHMzz' },
    { name: 'logo-twitter', link: 'https://www.twitter.com/fabianhmz_/' },
    { name: 'mail', link: 'mailto:contactofabianmartinez@gmail.com' }
  ]
  return (
    <section id='home' className='min-h-screen flex py-10 md:flex-row flex-col items-center'>
      <div className='flex-1 flex items-center justify-center h-full'>
        <img src={FHLogo} className='md:w-11/12 h-full object-cover select-none' alt='' />
      </div>
      <div className='flex-1'>
        <div className='md:text-left text-center'>
          <h1 className='md:text-5xl text-2xl md:leading-normal leading-10'>
            <span className='font-[Tussila] text-gray-600 md:text-3xl text-2xl'>
              Hola 👋, Mi nombre es
              <br />
            </span>
            <span className='font-[Sequel] text-gray-800 md:text-6xl text-5xl'>Fabian Herrera</span>
          </h1>
          <h3 className='font-[Tussila] text-gray-600 md:2xl text-xl md:leading-normal leading-5 mt-4'><span>Frontend Developer</span></h3>
          <button className='btn-contact mt-8' onClick={contact}>Contáctame</button>
          <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-6'>
            {
              socialMedia?.map((social, icon) => (
                <div key={icon} className='text-gray-600 hover:text-gray-800 ease-in duration-100 cursor-pointer'>
                  <a href={social?.link} target='_blank' rel='noreferrer noopener'>
                    <ion-icon name={social?.name}>...</ion-icon>
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Principal
