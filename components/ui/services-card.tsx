import React from 'react'

export interface ServicesCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export function ServicesCard({ icon, title, description, className = '' }: ServicesCardProps) {
  return (
    <div className={`group relative bg-white rounded-lg border border-border p-8 hover:shadow-md transition-all duration-300 hover:border-primary ${className}`}>
      <div className="mb-4 inline-flex">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-primary group-hover:bg-blue-100 transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
