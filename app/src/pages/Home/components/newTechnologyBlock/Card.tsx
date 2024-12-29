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
  showBisnessBlock = false,
}) => {
  return (
    <div className="flex size-full min-h-[23.5rem] flex-col justify-between rounded-[2.5rem] bg-[#F6F7F9]">
      <div className="flex justify-start p-10">
        <Icon className="text-primary size-[3.75rem]" />
      </div>
      <div className="mt-auto flex flex-col gap-2 p-10">
        {showBisnessBlock && (
          <div>
            {/* <CrystalIcon /> */}
            БИЗНЕС
          </div>
        )}
        <h1 className="text-primary text-start text-4xl font-medium text-[#131314]">{title}</h1>
        <h3 className="text-disable text-start text-lg font-normal">{description}</h3>
      </div>
    </div>
  )
}
