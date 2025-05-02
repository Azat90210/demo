import { NewTechnologyCard } from './Card'
import { NewTechnologyBlockData } from './const'

export const NewTechnologyBlock: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 mt-[120px] mb-[100px]">
      <h1 className="text-primary mx-auto  container font-medium text-center text-[65px] leading-[85px]">
        Новые технологии для удобной и простой работы с бизнесом
      </h1>
      <h3 className="text-neutral mx-auto w-2/5 text-center text-[25px] leading-[32px]">
        Виртуальный офис для вашей компании: корпоративная почта, календарь, облачное хранилище,
        редактор документов и сервисы для коммуникации
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-6 container mx-auto">
        {NewTechnologyBlockData.map((card) => (
          <NewTechnologyCard
            key={card.key}
            className={card.className}
            iconSrc={card.iconSrc}
            title={card.title}
            description={card.description}
            showBisnessBlock={card.showBisnessBlock}
          />
        ))}
      </div>
    </div>
  )
}
