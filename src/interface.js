import { Plugin } from './glitterBundle/plugins/plugin-creater.js';
Plugin.create(import.meta.url, (glitter, editMode) => {
    return {
        sample: {
            title: 'Sample',
            subContent: '添加一個Sample元素',
            defaultData: {},
            render: Plugin.setComponent(import.meta.url, new URL('./component/sample/sample.js', import.meta.url)),
        },
        swiper: {
            title: '輪播圖-樣式一',
            subContent: '添加一個輪播圖',
            defaultData: {},
            render: Plugin.setComponent(import.meta.url, new URL('./component/swiper/swiper_1.js', import.meta.url)),
        }
    };
});
