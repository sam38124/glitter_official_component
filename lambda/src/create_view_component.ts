import {lambda} from "ts-glitter/src/lambda/interface";

lambda.createViewComponent({
    //Glitter platform domain.
    domain: 'http://127.0.0.1:4000',
    //Your glitter app name.
    app_name: 'official_component',
    auth: {
        //Your glitter account.
        account: 'rdtest',
        //Your glitter pwd.
        pwd: '12345'
    },
    router: [
        {
            //Prefix with url.
            prefix: `prefix`,
            //Replace to your glitter component path.
            path: `/Users/jianzhi.wang/Desktop/square_studio/APP檔案/lambda_view/official_component/src`,
            //Add the view plugin what you need to add.
            interface: [
                {
                    name: "Lambda測試模塊",
                    path: "interface.js",
                    //The group of component , this can be empty.
                    key:'header'
                }
            ]
        }
    ],
    //loop to build and publish your code.
    loop:true
})