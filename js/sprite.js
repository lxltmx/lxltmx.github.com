function Sprite (img) {
	this.img=img;
	this.w=0;
	this.h=0;
	
	//图片坐标起点
	this.sx=0;
	this.sy=0;
	//坐标
	this.x=0;
	this.y=0;
	
	this.speed=0;
	this.rotate=0;
	
}
Sprite.prototype.draw=function (gd) {
	gd.save();
	gd.translate(this.x,this.y);
	gd.rotate(d2a(this.rotate));
	gd.drawImage(
		this.img,
		this.sx,this.sy,this.w,this.h,
		-this.w/2,-this.h/2,this.w,this.h
	)
	gd.restore();
}; 
Sprite.prototype.move=function  () {
	//this.x+=this.speed;
	var speedX=this.speed*Math.sin(d2a(this.rotate));
	var speedY=-this.speed*Math.cos(d2a(this.rotate));
	//var speedX = this.speed*Math.cos(d2a(this.rotate - 90));
	//var speedY = this.speed*Math.sin(d2a(this.rotate - 90));
	this.x+=speedX;
	this.y+=speedY;
};

//碰撞检测
Sprite.prototype.collTest=function (obj) {
	var r1=Math.min(this.w,this.h)/2;
	var r2=Math.min(obj.w,obj.h)/2;
	
	var x = this.x - obj.x;
	var y = this.y - obj.y;
	var dis= Math.sqrt(x*x + y*y);
	
	if(dis < (r1+r2)*0.6){
		return true;
	}else{
		return false;
	}
};
