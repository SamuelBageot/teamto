import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    const location = useLocation();
    return (
        <>
            {location.pathname !== '/' && (
                <motion.div
                    style={{ backgroundColor: 'red', zIndex: 1000, position: 'fixed' }}
                    initial={{ transform: 'translateY(0)', opacity: 0 }}
                    animate={{ transform: 'translateY(0)', opacity: 1, transition: { delay: 4 } }}
                    exit={{ transform: 'translateY(-100vh)', opacity: 1, transition: { duration: 4 } }}
                >
                    <nav style={{ background: 'white' }}>
                        <ul>
                            <Link to="/" >Home</Link>
                            <Link to="/characters" >Characters</Link>
                        </ul>
                    </nav>
                </motion.div>
            )}
            {children}
        </>
    )
};

export default Layout;