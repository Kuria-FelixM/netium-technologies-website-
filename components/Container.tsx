export interface ContainerProps {
  children: React.ReactNode
  className?: string
  py?: boolean
}

export function Container({ children, className = '', py = true }: ContainerProps) {
  return (
    <div className={`max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 ${py ? 'py-16 sm:py-20 lg:py-24' : ''} ${className}`}>
      {children}
    </div>
  )
}
