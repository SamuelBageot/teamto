import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Overlay from '../../components/Overlay';
import Stars from '../../components/Stars';
import style from './style.module.css';

const Home = () => {
    const MotionLink = motion(Link);
    return (
        <div className={style.Home}>
            <motion.div
                className={style.test}
                initial={{ transform: 'translateY(0)', opacity: 0 }}
                animate={{ transform: 'translateY(0)', opacity: 1, transition: { duration: 1 } }}
                exit={{ transform: 'translateY(-100vh)', opacity: 1, transition: { duration: 4 } }}
            >
                <Overlay />
                <Stars />
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ position: 'absolute', top: '50vh', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000 }}
                >
                    <MotionLink
                        to='/characters'
                        style={{ color: '#feda4a', textDecoration: 'none' }}
                        initial={{ transform: 'translateY(0)', opacity: 0 }}
                        animate={{ transform: 'translateY(0)', opacity: 1, transition: { duration: 2 } }}
                        exit={{ transform: 'translateY(-100vh)', opacity: 1, transition: { duration: 4 } }}
                    >
                        <motion.h1 style={{ textAlign: 'center', border: '3px solid #feda4a', padding: '10px 30px', borderRadius: '10px' }}>
                            <div className={style.title}>
                                <span>STAR WARS</span>
                                <span style={{ display: 'block' }}>CHARACTERS</span>
                            </div>
                        </motion.h1>
                    </MotionLink>
                </motion.div>
            </motion.div>
        </div>
    )
};

export default Home;