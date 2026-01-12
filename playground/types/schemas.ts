import * as z from 'zod'

export interface INuxtKnobCustomizationOptions {
  [key: string]: unknown
}

export const NuxtKnobCustomizationOptionsSchema = z.object({

}) satisfies z.ZodType<INuxtKnobCustomizationOptions>

export type NuxtKnobCustomizationOptions = z.output<typeof NuxtKnobCustomizationOptionsSchema>
