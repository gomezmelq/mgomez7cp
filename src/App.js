import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     
      <header className="row bg-secondary">
      <img scr="https://ibb.co/ncgWNVS" class="img-fluid" alt="..."/>
	</header>


    <nav className="row">
		<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
			<div class="container-fluid">
			  <a class="navbar-brand" href="#">INICIO</a>
			  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
				<ul class="navbar-nav">
				  <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					  Dropdown 1
					</a>
					<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
					  <li><a class="dropdown-item" href="#">Action</a></li>
					  <li><a class="dropdown-item" href="#">Another action</a></li>
					  <li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
				  </li>
				</ul>
			  </div>
			  <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
				<ul class="navbar-nav">
				  <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					  Dropdown 2
					</a>
					<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
					  <li><a class="dropdown-item" href="#">Action</a></li>
					  <li><a class="dropdown-item" href="#">Another action</a></li>
					  <li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
				  </li>
				</ul>
			  </div>
			</div>
		  </nav>
	</nav>


	<section className="row bg-primary"> 
		<aside className="col-md-6 bg-warning"> 
			Articulo 1
			<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-indicators">
				  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner">
				  <div class="carousel-item active">
					<img src="https://ibb.co/vLvCFcT" className="d-block w-100" alt="..."/>
				  </div>
				  <div class="carousel-item">
					<img src="img/galeria2.jpg" className="d-block w-100" alt="..."/>
				  </div>
				  <div class="carousel-item">
					<img src="img/galeria3.jpg" class="d-block w-100" alt="..."/>
				  </div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
				  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				  <span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
				  <span class="carousel-control-next-icon" aria-hidden="true"></span>
				  <span class="visually-hidden">Next</span>
				</button>
			  </div>
			
		</aside>
		
		<article className="col-md-4 bg-secondary">
			Articulo 2
			<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning text-dark">Warning</span>
<span class="badge bg-info text-dark">Info</span>
<span class="badge bg-light text-dark">Light</span>
<span class="badge bg-dark">Dark</span>

<a href="#" class="link-primary"> link</a>
		</article>

		<aside className="col-md-2 bg-primary">
			aside
			<div class="card" style="width: 18rem;">
				<img src="img/colibri.jpg" class="card-img-top" alt="..."/>
				<div class="card-body">
				  <h5 class="card-title">Card title</h5>
				  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				  <a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			  </div>
      
		</aside>
	</section>

	<footer className="row bg-dark text-light">
		footer
	</footer>
    </div>
  );
}

export default App;
