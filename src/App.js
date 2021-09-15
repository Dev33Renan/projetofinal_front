 import './App.scss';
 import  Header from './components/shared/Header/Header';
 import  Footer from './components/shared/Footer/Footer';
 import { Switch , Route } from 'react-router-dom';
 import Home from './pages/Home/Home';
 import Add from './pages/Add/Add';
 import Tarefas from './pages/Tarefas/Tarefas';


function App() {
  return (
    
    <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/add" component={Add}/>
          <Route path="/tarefas/:id" component={Tarefas}/>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
 