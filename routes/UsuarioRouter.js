import express from 'express';
import { 
        crearUsuario, 
        listarUsuarios, 
        getUserById,
        deleteUserById,
        updeteUserById,
        login
    } from '../controllers/UsuarioController.js';
import { validarJWT} from '../middlewares/login.js';
const router = express.Router();

router.get('/', listarUsuarios);
router.get('/:id', getUserById);
router.delete('/:id', deleteUserById);
router.put('/:id', updeteUserById);
router.post('/', crearUsuario);
router.post('/login', login);

export default router;