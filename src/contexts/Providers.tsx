import { ModalProvider } from './ModalContext';
import { NotificationProvider } from './NotificationContext';

const Providers: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <NotificationProvider>    
            <ModalProvider>
                {children}
            </ModalProvider>
        </NotificationProvider>
    )
}

export default Providers;
