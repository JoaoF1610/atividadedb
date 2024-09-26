import { deletar } from "../../repository/turmasRepository.js";

export default async function deletarService(id) {
    let adeletar = await deletar(id)
    return adeletar;
}