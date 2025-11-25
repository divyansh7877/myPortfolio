import { MetadataRoute } from 'next'

export const dynamic = 'force-static'


export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://divyansh7877.github.io/myPortfolio'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Add more routes here if/when the portfolio grows
    ]
}
