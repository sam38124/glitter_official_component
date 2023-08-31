"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("ts-glitter/src/lambda/interface");
const sample_1 = require("./lambda/sample");
interface_1.lambda.setup({
    auth: {
        account: 'your_account',
        pwd: 'your_pwd'
    },
    domain: 'http://127.0.0.1:4000',
    app_name: 'fortest',
    router: [
        {
            route: 'test',
            name: "測試",
            type: 'get',
            execute: sample_1.sample
        }
    ],
});
//# sourceMappingURL=create_lambda_function.js.map