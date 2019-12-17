"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const portalController_1 = __importDefault(require("../controllers/portalController"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
class PortalRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        const DIR = './uploads';
        console.log(DIR);
        let storage = multer_1.default.diskStorage({
            destination: (req, file, cb) => {
                cb(null, DIR);
            },
            filename: (req, file, cb) => {
                cb(null, file.fieldname + '-' + Date.now() + '.' + path_1.default.extname(file.originalname));
            }
        });
        let upload = multer_1.default({ storage: storage });
        console.log(upload);
        // CREATE DATA 
        this.router.post('/create/user', portalController_1.default.createUserLogin);
        this.router.post('/post-create', portalController_1.default.createNewPost);
        // UPLOAD IMAGES
        this.router.post('/upload', upload.single('image'), function (req, res) {
            if (!req.file) {
                console.log("No file is available!");
                return res.send({
                    success: false
                });
            }
            else {
                console.log('File is available!');
                return res.send({
                    success: true
                });
            }
        });
        // READ DATA PORTAL INTRANET OF GEL
        this.router.get('/users/:id,:pass', portalController_1.default.getUserLoginById);
        this.router.get('/userprofile/:id', portalController_1.default.getUserProfile);
        this.router.get('/list/user', portalController_1.default.getListUserLogin);
        this.router.get('/cate', portalController_1.default.getPostCategory);
        this.router.get('/post', portalController_1.default.getAllPost);
        this.router.get('/post/:id', portalController_1.default.getPostById);
        this.router.get('/post/cate/:id', portalController_1.default.getPostByCategory);
        // UPDATE DATA
        this.router.put('/post-update/:id', portalController_1.default.updatPost);
        // DELETE DATA
        this.router.delete('/post/:id', portalController_1.default.deletePost);
    }
}
const portalRoutes = new PortalRoutes();
exports.default = portalRoutes.router;
