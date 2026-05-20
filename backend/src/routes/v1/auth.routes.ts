import { Router } from 'express';
import { register, login, refreshToken, verifyEmail, forgotPassword, resetPassword } from '../../controllers/auth.controller';
import { validate } from '../../middleware/validation.middleware';
import { registerSchema, loginSchema, emailSchema, passwordResetSchema } from '../../validators/auth.validator';

const router = Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.post('/refresh', refreshToken);
router.get('/verify-email', validate(emailSchema), verifyEmail);
router.post('/forgot-password', validate(emailSchema), forgotPassword);
router.post('/reset-password', validate(passwordResetSchema), resetPassword);

export default router;
