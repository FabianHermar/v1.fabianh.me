const Skills = () => {
  const skills = [
    {
      logo: '/assets/logos/HTML.webp',
      title: 'HTML5',
      level: 'Intermedio',
      count: 65
    },
    {
      logo: '/assets/CSS.webp',
      title: 'CSS3',
      level: 'Intermedio',
      count: 65
    },
    {
      logo: '/assets/logos/JavaScript.webp',
      title: 'JavaScript',
      level: 'Principiante',
      count: 32.5
    },
    {
      logo: '/assets/logos/React.webp',
      title: 'React',
      level: 'Principiante',
      count: 32.5
    },
    {
      logo: '/assets/logos/TailwindCSS.webp',
      title: 'TailwindCSS',
      level: 'Principiante',
      count: 32.5
    },
    {
      logo: '/assets/logos/MySQL.webp',
      title: 'MySQL',
      level: 'Principiante',
      count: 32.5
    }
  ]
  return (
    <section id='skills' className='py-10 backdrop-filter backdrop-blur-lg bg-gray-300/40 relative'>
      <div className='mt-2 text-black text-center'>
        <h3 className='text-4xl font-[Tussila]'>
          Habilidades
        </h3>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>
          {
           skills?.map((skill, i) => (
             <div key={i} className='border-2 group border-gray-200/50 relative min-w-[10rem] max-w-[16rem] backdrop-filter backdrop-blur-lg bg-gray-400/30 p-10 rounded-xl'>
               <div style={{ background: `conic-gradient(rgba(62,143,239, 0.6) ${skill.count}%,#ddd ${skill.count}%)` }} className='w-32 h-32 flex items-center justify-center rounded-full'>
                 <div className='text-6xl w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center group-hover:text-yellow-500'>
                   <img src={skill.logo} alt={skill.title} title={skill.title} className='select-none' />
                 </div>
               </div>
               <p className='font-[Sequel] text-sm mt-3'>{skill.level}</p>
             </div>
           ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills
