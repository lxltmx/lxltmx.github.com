function loadImages (json,fn) {
	var count=0;
	var len=0;
	var result={};
	for(var name in json){
		len++;
		var oImg=new Image();
		oImg.src=json[name];
		result[name]=oImg;
		oImg.onload=function () {
			count++;
			if(count==len){
				fn&&fn(result);
			}
		};
	}
}
function d2a (n) {
	//360deg=2PI a 
	return n*Math.PI/180;
}
function a2d (n) {
	return n*180/Math.PI;
}
function rnd (n,m) {
	return Math.floor(n+Math.random()*(m-n));
}
