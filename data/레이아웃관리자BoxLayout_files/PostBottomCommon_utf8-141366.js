var InstallBlogAppPush=$Class({$init:function(){$Fn(this._onClick,this).attach(document,"click")},_onClick:function(b){var c=b.element;var a=$Element($$.getSingle("!a",c)?$$.getSingle("!a",c):c);var d;if(typeof(paramUtil)!="undefined"){d=paramUtil.getParam(a.className())}else{d=utility.getParam(a.className())}if(a.hasClass("_installBlogAppPush")){this._push(d,false)}else{if(a.hasClass("_installBlogAppPushClose")){this._closeLayer(d)}else{if(a.hasClass("_installBlogAppPushRetry")){this._push(d,true)}}}if(a.hasClass("_stopIntallAppEvent")){b.stop()}},_push:function(c,b){var d="";var a=c[0];if(c.length>=2){d=c[1]}if(a=="true"){this._callPush(d,b)}else{this._login()}},_login:function(){var a=encodeURI("http://"+location.host+"/ReloadOpenerAndClose.nhn");window.open("https://nid.naver.com/nidlogin.login?mode=form&svctype=64&url="+a,"login","width=400,height=260,location=no,resizable=no")},_callPush:function(b,a){new $Ajax("/InstallBlogAppPushAsync.nhn",{method:"POST",onload:$Fn(function(c){this._showLayer(c,b,a)},this).bind()}).request()},_showLayer:function(a,c,b){if(a.text()=="success"){$Element("installBlogAppPush"+c).show();if(b){alert("알림을 다시 전송했습니다.")}}else{if(a.text()=="login"){this._login()}else{alert("일시적인 문제로 접속 할 수 없습니다. 잠시 후 다시 시도해주세요.")}}},_closeLayer:function(a){var b="";if(a.length>=2){b=a[1]}$Element("installBlogAppPush"+b).hide()}});new InstallBlogAppPush();if(typeof(window.defineNHNJS)=="undefined"){window.defineNHNJS={}}window.defineNHNJS["PostBottomCommon_utf8-141366_js"]=true;