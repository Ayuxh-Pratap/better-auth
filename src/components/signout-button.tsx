"use client"

import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth-client"

export const SignoutButton = () => {
  const router = useRouter();

  const signout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/login"),
      },
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={signout}
      className="cursor-pointer"
    >
      <LogOut className="size-4 mr-2" />
      Logout
    </Button>
  );
};