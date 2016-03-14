//url, data, type, time, fnSucc,fnFailed
function ajax (options) {
	options=options||{};
	options.data=options.data||{};//data是需要传给接口的json数据
	options.type=options.type||'get';
	options.time=options.time||0;
	
	//json转字符串,把data拼起来
	var arr=[];
	for(var name in options.data){
		arr.push(name+'='+encodeURIComponent(options.data[name]));
	}
	var sData=arr.join('&');
	//创建ajax
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXObject('Microsoft.XMLHttp');
	}
	//连接接口、发送数据
		//get方式
	if(options.type=='get'){							
		oAjax.open('get',options.url+'?'+sData,true);		//连接
		oAjax.send();								//发送
	}else{
		//post方式
		oAjax.open('post',options.url,true);				//连接
		//设置请求头信息--'content-type',告诉服务器数据格式
		oAjax.setRequestHeader('content-type','application/x-www-form-urlencoded');
		oAjax.send(sData);							//发送
	}
	//接收状态
	oAjax.onreadystatechange=function () {
		if(oAjax.readyState==4){
			if((oAjax.status>=200&&oAjax.status<300)||oAjax.status==304){
				options.fnSucc&&options.fnSucc(oAjax.responseText);
			}else{
				options.fnFailed&&options.fnFailed();
			}
		}
	}
	if(options.time){
		setTimeout(function () {
			oAjax.abort();                          //终止
		},options.time)
	}
}