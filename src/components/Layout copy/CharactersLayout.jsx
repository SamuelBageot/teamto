import React from 'react';
import style from './CharactersLayout.module.css';
import { motion } from 'framer-motion';
import Stars from '../Stars';
import Overlay from '../Overlay';
import { Link } from 'react-router-dom';

const CharactersLayout = ({ children }) => {
    return (
        <div className={style.Container}>
            <motion.div
                className={style.test}
                initial={{ transform: 'translateY(-100vh)' }}
                animate={{ transform: 'translateY(-100vh)', transition: { duration: 4 } }}
                exit={false}
            >
                {children}
                <Stars />
            </motion.div>
        </div>
    )
};

export default CharactersLayout;