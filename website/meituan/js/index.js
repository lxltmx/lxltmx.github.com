$(function(){
	$('.top li').click(function (){
		$('.top li').removeClass('on');
		$(this).addClass('on');
		
		$('.options').removeClass('show');
		$('.options').eq($(this).index()).addClass('show');

	});
});

function show() {
	var oSidebar=document.getElementById("sidebar");
	var aDiv=oSidebar.getElementsByTagName("div");
	var aLi=oSidebar.getElementsByTagName("li");
	for(var i=0;i<aDiv.length;i++){
		aDiv[i].index=i;
		aDiv[i].onmouseover=function () {
			
			aLi[this.index].className="show";
		}
		aDiv[i].onmouseout=function () {
			
			aLi[this.index].className="";
		}
	}
}

function show2() {
	var oSel_tab=document.getElementById("sel_tab");
	var oSel_btn=document.getElementById("sel_btn");
	var aSpan=oSel_btn.getElementsByTagName("span");
	var aUl=oSel_tab.getElementsByTagName("ul");
	for(var i=0;i<aSpan.length;i++){
		aSpan[i].index=i;
		aSpan[i].onmouseover=function () {
			for(var i=0;i<aSpan.length;i++){
				aSpan[i].className="";
				aUl[i].className="";
			}
			this.className="on";
			aUl[this.index].className="show";
		}
	}
}

function hide () {
	var oBanner=document.getElementById("banner");
	var oClose=document.getElementById("close");
	oClose.onclick=function () {
		oBanner.style.display="none";
	}
}

function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
	}else{
	    window.onload=function () {
			oldonload();
			func();
		}
	}
}
addLoadEvent(show);
addLoadEvent(hide);
addLoadEvent(show2);
