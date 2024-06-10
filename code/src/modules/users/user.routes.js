import {Router} from 'express'
import * as uc from './user.controller.js'
const router = Router()

router.get('/',uc.listUsers)
router.post('/',uc.signup)
router.get('/signin',uc.signin)
router.put('/:_id',uc.updateUser)
router.delete('/:_id',uc.deleteUser)
router.get('/search1',uc.searchByXY)
router.get('/search2',uc.searchByAge)
router.get('/getproducts/:id',uc.getUserProducts)
export default router