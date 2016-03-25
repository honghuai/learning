/**
 *alert.js
 *@author honghuai
 * @created 2016-03-18 14:48.
 */
define(function (require, exports, module) {
    /**
     *@module parent/alert
     */
    'use strict';
    var w = require("window");
    var win = new w.Window();

    /*alert*/
    $("#btn_alert").click(function() {
        win.alert({
            title:"此处alert自定义标题",
            content:"<div class='boundingCn'>honghuai zaici yiyou</div>",
            hasCloseBtn:true,
            hasMask:false,
            width:500,//宽度
            y:300,//top值
            handler4AlertBtn:function(){
                alert("你点击了确认按钮1-1");
             },
             handler4CloseBtn:function(){
             alert("你点击了关闭按钮1-1")
             },
            skinClassName:"skinClassName_a",//皮肤
            dragHandle:".window_header"//拖拽把手
        }).on("alert",function(){
            alert("你点击了确认按钮1-2");
        }).on("close",function(){
            alert("你点击了关闭按钮1-2");
        });

    })
    /*confirm*/
    $("#btn_confirm").click(function() {
        win.confirm({
            title:"此处confirm自定义标题",
            content:"<div class='boundingCn'>honghuai zaici yiyou</div>",
            hasCloseBtn:true,
            hasMask:true,
            width:500,//宽度
            y:300,//top值
            handler4ConfirmBtn:function(){
                alert("这是写在里边的confirm确认方法");
            },
            handler4CancelBtn:function(){
                alert("这是写在里边的confirm取消方法");
            },
            skinClassName:"skinClassName_a",//皮肤
            dragHandle:".window_header"//拖拽把手
        }).on("confirm",function() {
            alert("你点击了confirm的确认按钮");
        }).on("cancel",function() {
            alert("你点击了confirm的cancel按钮");
        })
    })
    /*prompt*/
    $("#btn_prompt").click(function() {
        win.prompt({
            title:"此处是prompt自定义标题",
            content:"内容区域",
            hasCloseBtn:false,
            hasMask:true,
            //isPromptInputPwd:false,
            defaultVal4Prompt:"prompt的默认值",
            maxLen4PromptInput:4,
            handler4PromptBtn:function(inputValue) {
                alert("你点击 了prompt确认,内容为："+inputValue);
            },
            handler4CancelBtn:function() {
                alert("取消");
            }
        })
    });
    /*common*/
    $("#btn_common").click(function() {
        win.common({
            content:"内容区域",
            hasMask:true,
            hasCloseBtn:true
        })
    })
});