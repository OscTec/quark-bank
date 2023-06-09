import { ReactNode } from "react"
import { TbCircleChevronRight } from 'react-icons/tb'

interface Props {
  title: string
  description: string
  icon: ReactNode
}

const Card: React.FC<Props> = ({ title, description, icon }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="flex">
        <figure className="pl-10">
          {icon}
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
        <figure>
          <TbCircleChevronRight size={32} className="ml-auto mr-10" />
        </figure>
      </div>
    </div>
  )
}

export default Card
