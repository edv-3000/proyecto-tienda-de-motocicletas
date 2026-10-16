import Marca_modelo from "./Marca-categoria"


const Header = () => {
    return (
        <main className='contenido'>
            <div className="marca">
                <p className="pMarca">Marca</p>
                <div className="marca_modelo ">
                    <Marca_modelo />
                    <Marca_modelo />
                    <Marca_modelo />
                    <Marca_modelo />
                </div>
            </div>

            <div className="marca">
                <p className="pMarca">categoria</p>
                <div className="marca_modelo ">
                    <Marca_modelo />
                    <Marca_modelo />
                    <Marca_modelo />
                    <Marca_modelo />
                </div>
            </div>

        </main>
    )
}

export default Header