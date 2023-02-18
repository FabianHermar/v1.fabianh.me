import AboutMe from '../../assets/about-me.webp'
import AboutMe2 from '../../assets/about-me2.webp'

const About = () => {
  const info = [
    { text: 'Meses de Experiencia', number: '+10' },
    { text: 'Proyectos Completados', number: '03' },
    { text: 'Empresas en las que he trabajado', number: '02' }
  ]
  return (
    <section id='about' className='py-10 text-black mb-10'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-[Tussila] drop-shadow-lg'>Sobre mi</h3>
        <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
          <div>
            <div className='p-2'>
              <p className='text-gray-600 text-left leading-7 font-[FBB] text-lg w-11/12 mx-auto'>
                Desde hace más de 2 años, estoy desarrollando mis habilidades tanto lógicas como creativas en el campo del desarrollo de software. Mi interés por esta área surgió a través de mi carrera de Ingeniería en Desarrollo y Gestión de Software, y desde entonces he descubierto que tengo una gran pasión por la programación y un gran potencial para mi futuro profesional.
              </p>
              <p className='text-gray-600 text-left leading-7 font-[FBB] text-lg w-11/12 mx-auto'>
                Me encanta aprender cosas nuevas y estoy especialmente interesado en las tecnologías web. Por ello, he decidido especializarme en el diseño y programación web. Me gusta mucho trabajar en proyectos que requieran una combinación de habilidades técnicas y creativas, y estoy constantemente buscando nuevos desafíos para mejorar mis conocimientos y habilidades en este campo.
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
              <img src={AboutMe} alt='About Me' className='w-full object-cover bg-gray-500 rounded-xl about select-none hidden md:block' loading='lazy' />
              <img src={AboutMe2} alt='About Me' className='w-full object-cover bg-gray-500 rounded-xl about select-none md:hidden about' loading='lazy' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
