import { cn, Image } from '@heroui/react'

interface CardItemProps {
  description: string
  imageSrc: string
  className?: string
}

export const CardItem: React.FC<CardItemProps> = ({ description, imageSrc, className }) => {
  return (
    <div className={cn('flex flex-col items-center text-center', className)}>
      <Image src={imageSrc} alt={description} className="w-full object-cover rounded-lg" />
      <p className="text-secondary text-[25px] font-medium leading-[30px] mt-4">{description}</p>
    </div>
  )
}
