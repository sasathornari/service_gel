"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = __importStar(require("mysql"));
// connection localhost
const pool = mysql.createPool({
    host: 'localhost',
    //host: '147.50.42.162',
    user: 'root',
    password: '0tvpkdi^hwxmew,;jt',
    database: 'mygel'
});
pool.getConnection((err, connection) => {
    if (err)
        throw err;
    connection.release();
    console.log('MySQL of GEL in localhost is connected');
});
exports.default = pool;
