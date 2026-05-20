import { Router } from 'express';
import authRoutes from './v1/auth.routes';
import interviewRoutes from './v1/interview.routes';
import userRoutes from './v1/user.routes';
import adminRoutes from './v1/admin.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/interviews', interviewRoutes);
router.use('/users', userRoutes);
router.use('/admin', adminRoutes);

export default router;
