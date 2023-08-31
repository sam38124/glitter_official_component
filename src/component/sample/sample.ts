import { HtmlJson, Plugin } from '../../glitterBundle/plugins/plugin-creater.js';
import { Glitter } from '../../glitterBundle/Glitter.js';
import { GVC } from '../../glitterBundle/GVController.js';


Plugin.createComponent(import.meta.url, (glitter: Glitter, editMode: boolean) => {
    return {
        defaultData: {},
        render: (gvc: GVC, widget: HtmlJson, setting: HtmlJson[], hoverID: string[]) => {
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
