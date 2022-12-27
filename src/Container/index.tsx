import { ReactNode } from 'react'
import * as style from './style.module.scss'

interface Props {
  children: ReactNode
}

const Container = ({ children }: Props): JSX.Element => {
  return (
    <div className={style.outer}>
      <div className={style.inner}>
        {children}
      </div>
    </div>
  )
}

export default Container
