const Projects = () => {
  return (
    <section className='py-10' id='projects'>
      <h2 className='text-4xl font-[Tussila] drop-shadow-lg text-center pb-4'>Proyectos</h2>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-around gap-6'>
        <div className='mt-2'>
          <img alt='Home' src='../assets/Projects/CO.webp' className='h-56 w-auto rounded-md object-cover' />
          <div>
            <div className='flex gap-2 pt-2'>
              <span className='inline-block bg-orange-400 bg-opacity-75 rounded px-1 py-1 text-sm font-[FBB] font-bold text-orange-900 hover:shadow-sm duration-150 hover:scale-105'>Astro</span>
              <span className='inline-block bg-sky-400 bg-opacity-100 rounded px-1 py-1 text-sm font-[FBB] font-bold text-sky-900 hover:shadow-sm duration-150 hover:scale-105'>TailwindCSS</span>
              <span className='inline-block bg-yellow-400 bg-opacity-75 rounded px-1 py-1 text-sm font-[FBB] font-bold text-yellow-900 hover:shadow-sm duration-150 hover:scale-105'>JavaScript</span>
            </div>
          </div>
          <div>
            <h2 className='text-2xl pt-3 font-[Tussila] font-extrabold'>Cinnamon Overoll</h2>
            <p className='font-[FBB]'>Sitio web de venta de rollos de canela, <br /> snacks y bebidas</p>
            <div className='flex gap-2 pt-5'>
              <a href='https://github.com/FabianHMzz/Cinnamon-Overoll' target='_blank' rel='noopener noreferrer' className='duration-150 hover:scale-105 hover:shadow-sm'>
                <img src='https://img.shields.io/badge/Repo-100000?style=for-the-badge&logo=github&logoColor=white' alt='Repo' title='Repository' />
              </a>
              <a href='https://cinnamon-overoll.vercel.app/' target='_blank' rel='noopener noreferrer' className='duration-150 hover:scale-105 hover:shadow-sm'>
                <img src='https://img.shields.io/badge/Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white' alt='Live Demo' title='Live Demostration' />
              </a>
            </div>
          </div>
        </div>

        <div className='mt-2'>
          <img alt='Home' src='../assets/Projects/SSD.webp' className='h-56 w-auto rounded-md object-cover' />
          <div>
            <div className='flex gap-2 pt-2'>
              <span className='inline-block bg-orange-400 bg-opacity-75 rounded px-1 py-1 text-sm font-[FBB] font-bold text-orange-900 hover:shadow-sm duration-150 hover:scale-105'>HTML5</span>
              <span className='inline-block bg-blue-400 bg-opacity-100 rounded px-1 py-1 text-sm font-[FBB] font-bold text-blue-900 hover:shadow-sm duration-150 hover:scale-105'>CSS3</span>
              <span className='inline-block bg-yellow-400 bg-opacity-75 rounded px-1 py-1 text-sm font-[FBB] font-bold text-yellow-900 hover:shadow-sm duration-150 hover:scale-105'>JavaScript</span>
            </div>
          </div>
          <div>
            <h2 className='text-2xl pt-3 font-[Tussila] font-extrabold'>Control Escolar</h2>
            <p className='font-[FBB]'>Diseño de sistema de <br /> control escolar</p>
            <div className='flex gap-2 pt-5'>
              <a href='https://github.com/FabianHMzz/School-System-Design' target='_blank' rel='noopener noreferrer' className='duration-150 hover:scale-105 hover:shadow-sm'>
                <img src='https://img.shields.io/badge/Repo-100000?style=for-the-badge&logo=github&logoColor=white' alt='Repo' title='Repository' />
              </a>
              <a href='#' target='_blank' rel='noopener noreferrer' className='disabled cursor-not-allowed pointer-events-none opacity-60'>
                <img src='https://img.shields.io/badge/Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white' alt='Live Demo' title='Live Demostration' />
              </a>
            </div>
          </div>
        </div>

        <div className='mt-2'>
          <img alt='Home' src='../assets/Projects/DGT.webp' className='h-56 w-auto rounded-md object-cover' />
          <div>
            <div className='flex gap-2 pt-2'>
              <span className='inline-block bg-orange-400 bg-opacity-75 rounded px-1 py-1 text-sm font-[FBB] font-bold text-orange-900 hover:shadow-sm duration-150 hover:scale-105'>HTML5</span>
              <span className='inline-block bg-blue-400 bg-opacity-100 rounded px-1 py-1 text-sm font-[FBB] font-bold text-blue-900 hover:shadow-sm duration-150 hover:scale-105'>CSS3</span>
            </div>
          </div>
          <div>
            <h2 className='text-2xl pt-3 font-[Tussila] font-extrabold'>D'Gabbiani</h2>
            <p className='font-[FBB]'>Sitio web de venta y renta de trajes <br /> y smokings</p>
            <div className='flex gap-2 pt-5'>
              <a href='https://github.com/FabianHMzz/D-Gabbiani-Trajes' target='_blank' rel='noopener noreferrer' className='duration-150 hover:scale-105 hover:shadow-sm'>
                <img src='https://img.shields.io/badge/Repo-100000?style=for-the-badge&logo=github&logoColor=white' alt='Repo' title='Repository' />
              </a>
              <a href='http://github.com' target='_blank' rel='noopener noreferrer' className='disabled cursor-not-allowed pointer-events-none opacity-60'>
                <img src='https://img.shields.io/badge/Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white' alt='Live Demo' title='Live Demostration' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
