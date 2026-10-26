import './styles/App.css';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Header from '@/layouts/header/Header';
import Footer from '@/layouts/footer/Footer';

import HomePage from '@/pages/homePage/HomePage';
import StrecklistaPage from '@/pages/strecklistaPage/StrecklistaPage';


const App: React.FC = () => {
    const { pathname, hash } = useLocation();

    // Router links to /#section do not scroll by themselves
    useEffect(() => {
        if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
        else window.scrollTo(0, 0);
    }, [pathname, hash]);

    const pages = [
        { url: '/', component: <HomePage /> },
        { url: '/projects/strecklista', component: <StrecklistaPage /> },
    ];

    return (
        <>
            <Header />

            <Routes>
                {pages.map((page) => (
                    <Route key={page.url} path={page.url} element={page.component} />
                ))}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <Footer />
        </>
    );
};

export default App
