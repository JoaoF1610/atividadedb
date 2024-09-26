import con from "./connection.js";

export async function inserir(turma) {
    const comando = `INSERT INTO tb_turma (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao)
                    VALUES (?, ?, ?, ?, ?, ?)`

    let[info] = await con.query(comando, [turma.turma, turma.curso, turma.nrAno, turma.capacidade, turma.ativo, turma.inclusao])
    return info.insertId;
}

export async function listar() {
    const comando = `
            SELECT id_turma         id,
                    nm_turma        turma,
                    ds_curso        curso,
                    nr_ano_letivo   ano_letivo,
                    qtd_capacidade  capacidade,
                    bt_ativo        ativo,
                    dt_inclusao     data_inclusao
            FROM tb_turma
    `

    let[registros] = await con.query(comando)
    return registros;
}

export async function editar(id, dados) {
    const comando = `
            UPDATE tb_turma
            SET nm_turma = ?,
                ds_curso = ?,
                nr_ano_letivo = ?,
                qtd_capacidade = ?,
                bt_ativo = ?,
                dt_inclusao = ?
            WHERE id_turma = ?
    `

    let[editado] = await con.query(comando, [dados.turma, dados.curso, dados.nrAno, dados.capacidade, dados.ativo, dados.inclusao, id])
    return editado.insertId;
}

export async function deletar(id) {
    const comando = `
            DELETE FROM tb_turma WHERE id_turma = ?
    `

    let[deletado] = await con.query(comando, [id])
    return deletado.affectedRows;
}
