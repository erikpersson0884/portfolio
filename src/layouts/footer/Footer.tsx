import { FC } from 'react';
import './Footer.css';
import { profile } from '@/data/portfolio';


const Footer: FC = () => {
    return (
        <footer className="page-footer" id="contact">
            <h2 className="section-title hand">Say hello</h2>
            <a className="footer-mail" href={`mailto:${profile.email}`}>{profile.email}</a>
            <p className="footer-links">
                <a href={profile.github}>GitHub</a>
                <a href={profile.linkedin}>LinkedIn</a>
            </p>
            <p className="footer-copy">© {new Date().getFullYear()} {profile.name}</p>
        </footer>
    );
};

export default Footer;
