import { LoginPage } from '@/features/auth/pages/LoginPage';
import PublicCoursePage from '@/features/courses/pages/PublicCouseraPage';
import PublicHomePage from '@/features/public-site/pages/PublicHomePage';
import React from 'react'
import PublicLayout from '../layouts/PublicLayout';
import courseService from '@/features/courses/services/course.service';
import PublicCouseraPage from '@/features/courses/pages/PublicCouseraPage';

const publicRoutes = [
    {path: "/login", element: <LoginPage />},
    {path: "/register", element: <LoginPage />},
    {path: "/", element: <PublicLayout />,
        children: [
            {index: true, element: <PublicHomePage />},
            {path: "/courses", element: <PublicCouseraPage />,
                loader: courseService.findAll
            }
        ]

    },
];
export default publicRoutes;