import { Router } from 'express';

import projectController from '../controllers/projectController';

class ProjectRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        // GET DATA
        this.router.get('/user', projectController.getAllUserLogin);
        this.router.get('/user/:user,:pass', projectController.getUserLogin);
        this.router.get('/user/:empId', projectController.getUserLoginByEmpId);
        this.router.get('/emp/:user', projectController.getEmpIdByUsername);
        this.router.get('/login/:name', projectController.getUserLoginByUsername);
        this.router.get('role/:role', projectController.getUserLoginByRole);

        this.router.get('/', projectController.getProjects);
        this.router.get('/:id', projectController.getProjectsId);
        this.router.get('/proId/:id', projectController.getProjectsById);
        this.router.get('/assign/list', projectController.getProjectsAssign);
        this.router.get('/assign/:id', projectController.getProjectsAssignById);

        this.router.get('/list/tma', projectController.getAllTimeAttendance);
        this.router.get('/tma/emp/:id', projectController.getTimeByEmpId);
        this.router.get('/tma/pro/:id', projectController.getTimeByProjId);
        this.router.get('/tma/today/:id,:dateStart,:dateFinish', projectController.getTimeTodayById);
        this.router.get('/currentIn/:id,:latDiff,:latAdd,:datestamp', projectController.findCurrentInById);
        this.router.get('/currentOut/:id,:lngDiff,:lngAdd,:datestamp', projectController.findCurrentOutById);
        this.router.get('/searchTime/:id,:startDate,:finishDate', projectController.searchTimeByDate);

        this.router.get('/location/:lat,:lng', projectController.getLocationInProject);

        this.router.post('/create', projectController.ceateProjects);
        this.router.post('/assign', projectController.ceateProjectsAssign);
        
        this.router.post('/tma', projectController.createTimeAttendance);


        this.router.put('/tma/:id', projectController.updateTimeById);
        this.router.put('/assign/:id', projectController.updateAssignById);
        this.router.put('/',projectController.updateProject);        
        this.router.put('/app/:id',projectController.updateProjectApp);
        this.router.put('/user/:id',projectController.updateUserLogin);

        this.router.delete('/user/:id', projectController.deleteUserLoginById);
        this.router.delete('/:id', projectController.deleteAssgingById);
        this.router.delete('/app/:id', projectController.deleteProjectById);
    }
}

const projectRoutes = new ProjectRoutes();
export default projectRoutes.router;