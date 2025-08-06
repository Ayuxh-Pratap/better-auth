import { count } from "@/app/db/schema";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import { desc, eq } from "drizzle-orm";
import { TRPCError } from "@trpc/server";
import { generateUUID } from "@/lib/uuid";
import { z } from "zod";

export const countRouter = createTRPCRouter({
    createCount: protectedProcedure.mutation(async ({ ctx }) => {
        const existingCount = await ctx.db.query.count.findFirst({
            where: eq(count.userId, ctx.user.id),
        });

        if (existingCount) {
            throw new TRPCError({ code: "CONFLICT", message: "Count already exists" });
        }

        await ctx.db.insert(count).values({ id: generateUUID(), userId: ctx.user.id, count: 1, createdAt: new Date(), updatedAt: new Date() });

        return { success: true };
    }),

    deleteCount: protectedProcedure.mutation(async ({ ctx }) => {
        const existingCount = await ctx.db.query.count.findFirst({
            where: eq(count.userId, ctx.user.id),
        });

        if (!existingCount) {
            throw new TRPCError({ code: "NOT_FOUND", message: "Count not found" });
        }

        await ctx.db.delete(count).where(eq(count.id, existingCount.id));

        return { success: true };
    }),

    getCounts: baseProcedure.input(z.object({
        countId: z.string()
    })).query(async ({ ctx, input }) => {
        const existingCount = await ctx.db.query.count.findFirst({
            where: eq(count.id, input.countId),
        });

        if (!existingCount) {
            return { count: 0, countId: "" };
        }

        return existingCount;
    }),

    updateCount: protectedProcedure.input(z.object({
        isIncrement: z.boolean(),
    })).mutation(async ({ ctx, input }) => {
        const existingCount = await ctx.db.query.count.findFirst({
            where: eq(count.userId, ctx.user.id),
        });

        if (!existingCount) {
            throw new TRPCError({ code: "NOT_FOUND", message: "Count not found" });
        }

        await ctx.db.update(count).set({ count: existingCount.count + (input.isIncrement ? 1 : -1), updatedAt: new Date() }).where(eq(count.id, existingCount.id));

        return { success: true };
    }),
});