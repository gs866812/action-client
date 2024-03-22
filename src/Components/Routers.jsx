import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from '../Pages/Portfolio';
import NotFound from './NotFound';
import Home from '../Pages/Home';

const Routers = () => {
    return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    );
};

export default Routers;