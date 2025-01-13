import { observer } from 'mobx-react-lite'
import { PageLayout } from '@/components/layout/PageLayout'
import { DigitalBusinessCardsBlock } from './components/DigitalBusinessCardsBlock'
import { AboutMoreElectricBisinessCardsBlock } from './components/AboutMoreElectricBisinessCardsBlock'
import { NewTechnologyBlock } from './components/NewTechnologyBlock'
import { BonusWithPlusBlock } from './components/BonusWithPlusBlock'

const Home: React.FC = observer(() => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-y-28">
        <DigitalBusinessCardsBlock />
        <AboutMoreElectricBisinessCardsBlock />
        <NewTechnologyBlock />
        <BonusWithPlusBlock />
      </div>
    </PageLayout>
  )
})

export default Home
