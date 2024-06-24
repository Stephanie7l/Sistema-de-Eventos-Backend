const { default: mongoose } = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
  body: z.object({
    title: z.string({ required_error: "Título inválido" }).min(1, { message: "Título não pode ser vazio"}),
    picture: z.string({ required_error: "Imagem inválida" }).min(1, { message: "Imagem não pode ser vazia"}),
    description: z.string().min(1, { message: "Descrição não pode ser vazia"}),
    category: z.string().min(1, { message: "Categoria não pode ser vazia"})
  })
});

const update = validateRequest({
  body: z.object({
    title: z.string().optional().refine((val) => val === undefined || val.length > 0, { message: "Título não pode ser vazio" }),
    picture: z.string().optional().refine((val) => val === undefined || val.length > 0, { message: "Imagem não pode ser vazia" }),
    description: z.string().optional().refine((val) => val === undefined || val.length > 0, { message: "Descrição não pode ser vazia" }),
    category: z.string().optional().refine((val) => val === undefined || val.length > 0, { message: "Categoria não pode ser vazia" })
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