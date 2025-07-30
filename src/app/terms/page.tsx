import { GalleryVerticalEnd, Shield, Users, Lock, AlertTriangle, FileText, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <FileText className="size-4" />
              Legal Information
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Terms Cards */}
          <div className="grid gap-6">
            {/* Acceptance */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Shield className="size-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using Better Test (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Description */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GalleryVerticalEnd className="size-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">2. Description of Service</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Better Test is a testing platform that provides tools for creating, managing, and executing tests with modern authentication methods including Google and GitHub OAuth.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Google OAuth</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">GitHub OAuth</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Test Management</span>
                  </div>
                </div>
              </div>
            </div>

            {/* User Accounts */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Users className="size-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">3. User Accounts</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                  </p>
                </div>
              </div>
            </div>

            {/* Acceptable Use */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <AlertTriangle className="size-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">4. Acceptable Use</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You agree not to use the Service to:
                  </p>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Violate any applicable laws or regulations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Infringe upon the rights of others</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Transmit harmful, offensive, or inappropriate content</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Attempt to gain unauthorized access to the Service</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Lock className="size-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">5. Privacy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your privacy is important to us. Please review our{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    , which also governs your use of the Service, to understand our practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="size-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="mailto:legal@bettertest.com">
                      <Mail className="size-4 mr-2" />
                      Contact Legal Team
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 