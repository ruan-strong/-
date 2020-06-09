window.onload = function(){
	//app下载  下拉二维码
	var qrCode = document.getElementById("qrCode");
	var appCode = document.getElementById("appCode");
	qrCode.onmouseover = function(){
		appCode.style.height = "148px";
		appCode.style.boxShadow = "0 1px 5px #aaa";
	}
	
	qrCode.onmouseout = function(){
		appCode.style.height = "0px";
	}
	
	//当鼠标放在购物车上
	var topRight = document.getElementById("top-right");
	var shopping = document.getElementById("shopping");
	var aTopRight = document.querySelector("#top-right a");
	var imgTopRight = document.querySelector("#top-right img")
	topRight.onmouseover = function(){
		shopping.style.height = "100px";
		topRight.style.backgroundColor = "white";
		aTopRight.style.color = "#FF6700";
		imgTopRight.style.src = "url(img/692a6c3b0a93a24f74a29c0f9d68ec71.png)";
		
	}
	
	topRight.onmouseout = function(){
		shopping.style.height = "0px";
		topRight.style.backgroundColor = "#424242";
		aTopRight.style.color = "#B0B0B0";
		imgTopRight.style.src = "url(img/d7db56d1d850113f016c95e289e36efa.png)";
	}
	
	
	//搜索栏
	var searchInput = document.querySelector("#upPart-search input:first-child");
	var searchSubmit = document.querySelector("#upPart-search input:last-child");
	var searchBorder = document.getElementById("searchBorder");
	searchInput.onclick = function(){
		searchInput.style.borderColor = "#FF6700";
		searchSubmit.style.borderColor = "#FF6700";
		searchBorder.style.display = "block";
		searchInput.style.outline = "none";		
	}
	
	searchInput.onmousemove = function(){
		searchInput.style.borderColor = "#E0E0E0";
		searchSubmit.style.borderColor = "#E0E0E0";
		searchBorder.style.display = "none";
		searchInput.style.outline = "none";		
	}	
	
	//图片轮播
	
	//获取图片
	var slide = document.getElementsByClassName("slide");
	//获取圆点
	var rollDot = document.getElementsByClassName("roll-dot");
	var index = 0;
	slide[index].style.opacity = 1;
	rollDot[index].style.backgroundColor = "#FFFFFF";
	var fn = function(){
				for (var i = 0; i < slide.length; i++) {
					if(index == i){
						slide[index].style.opacity = "0";
						slide[index].style.transition = "opacity 1.5s";
						slide[index].style.opacity = "1";
						rollDot[index].style.backgroundColor = "#FFFFFF";
					} else {
						slide[i].style.opacity = "0";
						rollDot[i].style.backgroundColor = "#9B9B9B";
					}
				}
				
				if(index < (slide.length-1)){
					index++;
				} else {
					index = 0;
				}
			}
	var roll =setInterval(fn,3000);
	/*点击圆点的时候，清楚定时器，圆点颜色变白色，轮播的图片切换到当前的页面上
	 */
	for (var i = 0; i < rollDot.length; i++) {
		rollDot[i].index = i;
		rollDot[i].onclick = function(){
			clearInterval(roll);  //清楚轮播
			index = this.index;
			console.log(index);
			for (var j = 0; j < slide.length; j++) {
				if(index == j){
					slide[index].style.opacity = "0";
					slide[index].style.transition = "opacity 1.5s";
					slide[index].style.opacity = "1";
					rollDot[index].style.backgroundColor = "#FFFFFF";
				} else {
					slide[j].style.opacity = "0";
					rollDot[j].style.backgroundColor = "#9B9B9B";
				}
				rollDot[index].onmouseout = function(){
					roll = setInterval(fn,3000);
				}				
			}

		}


	}
	
	//轮播图上的左右按钮
	var rollButtonLeft = document.getElementById("rollButton-left");
	var rollButtonRight = document.getElementById("rollButton-right");
	
	//左侧按钮
	rollButtonLeft.onclick = function(){
		clearInterval(roll);
		console.log(index);
		if(index == 0){
			index = 5;	
		}
		index--;
		console.log(index);
		for (var i = 0; i < slide.length; i++) {
			if(index == i){
				slide[index].style.opacity = "0";
				slide[index].style.transition = "opacity 1.5s";
				slide[index].style.opacity = "1";
				rollDot[index].style.backgroundColor = "#FFFFFF";
			} else {
				slide[i].style.opacity = "0";
				rollDot[i].style.backgroundColor = "#9B9B9B";
			}
			rollButtonLeft.onmouseout = function(){
				roll = setInterval(fn,3000);
			}			
		}

	}
	
	
	
	//右侧按钮
	rollButtonRight.onclick = function(){
		clearInterval(roll);
		console.log(index);
		if(index == 4){
			index = -1;	
		}
		index++;
		console.log(index);
		
		for (var i = 0; i < slide.length; i++) {
			if(index == i){
				slide[index].style.opacity = "0";
				slide[index].style.transition = "opacity 1.5s";
				slide[index].style.opacity = "1";
				rollDot[index].style.backgroundColor = "#FFFFFF";
			} else {
				slide[i].style.opacity = "0";
				rollDot[i].style.backgroundColor = "#9B9B9B";
			}
			rollDot[index].onmouseout = function(){
				roll = setInterval(fn,3000);
			}
			rollButtonRight.onmouseout = function(){
				roll = setInterval(fn,3000);
			}			
		}
		
	}
	
	
	/*倒计时
	 * 
	 */
	//设置时间晚上23点
	var countHour = document.getElementById("countHour");
	var countMinute = document.getElementById("countMinute");
	var countSecond = document.getElementById("countSecond");
	var str = new Date();
	str.setHours(23);
	str.setMinutes(00);
	str.setSeconds(00);
	var end = str.getTime();
 	setInterval(function(){
		var time = Date.now();
		var countdown = end - time;
		if(countdown > 0){
			var hour = Math.floor(countdown/1000/60/60%24);
			var minute = Math.floor(countdown/1000/60%60);
			var second = Math.floor(countdown/1000%60);
			if(hour.toString().length == 2){
				countHour.innerText = hour;
			} else {
				countHour.innerText = "0"+hour;
			}
			
			if(minute.toString().length == 2){
				countMinute.innerText = minute;
			} else {
				countMinute.innerText = "0"+minute;
			}
			
			if(second.toString().length == 2){
				countSecond.innerText = second;
			} else {
				countSecond.innerText = "0"+second;
			}			
		} else {
		countHour.innerText = "00";
		countMinute.innerText = "00";
		countSecond.innerHTML = "00";				
		}
	
	}
	,1000)
 	
 	
 	
 	/*右侧4个图片
 	 * 
 	 */
 	var lis = document.getElementsByClassName("lis");
 	var offSet = 0;
 	for (var i = 0; i < lis.length; i++) {
 		offSet = 248*i;
 		lis[i].style.left = offSet+"px";
 	}
	
	//计数
	var count = 1;
	var timer = setInterval(function(){
		console.log((lis.length)/4);
		if(count == (lis.length/4)){
			for (var j = 0; j < lis.length; j++) {
				var reSet = 248*j;
				lis[j].style.left = reSet+"px";
			}
			count = 1;
		} else {
			for (var i = 0; i < lis.length; i++) {
				lis[i].style.left = parseInt(lis[i].style.left)-992+"px";
			}
			count++;
		}
		
		}
	,5000)
	
	/*点击左右切换
	 * 
	 */
	var overLeft = document.getElementById("overLeft");
	var overRight = document.getElementById("overRight");
	var countClick = 0;
	overLeft.onclick = function(){
		clearInterval(timer);
		countClick++;
		if(count != 1){
			for (var i = 0; i < lis.length; i++) {
				lis[i].style.left = parseInt(lis[i].style.left)+992+"px";
			}
			count--;
		}
	}
	
	overRight.onclick = function(){
		clearInterval(timer);
		if((lis.length/4 - count) != 0){
			for (var i = 0; i < lis.length; i++) {
				lis[i].style.left = parseInt(lis[i].style.left)-992+"px";
			}
			count++;
		}
	}
	
	
	//点击改变方向键颜色
	/*#B0B0B0  中间色
	 * #e0e0e0两边的颜色
	 * #ff6700 金黄色
	 */
	overLeft.onmouseover = function(){
		if(count != 1){
			overLeft.style.color = "#ff6700";
		} /*else {
			overLeft.style.color = "#e0e0e0";
		}*/
		
	}
	
	overLeft.onmouseout = function() {
		if(count != 1){
			overLeft.style.color= "#B0B0B0";
		} /*else {
			overLeft.style.color = "#e0e0e0";
		}*/
		
	}
	
	overRight.onmouseover = function(){
		if((lis.length/4 - count) != 0){
			overRight.style.color = "#ff6700";	
		} /*else {
			overRight.style.color = "#e0e0e0";
		}*/
		
	}
	
	overRight.onmouseout = function() {
		if((lis.length/4 - count) != 0){
			overRight.style.color= "#B0B0B0";	
		} /*else{
			overRight.style.color = "#e0e0e0";
		}*/
	}	
	
	if(count >= 1 && count <= lis.length){
		overLeft.style.color = "#B0B0B0";
	} else {
		overLeft.style.color = "#E0E0E0";
	}
	
	
	
	/*广告部分翻页
	 *
	 * */
	
	var tabText1 = document.getElementsByClassName("tabText1");
	var tabText2 = document.getElementsByClassName("tabText2");
	var adDispalyRightTab1 = document.getElementsByClassName("adDispalyRightTab1");
	var adDispalyRightTab2 = document.getElementsByClassName("adDispalyRightTab2");
	"use strict";
	for (var i = 0; i < tabText1.length; i++) {
		let j = i
		tabText1[i].onmouseover = function(){
			tabText1[j].style.color = "#FF6700";
			tabText1[j].style.borderBottom = "2px solid #FF6700";
			adDispalyRightTab1[j].style.display = "block";
			tabText2[j].style.color = "#424242";
			tabText2[j].style.borderBottom = "2px solid rgba(0,0,0,0)"
			adDispalyRightTab2[j].style.display = "none";	
		}
	}
	
	for (var i = 0; i < tabText2.length; i++) {		
		let j = i
		tabText2[i].onmouseover = function(){
			tabText2[j].style.color = "#FF6700";
			tabText2[j].style.borderBottom = "2px solid #FF6700";
			adDispalyRightTab2[j].style.display = "block";
			tabText1[j].style.color = "#424242";
			tabText1[j].style.borderBottom = "2px solid rgba(0,0,0,0)"
			adDispalyRightTab1[j].style.display = "none";	
		}
	}	
	
	/*屏幕最右侧返回栏，返回顶部需要出现，通过鼠标滚动的距离，来使之出现
	 */
	
	var backHome = document.getElementById("backLast");
	var body = document.querySelector("body");
	var wheelCount = 0;
	body.onmousewheel = function(event){
		event =event||window.event;
		if(event.wheelDelta>0){
			wheelCount--;
		}else{
			wheelCount++;
		}
		
		if(wheelCount>3){
			backHome.style.visibility = "visible";
		} else {
			backHome.style.visibility = "hidden";
		}
		
		if(wheelCount == 0){
			wheelCount = 0;
		}
	}
	
}
