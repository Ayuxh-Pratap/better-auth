"use client"

import { ErrorBoundary } from "react-error-boundary"
import { ErrorFallback } from "./error-fallback"

interface ErrorBoundaryWrapperProps {
  children: React.ReactNode
}

export function ErrorBoundaryWrapper({ children }: ErrorBoundaryWrapperProps) {
  return (
    <ErrorBoundary fallbackRender={({ error, resetErrorBoundary }) => (
      <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
    )}>
      {children}
    </ErrorBoundary>
  )
} 