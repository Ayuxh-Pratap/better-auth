import { Shield, Database, Eye, Lock, Users, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="size-4" />
              Data Protection
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Privacy Cards */}
          <div className="grid gap-6">
            {/* Information Collection */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Database className="size-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Information We Collect</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
                  </p>
                  <div className="grid gap-3">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">Email address (from Google or GitHub authentication)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">Display name and profile information</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">Authentication provider information (Google/GitHub)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Eye className="size-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">How We Use Your Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Provide, maintain, and improve our services</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Process and store your test data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Send you technical notices and support messages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Monitor and analyze usage patterns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Lock className="size-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Data Security</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm">Encryption</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm">Secure Servers</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm">Access Controls</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Users className="size-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Access your personal information</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Correct inaccurate information</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Request deletion of your data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Export your data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Opt out of certain communications</span>
                    </div>
                  </div>
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
                  <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy, please contact us.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="mailto:privacy@bettertest.com">
                      <Mail className="size-4 mr-2" />
                      Contact Privacy Team
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