import { Router } from 'express';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';
import { getProfile, updateProfile } from '../../controllers/user.controller';

const router = Router();

router.use(authGuard);
router.get('/me', getProfile);
router.put('/me', updateProfile);
router.get('/candidate-dashboard', roleGuard(['candidate']), (req, res) => {
  res.json({ success: true, message: 'Candidate dashboard placeholder' });
});

export default router;
