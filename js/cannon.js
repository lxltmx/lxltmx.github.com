function Cannon (imgs,type) {
	Sprite.call(this,imgs["cannon"+type]);
	var size=[
		null,
		{w:74,h:74},
		{w:74,h:78},
		{w:74,h:78},
		{w:74,h:82},
		{w:74,h:88},
		{w:74,h:92},
		{w:74,h:96},
	];
	this.w=size[type].w;
	this.h=size[type].h;
	
	this.type=type;
}
Cannon.prototype=new Sprite();
Cannon.prototype.constructor=Cannon;