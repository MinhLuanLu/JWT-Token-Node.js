import Login from './login.js'
import Home from './home.js';
import express from 'express'
import { expressjwt } from 'express-jwt'; // Newer syntax
import { jwtMiddleware } from './jwtToken.js';
const SECRET_KEY = 'SECRET_KEY'
const router = express.Router();



router.post('/api/login', Login)
router.post('/api/home',jwtMiddleware, Home) // apply the token here


// other way to use the token //
router.get('/api/protected', 
    expressjwt({ secret: SECRET_KEY, algorithms: ['HS256'] }), 
    (req, res) => {
        res.json({
            message: "You are authorized!",
            user: req.auth // req.auth contains decoded payload
        });
    }
);

router.post


export default router