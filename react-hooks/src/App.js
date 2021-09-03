import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Teste from './exercicios/Teste'
import Teste2 from './exercicios/Teste2'
import Exercicio01 from './exercicios/Execicio01';
import Exercicio02 from './exercicios/02';

function App() {
  return (
    <div className="App">
      <h1>React rooks</h1>
      <p>
        <blockquote>
          <em>Hooks</em> são funções especiais do React que podem ser usadas dentro de componentes para armazenar dados ou para realizar ações atreladas ao ciclo de vida do componente (efeitos colaterais). Essas funções incluem <code>useState</code>, <code>useEffect</code> e <code>useRef</code>.
        </blockquote>
      </p>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="teste">Primeiro teste</Link>
          </li>
          <li><Link to="teste2">Segundo teste</Link></li>
          <li><Link to="01">Exercicio01</Link></li>
          <li><Link to="02">Exercicio01</Link></li>
        </ul>

        <Switch>
          <Route path="/teste">
            <Teste />
          </Route>
          <Route path="/teste2">
            <Teste2 />
          </Route>
          <Route path="/01">
            <Exercicio01/>
          </Route>
          <Route path="/02">
            <Exercicio02/>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
