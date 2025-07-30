import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />



      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent{" "}
              <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your needs. Start free and scale as you grow.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <div className="bg-card border rounded-lg p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Free</h3>
                <div className="text-3xl font-bold mb-1">$0</div>
                <p className="text-muted-foreground text-sm">Forever</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span className="text-sm">Up to 100 tests per month</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span className="text-sm">Basic analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span className="text-sm">Google & GitHub auth</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span className="text-sm">Community support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/signup">Get Started Free</Link>
              </Button>
            </div>

            {/* Pro Tier */}
            <div className="bg-card border-2 border-primary rounded-lg p-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <div className="text-3xl font-bold mb-1">$29</div>
                <p className="text-muted-foreground text-sm">per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span className="text-sm">Unlimited tests</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span className="text-sm">Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span className="text-sm">Team collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span className="text-sm">Custom integrations</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/signup">Start Pro Trial</Link>
              </Button>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-card border rounded-lg p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold mb-1">Custom</div>
                <p className="text-muted-foreground text-sm">Contact us</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span className="text-sm">Everything in Pro</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span className="text-sm">Dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span className="text-sm">Custom branding</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span className="text-sm">SLA guarantees</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span className="text-sm">On-premise option</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mb-8">
              Can&apos;t find what you&apos;re looking for? Contact our support team.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
} 