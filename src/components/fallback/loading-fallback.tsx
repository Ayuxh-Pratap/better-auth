import { GalleryVerticalEnd, BarChart3, Users, Settings, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LoadingFallback() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-5" />
              </div>
              <span className="font-semibold text-lg">Better Test</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="cursor-pointer" disabled>
              <Settings className="size-4 mr-2" />
              Settings
            </Button>
            <div className="h-9 w-20 bg-muted animate-pulse rounded-md"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
            <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your tests today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total Tests Card */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BarChart3 className="size-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">Total Tests</p>
                  <div className="h-8 w-12 bg-muted animate-pulse rounded mt-1"></div>
                </div>
              </div>
            </div>

            {/* Passed Tests Card */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <CheckCircle className="size-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">Passed</p>
                  <div className="h-8 w-12 bg-muted animate-pulse rounded mt-1"></div>
                </div>
              </div>
            </div>

            {/* Count Card */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <XCircle className="size-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">Count</p>
                  <div className="h-8 w-12 bg-muted animate-pulse rounded mt-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
              <Button variant="outline" size="sm" className="cursor-pointer" disabled>
                View All
              </Button>
            </div>

            <div className="space-y-4">
              {/* Activity Item 1 */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="size-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="h-5 w-48 bg-muted animate-pulse rounded mb-2"></div>
                  <div className="h-4 w-24 bg-muted animate-pulse rounded"></div>
                </div>
                <div className="h-6 w-16 bg-primary/10 rounded animate-pulse"></div>
              </div>

              {/* Activity Item 2 */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="size-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="h-5 w-52 bg-muted animate-pulse rounded mb-2"></div>
                  <div className="h-4 w-28 bg-muted animate-pulse rounded"></div>
                </div>
                <div className="h-6 w-16 bg-muted rounded animate-pulse"></div>
              </div>

              {/* Activity Item 3 */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="size-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="h-5 w-44 bg-muted animate-pulse rounded mb-2"></div>
                  <div className="h-4 w-20 bg-muted animate-pulse rounded"></div>
                </div>
                <div className="h-6 w-16 bg-primary/10 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}