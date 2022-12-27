import  { useEffect, useState } from 'react'
import * as style from './style.module.scss'
import Logo from './assets/symbol-logo.svg'
import { FaBars } from 'react-icons/fa'

const Navbar = (): JSX.Element => {
  const path = window.location.pathname
  const [shadow, setShadow] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setShadow(window.scrollY > 0)
    })
  }, [])

  return (
    <>
      <label htmlFor='search__btn' className={style.back}></label>
      <div className={`${style.header as string} ${shadow ? (style.shadow as string) : ''}`}>
        <input type="checkbox" id="menu__btn" className={style.none}/>
        <label htmlFor="menu__btn" className={style.menu}><FaBars size={28} /></label>
        <label htmlFor='menu__btn' className={style.menu_back}></label>
        <div className={style.left}>
          <a href='/' className={style.logo}>
            <img src={Logo} alt="logo" />
            <h1>Archive</h1>
          </a>
          <ul className={style.nav}>
            <li className={path === '/' && style.click}><a href="/">홈</a></li>
          </ul>
        </div>
        <div className={style.right}>
          <div className={style.links}>
            <div className={style.sign__up}><a target="_blank" href="https://center.gbsw.hs.kr">실행 주소</a></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
