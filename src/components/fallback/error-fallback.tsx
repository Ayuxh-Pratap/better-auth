import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import Link from "next/link"

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary: () => void
}

export function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center px-4 md:px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-destructive/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-muted/30 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-destructive" />
          </div>
        </div>
        
        {/* Error Title */}
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Something went wrong
        </h2>
        
        {/* Error Message */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          We encountered an unexpected error. Please try again or contact support if the problem persists.
        </p>
        
                 {/* Error Details (for development) */}
         {process.env.NODE_ENV === 'development' && (
           <details className="mb-6 text-left">
             <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground transition-colors">
               Error Details
             </summary>
             <div className="mt-2 p-3 bg-muted/50 rounded-md text-xs font-mono text-muted-foreground overflow-auto">
               {error.message}
             </div>
           </details>
         )}
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                     <Button
             onClick={resetErrorBoundary}
             className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
           >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          
          <Button
            variant="outline"
            className="border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
            asChild
          >
            <Link href="/dashboard">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 