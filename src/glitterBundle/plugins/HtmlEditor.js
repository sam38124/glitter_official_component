glitter.share.formEdit={option:[{title:"單選題",event:function(data){data.type="single";data.elem="checked"},elem:"checked"},{title:"多選題",event:function(data){data.type="multiple";data.elem="checked"},elem:"checked"},{title:"輸入數字",event:function(data){data.elem="input";data.type="number"}},{title:"顏色選擇",event:function(data){data.elem="input";data.type="color"}},{title:"字串輸入",event:function(data){data.elem="input";data.type="text"}},{title:"日期選擇",event:function(data){data.elem="input";data.type="date"}},{title:"多行文本",event:function(data){data.elem="textArea"}},{title:"圖片選擇",event:function(data){data.elem="image"}},{title:"漸層顏色",event:function(data){data.elem="lineColor"}},{title:"按鈕連結",event:function(data){data.elem="buttonLink"}}],generateForm:function(data,child,window,formEditor,option){if(formEditor){if(data.length===0){data.push({})}}var event=window.event;var bindView=window.bindView;var notifyDataChange=window.notifyDataChange;var id=(new Date).getTime();return`<div class="w-100 h-100 ${(option??{}).overflow??`overflow-scroll`}" style="box-sizing: border-box;padding-left: 2px;" id="${id}">\n${bindView({bind:`${id}`,view:function(){var html="";var thatData=data;function forEachData(data,index){if(data!==undefined){if((option??{}).readonly){if(data){data.readonly=true}}if(formEditor){if(data.elem===undefined){data.elem="checked";data.type="single"}html+=`\n                <div>\n                <div class="d-flex align-items-center my-2">\n                 <h3 class=" " style="font-weight: 300;color: lightcoral;">參數${index+1}</h3>\n               \n                 <div style="flex: auto;"></div>\n</div>\n                     <input class="form-control flex-fill" placeholder="參數宣告" value="${data.title??""}" onchange="${event((function(e){data.title=$(e).val()}))}"> \n                <div class="d-flex w-100 align-items-center mt-2">\n                <input class="form-control flex-fill" placeholder="參數名稱" value="${data.name??""}" onchange="${event((function(e){data.name=$(e).val()}))}"> \n       <div class="btn-group ">\n                                                    <button type="button" class="btn btn-light dropdown-toggle ms-2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${data.selectLabelHint??"尚未選擇"}</button>\n                                                    <div class="dropdown-menu" style="margin: 0px;max-height: 200px;overflow-y: scroll;">\n                                 ${glitter.print((function(){var html="";glitter.share.formEdit.option.map((function(d2){html+=` <a class="dropdown-item" onclick="${event((function(){d2.event(data);data.selectLabelHint=d2.title;notifyDataChange(`${id}`)}))}">${d2.title}</a>`}));return html}))}                      \n                              \n                                                    </div>\n                                                </div>\n                </div>\n                </div>\n                `}var labelValue=function(){if(child){return``}else{var inHtml=`<label  class="form-label" style="font-size: 16px;font-weight: 400;">\n${data.need?`<span style="color: red;font-size: 16px;font-weight: 300;">*</span>`:``}\n${data.name}</label>`;if(data.customView){inHtml+=data.customView}return inHtml}};switch(data.elem){case"checked":var innerHtml="";if(formEditor){if(data.option===undefined){data.option=[]}if(!Array.isArray(data.option)){data.option=[]}data.option.map((function(d3,index){var dd=d3;innerHtml+=`\n                                <div class="border rounded p-1 bg-primary mt-2">\n                                <div class="d-flex w-100 align-items-center">\n                                    <input class="form-control flex-fill me-2" placeholder="參數宣告" value="${dd.title??""}" onchange="${event((function(e){dd.title=$(e).val()}))}">\n</div>  \n                <div class="d-flex w-100 align-items-center mt-2">\n              \n                <input class="form-control flex-fill me-2" placeholder="參數名稱" value="${dd.name??""}" onchange="${event((function(e){dd.name=$(e).val()}))}">\n       <div class="btn-group">\n                                                    <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                                                    ${dd.selectLabelHint??"選項"}</button>\n                                                    <div class="dropdown-menu" style="margin: 0px;max-height: 200px;overflow-y: scroll;">\n                                                        <a class="dropdown-item" onclick="${event((function(){dd.elem=undefined;dd.selectLabelHint=undefined;notifyDataChange(`${id}`)}))}">基本</a>\n                                                     ${glitter.print((function(){var html="";glitter.share.formEdit.option.filter((d2=>d2.elem!=="checked")).map((function(d2){html+=` <a class="dropdown-item" onclick="${event((function(){d2.event(dd);dd.selectLabelHint=d2.title;notifyDataChange(`${id}`)}))}">${d2.title}</a>`}));return html}))}  \n                                                       \n                                                    </div>\n                                                </div>\n                                                 <i class="fa-solid text-white fa-trash-can ms-2 fs-5 me-1 d-flex align-items-center justify-content-center" style="font-size: 20px;cursor: pointer;" onclick="${event((function(){data.option.splice(index,1);notifyDataChange(`${id}`)}))}"></i>\n                </div>\n                \n                </div>\n                                `}));innerHtml+=`\n<div class="d-flex w-100 border-top  align-items-center mt-3" style="height: 60px;">\n<button class="btn btn-primary mx-auto " onclick="${event((function(){data.option.push({});notifyDataChange(`${id}`)}))}">\n<i class="fas fa-plus-circle me-2" aria-hidden="true" ></i>\n添加選項</button>\n<div class="flex-fill"></div>\n<i class="fa-solid fa-trash-can me-2 fs-5 " aria-hidden="true" onclick="${event((function(){glitter.share.customView.checkYesOrNot("是否確認刪除此參數??",(function(result){if(result){thatData.splice(index,1);notifyDataChange(`${id}`)}}))}))}" style="cursor: pointer;"></i>\n</div>\n`}else{if(!child){innerHtml+=`<div class="mt-2 w-100 fs-3">\n${labelValue()}\n</div>`}innerHtml+=`<div id="${index}" class="w-100">${bindView({bind:`${index}`,view:function(){var html="";Object.keys(data.option).map((function(d3,index2){var data2=data.option[d3];html+=`\n<div class="div d-flex align-items-center mt-1" style="" >\n<input class="form-check-input form-control" type="checkbox"  id="${index}${index2}" onchange="${event((function(e){if(data.type==="single"){Object.keys(data.option).map((function(d4){data.option[d4].checked=false}))}data2.checked=!data2.checked;window.notifyDataChange(`${index}`)}))}" ${data2.checked?`checked`:``} ${data2.readonly?`disabled`:``}>\n  <label class="form-label m-0" for="${index}${index2}" style="font-size: 16px;font-weight: 400;">\n ${data2.name}\n  </label>\n${data2.checked?glitter.share.formEdit.generateForm([data2],true,window):""}\n</div>\n\n`}));return html}})}</div>`}html+=innerHtml;break;case"input":if(formEditor){html+=`<div class="d-flex w-100 border-bottom  align-items-center mt-1" style="height: 60px;">\n<div class="flex-fill"></div>\n<i class="fa-solid fa-trash-can me-2 fs-5 " aria-hidden="true" onclick="${event((function(){glitter.share.customView.checkYesOrNot("是否確認刪除此參數??",(function(result){if(result){thatData.splice(index,1);notifyDataChange(`${id}`)}}))}))}" style="cursor: pointer;"></i>\n</div>`;return}var textFilter=event((function(e){if(data.type==="number"){$(e).val(glitter.filterNumber($(e).val()))}}));var textClick=event((function(e){if(glitter.deviceType===glitter.deviceTypeEnum.Web){if(data.type==="date"){glitter.openDiaLog("publicResource/dialog/Dia_Date_Picker.html","Dia_Date_Picker",false,false,{callback:function(text){data.value=text.substring(0,10);$(e).val(data.value);notifyDataChange(id);if((option??{}).dataChange){option.dataChange()}},data:{date:true,time:false,nowButton:false,clearButton:false,format:"YYYY/MM/DD",lang:"zh-cn"}})}else if(data.type==="time"){glitter.openDiaLog("publicResource/dialog/Dia_Date_Picker.html","Dia_Date_Picker",false,false,{callback:function(text){data.value=text.substring(11,16);$(e).val(data.value);notifyDataChange(id);if((option??{}).dataChange){option.dataChange()}},data:{date:false,time:true,nowButton:false,clearButton:false,format:"hh:mm",lang:"zh-cn"}})}}}));var theValue=function(){if(data.type==="date"){if(data.value){return data.value.substring(0,10)}else{return""}}else{return data.value??""}};if(child){html+=`<div class="mt-1 w-100">\n<input class="form-control" type="${data.type!==undefined&&data.type!=="date"?data.type:"text"}" placeholder="${data.placeHolder??`請輸入${data.name}`}" id="billing-first-name" oninput="${textFilter}" onchange="${event((function(e){data.value=$(e).val();if((option??{}).dataChange){option.dataChange()}}))}" onclick="${textClick}" value="${theValue()}" ${data.readonly?`readonly`:``}>\n</div>`}else{html+=`\n<div class="mt-2 w-100">\n${labelValue()}\n<div class="input-group input-group-merge">\n${glitter.print((function(){if(data.type==="date"){return`<div class="form-control dropdown-toggle" onclick="${textClick}">${data.value??"請選擇日期"}</div>`}else{return`<input class="form-control" style="height: 37px!important;;" type="${data.type!==undefined&&data.type!=="date"&&!data.visible?data.type:"text"}" placeholder="${data.placeHolder??`請輸入${data.name}`}" id="billing-first-name" oninput="${textFilter}" onchange="${event((function(e){data.value=$(e).val();if((option??{}).dataChange){option.dataChange()}}))}" onclick="${textClick}" value="${theValue()}" ${data.readonly?`readonly`:``}>`}}))}\n  \n                                           ${glitter.print((function(){if(data.type==="password"){return` <div class="input-group-text " data-password="false" onclick="\n ${event((function(){data.visible=!data.visible;window.notifyDataChange("formView")}))}\n ">\n                                              <i class="fa-solid fa-eye"></i>\n                                            </div>`}else{return``}}))}\n</div>\n\n</div>`}break;case"textArea":if(formEditor){html+=`<div class="d-flex w-100 border-bottom  align-items-center mt-1" style="height: 60px;">\n<div class="flex-fill"></div>\n<i class="fa-solid fa-trash-can me-2 fs-5 " aria-hidden="true" onclick="${event((function(){glitter.share.customView.checkYesOrNot("是否確認刪除此參數??",(function(result){if(result){thatData.splice(index,1);notifyDataChange(`${id}`)}}))}))}" style="cursor: pointer;"></i>\n</div>`;return}setTimeout((function(){window.autosize(window.document.getElementById(data.id))}),300);html+=`\n<div class="mt-2 w-100">\n${labelValue()}\n <textarea class="form-control border rounded" id="${data.id}" rows="10" style="line-height: 25px; font-size: 15px; border: none; margin: 0; font-weight: 400; "\nplaceholder="${data.placeHolder??"請輸入"+data.name}" onchange="${event((function(e){data.value=$(e).val();if((option??{}).dataChange){option.dataChange()}}))}" onfocus="${event((function(){window.autosize(window.document.getElementById(data.id))}))}" ${data.readonly?`readonly`:``}>${data.value??""}</textarea>\n</div>\n\n                  `;break;case"drop-down":html+=`${labelValue()}\n<div  class="w-100">\n${glitter.print((function(){var html="";data.option.map((function(d2){html+=` <a class="dropdown-item" onclick="${event((function(){data.value=d2.value;notifyDataChange(id);if((option??{}).dataChange){option.dataChange()}}))}">${d2.name}</a>`}));return`\n                <div class="dropdown">\n    <button class="btn btn-light dropdown-toggle" type="button" id="click-${index}" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n        ${glitter.print((function(){if(data.value!==undefined){return`${data.option.find((function(dd){return dd.value===data.value})).name}`}else{return data.placeHolder}}),data.placeHolder)}\n    </button>\n    <div class="dropdown-menu" aria-labelledby="click-${index}" style="max-height: 200px;overflow-y: scroll;">\n    ${html}\n    </div>\n</div>\n                `}))}\n</div>\n `;break;case"label":html+=`<div class="mt-2">${labelValue()}</div>`;break;case"image":if(formEditor){html+=`\n<div class="d-flex w-100 border-bottom  align-items-center mt-1" style="height: 60px;">\n<div class="flex-fill"></div>\n<i class="fa-solid fa-trash-can me-2 fs-5 " aria-hidden="true" onclick="${event((function(){glitter.share.customView.checkYesOrNot("是否確認刪除此參數??",(function(result){if(result){thatData.splice(index,1);notifyDataChange(`${id}`)}}))}))}" style="cursor: pointer;"></i>\n</div>\n`}else{html+=`<div class="mt-2">${labelValue()}</div>`;let chooseImage=event((function(){glitter.chooseImage((function(response){if(response.length>0){glitter.openDiaLog("glitterBundle/dialog/Dia_DataLoading.html","dataLoading",false,false,{});let map={app:"Pub",b64:response.map((function(dd){return dd.data}))};glitter.postRequest("PublicLogic","uploadImage",map,(function(response){glitter.closeDiaLogWithTag("dataLoading");if(response&&response.result){data.value=response.url[0];glitter.openDiaLog("glitterBundle/dialog/Dia_Success.html","Dia_Success",false,false,"上傳成功",(function(){}))}else{glitter.openDiaLog("glitterBundle/dialog/Dia_Error.html","Dia_Error",false,false,"上傳失敗",(function(){}))}notifyDataChange(`${id}_image`)}))}}))}));html+=`<div id="${id}_image">\n${bindView({bind:`${id}_image`,view:function(){if(glitter.isEmpty(data.value)){return`<button class="btn btn-outline-primary" onclick="${chooseImage}">選擇圖片</button>  `}else{return`<img src="${data.value}" class="w-100 rounded mx-auto ratio-16x9" onclick="${chooseImage}">`}}})}\n</div>`}break;case"lineColor":if(formEditor){html+=`<div class="d-flex w-100   align-items-center mt-1" style="height: 60px;">\n<div class="flex-fill"></div>\n<i class="fa-solid fa-trash-can me-2 fs-5 " aria-hidden="true" onclick="${event((function(){glitter.share.customView.checkYesOrNot("是否確認刪除此參數??",(function(result){if(result){thatData.splice(index,1);notifyDataChange(`${id}`)}}))}))}" style="cursor: pointer;"></i>\n</div>`}else{html+=`<div class="mt-2">${labelValue()}</div>\n<div class="d-flex mt-2">\n<span >初始</span>\n<input class="ms-2" type="color"  onchange="${event((function(e){data.start=$(e).val()}))}" value="${data.start??""}">\n<span class="mx-2">結束</span>\n<input type="color" onchange="${event((function(e){data.end=$(e).val()}))}" value="${data.end??""}">\n</div>\n`}break;default:if(formEditor){html+=`<div class="d-flex w-100 border-bottom  align-items-center mt-1" style="height: 60px;">\n<div class="flex-fill"></div>\n<i class="fa-solid fa-trash-can me-2 fs-5 " aria-hidden="true" onclick="${event((function(){glitter.share.customView.checkYesOrNot("是否確認刪除此參數??",(function(result){if(result){thatData.splice(index,1);notifyDataChange(`${id}`)}}))}))}" style="cursor: pointer;"></i>\n</div>`;return}else{if(glitter.share.formEdit.extensionItem[data.elem]!==undefined){html+=glitter.share.formEdit.extensionItem[data.elem](data,index,window)}}break}if(formEditor){html+=`<div class="w-100 mb-2" style="height: 1px;background-color: lightgrey;"></div>`}else{if(!child){html+=`<div class="w-100 " style="background-color: whitesmoke;height: 1px;margin-top: 10px;"></div>`}}}}if(Array.isArray(data)){thatData.map(forEachData)}else{Object.keys(data).map((function(dd){forEachData(data[dd],dd)}))}if(formEditor){html+=`<div class="w-100" style="height: 50px;"></div>`}return html},onCreate:function(){if(option){if(option.hideLabel){window.$(`#${id} .formEdit-label`).hide()}}}})}\n</div>\n${formEditor?`\n<div class="d-flex mt-2 position-absolute bottom-0 translate-middle-x start-50 bg-white w-100" style="max-width: calc(100% - 30px);padding-bottom: 5px;padding-top: 5px;z-index: 5;">\n<button type="button" class="btn btn-secondary flex-fill me-2" onclick="${event((function(){data.push({});notifyDataChange(`${id}`)}))}"><i class="fas fa-plus-circle me-2" aria-hidden="true"></i>添加參數</button>\n<button type="button" class="btn btn-warning flex-fill ms-2" onclick="${event((function(){formEditor.save()}))}">\n儲存JSON</button>\n</div>\n`:`\n`}\n`},copyValue:function(origin,target){try{if(!Array.isArray(origin)){origin=[]}origin.map((function(d1){var copyData=target.find((function(d2){return d1.title===d2.title&&d1.elem===d2.elem}));if(copyData!==undefined){copyData.checked=d1.checked;switch(copyData.elem){case"textArea":case"selected":case"image":case"input":copyData.value=d1.value;break;case"checked":glitter.share.formEdit.copyValue(d1.option,copyData.option);break;case"lineColor":copyData.start=d1.start;copyData.end=d1.end;break;case"BtnLink":copyData.option=d1.option.filter((w=>{var data=glitter.share.btnList.find((data2=>data2.title===w.value));return data!==undefined})).map((w=>glitter.share.btnList.find((data2=>{if(data2.title===w.value){data2.name=w.name??data2.name;return true}else{return false}}))));break;case"form":copyData.value=d1.value;break;case"formEdit":copyData.value=d1.value;break;default:if(glitter.share.formEdit.copyValueItem[copyData.elem]){glitter.share.formEdit.copyValueItem[copyData.elem](copyData,d1)}break}}}))}catch(e){alert(e)}},formatToPostData:function(data){var postData={};data.map((function(dd){if(dd.toPostData){var d2=dd.toPostData(dd);postData[d2.key]=d2.value}else{switch(dd.elem){case"textArea":case"selected":case"image":case"input":postData[dd.title??dd.name]=dd.value;break;case"checked":postData[dd.title??dd.name]=dd.option;break;case"lineColor":postData[dd.title??dd.name]={start:dd.start,end:dd.end};break;case"BtnLink":postData[dd.title??dd.name]=dd.option;break;case"formEdit":postData[dd.title??dd.name]=dd.value;break;case"form":postData[dd.title??dd.name]=dd.value;break}}}));return postData},postDataToForm:function(form,posData){form.map((dd=>{switch(dd.elem){case"checked":dd["option"]=posData[dd.title??dd.name]??dd["option"];break;default:dd["value"]=posData[dd.title??dd.name]??dd["value"];break}}))},extensionItem:{},copyValueItem:{},formEditor:function(data,window,custom,second){custom=custom??{};var id=glitter.getUUID();var bindView=window.bindView;var event=window.event;var notifyDataChange=window.notifyDataChange;function clearFunction(dd){if(!second){}}var itemSelect=[{name:"單選題",click:dd=>{dd.elem="checked";dd.type="single"}},{name:"多選題",click:dd=>{dd.elem="checked";dd.type=undefined}},{name:"數字輸入",click:dd=>{dd.elem="input";dd.type="number"}},{name:"字串輸入",click:dd=>{dd.elem="input";dd.type="text"}},{name:"日期選擇",click:dd=>{dd.elem="input";dd.type="date"}},{name:"多行文本",click:dd=>{dd.elem="textArea"}}];if(custom.itemSelect){itemSelect=itemSelect.concat(custom.itemSelect)}function getSelectText(dd){if(dd.cName){return dd.cName}switch(dd.elem){case"checked":if(dd.type==="single"){return"單選題"}else{return"多選題"}case"input":switch(dd.type){case"text":return"字串輸入";case"number":return"數字輸入";case"date":return"日期選擇";default:return"字串輸入"}case"textArea":return"多行文本";default:return"標題"}}return`<div id="${id}">\n${bindView({bind:id,view:function(){var html=``;data.map(((dd,index)=>{if(!second){html+=`<div class="d-flex align-items-center my-2">\n                 <h3 class=" " style="font-weight: 300;color: lightcoral;">  ${custom.indexText??"問題"}${index+1}</h3>\n                 <div style="flex: auto;"></div>\n</div>`}html+=`\n<div class="d-flex w-100 align-items-center">\n                <input class="form-control flex-fill" placeholder="請輸入表單標題" value="${dd.name??""}" onchange="${event((e=>{dd.name=$(e).val()}))}"> \n       <div class="btn-group ">\n                                                    <button type="button" class="btn btn-light dropdown-toggle ms-2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${getSelectText(dd)}</button>\n                                                    <div class="dropdown-menu" style="margin: 0px;">\n                                                      ${glitter.print((()=>{var html="";itemSelect.map(((d3,index)=>{html+=`  <a class="dropdown-item" onclick="${event((e=>{clearFunction(dd);d3.click(dd);notifyDataChange(id)}))}">${d3.name}</a>`}));return html}))}\n                                                    </div>\n                                                </div>\n                </div>\n`;var leftItem=``;switch(dd.elem){case"checked":html+=`<div class="w-100 mt-2"></div>`;dd.option=glitter.toJson(dd.option,[]);var option=dd.option;option.map(((d2,index)=>{html+=`<div class="d-flex w-100 align-items-center mb-2">\n                <span class="fs-6 me-2">${index+1}.</span>\n                 <div class="form-check">\n  <input class="form-check-input" type="checkbox" onclick="${event((e=>{if(dd.type==="single"){option.map((d3=>{d3.checked=false}))}d2.checked=$(e).get(0).checked;notifyDataChange(id)}))}" ${d2.checked?`checked`:``}>\n</div>\n                <input class="form-control flex-fill me-2" placeholder="請輸入選項名稱" value="${d2.name??""}" onchange="${event((e=>{d2.name=$(e).val()}))}" >\n       <div class="btn-group">\n                                                    <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                                                    ${getSelectText(d2)}\n</button>\n                                                    <div class="dropdown-menu" style="margin: 0px;">\n                                                      ${glitter.print((()=>{var html="";itemSelect.map(((d3,index)=>{html+=`  <a class="dropdown-item" onclick="${event((e=>{clearFunction(dd);itemSelect[index].click(d2);notifyDataChange(id)}))}">${d3.name}</a>`}));return html}))}\n                                                    </div>\n                                                </div>\n                                               <i class="fa-solid fa-trash-can ms-2 fs-5 me-1 d-flex align-items-center justify-content-center" style="font-size: 20px;cursor: pointer;" onclick="\n                                               ${event((()=>{option.splice(index,1);notifyDataChange(id)}))}"></i> \n                </div>`;switch(d2.elem){case"checked":html+=`<div class="" >${glitter.share.formEdit.formEditor([d2],window,(()=>{}),true)}</div>`}}));if(second){leftItem=`<button class="btn btn-warning mx-auto " onclick="${event((()=>{option.push({});notifyDataChange(id)}))};">\n <i class="fas fa-plus-circle me-2" aria-hidden="true"></i> \n添加選項</button>`}else{leftItem=`<button class="btn btn-primary mx-auto " onclick="${event((()=>{option.push({});notifyDataChange(id)}))};">\n <i class="fas fa-plus-circle me-2" aria-hidden="true"></i> \n添加選項</button>`}break}html+=`<div class="d-flex w-100 border-top border-bottom  align-items-center ${second?`border-white mt-2`:`mt-3`} " style="height: 60px;">\n${leftItem}\n<div class="flex-fill"></div>\n  <div class="form-check form-switch me-3 ">\n  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault0" onchange="${event((()=>{dd.need=!dd.need}))}" ${dd.need?`checked`:``} >\n  <label class="form-check-label" for="flexSwitchCheckDefault0" style="font-weight: 300;font-size: 16px;">必填</label>\n</div>\n${second?``:` <i class="fa-solid fa-trash-can me-2 fs-5 " aria-hidden="true" onclick="${event((()=>{data.splice(index,1);notifyDataChange(id)}))}" style="cursor: pointer;"></i>`}\n</div>`}));if(!second){html+=`\n<button class="w-100 btn btn-outline-primary align-items-center mt-2" onclick="${event((()=>{data.push({});notifyDataChange(id)}))}">\n<i class="fa-regular fa-circle-plus me-1"></i>\n${custom.addText??"添加選項"}\n</button>\n`}if(second){return`<div class="p-2 rounded border mb-2" style="background-color: wheat;">${html}</div>`}else{return html}}})}\n</div>`},generateFormV2:function(data,window,callback,second){var id=glitter.getUUID();var bindView=window.bindView;var event=window.event;var notifyDataChange=window.notifyDataChange;var $=window.$;return`<div id="${id}" class="w-100">\n${bindView({bind:id,view:function(){var html=``;data.map(((dd,index)=>{if(!dd.custom){html+=`\n<div class="w-100 fs-3 d-flex ">\n<label class="form-label fw-bold" style="font-size: 16px;font-weight: 400;">\n<span class="fw-bold ${dd.need?``:`d-none`} " style="color: red;font-size: 18px;font-weight: 300;">*</span>\n${(typeof dd.name==="function"?dd.name()??"":dd.name??"")??""}</label>\n<div class="flex-fill"></div>\n${dd.preView?`\n<button class="btn btn-warning" onclick="${event((()=>{var editEdit=glitter.getUUID();$("#standard-modal").remove();$("body").append(`\n<div id="standard-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">\n    <div class="modal-dialog modal-dialog-centered ${glitter.frSize({sm:``},"m-0")}">\n        <div class="modal-content">\n            <div class="modal-header  d-flex border-bottom">\n                <h4 class="modal-title fw-light" style="font-size: 28px;" id="standard-modalLabel">預覽</h4>\n                <div class="flex-fill"></div>\n                 <button type="button" class="btn" data-bs-dismiss="modal" aria-hidden="true" style="margin-right: -10px;"><i class="fa-regular fa-circle-xmark text-white" style="font-size: 25px;"></i></button>\n            </div>\n            <div class="modal-body pt-2 px-2" id="${editEdit}">${bindView((()=>({bind:`${editEdit}`,view:function(){return glitter.share.formEdit.generateFormV2(JSON.parse(JSON.stringify(dd.value)),window,(()=>{}))}})))}\n            </div>\n            <div class="modal-footer w-100">\n                <button type="button" class="btn btn-light flex-fill " style="" data-bs-dismiss="modal">關閉</button>\n            </div>\n        </div>\x3c!-- /.modal-content --\x3e\n    </div>\x3c!-- /.modal-dialog --\x3e\n</div>`);$("#standard-modal").modal("show")}))}"><i class="fa-solid fa-eye fs-6 me-1 "></i>預覽表單</button>\n`:``}\n</div>\n`}switch(dd.elem){case"selected":html+=`<select class="form-select" aria-label="Default select example" style="font-size: 14px;" onchange="\n${event((e=>{dd.value=$(e).val();callback(dd)}))}">\n${glitter.print((()=>{var html="";dd.option.map((d2=>{html+=` <option value="${d2.value}" ${d2.value===dd.value?`selected`:``}>${d2.name}</option> `}));return html}))}\n</select>`;break;case"checked":dd.option=glitter.toJson(dd.option,[]);dd.option.map((d2=>{var labelID=glitter.getUUID();html+=`\n                                <div class="py-1  d-flex" style="">\n<input class="form-check-input" type="checkbox" role="${dd.role??""}" id="${labelID}" onchange="${event((e=>{if(dd.type==="single"){dd.option.map((d3=>{d3.checked=false}))}d2.checked=$(e).get(0).checked;callback(dd);notifyDataChange(id)}))}" ${d2.checked?`checked`:``} >\n${d2.elem&&d2.checked?`<div style="width: calc(100% - 30px);" class="">${glitter.print((()=>{if(d2.elem==="form"){return`\n            <label class="ms-1" for="${labelID}" style="font-size: 16px;font-weight: 400;">\n ${d2.name}\n  </label>\n            ${glitter.share.formEdit.generateFormV2(d2.value,window,callback,true)}`}else{return`<div class="ms-1">${glitter.share.formEdit.generateFormV2([d2],window,callback,true)}</div>`}}))}</div>`:`\n<label class="ms-1" for="${labelID}" style="font-size: 16px;font-weight: 400;">\n ${d2.name}\n  </label>`}\n  \n</div>\n                                `}));break;case"form":html+=glitter.share.formEdit.generateFormV2(dd.value,window,(()=>{}),true);break;case"formEdit":html+=glitter.share.formEdit.formEditor(dd.value,window,dd.formSetting,false);break;case"input":switch(dd.type){case"email":html+=`<div class="input-group input-group-merge">\n                                              <input class="form-control" type="email"   placeholder="${dd.placeholder??"請輸入"+dd.name}" onchange="${event((e=>{dd.value=$(e).val()}))}" value="${dd.value??""}" ${dd.readonly?`readonly`:``}>\n                                           ${dd.needAuth?` <div class="btn btn-outline-primary"  onclick="${event((e=>{glitter.openDiaLog("dialog/Dia_Check_Mail.html","Dia_Check_Mail",false,false,{mail:dd.value,callback:function(result){if(result){glitter.share.dia.success("驗證成功");dd.needAuth=false;notifyDataChange(id)}}},(function(){}))}))}">\n                                                <span class="">驗證</span>\n                                            </div>`:``}\n                                        </div>`;break;case"phone":html+=`\n<div class="input-group input-group-merge">\n                                              <input class="form-control" type="email"   placeholder="${dd.placeholder??"請輸入"+dd.name}" onchange="${event((e=>{dd.value=$(e).val()}))}" value="${dd.value??""}" ${dd.readonly?`readonly`:``}>\n                                           ${dd.needAuth?` <div class="btn btn-outline-primary"  onclick="${event((e=>{glitter.openDiaLog("dialog/Dia_Check_Code.html","Dia_Check_Code",false,false,{phone:"+886"+dd.value.substring(1,10),callback:function(result){if(result){glitter.share.dia.success("驗證成功");dd.needAuth=false;notifyDataChange(id)}}},(function(){}))}))}">\n                                                <span class="">驗證</span>\n                                            </div>`:``}\n                                        </div>`;break;case"text":html+=`\n <div class="w-100 input-group ">\n<input type="text" class="form-control w-100"   placeholder="${dd.placeholder??"請輸入"+dd.name}" value="${dd.value??""}" onchange="${event((e=>{dd.value=$(e).val();callback(dd);notifyDataChange(id)}))}" ${dd.readonly?`readonly`:``}>\n</div>\n                                        `;break;case"date":var pickerID=glitter.getUUID();html+=`\n<div class="w-100 input-group " id="${pickerID}">\n    <input type="text" placeholder="${dd.placeholder??"請輸入"+dd.name}" class="form-control" data-provide="datepicker" data-date-format="yyyy/mm/dd" data-date-container="#${pickerID}" value="${dd.value??""}" onchange="${event((e=>{dd.value=$(e).val();callback(dd)}))}" ${dd.readonly?`readonly`:``}>\n</div>\n\n                                        `;break;case"number":html+=`\n <div class="w-100 input-group ">\n<input type="text" class="form-control w-100"  placeholder="${dd.placeholder??"請輸入"+dd.name}" value="${dd.value??""}" onchange="${event((e=>{dd.value=glitter.filterNumber($(e).val());notifyDataChange(id);callback(dd)}))}" oninput="${event((e=>{$(e).val(glitter.filterNumber($(e).val()))}))}" ${dd.readonly?`readonly`:``}>\n</div>\n                                        `;break;case"word":html+=`\n <div class="w-100 input-group ">\n<input type="text" class="form-control w-100"  placeholder="${dd.placeholder??"請輸入"+dd.name}" value="${dd.value??""}" onchange="${event((e=>{dd.value=$(e).val().replace(/[\W]/g,"");notifyDataChange(id);callback(dd)}))}" oninput="${event((e=>{$(e).val($(e).val().replace(/[\W]/g,""))}))}" ${dd.readonly?`readonly`:``}>\n</div>\n                                        `;break;case"time":var pickerID=glitter.getUUID();html+=`\n                                         <div class="mb-3 position-relative">\n${bindView({bind:pickerID,view:()=>` <div id="pickerID${pickerID}" type="text"    class="form-control"  ${dd.readonly?`readonly`:``} style="" onclick="${event((e=>{glitter.openDiaLog("dialog/Dia_Date_Picker.html","Dia_Date_Picker",false,false,{callback:function(text){dd.value=text.substring(text);callback(text);notifyDataChange(pickerID)},data:{date:false,time:true,nowButton:false,clearButton:false,format:"HH:mm",lang:"zh-cn"}})}))}" >\n ${dd.value??`<span style="color: gray"> ${dd.placeholder??"請輸入"+dd.name}</span>`}\n</div>\n`,divCreate:{class:`w-100 input-group`},onCreate:()=>{}})}\n                                                </div>\n                                        `;break;default:html+=`\n <div class="w-100 input-group">\n<input type="${dd.type}" class="form-control w-100"   placeholder="${dd.placeholder??"請輸入"+dd.name}" value="${dd.value??""}" onchange="${event((e=>{dd.value=$(e).val();notifyDataChange(id);callback(dd)}))}" ${dd.readonly?`readonly`:``}>\n</div>\n                                        `}html+=``;break;case"textArea":html+=`<div class="w-100 px-1"><textArea class="form-control border rounded" rows="4"  onchange="${event((e=>{dd.value=$(e).val();callback(dd)}))}" placeholder="${dd.placeholder??""}">${dd.value??""}</textArea></div>`;break;case"button":html+=`<button class="btn btn-primary" onclick="${event((()=>{dd.click(window)}))}">${dd.placeholder}</button>`;break;default:if(glitter.share.formEdit.extensionItem[dd.elem]){html+=glitter.share.formEdit.extensionItem[dd.elem](dd,window)}break}if(index!==data.length-1){html+=`<div class="w-100 my-2 bg-light" style="height: 1px;"></div>`}}));return html}})}\n</div>`},checkFinish:function(data,callback,second){var input1=data.find((d2=>(d2.elem==="input"||d2.elem==="textArea")&&(glitter.isEmpty(d2.value)||d2.needAuth)&&(second||d2.need)));var checked=data.find((d2=>d2.elem==="checked"&&!d2.option.find((d3=>{if(d3.checked){return glitter.share.formEdit.checkFinish([d3],callback,true)}else{return false}}))&&d2.need));if(input1){callback(input1);return false}else if(checked){callback(checked);return false}else{return true}}};if(!glitter.share.customView){glitter.share.customView={checkYesOrNot:function(title,callback){glitter.openDiaLog("glitterBundle/dialog/Check_Yes_Not.html","Check_Yes_Not",false,false,{title:title,callback:function(result){callback(result);glitter.closeDiaLogWithTag("Check_Yes_Not")}},(function(){}))}}}