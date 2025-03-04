import { ArrowIcon } from '@/assets/icons/ArrowIcons'
import { Accordion, AccordionItem, Divider } from '@heroui/react'

const defaultContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const QAData = [
  { key: 0, question: 'Что такое UniTap Бизнес?', answer: defaultContent },
  { key: 1, question: 'Как начать пользоваться UniTap для бизнеса?', answer: defaultContent },
  { key: 3, question: 'Сколько стоит годовая подписка на UniTap Плюс?', answer: defaultContent },
  { key: 4, question: 'Как оплачивать UniTap для бизнеса?', answer: defaultContent },
  { key: 5, question: 'Как переехать в UniTap с другой платформы?', answer: defaultContent },
  { key: 6, question: 'Как подключить UniTap для бизнеса через партнёра?', answer: defaultContent },
]

export const AnswerAndQuastionsBlock: React.FC = () => {
  return (
    <div className="flex flex-col w-full lg:px-24 bg-[#f6f7f9] py-16">
      <div className="flex flex-col items-center gap-16 justify-center">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-primary text-[65px] font-medium text-center">Остались вопросы?</h1>
          <p className="text-neutral font-medium text-2xl">
            Здесь мы собрали несколько популярных вопросов и ответы на них
          </p>
        </div>
        <Accordion className="flex flex-col w-8/12">
          {QAData.map((item) => (
            <AccordionItem
              key={item.key}
              aria-label={item.question}
              className="py-6 text-[#1A1A1A] font-medium text-[22px]"
              indicator={({ isOpen }) => (
                <ArrowIcon
                  className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                />
              )}
              title={
                <button className="w-full text-left outline-none ring-0">{item.question}</button>
              }
            >
              <div className="pt-2 text-base text-gray-600">{defaultContent}</div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
