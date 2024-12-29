import { CrystalIcon } from '@/assets/icons/СrystalIcon'

interface Props {
  iconSrc: React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
  className?: string
  showBisnessBlock?: boolean
}

export const NewTechnologyCard: React.FC<Props> = ({
  iconSrc: Icon,
  title,
  description,
  className = '',
  showBisnessBlock = false,
}) => {
  return (
    <div
      className={`flex min-h-[23.5rem] flex-col justify-between rounded-[2.5rem] bg-[#F6F7F9] p-10 ${className}`}
    >
      <div className="flex justify-start">
        <Icon className="text-primary size-[3.75rem]" />
      </div>
      <div className="mt-auto flex flex-col gap-2">
        {showBisnessBlock && (
          <div className="flex w-fit items-center justify-center gap-x-1 rounded-xl bg-gradient-to-r from-[#414A56] to-[#696B84] px-2 py-[0.3rem]">
            <CrystalIcon width="19px" />
            <span className="text-xs font-extrabold leading-3 text-white">БИЗНЕС</span>
          </div>
        )}
        <h1 className="text-primary text-start text-4xl font-medium text-[#131314]">{title}</h1>
        <h3 className="text-disable text-start text-lg font-normal">{description}</h3>
      </div>
    </div>
  )
}
