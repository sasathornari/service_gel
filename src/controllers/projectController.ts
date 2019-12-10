import { Request, Response } from "express";

import pool3 from "../connectMySQL";


class ProjectController {
  /*========================================================================*/
  /*-------- My3PLUS --------*/

   public async getAllUserLogin(req: Request, res: Response) {
    await pool3.query("select * from stplusc1_myapp.user_login", function (
      err: any,
      row: any
    ) {
      const listuser = JSON.parse(JSON.stringify(row, null, 4));
      res.json(listuser);
    });
  }

  public async getUserLogin(req: Request, res: Response): Promise<any> {
    try {
      const { user } = req.params;
      const { pass } = req.params;
      await pool3.query(
        "SELECT * FROM stplusc1_myapp.user_login WHERE username = '" +
        [user] +
        "' and password = '" +
        [pass] +
        "'",
        function (err: any, row: any) {
          const listuser = JSON.parse(JSON.stringify(row, null, 4));
          res.json(listuser);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async getUserLoginByEmpId(req: Request, res: Response): Promise<any> {
    try {
      const { empId } = req.params;
      await pool3.query(
        "SELECT * FROM stplusc1_myapp.user_login WHERE PRS_NO = '" +
        [empId] +
        "'",
        function (err: any, row: any) {
          const listuser = JSON.parse(JSON.stringify(row, null, 4));
          res.json(listuser);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  
  public async getUserLoginByUsername(req: Request, res: Response): Promise<any> {
    try {
      const { name } = req.params;
      await pool3.query(
        "select * from stplusc1_myapp.user_login where username = '" + [name] + "'",
        function (err: any, row: any) {
          const listuser = JSON.parse(JSON.stringify(row, null, 4));
          res.json(listuser);
        }
      );
      //console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  public async getUserLoginByRole(req: Request, res: Response): Promise<any> {
    try {
      const { role } = req.params;
      await pool3.query(
        "SELECT * FROM stplusc1_myapp.user_login WHERE role = " + [role],
        function (err: any, row: any) {
          const listuser = JSON.parse(JSON.stringify(row, null, 4));
          res.json(listuser);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async getEmpIdByUsername(req: Request, res: Response): Promise<any> {
    try {
      const { user } = req.params;
      await pool3.query(
        "select PRS_NO from stplusc1_myapp.user_login where username = '" + [user] + "'",
        function (err: any, row: any) {
          const listuser = JSON.parse(JSON.stringify(row, null, 4));
          res.json(listuser);
        }
      );
      //console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  public async getProjects(req: Request, res: Response) {
    await pool3.query("select * from stplusc1_myapp.projects where onProject = 1", function (
      err: any,
      row: any
    ) {
      const listproject = JSON.parse(JSON.stringify(row, null, 4));
      console.log(listproject);
      res.json(listproject);
    });
  }

  public async getProjectsId(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      await pool3.query(
        "SELECT * FROM stplusc1_myapp.projects WHERE ProjId = '" + [id] + "'",
        function (err: any, row: any) {
          console.log(row);
          const listproject = JSON.parse(JSON.stringify(row, null, 4));
          res.json(listproject);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async getProjectsById(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      await pool3.query(
        "SELECT * FROM stplusc1_myapp.projects WHERE proId = '" + [id] + "'",
        function (err: any, row: any) {
          console.log(row);
          const listproject = JSON.parse(JSON.stringify(row, null, 4));
          res.json(listproject);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async getProjectsAssign(req: Request, res: Response) {
    await pool3.query("select * from stplusc1_myapp.projassign", function (
      err: any,
      row: any
    ) {
      const listproject = JSON.parse(JSON.stringify(row, null, 4));
      console.log(listproject);
      res.json(listproject);
    });
  }
  
  public async getProjectsAssignById(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      await pool3.query(
        "SELECT * FROM stplusc1_myapp.projassign WHERE PRS_NO = '" + [id] + "'",
        function (err: any, row: any) {
          console.log(row);
          const listproject = JSON.parse(JSON.stringify(row, null, 4));
          res.json(listproject);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public async getAllTimeAttendance(req: Request, res: Response) {
    await pool3.query("select * from stplusc1_myapp.tma", function (
      err: any,
      row: any
    ) {
      const listuser = JSON.parse(JSON.stringify(row, null, 4));
      res.json(listuser);
    });
  }
  
  public async getTimeByEmpId(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      await pool3.query(
        "select * from stplusc1_myapp.tma WHERE empId = '" + [id] + "'",
        function (err: any, row: any) {
          const listproject = JSON.parse(JSON.stringify(row, null, 4));
          console.log(listproject);
          res.json(listproject);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async getTimeByProjId(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      await pool3.query(
        "select * from stplusc1_myapp.tma WHERE ProjId = '" + [id] + "'",
        function (err: any, row: any) {
          const listproject = JSON.parse(JSON.stringify(row, null, 4));
          console.log(listproject);
          res.json(listproject);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async getTimeTodayById(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const { dateStart } = req.params;
      const { dateFinish } = req.params;
      await pool3.query(
        "select * from stplusc1_myapp.tma WHERE " +
        "empId = '" + [id] + "' and " +
        "datestamp >='" + [dateStart] + "' and " + 
        "datestamp <= '" + [dateFinish] + "' " +
        "order by tmaId desc",
        function (err: any, row: any) {
          const listproject = JSON.parse(JSON.stringify(row, null, 4));
          console.log(listproject);
          res.json(listproject);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async findCurrentTMAById(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const { latDiff } = req.params;
      const { latAdd } = req.params;
      const { lngDiff } = req.params;
      const { lngAdd } = req.params;
      const { datestamp } = req.params;

      await pool3.query(
        "select * from stplusc1_myapp.tma WHERE " +
        "empId = '" + [id] + "' " +
        "and latitude >= '" + [latDiff] + "' and latitude <= '" + [latAdd] + "' "+
        "and longtitude >= '" + [lngDiff] + "' and longtitude <= '" + [lngAdd] + "' "+
        "and datestamp = '" + [datestamp] + "' order by tmaId desc",
        function (err: any, row: any) {
          const listproject = JSON.parse(JSON.stringify(row, null, 4));
          console.log(listproject);
          res.json(listproject);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async getLocationInProject(req: Request, res: Response): Promise<any> {
    try {
      const { lat } = req.params;
      const { latAdd } = req.params;
      const { lng } = req.params;
      const { lngAdd } = req.params;
      
      await pool3.query(
        "SELECT * FROM stplusc1_myapp.projects" +
        " where latitude  >= " + [lat] + " and latitude <= "+ [latAdd] +
        " and longitude >= " + [lng] + " and longitude <= " + [lngAdd] + 
        " and onProject = 1 ",
        function (err: any, row: any) {
          console.log(row);
          const listproject = JSON.parse(JSON.stringify(row, null, 4));
          console.log(listproject);
          res.json(listproject);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  
  public async ceateProjects(req: Request, res: Response): Promise<void> {
    try {
      const result = await pool3.query(
        "INSERT INTO stplusc1_myapp.projects set ?",
        [req.body]
      );
      console.log(result);
      res.json({ message: "Create Project Success = " + [req.body] });
    } catch (error) {
      console.log(error);
    }
  }

  public async ceateProjectsAssign(req: Request, res: Response): Promise<void> {
    try {
      const result = await pool3.query(
        "INSERT INTO stplusc1_myapp.projassign set ?",
        [req.body]
      );
      console.log(result);
      res.json({
        message: "Assign Employee to Project Success = " + [req.body]
      });
    } catch (error) {
      console.log(error);
    }
  }

  public async createUsers(req: Request, res: Response): Promise<void> {
    try {
      const result = await pool3.query(
        "INSERT INTO stplusc1_myapp.user_login set ?",
        [req.body]
      );
      console.log(result);
      res.json({ message: "Create user success = " + [req.body] });
    } catch (error) {
      console.log(error);
    }
  }

  public async createTimeAttendance(req: Request, res: Response): Promise<void> {
    try {
      const result = await pool3.query("INSERT INTO stplusc1_myapp.tma set ?", [
        req.body
      ]);
      console.log(result);
      res.json({ message: "Time Attendance Success = " + [req.body] });
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteUserLoginById(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      await pool3.query(
        "delete from stplusc1_myapp.user_login where Id =" + [id],
        function (err: any, row: any) {
          const listproject = JSON.parse(JSON.stringify(row, null, 4));
          console.log(listproject);
          res.json(listproject);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteAssgingById(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      await pool3.query(
        "delete from stplusc1_myapp.projassign where assignId =" + [id],
        function (err: any, row: any) {
          const listproject = JSON.parse(JSON.stringify(row, null, 4));
          console.log(listproject);
          res.json(listproject);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async deleteProjectById(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      await pool3.query(
        "delete from stplusc1_myapp.projects where proId =" + [id],
        function (err: any, row: any) {
          const listproject = JSON.parse(JSON.stringify(row, null, 4));
          console.log(listproject);
          res.json(listproject);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  public async updateProject(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const sql ="update stplusc1_myapp.projects set ? where proId = ? ";
      const result = await pool3.query(sql,[req.body , id]);
      
      // const result = await pool3.query(
      //   "UPDATE stplusc1_myapp.projects set ? ",
      //   [req.body] + " WHERE ProjId = '" + [id] + "' "
      // );
      console.log(result);
      res.json({ message: "update Project Success = " + result });
    } catch (error) {
      console.log(error);
    }
  }

  // Update Project APP on Mobile (success)
  public async updateProjectApp(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    try {
      // const result = await pool3.query(
      //   "UPDATE stplusc1_myapp.projects set ? ",
      //   [req.body] + " WHERE proId = '" + [id] + "' "
      // );
      const sql ="update stplusc1_myapp.projects set ? where proId = ? ";
      console.log(sql);
      const result = await pool3.query(sql,[req.body , id]);
      console.log(result);
      res.json({ message: "update Project Success = " + [req.body]+' , '+[id]});
    } catch (error) {
      console.log(error);
    }
  }

  public async updateUserLogin(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const result = await pool3.query(
        "UPDATE stplusc1_myapp.user_login set ? ",
        [req.body] + " WHERE PRS_NO = '" + [id] + "' "
      );
      console.log(result);
      res.json({ message: "update Project Success = " + [req.body] });
    } catch (error) {
      console.log(error);
    }
  }

  public async updateTimeById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const result = await pool3.query(
        "UPDATE stplusc1_myapp.tma set " +
        "check = '" + [req.body.check] + "', " +
        "ProjId = '" + [req.body.ProjId] + "', " +
        "datestamp = '" + [req.body.datestamp] + "', " +
        "timestamp = '"+ [req.body.timestamp] + "', " + 
        "latitude = '" + [req.body.latitude] + "', " +
        "longtitude = '" + [req.body.longtitude] + "', " +
        "userUpdated ='" + [req.body.userUpdated] + "', " + 
        "dateUpdated = '" + [req.body.dateUpdated] +"' " +
        "WHERE empId = '" + [id] + "' "
      );
      console.log(result);
      res.json({ message: "update Project Success = " + [req.body.timetstamp] });
    } catch (error) {
      console.log(error);
    }
  }


  public async updateAssignById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const sql = "update stplusc1_myapp.projassign set ? where proId = ?";
      const result = await pool3.query(sql,[req.body , id]);
      console.log(result);
      res.json({ message: "update assign employee to project success = " + + [req.body]+' , '+[id]});
    } catch (error) {
      console.log(error);
    }
  }
  
  
}

const projectController = new ProjectController();
export default projectController;

