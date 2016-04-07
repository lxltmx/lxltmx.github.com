function Bullet (img,type) {
	Sprite.call(this,img);
	var size=[
		null,
		{sx:86, sy:0, w:24, h:26},
		{sx:61, sy:0, w:25, h:29},
		{sx:32, sy:35, w:27, h:31},
		{sx:30, sy:82, w:29, h:33},
		{sx:0, sy:82, w:30, h:34},
		{sx:30, sy:0, w:31, h:35},
		{sx:0, sy:0, w:30, h:44}
	];
	
	this.w=size[type].w;
	this.h=size[type].h;
	this.sx=size[type].sx;
	this.sy=size[type].sy;
	
	this.type=type;
}
Bullet.prototype=new Sprite();
Bullet.prototype.constructor=Bullet;