// jwtMiddleware.js
import { expressjwt } from 'express-jwt';


const SECRET_KEY = 'SECRET_KEY'
// JWT middleware to validate the token
export const jwtMiddleware = expressjwt({
    secret: SECRET_KEY,           // Secret key to verify the token
    algorithms: ['HS256'],       // Specify the algorithm used to sign the token
}).unless({
    path: ['/api/login'] // Exclude these routes from JWT verification (public routes)
});
