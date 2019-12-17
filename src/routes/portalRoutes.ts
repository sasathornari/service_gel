import { Router } from 'express';
import portalController from '../controllers/portalController';

import multer from 'multer';
import path from 'path';

class PortalRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {

        const DIR = './uploads';
          console.log(DIR)
 
          let storage = multer.diskStorage({
              destination: (req, file, cb) => {
                cb(null, DIR);
              },
              filename: (req, file, cb) => {
                cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
              }
          });
          let upload = multer({storage: storage});
          console.log(upload);
        // CREATE DATA 
        this.router.post('/create/user', portalController.createUserLogin);
        this.router.post('/post-create', portalController.createNewPost);

        // UPLOAD IMAGES
        this.router.post('/upload',upload.single('image'), function (req, res) {
            if (!req.file) {
              console.log("No file is available!");
              return res.send({
                success: false
              });
          
            } else {
              console.log('File is available!');
              return res.send({
                success: true
              })
            }
          });

        // READ DATA PORTAL INTRANET OF GEL
        this.router.get('/users/:id,:pass', portalController.getUserLoginById);
        this.router.get('/userprofile/:id', portalController.getUserProfile);
        this.router.get('/list/user', portalController.getListUserLogin);
        this.router.get('/cate', portalController.getPostCategory);
        this.router.get('/post', portalController.getAllPost);
        this.router.get('/post/:id', portalController.getPostById);
        this.router.get('/post/cate/:id', portalController.getPostByCategory);

        // UPDATE DATA
        this.router.put('/post-update/:id', portalController.updatPost);

        // DELETE DATA
        this.router.delete('/post/:id', portalController.deletePost);

    }
}

const portalRoutes = new PortalRoutes();
export default portalRoutes.router;