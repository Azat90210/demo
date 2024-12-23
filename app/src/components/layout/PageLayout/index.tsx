import { Header } from './NavBar/NavBar'

interface PageLayoutProps {
  children: React.ReactNode
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header/>
      {children}
    </div>
  )
}
