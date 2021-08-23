import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/solid'

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div>
      <div className="relative flex-shrink-0 w-40 h-24 md:h-52 md:w-80">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="cursor-pointer h-7" />
        </div>
      </div>
    </div>
  )
}

export default InfoCard
