const jwt = require("jsonwebtoken")

const middlewareLogin =(req,res,next)=>{
  const {usuario} = req.body
  console.log(`el ususario ${usuario} esta logeado`)
  next()
}

const autorizacion = (req, res, next) => {
  try {
    const autorizar = req.header("authorization")

    if (!autorizar) {
      return res.status(401).json({ error: "Token no proporcionado" });
    }

    const token = autorizar.split(" ")[1]

    jwt.verify(token, "jwt-token")

    

    next()

  } catch (error) {
    return res.status(401).json({ error: "Token inválido o expirado" });
  }
}; 

module.exports ={middlewareLogin,autorizacion}