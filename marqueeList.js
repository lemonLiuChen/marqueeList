/* MarqueeList - v1.0 - 2020-01-09
* Author: chennan
*/

/**
 * [MarqueeList 从左侧开始无缝滚动]
 * @param {[type]} dom   [Dom节点]
 * @param {[type]} speed [description]
 */
function MarqueeList(_opts) {
    this.intervalObj = null;
    this.dom = _opts.dom; // 父元素
    this.speed = typeof _opts.speed != 'undefined' ? _opts.speed : 30; // 滚动速度，默认30
    this.hoverStop = typeof _opts.hoverStop != 'undefined' ? _opts.hoverStop : true; // 鼠标悬停之后文字是否停止，默认停止
    this.hoverStopToEnd = _opts.hoverStopToEnd || false; // 鼠标悬停之后文字停止时是否立即完成当前动画，默认否
    this.scrollLen = 0;
    this.left = 0; // 滚动距离
    this.init();
}

MarqueeList.prototype = {
    init: function () {
        var that = this;
        clearInterval(that.intervalObj);
        var liDom = that.dom.find("li");
        var liLen = liDom.length;
        that.scrollLen = liLen*liDom.width() + liLen*parseInt(liDom.css("marginRight"));
        that.dom.find(".list").append(that.dom.find(".list").html());
        that.intervalObj = setInterval(function(){that.toLeft()},that.speed);

        if (that.hoverStop) {
            that.dom.mouseenter(function () {
                that.stop();
                that.dom.stop(true, this.hoverStopToEnd);
                that.left = that.dom.scrollLeft();
            })
            that.dom.mouseleave(function () {
                that.start();
            })
        }
    },
    toLeft: function () {
        var that = this;
        if(that.left >= that.scrollLen){
            that.left = that.left-that.scrollLen;
        }else{
            that.left++;
        }
        that.dom.animate({scrollLeft: that.left}, that.speed);
    },
    start: function () {
        var that = this;
        clearInterval(that.intervalObj);
        that.intervalObj = setInterval(function(){that.toLeft()},that.speed);
    },
    stop: function () {
        var that = this;
        clearInterval(that.intervalObj);
    }
}