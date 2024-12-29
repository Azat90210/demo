import { Header } from './NavBar/NavBar'

interface PageLayoutProps {
  children: React.ReactNode
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="mx-24 flex min-h-screen flex-col bg-white">
      <Header />
      {children}
    </div>
  )
}
