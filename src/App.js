import './App.css';
import BoardOfDirectors from './BoardOfDirectors';
import Header from './components/Header';
import { Container } from './styles/Container.styles';
import {ThemeProvider} from 'styled-components'
import {BrowserRouter as  Router,Route,Routes} from 'react-router-dom'
import Details from './Details';
import Footer from './components/Footer';


const theme = {
  colors: {
    headers: '#ebfbff',
    body:'#fff',
    footer:'#003333',
  },

  mobile: '768px',
  tablet: '1200px'
}


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container className="App">

    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<BoardOfDirectors />}/>
        <Route path='/details/:id' element={<Details/>} />
     
     </Routes>
     <Footer/>
     </Router>
    </Container>
    </ThemeProvider>
  );
}

export default App;
