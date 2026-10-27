import Marca from "./Header_marcas"
import Categoria from "./Header_categorias"


const Header = () => {
    return (
        <main className='contenido'>
            <div className="marca">
                <p className="pMarca">Marcas</p>
                <div className="marca_modelo ">
                    <Marca />
                    
                </div>
            </div>

            <div className="marca">
                <p className="pMarca">categorias</p>
                <div className="marca_modelo ">
                    <Categoria/>
                </div>
            </div>

        </main>
    )
}

export default Header