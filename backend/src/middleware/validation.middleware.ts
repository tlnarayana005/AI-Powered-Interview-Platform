import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'joi';

export function validate(schema: AnySchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate({ body: req.body, query: req.query, params: req.params }, { abortEarly: false, allowUnknown: false });
    if (error) {
      return res.status(400).json({ success: false, errors: error.details.map((detail) => detail.message) });
    }
    next();
  };
}
