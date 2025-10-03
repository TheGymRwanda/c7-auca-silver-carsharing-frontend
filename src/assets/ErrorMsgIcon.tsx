import { ReactElement } from 'react'
import ErrorPageIcon from '../components/errorPage/png/ErrorPageIcon.png'

export default function ErrorMsgIcon(): ReactElement {
  return (
    <img
      className="h-[170px] w-[170px] sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
      src={ErrorPageIcon}
      alt="Error page icon"
      style={{ objectFit: 'contain' }}
    />
  )
}
