import { Router } from 'express';
import { createInterview, listInterviews, getInterviewById, scheduleInterview } from '../../controllers/interview.controller';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';
import { validate } from '../../middleware/validation.middleware';
import { interviewCreateSchema, interviewListSchema } from '../../validators/interview.validator';

const router = Router();

router.use(authGuard);

router.post('/', roleGuard(['recruiter', 'admin']), validate(interviewCreateSchema), createInterview);
router.get('/', validate(interviewListSchema), listInterviews);
router.get('/:id', getInterviewById);
router.post('/:id/schedule', roleGuard(['recruiter', 'admin']), scheduleInterview);

export default router;
