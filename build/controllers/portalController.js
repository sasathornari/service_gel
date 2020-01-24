"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectGEL_1 = __importDefault(require("../connectGEL"));
//import pool3 from "../connectMySQL";
class PortalController {
    /*========================================================================*/
    /*-------- MyApp --------*/
    createNewPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield connectGEL_1.default.query("INSERT INTO my3plus.post_news set ?", [
                    req.body
                ]);
                //console.log(result);
                res.json({ message: "Post News Success = " + [req.body] });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    /*-------- Backend Website --------*/
    createUserWeb(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield connectGEL_1.default.query("INSERT INTO my3plus.user_login set ?", [
                    req.body
                ]);
                //console.log(result);
                res.json({ message: "Create new user login success = " + [req.body] });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    ceateProjects(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield connectGEL_1.default.query("INSERT INTO my3plus.projects set ?", [req.body]);
                //console.log(result);
                res.json({ message: "Create Project Success = " + [req.body] });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    createTimeAttendance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield connectGEL_1.default.query("INSERT INTO my3plus.tma set ?", [
                    req.body
                ]);
                //console.log(result);
                res.json({ message: "Time Attendance Success = " + [req.body] });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getListUserWeb(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connectGEL_1.default.query("SELECT * FROM my3plus.user_login", function (err, row) {
                    const listuserweb = JSON.parse(JSON.stringify(row, null, 4));
                    res.json(listuserweb);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getUserLoginByRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { role } = req.params;
                yield connectGEL_1.default.query("SELECT * FROM my3plus.user_login WHERE role = " + [role], function (err, row) {
                    const listuser = JSON.parse(JSON.stringify(row, null, 4));
                    res.json(listuser);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    findUserLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { pass } = req.params;
                yield connectGEL_1.default.query("SELECT * FROM my3plus.user_login where username = '" + [id] + "' and password = '" + [pass] + "' ", function (err, row) {
                    const listuserweb = JSON.parse(JSON.stringify(row, null, 4));
                    res.json(listuserweb);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    findByUsername(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield connectGEL_1.default.query("SELECT empId FROM my3plus.user_login where username = '" + [id] + "' ", function (err, row) {
                    const listuserweb = JSON.parse(JSON.stringify(row, null, 4));
                    res.json(listuserweb);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    findUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield connectGEL_1.default.query("SELECT * FROM my3plus.user_login where Id = " + [id], function (err, row) {
                    const listuserweb = JSON.parse(JSON.stringify(row, null, 4));
                    res.json(listuserweb);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    findHistoryTMAById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { locate } = req.params;
                const { datestamp } = req.params;
                yield connectGEL_1.default.query("select * from my3plus.tma WHERE empId = '" + [id] + "' " +
                    "and ProjId = '" + [locate] + "' and datestamp = '" + [datestamp] + "' ", function (err, row) {
                    const listproject = JSON.parse(JSON.stringify(row, null, 4));
                    console.log(listproject);
                    res.json(listproject);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // public async fileUploads(req: Request, res: Response): Promise<void> {
    //   try {
    //     const result = await pool.query("INSERT INTO my3plus.fileupload set ?", [
    //       req.body
    //     ]);
    //     console.log(result);
    //     res.json({ message: "Post News Success = " + [req.body] });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    getPostCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connectGEL_1.default.query("SELECT * FROM my3plus.post_category", function (err, row) {
                    const listproject = JSON.parse(JSON.stringify(row, null, 4));
                    res.json(listproject);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getAllPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connectGEL_1.default.query("SELECT * FROM my3plus.post_news order by postId desc", function (err, row) {
                    const listproject = JSON.parse(JSON.stringify(row, null, 4));
                    res.json(listproject);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getPostById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield connectGEL_1.default.query("SELECT * FROM my3plus.post_news where postId = " + [id], function (err, row) {
                    const listproject = JSON.parse(JSON.stringify(row, null, 4));
                    res.json(listproject);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getPostByCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield connectGEL_1.default.query("SELECT * FROM my3plus.post_news where post_category like '%" + [id] + "%'", function (err, row) {
                    const listproject = JSON.parse(JSON.stringify(row, null, 4));
                    res.json(listproject);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getProjects(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectGEL_1.default.query("select * from my3plus.projects where onProject = 1", function (err, row) {
                const listproject = JSON.parse(JSON.stringify(row, null, 4));
                //console.log(listproject);
                res.json(listproject);
            });
        });
    }
    getProjectById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield connectGEL_1.default.query("select * from my3plus.projects where onProject = 1 and proId = " + [id], function (err, row) {
                const listproject = JSON.parse(JSON.stringify(row, null, 4));
                //console.log(listproject);
                res.json(listproject);
            });
        });
    }
    getLocationInProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { lat } = req.params;
                const { lng } = req.params;
                yield connectGEL_1.default.query("SELECT * FROM my3plus.projects" +
                    " where latitude >=(" + lat + "-(radius_area/10000)) and latitude <=(" + lat + "+(radius_area/10000)) " +
                    " and longitude >=(" + lng + "-(radius_area/10000)) and longitude <=(" + lng + "+(radius_area/10000)) " +
                    " and onProject = 1 ", function (err, row) {
                    //console.log(row);
                    const listproject = JSON.parse(JSON.stringify(row, null, 4));
                    //console.log(listproject);
                    res.json(listproject);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deletePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield connectGEL_1.default.query("delete from my3plus.post_news where postId =" + [id], function (err, row) {
                    const listproject = JSON.parse(JSON.stringify(row, null, 4));
                    //console.log(listproject);
                    res.json(listproject);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deleteProjectById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield connectGEL_1.default.query("delete from my3plus.projects where proId =" + [id], function (err, row) {
                    const listproject = JSON.parse(JSON.stringify(row, null, 4));
                    //console.log(listproject);
                    res.json(listproject);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log([req.body]);
            try {
                const result = yield connectGEL_1.default.query("UPDATE my3plus.post_news set ? ", [req.body] + " where postId = " + [id]);
                //console.log(result);
                res.json({ message: "update Project Success = " + [req.body] });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    updateProjectInApp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                // const result = await pool3.query(
                //   "UPDATE stplusc1_myapp.projects set ? ",
                //   [req.body] + " WHERE proId = '" + [id] + "' "
                // );
                const sql = "update my3plus.projects set ? where proId = ? ";
                //console.log(sql);
                const result = yield connectGEL_1.default.query(sql, [req.body, id]);
                //console.log(result);
                res.json({ message: "update Project Success = " + [req.body] + ' , ' + [id] });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
const portalController = new PortalController();
exports.default = portalController;
