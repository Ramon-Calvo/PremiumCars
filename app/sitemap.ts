import type { MetadataRoute } from 'next'
import { DEMO_VEHICLES } from '@/lib/demo-data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.reportmotor.es'
  const now = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${siteUrl}/vehiculos`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/como-funciona`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/financiacion`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/vender`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contacto`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/aviso-legal`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${siteUrl}/privacidad`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${siteUrl}/terminos`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${siteUrl}/politica-de-cookies`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]

  // Dynamic vehicle pages
  let vehicleIds: string[] = []
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { createClient } = await import('@/utils/supabase/server')
      const supabase = await createClient()
      const { data } = await supabase
        .from('vehicles')
        .select('id, updated_at')
        .eq('status', 'available')
      if (data?.length) {
        const vehiclePages: MetadataRoute.Sitemap = data.map((v) => ({
          url: `${siteUrl}/vehiculo/${v.id}`,
          lastModified: v.updated_at ? new Date(v.updated_at) : now,
          changeFrequency: 'weekly',
          priority: 0.8,
        }))
        return [...staticPages, ...vehiclePages]
      }
    }
  } catch {
    // Fall back to demo IDs
  }

  vehicleIds = DEMO_VEHICLES.map((v) => v.id)
  const vehiclePages: MetadataRoute.Sitemap = vehicleIds.map((id) => ({
    url: `${siteUrl}/vehiculo/${id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticPages, ...vehiclePages]
}
