const cloudinary = require("../config/cloudinary");
const { totalmotos, ingresarmoto, moto, modificarmoto, eliminarmoto } = require("../consultas/consultasMotos")



const obtenermotos = async (req, res) => {
    const motos = await totalmotos()
    res.json(motos)
}

const ingresarmotoPost = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                error: "Debes seleccionar una imagen"
            });
        }

        const resultado = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { folder: "motos" },
                (error, resultado) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(resultado);
                    }
                }
            ).end(req.file.buffer);
        });

        const moto = {
            ...req.body,
            imagen: resultado.secure_url
        };

        await ingresarmoto(moto);

        const motos = await totalmotos();

        res.json(motos);

    } catch (error) {
        console.error("Error al registrar moto:", error);
        res.status(500).json({
            error: "No se pudo registrar la moto"
        });
    }
};


const modificarmotoPut = async (req, res) => {
    const { id } = req.params
    const moto = req.body

    await modificarmoto(id, moto)

    const motos = await totalmotos()
    res.json(motos)
}

const eliminarmotoDelete = async (req, res) => {
    const { id } = req.params
    const { estado } = req.body
    await eliminarmoto(id, estado)

    const motos = await totalmotos()
    res.json(motos)

}


const obtenermoto = async (req, res) => {
    try {
        const { id } = req.params
        const enviarmoto = await moto(id)
        res.json(enviarmoto)
    } catch (error) {
        console.log("error no se puede obtener la moto")
        res
    }

}


module.exports = { obtenermotos, ingresarmotoPost, modificarmotoPut, eliminarmotoDelete, obtenermoto }