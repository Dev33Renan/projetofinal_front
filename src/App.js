 import './App.scss';
 import  Header from './components/shared/Header/header';
 import  Footer from './components/shared/Footer/footer';
 import { Switch , Route } from 'react-router-dom';
 import home from './pages/home/home';
 import gameadd from './pages/gameadd/gameadd';
 import tarefas from './pages/tarefas/tarefas';


function App() {
  return (
    <div className="App">
      <Header />

        <Switch>
          <Route path="/" exact= {true} component= {home} />
          <Route path="/gameadd" component= {gameadd}/>
          <Route patch="/tarefas" component= {tarefas}/>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
 