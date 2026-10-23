
const AgregarMoto=()=>{

    
       const EnviarMoto = async () => {
        try {
            const data = await fetch("http://localhost:3000/motos/registrar", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify()
            });

            const res = await data.json();

        } catch (error) {
            alert("error al registrar la moto")
            console.error("error al registrar la moto:", error);
        }
    }     
}

const modificarMoto=()=>{

    try {
        const EnviarMoto= async()=>{
            const data = await fetch("http://localhost:3000/motos/modificar",{
                method: 'PUT',
                headers: {'Content_type': 'application/json'},
                body: JSON.stringify()
            })

            const res = await data.json()
        }
    } catch (error) {
        alert("error al modificar la moto")
        console.error("error al modificar la moto", error)
        
    }
        
}