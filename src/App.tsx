import './styles/App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import Header from '@/layouts/header/Header';
import Footer from '@/layouts/footer/Footer';

import HomePage from '@/pages/homePage/HomePage';
import ProjectPage from '@/pages/projectpage/Projectpage';

const App: React.FC = () => {
    const pages = [
        { url: '/', component: <HomePage /> },
        { url: '/projects/:slug', component: <ProjectPage /> }
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
