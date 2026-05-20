import { Router } from 'express';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';
import { getAdminStats } from '../../controllers/admin.controller';

const router = Router();

router.use(authGuard, roleGuard(['admin']));
router.get('/stats', getAdminStats);

export default router;
