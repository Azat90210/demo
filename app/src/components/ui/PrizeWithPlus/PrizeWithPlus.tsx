import { PlusToPrizeIcon } from '@/assets/icons/PlusToPrize'
import { cn } from '@heroui/theme'

interface PrizeWithPlusProps {
  className?: string
}

export const PrizeWithPlus: React.FC<PrizeWithPlusProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'flex p-1 rounded-full w-fit items-center gap-1 justify-center bg-gradient-to-r shadow-xl from-[#27C80C] to-[#BAFC00]',
        className
      )}
    >
      <PlusToPrizeIcon />
      <p className=" font-bold text-[11px] text-white uppercase leading-[13px]">плюс в подарок</p>
    </div>
  )
}
