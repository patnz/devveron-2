import express from 'express'

import { JwtRequest } from '../auth0'
import checkJwt from '../auth0'

const router = express.Router()

// GET /api/v1/fruits
router.get('/', (req, res) => {})
