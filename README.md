# marqueeList
text sroll from left   

从左侧开始滚动，类似跑马灯的效果

[Demo](https://lemonliuchen.github.io/marqueeList/demo.html)

## 参数  

```javascript
{
	dom: $("#marquee"), // 滚动的父元素对象
	speed: 30, // 滚动的时间间隔（即改变速度的参数）注意：值越小速度越快
	hoverStop: true, // 鼠标悬停之后文字是否停止，默认true
	hoverStopToEnd: false // 鼠标悬停之后文字停止时是否立即完成当前动画，默认false
} 
```

## 代码示例 

```html
<div class="marquee_wrap">
	<div class="visitable" id="marquee">
		<ul class="list">
			<li>测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动测试滚动</li>
		</ul>
	</div>
</div> 
```

```javascript
var marqueeList = new MarqueeList({
	dom: $("#marquee"),
	speed: 10
}); 
```
## method
### start
开始滚动
```javascript
marqueeList.start();
```
### stop
停止滚动
```javascript
marqueeList.stop();
```
 
