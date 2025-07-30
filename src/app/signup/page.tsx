import { SignupForm } from "@/components/signup-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getSession } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function SignupPage() {
  const session = await getSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 relative">
      <Button variant="ghost" size="sm" className="absolute top-6 left-6 cursor-pointer" asChild>
        <Link href="/">
          <ArrowLeft className="size-4 mr-2" />
          Back to Home
        </Link>
      </Button>
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  )
} 