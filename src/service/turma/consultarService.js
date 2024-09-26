import { listar } from "../../repository/turmasRepository.js"

export default async function consultarService() {
    let registros = await listar();
    return registros;
}