import { cn } from '@heroui/theme'
import { FeedbackForm } from './components/FeedbackBarForm'

interface FeedbackBarProps {
  className?: string
}

export const FeedbackBar: React.FC<FeedbackBarProps> = ({ className }) => {
  return (
    <div className={cn('w-full bg-[#f6f7f9]', className)}>
      <div className="bg-white flex justify-between gap-[45px] items-start rounded-[60px] mx-[90px]  px-[50px] pt-[50px] pb-16">
        <div className=" w-full space-y-6">
          <h1 className="text-primary font-semibold text-[45px] leading-10">
            Запишитесь на бесплатную консультацию с менеджером
          </h1>
          <p className="text-neutral text-[25px] font-normal">
            Выбирайте дизайн из большой библиотеки или создавайте сами
          </p>
        </div>
        <div className="w-full">
          <FeedbackForm />
        </div>
      </div>
    </div>
  )
}
