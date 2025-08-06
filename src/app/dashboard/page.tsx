"use server"

import { redirect } from "next/navigation";
import { DashboardPageContent } from "./_ui/dashboard-page-content"
import { getSession } from "@/lib/auth"
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundaryWrapper, LoadingFallback } from "@/components/fallback";

export default async function DashboardPage() {

  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.count.getCounts.queryOptions({ countId: "" }),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundaryWrapper>
        <Suspense fallback={<LoadingFallback />}>
          <DashboardPageContent />
        </Suspense>
      </ErrorBoundaryWrapper>
    </HydrationBoundary>
  )
} 