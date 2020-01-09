/* MarqueeList - v1.0 - 2020-01-09
* Author: chennan
*/

/**
 * [MarqueeList 从左侧开始无缝滚动]
 * @param {[type]} dom   [Dom节点]
 * @param {[type]} speed [description]
 */
function MarqueeList(dom, speed) {
    this.intervalObj = null;
    this.dom = dom;
    this.speed = speed;
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
        that.dom.css("transition", "all " + that.speed + "s");
        that.intervalObj = setInterval(function(){that.toLeft()},that.speed);
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
    stop: function () {
        var that = this;
        clearInterval(that.intervalObj);
    }
}