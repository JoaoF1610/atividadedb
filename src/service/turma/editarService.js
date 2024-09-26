import { editar } from "../../repository/turmasRepository.js";
import validarInsercao from "../../validation/turma/inserirValidation.js";

export default async function editarService(id, dados) {
    validarInsercao(dados);

    let idAtt = await editar(id, dados);
    return idAtt;
}