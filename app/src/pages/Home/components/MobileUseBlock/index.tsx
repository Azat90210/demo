import { StyledButton } from '@/components/ui/Button'
import { DefaultBackGround } from '@/components/ui/DefaultBackGround'

export const MobileUseBlock: React.FC = () => {
  return (
    <DefaultBackGround>
      <div className="flex w-full items-center justify-between">
        <div>
          <h2>Вы еще не пользуетесь мобильным приложением?</h2>
          <p>Приобретайте подписку Плюс и улучшайте свою визитку еще лучше</p>
          <StyledButton buttonText="Скачать" variant="light" className="w-14" />
        </div>
        <div>
          <img src="" alt="122312" />
        </div>
      </div>
    </DefaultBackGround>
  )
}
