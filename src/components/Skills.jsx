import HTML from '../../assets/logos/HTML.webp'
import CSS from '../../assets/logos/CSS.webp'
import JavaScript from '../../assets/logos/JavaScript.webp'
import React from '../../assets/logos/React.webp'
import TailwindCSS from '../../assets/logos/TailwindCSS.webp'
import MySQL from '../../assets/logos/MySQL.webp'

const Skills = () => {
  const skills = [
    {
      logo: HTML,
      title: 'HTML5',
      level: 'Intermedio',
      count: 65
    },
    {
      logo: CSS,
      title: 'CSS3',
      level: 'Intermedio',
      count: 65
    },
    {
      logo: JavaScript,
      title: 'JavaScript',
      level: 'Principiante',
      count: 32.5
    },
    {
      logo: React,
      title: 'React',
      level: 'Principiante',
      count: 32.5
    },
    {
      logo: TailwindCSS,
      title: 'TailwindCSS',
      level: 'Principiante',
      count: 32.5
    },
    {
      logo: MySQL,
      title: 'MySQL',
      level: 'Principiante',
      count: 32.5
    }
  ]
  return (
    <section id='skills' className='py-10 bg-gray-300/40 relative'>
      <div className='mt-2 text-black text-center'>
        <h2 className='text-4xl font-[Tussila] drop-shadow-lg'>Habilidades</h2>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>
          {
           skills?.map((skill, i) => (
             <div key={i} className='border-2 group border-gray-200/50 relative min-w-[10rem] max-w-[16rem] backdrop-filter backdrop-blur-lg bg-gray-400/20 p-10 rounded-xl'>
               <div style={{ background: `conic-gradient(rgba(62,143,239, 0.6) ${skill.count}%,#ddd ${skill.count}%)` }} className='w-32 h-32 flex items-center justify-center rounded-full'>
                 <div className='text-6xl w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center group-hover:text-yellow-500'>
                   <img src={skill.logo} alt={skill.title} title={skill.title} className='select-none' loading='lazy' />
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
