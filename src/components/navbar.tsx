import { GalleryVerticalEnd } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "@/components/toggle"
import { getSession } from "@/lib/auth";
import { SignoutButton } from "./signout-button";

export async function Navbar() {
  const session = await getSession();
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Section 1: Logo + Name (left) */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-5" />
            </div>
            <span className="font-semibold text-lg">Better Test</span>
          </Link>
        </div>
        {/* Section 2: Navigation Links (centered absolutely) */}
        <nav className="absolute left-1/2 top-0 h-full -translate-x-1/2 flex items-center gap-6 z-10">
          <Link href="/features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </Link>
        </nav>
        {/* Section 3: Sign In / Get Started (right) */}
        <div className="flex items-center gap-2 flex-1 justify-end min-w-0">
          <ModeToggle />
          {session ? (
            <SignoutButton />
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
} 