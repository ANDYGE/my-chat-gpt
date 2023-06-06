import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

export const chatgptRouter = createTRPCRouter({
  chat: publicProcedure
    .input(z.array(z.object({ role: z.enum(['user', 'assistant']), content: z.string() })))
    .mutation(async ({ input }) => {
      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: input
      });
      return completion.data.choices[0]?.message?.content;
    }),
});
