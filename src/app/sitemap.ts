import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export const dynamic = 'force-static'


export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_URL

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // Add more routes here if/when the portfolio grows
    ]
}
