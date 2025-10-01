import * as LocalidadeService from "../services/LocalidadeService.js"

export async function findOne(req, res) {
    try {
        // Usa o nome da cidade da rota para buscar no serviço.
        const localidade = await LocalidadeService.findCidade(req.params.nome);
        if (localidade) {
            // Retorna status 200 OK e a localidade encontrada.
            res.status(200).json(localidade);
        } else {
            // Se não encontrar, retorna 404 Not Found.
            res.status(404).json({ error: 'Falha ao localizar a cidade.' });
        }
    } catch (error) {
        // Em caso de erro, retorna um status 500.
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}

export async function list(req, res) {
    try {
        // Usa a UF da rota para buscar as cidades correspondentes.
        const localidades = await LocalidadeService.findCidadesPorUf(req.params.uf);
        if (localidades.length > 0) {
            // Retorna status 200 OK e a lista de localidades.
            res.status(200).json(localidades);
        } else {
            // Se não encontrar, retorna 404 Not Found.
            res.status(404).json({ error: "Nenhuma cidade encontrada para esta UF." });
        }
    } catch (error) {
        // Em caso de erro, retorna um status 500.
        res.status(500).json({ error: "Erro interno do servidor." });
    }
}