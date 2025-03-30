import { cn } from '@heroui/theme'
import { ReactNode } from 'react'

interface DefaultBackGroundProps {
  children: ReactNode
  className?: string
}

export const DefaultBackGround: React.FC<DefaultBackGroundProps> = ({ children, className }) => {
  return (
    <div className="container">
      <div
        className={cn(
          'flex flex-col items-center justify-between rounded-[3.75rem] bg-[#F6F7F9] p-24 lg:flex-row lg:p-16',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
