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
Object.defineProperty(exports, "__esModule", { value: true });
const sql = require('mssql');
const pool1 = new sql.ConnectionPool({
    user: 'business',
    password: 'system',
    server: '192.168.2.12',
    //server: '147.50.42.162',
    database: 'GEL'
});
pool1.connect((err) => __awaiter(void 0, void 0, void 0, function* () {
    // ...
    if (err)
        throw err;
    /*const results = await pool1.request()
      .query("select * from GEL.dbo.EMPFILE");
      console.log(results);*/
    console.log('MSSQL of B+ is Connected!');
}));
exports.default = pool1;
