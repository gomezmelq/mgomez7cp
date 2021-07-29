import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ... Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <header className="row bg-secondary">
		(Header - Cabecera)
	</header>

	<nav className="row bg-warning">
		(nav-menu)
	</nav>

	<section className="row bg-primary"> 
		<article className="col-md-6 bg-warning"> 
			Articulo 1
		</article>
		
		<article className="col-md-4 bg-secondary">
			Articulo 2
		</article>

		<aside className="col-md-2 bg-primary">
			aside
		</aside>
	</section>

	<footer className="row bg-dark text-light">
		footer
	</footer>
    </div>
  );
}

export default App;
