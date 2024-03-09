const Controller = require('./Controller');
const PessoaServices = require('../services/PessoaServices');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {

    constructor(){
        super(pessoaServices);
    }

    async pegaMatriculas(req, res) {
        const { estudanteId } = req.params;

        try{
            const listaMatriculas = await pessoaServices.pegaMatriculasPorEstudante(Number(estudanteId));
            return res.status(200).json(listaMatriculas);
        } catch (erro) {
            // erro
        }
    }
}

module.exports = PessoaController;
