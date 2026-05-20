import Joi from 'joi';

export const interviewCreateSchema = Joi.object({
  body: Joi.object({
    title: Joi.string().required(),
    candidate: Joi.string().required(),
    round: Joi.string().required(),
    scheduledAt: Joi.date().iso().required(),
    questionPool: Joi.array().items(Joi.string()).default([])
  })
});

export const interviewListSchema = Joi.object({
  query: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(5).max(100).default(20)
  })
});
