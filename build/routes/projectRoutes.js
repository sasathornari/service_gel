"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectController_1 = __importDefault(require("../controllers/projectController"));
class ProjectRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // GET DATA
        this.router.get('/user', projectController_1.default.getAllUserLogin);
        this.router.get('/user/:user,:pass', projectController_1.default.getUserLogin);
        this.router.get('/user/:empId', projectController_1.default.getUserLoginByEmpId);
        this.router.get('/emp/:user', projectController_1.default.getEmpIdByUsername);
        this.router.get('/login/:name', projectController_1.default.getUserLoginByUsername);
        this.router.get('role/:role', projectController_1.default.getUserLoginByRole);
        this.router.get('/', projectController_1.default.getProjects);
        this.router.get('/:id', projectController_1.default.getProjectsId);
        this.router.get('/proId/:id', projectController_1.default.getProjectsById);
        this.router.get('/assign/list', projectController_1.default.getProjectsAssign);
        this.router.get('/assign/:id', projectController_1.default.getProjectsAssignById);
        this.router.get('/list/tma', projectController_1.default.getAllTimeAttendance);
        this.router.get('/tma/emp/:id', projectController_1.default.getTimeByEmpId);
        this.router.get('/tma/pro/:id', projectController_1.default.getTimeByProjId);
        this.router.get('/tma/today/:id,:dateStart,:dateFinish', projectController_1.default.getTimeTodayById);
        this.router.get('/currentIn/:id,:latDiff,:latAdd,:datestamp', projectController_1.default.findCurrentInById);
        this.router.get('/currentOut/:id,:lngDiff,:lngAdd,:datestamp', projectController_1.default.findCurrentOutById);
        this.router.get('/searchTime/:id,:startDate,:finishDate', projectController_1.default.searchTimeByDate);
        this.router.get('/location/:lat,:lng', projectController_1.default.getLocationInProject);
        this.router.post('/create', projectController_1.default.ceateProjects);
        this.router.post('/assign', projectController_1.default.ceateProjectsAssign);
        this.router.post('/tma', projectController_1.default.createTimeAttendance);
        this.router.put('/tma/:id', projectController_1.default.updateTimeById);
        this.router.put('/assign/:id', projectController_1.default.updateAssignById);
        this.router.put('/', projectController_1.default.updateProject);
        this.router.put('/app/:id', projectController_1.default.updateProjectApp);
        this.router.put('/user/:id', projectController_1.default.updateUserLogin);
        this.router.delete('/user/:id', projectController_1.default.deleteUserLoginById);
        this.router.delete('/:id', projectController_1.default.deleteAssgingById);
        this.router.delete('/app/:id', projectController_1.default.deleteProjectById);
    }
}
const projectRoutes = new ProjectRoutes();
exports.default = projectRoutes.router;
