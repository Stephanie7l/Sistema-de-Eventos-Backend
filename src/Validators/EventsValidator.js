const { Mongoose, default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
        title: z.string({ required_error: "Título inválido" }).nonempty({ required_error: "Título não pode ser vazio"}),
        picture: z.string({ required_error: "Imagem inválida" }).nonempty({ required_error: "Imagem não pode ser vazia"}),
        description: z.string().nonempty({ required_error: "Descrição não pode ser vazia"}),
        category: z.string().nonempty({ required_error: "Categoria não pode ser vazia"})
    }),
});

const update = validateRequest({
    body: z.object({
        title: z.string().optional(),
        picture: z.string().optional(),
        description: z.string().optional(),
        category: z.string().optional(), 
    }),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "ID inválido"),
    }),
});

const destroy = validateRequest({
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "ID inválido"),
    }),
});

module.exports = { create, update, destroy };
