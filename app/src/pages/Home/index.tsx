import { observer } from 'mobx-react-lite'
import { PageLayout } from '@/components/layout/PageLayout'
import { DigitalBusinessCardsBlock } from './components/DigitalBusinessCardsBlock'
import { AboutMoreElectricBisinessCardsBlock } from './components/AboutMoreElectricBisinessCardsBlock'
import { BonusWithPlusBlock } from './components/BonusWithPlusBlock'
import { MobileUseBlock } from './components/MobileUseBlock'
import { NewTechnologyBlock } from './components/newTechnologyBlock'
import { AnswerAndQuastionsBlock } from './components/AnswerAndQuastionsBlock'
import { FeedbackBar } from './components/FeedbackBar'

const Home: React.FC = observer(() => {
  return (
    <PageLayout>
      <div className="flex flex-col">
        <DigitalBusinessCardsBlock />
        <AboutMoreElectricBisinessCardsBlock />
        <NewTechnologyBlock />
        <BonusWithPlusBlock />
        <MobileUseBlock />
        <FeedbackBar />
        <AnswerAndQuastionsBlock />
      </div>
    </PageLayout>
  )
})

export default Home
