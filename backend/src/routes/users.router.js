import { Router } from "express";


const users_router = Router();


// Registrar un nuevo usuario
/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Registrar usuarios
 *     responses:
 *       200:
 *         description: OK
 */
users_router.post('/register', (req, res) => {
    res.send("Hola")
});

// 
users_router.get('/', (req, res) => { });

export default users_router;