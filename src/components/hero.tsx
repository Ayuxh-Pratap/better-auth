import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-65px)] flex items-center justify-center px-4 md:px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-muted/30 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Now with Google & GitHub Authentication
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            The Better Auth to{" "}
            <span className="text-primary">Test</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Streamline your testing workflow with our powerful platform.
            Create, manage, and execute tests with ease using modern authentication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="default"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 text-base px-6 py-3 h-auto font-medium"
              asChild
            >
              <Link href="/signup">Get Started Free</Link>
            </Button>
            <Button
              variant="outline"
              size="default"
              className="border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 text-base px-6 py-3 h-auto font-medium backdrop-blur-sm"
              asChild
            >
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 