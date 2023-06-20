
import './globals.css'
import Navbar from '@/components/navigation/Navbar'
import BackToTopButton from '@/components/buttons/BackToTop'
import Providers from '@/components/Providers'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Free-Hit',
    description: 'Free-Hit is a tool used to search for open-source projects that are both free and helpful for our needs',
    applicationName: 'Free Hit',
    keywords: ['Free-Hit', 'open-source', 'tools, Search', 'Free tools', 'Online tools', 'Productivity', 'Categories', 'Helpful', 'Utility'],
    authors: [
        {
            name: 'Jason Dsouza',
            url: 'htps://github.com/JasonDsouza212'
        },
        {
            name: 'Dhawal Vijayvargiya',
            url: 'htps://github.com/dhawal-793'
        }
    ],
    creator: 'Jason Dsouza',
    themeColor: '#000000',
    openGraph: {
        title: 'Free-Hit',
        description: 'Free-Hit is a tool used to search for open-source projects that are both free and helpful for our needs',
        siteName: 'Free-Hit',
        url: 'https://free-hit.vercel.app/',
        images: '/og-image.png',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free-Hit',
        description: 'Free-Hit is a tool used to search for open-source projects that are both free and helpful for our needs',
        siteName: 'Free-Hit',
        url: 'https://free-hit.vercel.app/',
        creator: '@_Jason_Dsouza',
        type: 'website'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true
        },
    },
    category: 'technology',
    alternates: {
        canonical: 'https://free-hit.vercel.app/'
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-light-primary">
                <Providers>
                    <Navbar />
                    <main className="mx-auto max-w-screen-3xl page-height md:md-page-height">
                        {children}
                    </main>
                    <BackToTopButton />
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
