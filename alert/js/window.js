/**
 *window.js
 *@author honghuai
 * @created 2016-03-18 14:47.
 */
define(function (require, exports, module) {
    /**
     *@module parent/window
     */
    'use strict';
    require("jquery");
    var Widget = require("widget");
    Widget = new Widget.Widget();

    require("jqueryUI");
    var Window = function(){
        /*默认属性设置：位置、按钮文案、按钮事件、判定值*/
        this.cfg = {
            width:500,
            height:300,
            hasMask:true,
            title:"提示",
            textAlertBtn:"确定1",
            textComfirmBtn1:"是",
            textComfirmBtn2:"否",
            textPromptBtn:"输入",
            handler:null,
            isPromptInputPwd:false,
            defaultVal4Prompt:"",
            maxLen4PromptInput:10,
            handler4PromptBtn:null,
            hasCloseBtn:true,
            handler4AlertBtn:null,
            handler4CloseBtn:null,
            handler4ConfirmBtn:null,
            handler4CancelBtn:null,
            isDraggable:true,
            dragHandle:null
        }
    };

    Window.prototype = $.extend({},Widget,{

        renderUI:function() {//接口：添加dom节点
            var CFG = this.cfg;
            var footerModel;
            switch(CFG.typeModel) {
                case "type_alert":
                    footerModel = "<input type='button' class='boundingOk' value=' "+CFG.textAlertBtn+"'>";
                    break;
                case "type_confirm":
                    footerModel = "<input type='button' class='window_confirmBtn' value=' "+CFG.textComfirmBtn1+"'>"+
                    "<input type='button' class='window_cancelBtn' value=' "+CFG.textComfirmBtn2+"'>";
                    break;
                case "type_prompt":
                    footerModel = "<p class='window_promptInputWrapper'><input type='"+(this.cfg.isPromptInputPwd?"password":"text")+"'value='"+this.cfg.defaultVal4Prompt+"' maxlength='"+this.cfg.maxLen4PromptInput+"' class='window_promptInput'></p>"+
                        "<input type='button' class='window_promptBtn' value=' "+CFG.textPromptBtn+"'>"+
                        "<input type='button' class='window_cancelBtn' value=' "+CFG.textComfirmBtn2+"'>";
                    break;
            }

            this.boundingBox = $(
                "<div class='window_boundingBox'>"+
                "<div class='window_body'>"+CFG.content+"</div>"+
                "</div>"
            );
            if(CFG.typeModel !== "common") {
                this.boundingBox.prepend("<div class='window_header'>"+CFG.title+"</div>");
                this.boundingBox.append("<div class='window_footer'>"+footerModel+"</div>");
            }
            if(this.cfg.hasMask) {
                this._mask = $("<div class='window_mask'></div>");
                this._mask.appendTo("body");
            }
            if(this.cfg.hasCloseBtn) {
                this.boundingBox.append('<span class="window_closeBtn">X</span>');
            }

            this.boundingBox.appendTo(document.body);
            this._promptInput = this.boundingBox.find(".window_promptInput");

        },
        bindUI:function() {//接口：监听事件
            var that = this;
            /*事件触发*/
            this.boundingBox.delegate(".boundingOk","click",function() {
                that.fire("alert");
                that.destroy();//接口：销毁前的处理函数
            }).delegate(".window_closeBtn","click",function() {
                that.fire("close");
                that.destroy();
            }).delegate(".window_confirmBtn","click",function(){
                that.fire("confirm");
                that.destroy();
            }).delegate(".window_cancelBtn","click",function() {
                that.fire("cancel");
                that.destroy();
            }).delegate(".window_promptBtn","click",function() {
                that.fire("prompt",that._promptInput.val());//that._promptInput.val()是传参
                that.destroy();
            })
            /*事件绑定*/
            if(this.cfg.handler4AlertBtn) {
                this.on("alert",this.cfg.handler4AlertBtn);
            }
            if(this.cfg.handler4CloseBtn) {
                this.on("close",this.cfg.handler4CloseBtn);
            }
            if(this.cfg.handler4ConfirmBtn) {
                this.on("confirm",this.cfg.handler4ConfirmBtn);
            }
            if(this.cfg.handler4CancelBtn) {
                this.on("cancel",this.cfg.handler4CancelBtn);
            }
            if(this.cfg.handler4PromptBtn) {
                this.on("prompt",this.cfg.handler4PromptBtn);
            }
        },
        syncUI:function(){//接口：初始化组件属性
            var CFG = this.cfg;
            this.boundingBox.css({
                "width":CFG.width +"px",
                "height":CFG.height +"px",
                "left":(CFG.x ||(window.innerWidth - CFG.width)/2)+"px",
                "top":(CFG.y ||(window.innerHeight - CFG.height)/2)+"px"
            });
            if(this.cfg.skinClassName) {
                this.boundingBox.addClass(this.cfg.skinClassName);
            }
            if(this.cfg.isDraggable) {
                if(this.cfg.dragHandle) {
                    this.boundingBox.draggable({handle:this.cfg.dragHandle});
                } else {
                    this.boundingBox.draggable();
                }
            }
        },
        destructor:function() {
            this._mask && this._mask.remove();
        },
        alert:function(cfg) {
            $.extend(this.cfg,cfg,{"typeModel":"type_alert"});//后面传入的cfg替代前面默认的cfg,如this.cfg有w=1，h=2,若cfg对象中w=3,那么结果会让this.cfg对象为w=3,h=2
            this.render();//方法：渲染组件
            return this;//连缀语法：与on方法同时return this;可以实现链式调用
       },
        confirm:function(cfg) {
            $.extend(this.cfg,cfg,{"typeModel":"type_confirm"});
            this.render();
            return this;
        },
        prompt:function(cfg) {
            $.extend(this.cfg,cfg,{"typeModel":"type_prompt"});
            this.render();
            this._promptInput.focus();
            return this;
        },
        common:function(cfg) {
            $.extend(this.cfg,cfg,{"typeModel":"common"});
            this.render();
            return this;
        }
    })
    return {
        Window:Window
    }
});