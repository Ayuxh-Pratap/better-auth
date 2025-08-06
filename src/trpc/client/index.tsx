"use client";

import React, { useState } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { makeQueryClient } from "./query-client";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../server/routers/_app";
import superjson from "superjson";
import type { QueryClient } from "@tanstack/react-query";
import { createTRPCContext } from "@trpc/tanstack-react-query";

let ClientQueryClientSingleton: QueryClient;

export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>();

function getQueryClient() {
    if (typeof window === 'undefined') {
        return makeQueryClient();
    }
    return (ClientQueryClientSingleton ??= makeQueryClient());
}

function getUrl() {
    const base = (() => {
        if (typeof window !== 'undefined') return '';
        if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
        return `http://localhost:${process.env.PORT ?? 3000}`;
    })();
    return `${base}/api/trpc`;
}

export const TRPCReactProvider = (props: Readonly<{ children: React.ReactNode }>) => {
    const queryClient = getQueryClient();
    const [trpcClient] = useState(() => createTRPCClient<AppRouter>({
        links: [
            httpBatchLink({
                transformer: superjson,
                url: getUrl(),
            }),
        ]
    }));

    return (
        <QueryClientProvider client={queryClient}>
            <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
                {props.children}
            </TRPCProvider>
        </QueryClientProvider>
    )
}
