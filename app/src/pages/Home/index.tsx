import { observer } from 'mobx-react-lite'
import { PageLayout } from '@/components/layout/PageLayout'
import { DigitalBusinessCardsBlock } from './components/DigitalBusinessCardsBlock'
import { AboutMoreElectricBisinessCardsBlock } from './components/AboutMoreElectricBisinessCardsBlock'
import { BonusWithPlusBlock } from './components/BonusWithPlusBlock'
import { MobileUseBlock } from './components/MobileUseBlock'
import { NewTechnologyBlock } from './components/newTechnologyBlock'
import { AnswerAndQuastionsBlock } from './components/AnswerAndQuastionsBlock'

const Home: React.FC = observer(() => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-y-28">
        <DigitalBusinessCardsBlock />
        <AboutMoreElectricBisinessCardsBlock />
        <NewTechnologyBlock />
        <BonusWithPlusBlock />
        <MobileUseBlock />

        <AnswerAndQuastionsBlock />
      </div>
    </PageLayout>
  )
})

export default Home
