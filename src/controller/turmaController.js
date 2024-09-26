import { editar } from "../repository/turmasRepository.js";
import consultarService from "../service/turma/consultarService.js";
import deletarService from "../service/turma/deletarService.js";
import editarService from "../service/turma/editarService.js";
import inserirService from "../service/turma/inserirService.js";
import { Router } from "express";
const endpoints = Router();

endpoints.post('/turma', async (req, resp) => {
    try {
        let turma = req.body;

        let id = await inserirService(turma);

        resp.send({
            novoId: id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/turma', async (req, resp) => {
    try {
        let registros = await consultarService();
        resp.send(registros)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/turma/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let dados = req.body

        const resultado = await editarService(id, dados)
        resp.send({
            mensagem: "turma atualizada"
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/turma/:id', async (req, resp) => {

    try {
        let id = req.params.id

        let linhadeletada = await deletarService(id)

    resp.send({
        linhadeletada: linhadeletada
    })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
        
    }

    
})

export default endpoints;