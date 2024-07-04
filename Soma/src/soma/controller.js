const service = require("./service");

module.exports = {
    soma: (req,res) =>{
        try{
            const {valorA, valorB} = req.body;
            return res.status(200).json({soma:service.soma(valorA, valorB)})
        }catch(error){
            return res.status(400).json({
                status: false,
                error: error,
              });
        }

    },
    getNumber:async (req,res) =>{
        return res.status(200).json({number: await service.getNumber()})
    }
}