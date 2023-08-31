import { Plugin } from '../../glitterBundle/plugins/plugin-creater.js';
Plugin.createComponent(import.meta.url, (glitter, editMode) => {
    return {
        defaultData: {},
        render: (gvc, widget, setting, hoverID) => {
            const html = String.raw;
            return {
                view: () => {
                    return `<h3 class="" style="color: black;">nkjnjkknjnjk</h3>`;
                },
                editor: () => {
                    return ``;
                },
            };
        },
    };
});
