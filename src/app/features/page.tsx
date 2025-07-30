import { Shield, Zap, Users, BarChart3, Settings, GalleryVerticalEnd } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />



      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for{" "}
              <span className="text-primary">Modern Testing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamline your testing workflow with our comprehensive suite of features designed for developers and teams.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card border rounded-lg p-6">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Shield className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Authentication</h3>
              <p className="text-muted-foreground">
                Google and GitHub OAuth integration for seamless, secure login without passwords.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card border rounded-lg p-6">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Zap className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Optimized performance with instant test execution and real-time results.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card border rounded-lg p-6">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Users className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Share test results, collaborate with team members, and track progress together.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card border rounded-lg p-6">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <BarChart3 className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Detailed insights and metrics to understand your testing performance.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-card border rounded-lg p-6">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Settings className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customizable</h3>
              <p className="text-muted-foreground">
                Tailor the platform to your needs with flexible configuration options.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-card border rounded-lg p-6">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <GalleryVerticalEnd className="size-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern UI/UX</h3>
              <p className="text-muted-foreground">
                Beautiful, intuitive interface designed for the best user experience.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of developers who trust Better Test for their testing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/signup">Get Started Free</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 