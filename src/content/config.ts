//creamos una coleccion.
import { defineCollection, z } from "astro:content";
//z --> zod es una biblioteca para validar schema

export const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        readtime: z.number(),
        description: z.string(),
        buy: z.object({
            arg: z.string().url(),
            usa: z.string().url()
        }),
    })
})
export const collections = { books };