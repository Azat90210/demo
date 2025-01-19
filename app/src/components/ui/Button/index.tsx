import { Button, cn } from '@nextui-org/react'

interface StyledButtonProp {
  buttonText: string
  className?: string
  variant?: 'solid' | 'borderer' | 'light'
}

export const StyledButton: React.FC<StyledButtonProp> = ({ buttonText, className }) => {
  return <Button className={cn(className, '')}>{buttonText}</Button>
}
