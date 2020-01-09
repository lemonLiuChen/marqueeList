# marqueeList
text sroll from left   

从左至右无限滚动，类似跑马灯的效果

## 参数  

后续补充
目前只有两个参数，第一个参数为滚动的父元素对象，第二个参数为滚动的时间间隔（即改变速度的参数）
注意： 第二个参数值越小速度越快

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
var marqueeList = new MarqueeList($("#marquee"), 10); 
```
## method
#### stop
停止滚动
```javascript
var marqueeList = new MarqueeList($("#marquee"), 10); 
marqueeList.stop();
```

[**Demo**](https://lemonliuchen.github.io/marqueeList/demo.html) 
