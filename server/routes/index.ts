import { Router } from 'express'

import security from './security'

const router = Router()

router.use(security)

export default router
