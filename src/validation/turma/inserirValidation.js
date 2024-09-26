export default function validarInsercao(turma) {
    if (!turma.turma) throw new Error ('Turma é obrigatório!');
    if (!turma.curso) throw new Error ('Curso é obrigatório!');
    if (!turma.nrAno) throw new Error ('Ano Letivo é obrigatório!');
    if (!turma.capacidade) throw new Error ('Capacidade é obrigatório!');
    if (turma.ativo == undefined) throw new Error('Ativo é obrigatório!');
    if (!turma.inclusao) throw new Error('Ano de inclusão é obrigatório!')
}