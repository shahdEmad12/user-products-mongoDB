import {Router} from 'express'
import * as pc from './product.controller.js'
const router = Router()

router.post('/',pc.addProduct)
router.delete('/',pc.deleteProduct)
router.put('/',pc.updatingProduct)
router.get('/getproduct',pc.listProduct)
router.get('/userwithproduct',pc.listProductWithUser)
router.get('/descending',pc.getProductsDescending)


export default router