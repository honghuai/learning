/**
 *widget.js
 *@author honghuai
 * @created 2016-03-24 15:41.
 */
define(function (require, exports, module) {
    /**
     *@module parent/widget
     */
    'use strict';
    require("jquery");
    /*位widget类设计统一的生命周期*/
    function Widget() {
        this.boundingBox = null;//属性：最外层容器
    }
    Widget.prototype = {
        on:function(type,handler) {
            if(typeof this.handlers[type] == "undefined") {
                this.handlers[type] = [];
            }
            this.handlers[type].push(handler);
            return this;
        },
        fire:function(type,data){//观察者模式
            if(this.handlers[type] instanceof Array) {
                var handlers = this.handlers[type];
                for(var i= 0,len = handlers.length;i<len;i++) {
                    handlers[i](data);
                }
            }
        },
        renderUI:function() {//接口：添加dom节点

        },
        bindUI:function() {//接口：监听事件

        },
        syncUI:function() {//接口：初始化组件属性

        },
        render:function(container) {//方法：渲染组件
            this.renderUI();
            this.handlers = {};
            this.bindUI();
            this.syncUI();
            $(container || document.body).append(this.boundingBox);
        },
        destructor:function() {//接口：销毁前的处理函数

        },
        destroy:function() {
            this.destructor();
            this.boundingBox.off();
            this.boundingBox.remove();
        }
    }
    return {
        Widget:Widget
    }
});