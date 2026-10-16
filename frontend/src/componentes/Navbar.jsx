
const Navbar = () => {
  return (
    <nav className="navbar bg-dark text-white p-3">
    <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="text-white ">LONG WAY</a>
        <div className="d-flex align-items-center gap-2">
            <p className="text-info m-0">CONSULTAR TICKET</p>
            <form className="d-flex align-items-center gap-2">
                <input className="form-control" type="search" placeholder="Número de ticket"/>
                <p className="pNavbar text-warning m-1">o</p>
                <input className="form-control" type="email" placeholder="Correo"/>
                <button type="button" className="btn btn-primary btn-sm">Consultar</button>
            </form>
        </div>
    </div>
</nav>
  );
}

export default Navbar;