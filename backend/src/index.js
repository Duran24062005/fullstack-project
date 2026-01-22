import express from 'express'
import { app_config } from './config/app.config.js'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swaggerConfig.js'
import cors from 'cors'
import users_router from './routes/users.router.js'

const app = express()
const port = app_config.app.port


// Middleware para servir la documentación
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Habilitar CORS
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Ruta de inicio
app.get('/', (_req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Portfolio API V4',
        version: '1.0.0',
        endpoints: {
            blogs: '/api/blogs',
            projects: '/api/projects'
        }
    });
});

/**
 * @swagger
 * /hola:
 *   get:
 *     summary: Ruta de prueba
 *     description: Retorna un mensaje de prueba
 *     tags: [Saludo]
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                   code:
 *                     type: number
 */
app.get('/hola', (req, res) => {
    res.status(200).json([
        {
            "status": "Succesfully",
            "code": 200
        }
    ])
})

app.use('/users', users_router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))