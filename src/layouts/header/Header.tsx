import { FC } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


interface Page {
    url: string;
    linkText: string;
    visibleCriteria: boolean;
    className?: string;
}

const Header: FC = () => {
    const pages: Page[] = [
        { url: '#projects', linkText: 'Projects', visibleCriteria: true },
        { url: '#activities', linkText: 'Activities', visibleCriteria: true },
        { url: '#contact', linkText: 'Contact', visibleCriteria: true },
    ];

    return (
        <header className="page-header">
            <div className="header-content">
                <Link to="/" aria-label="Erik Persson, home">
                    <img className="logo" src="/favicon.svg" alt="" />
                </Link>
                <span className="header-name">Erik Persson</span>
            </div>

            <nav className="header-nav" aria-label="Main">
                {pages
                    .filter((page) => page.visibleCriteria)
                    .map((page) => (
                        <a href={page.url} key={page.url} className={page.className || ''}>
                            {page.linkText}
                        </a>
                    ))}
            </nav>
        </header>
    );
};

export default Header;
