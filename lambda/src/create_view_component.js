"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("ts-glitter/src/lambda/interface");
interface_1.lambda.createViewComponent({
    domain: 'http://127.0.0.1:4000',
    app_name: 'official_component',
    auth: {
        account: 'rdtest',
        pwd: '12345'
    },
    router: [
        {
            prefix: `prefix`,
            path: `/Users/jianzhi.wang/Desktop/square_studio/APP檔案/lambda_view/official_component/src`,
            interface: [
                {
                    name: "Lambda測試模塊",
                    path: "interface.js",
                    key: 'header'
                }
            ]
        }
    ],
    loop: true
});
//# sourceMappingURL=create_view_component.js.map