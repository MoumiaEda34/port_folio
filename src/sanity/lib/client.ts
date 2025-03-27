import { createClient } from 'next-sanity'

export const client = createClient({
  projectId:"c737t6hg",
  dataset:"production",
  apiVersion:"2025-03-20",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
