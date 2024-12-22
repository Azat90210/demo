import { Header } from './NavBar/NavBar'

interface PageLayoutProps {
  children: React.ReactNode
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      {children}
    </div>
  )
}
