import Localidade from "../models/LocalidadeModel.js"

export async function findCidade(nome){
    // Busca a localidade onde o nome do município é igual ao nome passado.
    const localidade = await Localidade.findOne({ "municipio.nome": nome });
    return localidade;
}
 
export async function findCidadesPorUf(uf){
    // Busca todas as localidades onde a sigla da UF é igual à UF passada.
    const localidades = await Localidade.find({ "municipio.microrregiao.mesorregiao.UF.sigla": uf });
    return localidades;
}