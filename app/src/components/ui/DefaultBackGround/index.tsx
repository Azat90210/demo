import { ReactNode } from 'react'

interface DefaultBackGroundProps {
  children: ReactNode
}

export const DefaultBackGround: React.FC<DefaultBackGroundProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-between rounded-[3.75rem] bg-[#F6F7F9] p-24 lg:flex-row lg:p-16">
      {children}
    </div>
  )
}
