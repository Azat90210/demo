import { Form, Input, Button } from '@heroui/react'
import { useState } from 'react'

export const FeedbackForm: React.FC = () => {
  const [email, setEmail] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    console.log(data)
  }

  return (
    <div className="flex flex-col items-center p-6  w-full">
      <Form onSubmit={onSubmit} className="w-full flex flex-col gap-5">
        <Input
          variant="bordered"
          isRequired
          classNames={{
            base: 'w-full',
            inputWrapper:
              'px-[15px] py-[16.5px] border border-[#13131426] rounded-2xl bg-[#F6F6F6] focus-within:border-black transition-colors',
            input: 'bg-transparent text-black placeholder:text-[#A0A0A0] focus:outline-none',
          }}
          name="name"
          placeholder="Как к вам обращаться"
          type="text"
        />

        <Input
          variant="bordered"
          isRequired
          classNames={{
            base: 'w-full',
            inputWrapper:
              'px-[15px] py-[16.5px] border border-[#13131426] rounded-2xl bg-[#F6F6F6] focus-within:border-black transition-colors',
            input: 'bg-transparent text-black placeholder:text-[#A0A0A0] focus:outline-none',
          }}
          name="description"
          placeholder="Небольшое описание"
          type="text"
        />

        <Input
          variant="bordered"
          isRequired
          classNames={{
            base: 'w-full',
            inputWrapper:
              'px-[15px] py-[16.5px] border border-[#13131426] rounded-2xl bg-[#F6F6F6] focus-within:border-black transition-colors',
            input: 'bg-transparent text-black placeholder:text-[#A0A0A0] focus:outline-none',
          }}
          name="email"
          placeholder="E-mail"
          type="email"
          value={email}
          onValueChange={setEmail}
        />

        <Button type="submit" className="w-full bg-black text-white py-[17px] rounded-2xl">
          Получить консультацию
        </Button>
      </Form>

      <p className="mt-3 text-sm text-neutral font-medium text-center">
        Отправляя заявку, вы даете согласие на обработку своих персональных данных в соответствии с
        положением о конфиденциальности
      </p>
    </div>
  )
}
