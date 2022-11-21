import { Routes, Route, useLocation, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CharacterPage from '../pages/Character';
import Home from '../pages/Home/Home';
import Characters from '../pages/AllCharacters/Characters';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence initial={false}>
            <Switch location={location} key={location.pathname}>
                <Route path="/" component={Home} exact />
                <Route path="/characters/:id" component={CharacterPage} />
                <Route path="/characters" component={Characters} />
            </Switch>
        </AnimatePresence>
    )
};

export default AnimatedRoutes;