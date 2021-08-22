import Image from 'next/image'

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
      <div>
        <div>
          <p>{location}</p>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
