import { Footer } from './Footer'
import { Header } from './Header/Header'

interface PageLayoutProps {
  children: React.ReactNode
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className=" flex min-h-screen flex-col bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
