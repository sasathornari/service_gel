"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const portalController_1 = __importDefault(require("../controllers/portalController"));
class PortalRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // CREATE DATA 
        this.router.post('/post-create', portalController_1.default.createNewPost);
        //this.router.post('/fileupload', portalController.fileUploads);
        this.router.post('/web/user', portalController_1.default.createUserWeb);
        this.router.post('/project/create', portalController_1.default.ceateProjects);
        this.router.post('/tma/savetime', portalController_1.default.saveTimeAttendance);
        // READ DATA PORTAL INTRANET OF GEL        
        this.router.get('/web/listuser', portalController_1.default.getListUserWeb);
        this.router.get('/web/role/:role', portalController_1.default.getUserLoginByRole);
        this.router.get('/web/user/:id,:pass', portalController_1.default.findUserLogin);
        this.router.get('/web/username/:id', portalController_1.default.findByUsername);
        this.router.get('/web/userlogin/:id', portalController_1.default.findUserById);
        this.router.get('/cate', portalController_1.default.getPostCategory);
        this.router.get('/post', portalController_1.default.getAllPost);
        this.router.get('/post/:id', portalController_1.default.getPostById);
        this.router.get('/post/cate/:id', portalController_1.default.getPostByCategory);
        this.router.get('/projects', portalController_1.default.getProjects);
        this.router.get('/project/proId/:id', portalController_1.default.getProjectById);
        this.router.get('/project/history/:id,:locate,:datestamp', portalController_1.default.findHistoryTMAById);
        this.router.get('/project/location/:lat,:lng', portalController_1.default.getLocationInProject);
        this.router.get('/tma/logtimes/:id,:locate,:datestamp', portalController_1.default.getLogTimes);
        this.router.get('/tma/daily/:id,:datestamp', portalController_1.default.getDailyTimes);
        this.router.get('/tma/empId/:id', portalController_1.default.getTimesByEmpId);
        this.router.get('/tma/transactions/:id,:start,:finish', portalController_1.default.getTransactionsTimes);
        // UPDATE DATA
        this.router.put('/post-update/:id', portalController_1.default.updatePost);
        this.router.put('/project/app/:id', portalController_1.default.updateProjectInApp);
        // DELETE DATA
        this.router.delete('/post/:id', portalController_1.default.deletePost);
        this.router.delete('/project/del/:id', portalController_1.default.deleteProjectById);
    }
}
const portalRoutes = new PortalRoutes();
exports.default = portalRoutes.router;
