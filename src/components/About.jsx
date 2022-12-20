import FHLogo from '../../assets/fhw.png'

const About = () => {
  const info = [
    { text: 'Meses de Experiencia', number: '+06' },
    { text: 'Proyectos Completados', number: '03' },
    { text: 'Empresas en las que he trabajado', number: '01' }
  ]
  return (
    <section id='about' className='py-10 text-black'>
      <div className='text-center mt-8'>
        <h3 className='text-3xl font-[Cindie] drop-shadow-lg'>
          Sobre mi
        </h3>
        <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
          <div>
            <div className='p-2'>
              <p className='text-gray-600 text-left leading-7 font-[FBB] text-lg w-11/12 mx-auto'>
                Hace más de 2 años que me dedicó a la programación por el estudio de mi carrera de Ingeniería en Desarrollo y Gestión de Software y he descubierto que tiene un gran potencial para mi futuro.
              </p>
              <p className='text-gray-600 text-left leading-7 font-[FBB] text-lg w-11/12 mx-auto'>
                Me gusta mucho aprender cosas nuevas y sobre todo me gusta mucho todo lo relacionado con las tecnologías web, por lo que actualmente me estoy especializando en el diseño y programación web.
              </p>
              <div className='flex mt-10 items-center gap-7'>
                {
                  info.map(content => (
                    <div key={content.text}>
                      <h3 className='md:text-4xl text-2xl font-[Tussila] font-semibold text-black'>{content.number}</h3>
                      <span className='font-[FBB] font-semibold md:text-base text-xs'>{content.text}</span>
                    </div>
                  ))
                }
              </div>
            </div>
            <a href='/assets/CV.pdf' download>
              <button className='btn-contact mt-5'>Descargar CV</button>
            </a>
          </div>
          <div className='flex-1 md:mt-10 mt-16 flex justify-center items-center'>
            <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm about-me'>
              <img src={FHLogo} alt='Logo' className='w-full object-cover bg-gray-500 rounded-xl about select-none' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
