 import './App.scss';
 import  Header from './components/shared/Header/Header';
 import  Footer from './components/shared/Footer/Footer';
 import { Switch , Route } from 'react-router-dom';
 import home from './pages/home/home';
 import add from './pages/add/add';
 import tarefas from './pages/tarefas/tarefas';


function App() {
  return (
    
    <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact= {true} component= {home} />
          <Route path="/add" component= {add}/>
          <Route patch="/tarefas/:id" component= {tarefas}/>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
 