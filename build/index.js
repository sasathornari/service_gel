"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const body_parser_1 = __importDefault(require("body-parser"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const portalRoutes_1 = __importDefault(require("./routes/portalRoutes"));
const console_1 = require("console");
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        const allowedOrigins = [
            'capacitor://localhost',
            'ionic://localhost',
            'https://localhost',
            'https://localhost:8080',
            'http://localhost:8100',
            'http://localhost:8000',
            'http://localhost:53703',
            'http://localhost:4200',
            'https://human.3stplus.co.th',
            'https://tma.gel.co.th',
            'https://application.gel.co.th'
        ];
        // Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
        const corsOptions = {
            origin: (origin, callback) => {
                if (allowedOrigins.includes(origin) || !origin) {
                    callback(null, true);
                }
                else {
                    callback(new Error('Origin not allowed by CORS'));
                }
            }
        };
        // Set SSL
        const path = require('path');
        const options = {
            key: fs_1.default.readFileSync(path.resolve('./privkey.pem')),
            cert: fs_1.default.readFileSync(path.resolve('./cert.pem'))
        };
        https_1.default.createServer(options, this.app).listen(3005, function () {
            console.log("server running at https://IP_ADDRESS:3005/");
        });
        //this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.options('*', cors_1.default(corsOptions));
        //this.app.use(cors());
        this.app.use(express_1.default.json());
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(function (req, res, next) {
            res.setHeader("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
            res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
            res.setHeader("Access-Control-Allow-Headers", "Content-Type");
            res.setHeader('Content-type', 'application/json');
            res.setHeader('Accept', 'application/json, text/plain');
            const apiTimeout = 10 * 1000;
            req.setTimeout(apiTimeout, function () {
                console.log('Request has timed out.');
                res.send(408);
            });
            res.setTimeout(apiTimeout, function () {
                console.log('Service Unavailable.');
                res.send(503);
            });
            next();
        });
        //  this.app.get('/api', (req, res) => {
        //     res.send('CONNECTION REST SERVICES GEL API');
        //   })
    }
    routes() {
        this.app.use('/api', indexRoutes_1.default);
        this.app.use('/api/portal', portalRoutes_1.default);
        //this.app.use('/api/project', projectRoutes);
        // this.app.use('/api/upload', uploadRoutes);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
            console.log('Start connection.........\n');
        });
        if (console_1.error) {
            console.error('error connecting: ' + console_1.error.toString);
            return;
        }
    }
}
const server = new Server();
server.start();
