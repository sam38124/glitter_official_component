import { Plugin } from '../../glitterBundle/plugins/plugin-creater.js';
Plugin.createComponent(import.meta.url, (glitter, editMode) => {
    return {
        defaultData: {},
        render: (gvc, widget, setting, hoverID) => {
            const html = String.raw;
            return {
                view: () => {
                    return gvc.bindView(() => {
                        const id = glitter.getUUID();
                        glitter.addMtScript([{
                                src: 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js'
                            }], () => {
                            gvc.notifyDataChange(id);
                        }, () => {
                        });
                        gvc.addStyleLink(`https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css`);
                        gvc.addStyle(`
                            .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
                        `);
                        return {
                            bind: id,
                            view: () => {
                                return html `
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide" style="
                                        min-height: 550px;
background-position: 50%!important;
    background-repeat: no-repeat!important;
    background-size: cover!important;
background-image: url('http://localhost:63342/Shopper-2/dist/assets/img/covers/cover-5.jpg')" ></div>
                                        <div class="swiper-slide" style="
                                        min-height: 550px;
                                          background-position: 50%!important;
    background-repeat: no-repeat!important;
    background-size: cover!important;
background-image: url('http://localhost:63342/Shopper-2/dist/assets/img/covers/cover-5.jpg');" ></div>
                                    </div>
                                    <div class="swiper-button-next" >d</div>
                                    <div class="swiper-button-prev"></div>`;
                            },
                            divCreate: { class: `swiper mySwiper`, style: ``, option: [{
                                        key: 'id',
                                        value: id
                                    }] },
                            onCreate: () => {
                                new Swiper(`#${id}`, {
                                    navigation: {
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    },
                                });
                                setTimeout(() => {
                                    $('.swiper-button-next').html('');
                                }, 1000);
                            },
                        };
                    });
                },
                editor: () => {
                    return ``;
                },
            };
        },
    };
});
