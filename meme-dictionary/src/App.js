import './css/App.css';
import Pages from './pages/Pages'
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
function App() {
  return (
    <Router>
     <Header />
     <Pages />
    </Router>
  );
}

export default App;
