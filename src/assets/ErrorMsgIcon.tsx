import { ReactElement } from 'react'
import ErrorPageIcon from '../components/errorPage/png/ErrorPageIcon.png'

export default function ErrorMsgIcon(): ReactElement {
  return (
    <img
      className="size-[170px] sm:size-24 md:size-28 lg:size-32"
      src={ErrorPageIcon}
      alt="Error page icon"
      style={{ objectFit: 'contain' }}
    />
  )
}
