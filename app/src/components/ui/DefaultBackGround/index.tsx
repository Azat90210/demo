import { cn } from '@heroui/theme'
import { ReactNode } from 'react'

interface DefaultBackGroundProps {
  children: ReactNode
  wrapperClassName?: string
  className?: string
}

export const DefaultBackGround: React.FC<DefaultBackGroundProps> = ({
  children,
  className,
  wrapperClassName,
}) => {
  return (
    <div className={cn(wrapperClassName)}>
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
