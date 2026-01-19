import PublicHomePage from '@/features/public-site/pages/PublicHomePage'
import PublicFooter from '@/shared/components/PublicFooter'
import PublicHeader from '@/shared/components/PublicHeader'
import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
    return (
        <>
            <PublicHeader />
            <main className="container py-4">
                <Outlet />
            </main>
            <PublicFooter />
        </>
    )
}

export default PublicLayout