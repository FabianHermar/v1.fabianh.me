import { useEffect, useState } from 'react'
import FHLogo from '../../assets/FH.png'

const Header = () => {
  const [sticky, setSticky] = useState(false)
  const [menu, setMenu] = useState(false)

  const menuLinks = [
    { name: 'Inicio', link: '#home' },
    { name: 'Sobre mi', link: '#about' },
    { name: 'Habilidades', link: '#skills' },
    { name: 'Proyectos', link: '#projects' },
    { name: 'Contacto', link: '#contact' },
    { name: '✨Boxode✨', link: 'https://www.boxode.org/' }

  ]

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav')
      window.scrollY > 0 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] font-[Tussila] ${sticky ? 'bg-white/50 backdrop-filter backdrop-blur-md duration-[.1s] text-black' : 'text-white'}`}>
      <div className='flex items-center justify-between'>
        <div className='mx-7 select-none flex justify-center items-center gap-3'>
          <img src={FHLogo} alt='logo' className='w-18 h-10 drop-shadow-md' />
          <span className='text-xl text-black drop-shadow-sm'>FH</span>
        </div>
        <div className={`${sticky ? 'md:bg-white/0 bg-black' : 'bg-white/50 backdrop-filter backdrop-blur-md'} text-black md:block hidden px-7 py-2.5 font-medium rounded-bl-full`}>
          <ul className='flex items-center gap-1 py-2 text-lg'>
            {
              menuLinks?.map((menu, i) => (
                <li key={i} className='px-4 hover:text-sky-500 ease-in duration-150'>
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <div onClick={() => setMenu(!menu)} className={`z-[999] text-3xl cursor-pointer ${menu ? 'text-black' : 'text-black '} md:hidden m-5`}>
          <ion-icon name='menu-sharp'>...</ion-icon>
        </div>
        <div className={`md:hidden text-black absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${menu ? 'right-0' : 'right-[-100%]'}`}>
          <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
            {
              menuLinks?.map((menu, i) => (
                <li key={i} className='px-6 hover:text-sky-500 ease-in duration-150'>
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
