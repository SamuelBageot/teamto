import style from './style.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PlanetsLayout from '../../../components/Layout/PlanetsLayout';

const Planet = () => {
    return (
        <PlanetsLayout>
            <div style={{ position: 'absolute', top: '150%', zIndex: 100000 }}>
                <Link to='/planets'>
                    <a>
                        <h1 style={{ color: 'white' }}>Link to planets</h1>
                    </a>
                </Link>
            </div>
        </PlanetsLayout>
    )
};

export default Planet;