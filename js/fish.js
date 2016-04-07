function Fish (imgs,type) {
	Sprite.call(this,imgs["fish"+type]);
	var size=[
		null,
		{w:37,h:55},
		{w:62,h:78},
		{w:54,h:72},
		{w:52,h:77},
		{w:122,h:107}
	];
	this.w=size[type].w;
	this.h=size[type].h;
	
	this.rotate=90;
	this.speed=rnd(2,6);
	
	this.type=type;
	this.count=0;
}
Fish.prototype=new Sprite();
Fish.prototype.constructor=Fish;

var oldMove=Sprite.prototype.move;

Fish.prototype.move=function () {
	oldMove.call(this);
	
	this.count++;
	if(this.count%5==0){
		this.sx+=this.w;
		if(this.sx==this.w*4){
			this.sx=0;
		}
	}
};