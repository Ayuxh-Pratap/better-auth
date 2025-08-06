"use client";

import { GalleryVerticalEnd, BarChart3, Users, Settings, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SettingsDialog } from "@/components/settings-dialog"
import { SignoutButton } from "@/components/signout-button"
import { useTRPC } from "@/trpc/client"
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { toast } from "sonner"

export const DashboardPageContent = () => {

    const queryClient = useQueryClient();

    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.count.getCounts.queryOptions({ countId: "ebdece2c-c120-4981-94fe-1586642dcda1" }));

    const createCount = useMutation(trpc.count.createCount.mutationOptions({
        onError: (error) => {
            console.log(error);
            toast.error("Error creating count");
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: trpc.count.getCounts.queryKey() });
            toast.success("Count created successfully");
        }
    }));

    const deleteCount = useMutation(trpc.count.deleteCount.mutationOptions({
        onError: (error) => {
            console.log(error);
            toast.error("Error deleting count");
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: trpc.count.getCounts.queryKey() });
            toast.success("Count deleted successfully");
        }
    }));

    const updateCount = useMutation(trpc.count.updateCount.mutationOptions({
        onError: (error) => {
            console.log(error);
            toast.error("Error updating count");
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: trpc.count.getCounts.queryKey() });
            toast.success("Count updated successfully");
        }
    }));

    console.log(data);

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
                        <SettingsDialog>
                            <Button variant="ghost" size="sm" className="cursor-pointer">
                                <Settings className="size-4 mr-2" />
                                Settings
                            </Button>
                        </SettingsDialog>
                        <SignoutButton />
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
                        <div className="bg-card border rounded-lg p-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <BarChart3 className="size-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Total Tests</p>
                                    <p className="text-2xl font-bold">24</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card border rounded-lg p-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <CheckCircle className="size-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Passed</p>
                                    <p className="text-2xl font-bold">{data?.count ?? 0}</p>
                                </div>
                            </div>
                        </div>



                        <div className="bg-card border rounded-lg p-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <XCircle className="size-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Count</p>
                                    <p className="text-2xl font-bold">{data?.count ?? 0}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* CRUD Actions Section */}
                    <div className="bg-card border rounded-lg p-6 mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold">Count Management</h2>
                            <div className="text-sm text-muted-foreground">
                                Current Count: {data?.count ?? 0}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Create Count */}
                            <div className="space-y-3">
                                <h3 className="font-medium text-sm">Create New Count</h3>
                                <Button
                                    onClick={() => createCount.mutate()}
                                    disabled={createCount.isPending}
                                    className="w-full"
                                >
                                    {createCount.isPending ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                            Creating...
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle className="w-4 h-4 mr-2" />
                                            Create Count
                                        </>
                                    )}
                                </Button>
                            </div>

                            {/* Update Count */}
                            <div className="space-y-3">
                                <h3 className="font-medium text-sm">Update Count</h3>
                                <Button
                                    onClick={() => updateCount.mutate({ isIncrement: true })}
                                    disabled={updateCount.isPending || !data || 'id' in data === false}
                                    variant="outline"
                                    className="w-full"
                                >
                                    {updateCount.isPending ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2"></div>
                                            Updating...
                                        </>
                                    ) : (
                                        <>
                                            <BarChart3 className="w-4 h-4 mr-2" />
                                            Increment Count
                                        </>
                                    )}
                                </Button>
                            </div>

                            {/* Delete Count */}
                            <div className="space-y-3">
                                <h3 className="font-medium text-sm">Delete Count</h3>
                                <Button
                                    onClick={() => deleteCount.mutate()}
                                    disabled={deleteCount.isPending || !data || 'id' in data === false}
                                    variant="destructive"
                                    className="w-full"
                                >
                                    {deleteCount.isPending ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                            Deleting...
                                        </>
                                    ) : (
                                        <>
                                            <XCircle className="w-4 h-4 mr-2" />
                                            Delete Count
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-card border rounded-lg p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold">Recent Activity</h2>
                            <Button variant="outline" size="sm" className="cursor-pointer">View All</Button>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                                <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Users className="size-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium">User authentication test completed</p>
                                    <p className="text-sm text-muted-foreground">2 minutes ago</p>
                                </div>
                                <div className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                                    Passed
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                                <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center">
                                    <BarChart3 className="size-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium">API endpoint validation failed</p>
                                    <p className="text-sm text-muted-foreground">15 minutes ago</p>
                                </div>
                                <div className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-medium">
                                    Failed
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                                <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Users className="size-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium">Database connection test passed</p>
                                    <p className="text-sm text-muted-foreground">1 hour ago</p>
                                </div>
                                <div className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                                    Passed
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};