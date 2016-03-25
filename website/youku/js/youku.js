//window.onload=function (){
	
	var aPm=document.getElementsByClassName("pic_mini");
	var aPos=document.getElementsByClassName("pos");
	var aBg=document.getElementsByClassName("bg");
	var aH3=document.getElementsByTagName("h3");
	for(var i=0; i<aPm.length; i++){
		aPm[i].index=i;
		aPm[i].onmouseover=function (){
			aPos[this.index].className='show';
			aBg[this.index].className='show';
			aH3[this.index].className="";
		};
		aPm[i].onmouseout=function (){
			aPos[this.index].className='';
			aBg[this.index].className='';
		};
	}
