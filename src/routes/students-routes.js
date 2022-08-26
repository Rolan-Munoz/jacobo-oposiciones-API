import {Router} from 'express';
// eslint-disable-next-line max-len
import {methods as studentController} from '../controller/students-controller';

// eslint-disable-next-line new-cap
const router= Router();

router.get('/students', studentController.getStudents);


export default router;
