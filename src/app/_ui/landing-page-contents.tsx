"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export const LandingPageContents = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Landing Page</h1>
            <Button>
                <Link href="/login">Login</Link>
            </Button>
        </div>
    );
};