"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
// import https from 'https';
const http_1 = __importDefault(require("http"));
// import fs from 'fs';
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
(0, app_1.default)().then((app) => {
    const options = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "Web Advanced Application development 2023 REST API",
                version: "1.0.1",
                description: "REST server including authentication using JWT and refresh token",
            },
            servers: [{ url: "http://localhost:3000", },],
        },
        apis: ["./src/routes/*.ts"],
    };
    const specs = (0, swagger_jsdoc_1.default)(options);
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
    if (process.env.NODE_ENV !== 'production') {
        console.log('development');
        http_1.default.createServer(app).listen(process.env.PORT);
    }
    // const options2 = {
    //   key: fs.readFileSync('../client-key.pem'),
    //   cert: fs.readFileSync('../client-cert.pem')
    // };
    // https.createServer(options2, app).listen(process.env.HTTPS_PORT);
});
//# sourceMappingURL=server.js.map