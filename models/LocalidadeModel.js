import mongoose from "mongoose";

const regiaoSchema = new mongoose.Schema({
    id: Number,
    sigla: String,
    nome: String,
});

const ufSchema = new mongoose.Schema({
    id: Number,
    sigla: String,
    nome: String,
    regiao: regiaoSchema,
});

const mesorregiaoSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    UF: ufSchema,
});

const microrregiaoSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    mesorregiao: mesorregiaoSchema,
});

const regiaoIntermediariaSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    UF: ufSchema,
});

const regiaoImediataSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    regiaoIntermediaria: regiaoIntermediariaSchema,
});

const municipioSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    microrregiao: microrregiaoSchema,
    "regiao-imediata": regiaoImediataSchema,
});

const localidadeSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    municipio: municipioSchema,
});

export default mongoose.model('localidades', localidadeSchema);