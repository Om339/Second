var load = document.getElementsByClassName('left');
var message = document.getElementById('right');
var load1 = document.getElementsByClassName('left1');
var message1 = document.getElementById('right1');
var load2 = document.getElementsByClassName('left2');
var message2 = document.getElementById('right2');
var load3 = document.getElementsByClassName('left3');
var message3 = document.getElementById('right3');
var load4 = document.getElementsByClassName('left4');
var message4 = document.getElementById('right4');
var load5 = document.getElementsByClassName('left5');
var message5 = document.getElementById('right5');
var img = document.getElementsByClassName('img');
var xml = new XMLHttpRequest();
xml.open("get","https://www.easy-mock.com/mock/5c6665cad998f4626eff40e3/example/request1",true);
xml.send("");
xml.onreadystatechange = function(){
	if(xml.readyState==4&&xml.status==200){
		var date = xml.responseText;
		var person = JSON.parse(date);
        load[0].innerHTML = "<img src='"+person.img1+"'>";
		message.innerHTML = "<a href='"+person.href+"'>"+person.a+"</a>" + 
                            "<p>"+person.p1+"</p>" + 
                            "<p>"+person.p2+"</p>" +
                            "<p>"+person.p3+"</p>";
        load1[0].innerHTML = "<img src='"+person.img2+"'>";
        load2[0].innerHTML = load1[0].innerHTML;
        message1.innerHTML = message2.innerHTML = message.innerHTML;
        load3[0].innerHTML = "<img src='"+person.img3+"'>";
        load4[0].innerHTML = load5[0].innerHTML =load3[0].innerHTML;
        message5.innerHTML = "<a href='"+person.href+"'>"+person.a1+"</a>" + 
                            "<p>"+person.p1+"</p>" + 
                            "<p>"+person.p2+"</p>" +
                            "<p>"+person.p3+"</p>";
        message3.innerHTML = message4.innerHTML = message5.innerHTML;
        img[0].innerHTML = "<img src='"+person.projects[0].img+"'>";
        img[1].innerHTML = "<img src='"+person.projects[1].img+"'>";
        img[2].innerHTML = "<img src='"+person.projects[2].img+"'>";
        img[3].innerHTML = "<img src='"+person.projects[3].img+"'>";
        img[4].innerHTML = "<img src='"+person.projects[4].img+"'>";
        img[5].innerHTML = "<img src='"+person.projects[5].img+"'>";
        img[6].innerHTML = "<img src='"+person.projects[6].img+"'>";
        img[7].innerHTML = "<img src='"+person.projects[7].img+"'>";
        img[8].innerHTML = "<img src='"+person.projects[8].img+"'>";
        img[9].innerHTML = "<img src='"+person.projects[9].img+"'>";
        img[10].innerHTML = "<img src='"+person.projects[10].img+"'>";
        img[1].onmouseenter = function(){
            img[1].innerHTML = "<p>"+person.pepcont[0].p3+"</p>" +"<br/>"+"<p>"+person.pepcont[0].p4+"</p>";
        }
        img[1].onmouseleave = function(){
            img[1].innerHTML = "<img src='"+person.projects[1].img+"'>";
        }
        img[2].onmouseenter = function(){
            img[2].innerHTML = "<p>"+person.pepcont[1].p3+"</p>" +"<br/>"+"<p>"+person.pepcont[1].p4+"</p>"+"<br/>"+"<p>"+person.pepcont[1].p5+"</p>";
        }
        img[2].onmouseleave = function(){
            img[2].innerHTML = "<img src='"+person.projects[2].img+"'>";
        }
        img[3].onmouseenter = function(){
            img[3].innerHTML = "<p>"+person.pepcont[2].p3+"</p>" +"<br/>"+"<p>"+person.pepcont[2].p4+"</p>";
        }
        img[3].onmouseleave = function(){
            img[3].innerHTML = "<img src='"+person.projects[3].img+"'>";
        }
        img[4].onmouseenter = function(){
            img[4].innerHTML = "<p>"+person.pepcont[3].p3+"</p>" +"<br/>"+"<p>"+person.pepcont[3].p4+"</p>";
        }
        img[4].onmouseleave = function(){
            img[4].innerHTML = "<img src='"+person.projects[4].img+"'>";
        }
        img[5].onmouseenter = function(){
            img[5].innerHTML = "<p>"+person.pepcont[4].p3+"</p>" +"<br/>"+"<p>"+person.pepcont[4].p4+"</p>";
        }
        img[5].onmouseleave = function(){
            img[5].innerHTML = "<img src='"+person.projects[5].img+"'>";
        }
        img[6].onmouseenter = function(){
            img[6].innerHTML = "<p>"+person.pepcont[5].p3+"</p>" +"<br/>"+"<p>"+person.pepcont[5].p4+"</p>";
        }
        img[6].onmouseleave = function(){
            img[6].innerHTML = "<img src='"+person.projects[6].img+"'>";
        }
        img[7].onmouseenter = function(){
            img[7].innerHTML = "<p>"+person.pepcont[6].p3+"</p>" +"<br/>"+"<p>"+person.pepcont[6].p4+"</p>";
        }
        img[7].onmouseleave = function(){
            img[7].innerHTML = "<img src='"+person.projects[7].img+"'>";
        }
        img[8].onmouseenter = function(){
            img[8].innerHTML = "<p>"+person.pepcont[7].p3+"</p>" +"<br/>"+"<p>"+person.pepcont[7].p4+"</p>";
        }
        img[8].onmouseleave = function(){
            img[8].innerHTML = "<img src='"+person.projects[8].img+"'>";
        }
        img[9].onmouseenter = function(){
            img[9].innerHTML = "<p>"+person.pepcont[8].p3+"</p>" +"<br/>"+"<p>"+person.pepcont[8].p4+"</p>";
        }
        img[9].onmouseleave = function(){
            img[9].innerHTML = "<img src='"+person.projects[9].img+"'>";
        }
        img[10].onmouseenter = function(){
            img[10].innerHTML = "<p>"+person.pepcont[9].p3+"</p>" +"<br/>"+"<p>"+person.pepcont[9].p4+"</p>";
        }
        img[10].onmouseleave = function(){
            img[10].innerHTML = "<img src='"+person.projects[10].img+"'>";
        }
    }
}
window.onload = function() {
	var a = document.getElementById("g");
	var b = a.getElementsByTagName("span");
	var c = a.getElementsByTagName("div");
	for(var i = 0;i < b.length;i++){ 
		b[i].index=i;
		b[i].onclick = function(){
			for(var i = 0;i < b.length;i++){
				b[i].className="";
				c[i].style.display="none";
			}
			this.className="f";
			c[this.index].style.display="block";
		}
	}
	var d = document.getElementById("r");
	var e = d.getElementsByTagName("span");
	var f = d.getElementsByTagName("table");
	for(var i = 0;i < e.length;i++){ 
		e[i].index=i;
		e[i].onmouseover = function(){
			for(var i = 0;i < e.length;i++){
				e[i].className="";
				f[i].style.display="none";
			}
			this.className="s";
			f[this.index].style.display="table";
		}
	}
	var g = document.getElementById("z");
	var h = g.getElementsByTagName("span");
	var j = g.getElementsByTagName("table");
	for (var i = 0; i < h.length; i++) {
		h[i].index=i;
		h[i].onmouseover = function(){
			for (var i = 0;i < h.length;i++) {
				h[i].className="";
				j[i].style.display="none";
			}
			this.className="y";
			j[this.index].style.display="table";
		}
	}
	var k = document.getElementById("map");
	var m = k.getElementsByTagName("span");
	var n = k.getElementsByTagName("img");
	for(var i = 0;i < m.length;i++){ 
		m[i].index=i;
		m[i].onmouseover = function(){
			for(var i = 0;i < m.length;i++){
				m[i].className="";
				n[i].style.display="none";
			}
			this.className="map";
			n[this.index].style.display="block";
		}
	}
    var l = document.getElementById("hotshop");
    var o = l.getElementsByTagName("span");
    var p = document.getElementsByClassName('hot');
    for(var i = 0;i < o.length;i++){ 
        o[i].index=i;
        o[i].onmouseover = function(){
            for(var i = 0;i < o.length;i++){
                o[i].className="";
                p[i].style.display="none";
            }
            this.className="hotshop";
            p[this.index].style.display="flex";
        }
    }
	var wrap = document.getElementById('wrap');
	var prev = document.getElementById('triangle-up');
    var next = document.getElementById('triangle-down');
    var timer;
    function animate(offset) {
    	var top = parseInt(wrap.style.top) + offset;
        wrap.style.top = top + 'px';
        if(top > 0) {
            wrap.style.top = -60 + 'px';
        }else if(top < -60){
            wrap.style.top = 0 + 'px';
        }
    }
    prev.onclick = function() {             
        animate(30);
    }
    next.onclick = function() {  
        animate(-30);
    }
    function play() {
        timer = setInterval(function () {
        	next.onclick()
        }, 2000)
    }
    function stop() {
        clearInterval(timer);
    }
    wrap.onmouseover = stop;
    wrap.onmouseout = play;
    play();
	var banner=document.getElementById('banner');
    var imglist=document.getElementById('img-list').getElementsByTagName("li");
    var list=document.getElementById('list').getElementsByTagName('img');
    var number=0;
    var timer=null;
    function autoPlay () {
        if (++number >= imglist.length) {number= 0};
        changeImg(number);
    }
    banner.onmouseover = function () {
        clearInterval(timer);
    }
    banner.onmouseout=function(){
        timer=setInterval(autoPlay,2000);
    }
    timer = setInterval(autoPlay, 2000);
    function changeImg (curIndex) {
        for (var i = 0; i < imglist.length; i++) {
            imglist[i].style.display = "none";
            list[i].className = "";
        }
        imglist[curIndex].style.display = "block";
        list[curIndex].className = "on";
    }
    for (var i = 0; i < list.length; i++) {
            list[i].number=i;
            list[i].onmouseover = function () {
            clearInterval(timer);
            changeImg(this.number);
        };
    }
    var bbc = document.getElementById('bbc');   
    var bc = bbc.getElementsByClassName('yep');
    for (var i = 0; i < bc.length; i++) {
        bc[i].index = i;
        bc[i].onmouseover = function(){
            for (var i = 0; i < bc.length; i++) {
                bc[i].className ="hide yep";
            }
            bc[this.index].className ="play yep";
        }
    }
    var smal = document.getElementsByClassName("smal");
    var bigg = document.getElementsByClassName("bigg");
    for(var i = 0;i < smal.length;i++){
        smal[i].index = i;
        smal[i].onmouseover = function(){
            for (var i = 0; i < smal.length; i++) {
                bigg[i].style.display = "none";
            }
            bigg[this.index].style.display = "flex";
        }
        smal[i].onmouseout = function(){
            bigg[this.index].style.display = "none";
        }
    }
}

