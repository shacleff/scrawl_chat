window.__require=function t(e,o,n){function i(r,s){if(!o[r]){if(!e[r]){var l=r.split("/");if(l=l[l.length-1],!e[l]){var a="function"==typeof __require&&__require;if(!s&&a)return a(l,!0);if(c)return c(l,!0);throw new Error("Cannot find module '"+r+"'")}}var h=o[r]={exports:{}};e[r][0].call(h.exports,function(t){return i(e[r][1][t]||t)},h,h.exports,t,e,o,n)}return o[r].exports}for(var c="function"==typeof __require&&__require,r=0;r<n.length;r++)i(n[r]);return i}({ChatCtrl:[function(t,e,o){"use strict";cc._RF.push(e,"b19790gm0lLKJldhp/5mUU3","ChatCtrl"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./ChatModel"),i=cc._decorator,c=i.ccclass,r=(i.property,function(){function t(){if(this.et=null,e.instance)throw new Error(" ChatCtrl.instance already exist");this.chat_model=n.ChatModel.getInstance(),this.et=cc.NetTarget,this.et.on("dummynet",this.netData,this),this.et.on("dummynetstart",this.netStart,this),this.et.on("dummyneterror",this.netError,this),this.et.on("dummynetclose",this.netClose,this),e.instance=this,console.log("\u6d82\u9e26\u804a\u5929Ctrl\u521d\u59cb\u5316")}var e;return e=t,t.getInstance=function(){return e.instance?e.instance:new e},t.prototype.init=function(t,e){this.chat_model.connect(),this.name=t,this.sex=e},t.prototype.back=function(){this.chat_model.close()},t.prototype.netData=function(t){var e=t,o=e.opt;"init"==o?this.et.emit("init",e):"chat"==o?this.et.emit("chat",e):"scrawl"==o&&this.et.emit("scrawl",e)},t.prototype.netStart=function(t){var e={opt:"init",name:this.name,sex:this.sex};this.chat_model.send(e)},t.prototype.netError=function(t){this.et.emit("error",null)},t.prototype.netClose=function(t){this.et.emit("error",null)},t.instance=null,t=e=__decorate([c],t)}());o.ChatCtrl=r,cc._RF.pop()},{"./ChatModel":"ChatModel"}],ChatItem:[function(t,e,o){"use strict";cc._RF.push(e,"b266ezmpKpFiYgnHyKr0cvj","ChatItem"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,c=n.property,r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.spr_self=null,e.spr_party=null,e.node_chat_info=null,e.spr_chat_info=null,e.lbl_chat_info=null,e.back_h=40,e.info_y=0,e}return __extends(e,t),e.prototype.start=function(){},e.prototype.set_info=function(t,e,o){var n=t.opt,i=t.info;if("chat"!=n)throw new Error("\u804a\u5929\u4fe1\u606f\u9519\u8bef\uff01");e?(this.spr_self.node.active=!0,this.node_chat_info.active=!0,this.spr_party.node.active=!1,this.lbl_chat_info.string=i,this.node.y=-1*o,this.node.x=0):(this.spr_party.node.active=!0,this.node_chat_info.active=!0,this.spr_self.node.active=!1,this.lbl_chat_info.string=i,this.node.y=-1*o,this.node.x=0);var c=i.length,r=25*(Math.floor(c/16)+1)-25;this.spr_chat_info.node.height=this.back_h+r,this.node_chat_info.y=this.info_y-r;var s=this.back_h+r+50;return s>100?s:100},__decorate([c(cc.Sprite)],e.prototype,"spr_self",void 0),__decorate([c(cc.Sprite)],e.prototype,"spr_party",void 0),__decorate([c(cc.Node)],e.prototype,"node_chat_info",void 0),__decorate([c(cc.Sprite)],e.prototype,"spr_chat_info",void 0),__decorate([c(cc.Label)],e.prototype,"lbl_chat_info",void 0),e=__decorate([i],e)}(cc.Component);o.default=r,cc._RF.pop()},{}],ChatModel:[function(t,e,o){"use strict";cc._RF.push(e,"5fbea654uBFRr5CDOGFjAyY","ChatModel"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,c=(n.property,function(){function t(){if(this.et=null,this.host="ws://192.168.1.41:8001",this.name="\u672a\u77e5",this.sex="\u5973",e.instance)throw new Error(" ChatModel.instance already exist");this.et=cc.NetTarget,this.et.on("net",this.netData,this),this.et.on("netstart",this.netStart,this),this.et.on("neterror",this.netError,this),this.et.on("netclose",this.netClose,this),e.instance=this,console.log("\u6d82\u9e26\u804a\u5929Model\u521d\u59cb\u5316")}var e;return e=t,t.getInstance=function(){return e.instance?e.instance:new e},t.prototype.send=function(t){cc.Network.send(t)},t.prototype.connect=function(){cc.Network.connect(this.host)},t.prototype.close=function(){cc.Network.isConnected&&(console.log("\u5173\u95ed\u8054\u7f51"),cc.Network&&cc.Network.close())},t.prototype.netData=function(t){this.et.emit("dummynet",t)},t.prototype.netStart=function(t){var e=t.detail;this.et.emit("dummynetstart",e)},t.prototype.netError=function(t){var e=t.detail;this.et.emit("dummyneterror",e)},t.prototype.netClose=function(t){var e=t.detail;this.et.emit("dummynetclose",e)},t.instance=null,t=e=__decorate([i],t)}());o.ChatModel=c,cc._RF.pop()},{}],ChatView:[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","ChatView"),Object.defineProperty(o,"__esModule",{value:!0});var n=t("./ChatCtrl"),i=t("./ChatModel"),c=cc._decorator,r=c.ccclass,s=c.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.node_start=null,e.lbl_info=null,e.edit_name=null,e.toe_man=null,e.toe_woman=null,e.btn_start=null,e.node_main=null,e.btn_back=null,e.btn_change=null,e.lbl_name=null,e.node_grs=null,e.node_grs2=null,e.node_scrawl=null,e.btn_clean=null,e.toe_fine=null,e.toe_middle=null,e.toe_wide=null,e.toe_red=null,e.toe_violet=null,e.toe_green=null,e.toe_yellow=null,e.toe_blue=null,e.toe_cyan=null,e.toe_pink=null,e.toe_lavender=null,e.toe_ondine=null,e.toe_yellowish=null,e.toe_smoke=null,e.toe_nattierblue=null,e.node_chat=null,e.edit_info=null,e.btn_send=null,e.scl_info=null,e.item=null,e.et=null,e.point_list=[],e.no_line=!1,e.red=cc.color(255,0,0),e.violet=cc.color(255,0,255),e.green=cc.color(0,255,0),e.yellow=cc.color(255,255,0),e.blue=cc.color(0,0,255),e.cyan=cc.color(0,255,255),e.pink=cc.color(255,136,136),e.lavender=cc.color(255,136,255),e.ondine=cc.color(136,255,136),e.yellowish=cc.color(255,255,136),e.smoke=cc.color(136,136,255),e.nattierblue=cc.color(136,255,255),e.fine=3,e.middle=10,e.wide=20,e.base_h=20,e.total_h=0,e}return __extends(e,t),e.prototype.start=function(){this.chat_ctrl=n.ChatCtrl.getInstance(),this.chat_model=i.ChatModel.getInstance(),this.et=cc.NetTarget,this.et.on("init",this.init,this),this.et.on("chat",this.chat,this),this.et.on("scrawl",this.scrawl,this),this.et.on("error",this.error,this),this.goto_Start(),this.node_grs.node.on(cc.Node.EventType.TOUCH_START,this.grs_start,this),this.node_grs.node.on(cc.Node.EventType.TOUCH_MOVE,this.grs_move,this),this.node_grs.node.on(cc.Node.EventType.TOUCH_END,this.grs_end,this),this.node_grs.node.on(cc.Node.EventType.TOUCH_CANCEL,this.grs_cancel,this)},e.prototype.goto_Main=function(){var t,e;t=this.edit_name.string,this.toe_man.isChecked?e="\u7537":this.toe_woman.isChecked&&(e="\u5973"),t.length<1||(this.node_main.active=!0,this.node_start.active=!1,this.chat_ctrl.init(t,e))},e.prototype.goto_Start=function(){this.chat_ctrl.back(),this.node_main.active=!1,this.node_start.active=!0},e.prototype.init=function(t){var e=t,o=e.name,n=e.sex;this.lbl_name.string=o+"("+n+")",this.base_h=0,this.total_h=0,this.scl_info.content.removeAllChildren(),this.node_grs.clear(),this.node_grs2.clear()},e.prototype.chat=function(t){var e=t;this.add_info(e,!1)},e.prototype.scrawl=function(t){var e,o=t,n=o.color,i=o.width,c=o.line;if("#ffffff"==n)return this.node_grs.clear(),void this.node_grs2.clear();"ff0000"==n?e=this.red:"ff00ff"==n?e=this.violet:"00ff00"==n?e=this.green:"ffff00"==n?e=this.yellow:"0000ff"==n?e=this.blue:"00ffff"==n?e=this.cyan:"ff8888"==n?e=this.pink:"ff88ff"==n?e=this.lavender:"88ff88"==n?e=this.ondine:"ffff88"==n?e=this.yellowish:"8888ff"==n?e=this.smoke:"88ffff"==n&&(e=this.nattierblue);for(var r=0;r<c.length;r++){var s=c[r],l=s[0],a=s[1];0==r?(this.node_grs2.lineWidth=i,this.node_grs2.strokeColor=e,this.node_grs2.moveTo(l,a)):(this.node_grs2.lineTo(l,a),this.node_grs2.stroke())}},e.prototype.error=function(t){this.add_info({opt:"chat",info:"\u8fde\u63a5\u5173\u95ed\uff01\u8bf7\u8fd4\u56de\u8d77\u59cb\u9875\u91cd\u65b0\u5f00\u59cb\uff01"},!0)},e.prototype.add_info=function(t,e){var o=cc.instantiate(this.item),n=o.getComponent("ChatItem").set_info(t,e,this.total_h);this.total_h+=n,this.scl_info.content.addChild(o),this.scl_info.content.height=this.total_h+this.base_h},e.prototype.goto_chat=function(){this.node_chat.active=!0,this.node_scrawl.active=!1},e.prototype.goto_scrawl=function(){this.node_chat.active=!1,this.node_scrawl.active=!0},e.prototype.onStartClicked=function(){this.goto_Main()},e.prototype.onBackClicked=function(){this.goto_Start()},e.prototype.onChangeClicked=function(){this.node_chat.active?this.goto_scrawl():this.node_scrawl.active&&this.goto_chat()},e.prototype.onSendClicked=function(){var t=this.edit_info.string;if(!(t.length<1)){var e={opt:"chat",info:t};this.chat_model.send(e),this.add_info(e,!0)}},e.prototype.onCleanClicked=function(){this.node_grs.clear(),this.node_grs2.clear(),this.chat_model.send({opt:"scrawl",color:"#ffffff",width:1,line:[]})},e.prototype.grs_start=function(t){if(!this.node_scrawl.active)return!1;var e,o,n=t.touch._point.x,i=t.touch._point.y;return this.point_list.push([n,i]),this.toe_fine.isChecked?e=this.fine:this.toe_middle.isChecked?e=this.middle:this.toe_wide.isChecked&&(e=this.wide),this.toe_red.isChecked?o=this.red:this.toe_violet.isChecked?o=this.violet:this.toe_green.isChecked?o=this.green:this.toe_yellow.isChecked?o=this.yellow:this.toe_blue.isChecked?o=this.blue:this.toe_cyan.isChecked?o=this.cyan:this.toe_pink.isChecked?o=this.pink:this.toe_lavender.isChecked?o=this.lavender:this.toe_ondine.isChecked?o=this.ondine:this.toe_yellowish.isChecked?o=this.yellowish:this.toe_smoke.isChecked?o=this.smoke:this.toe_nattierblue.isChecked&&(o=this.nattierblue),this.line_w=e,this.color_b=o,this.node_grs.lineWidth=this.line_w,this.node_grs.strokeColor=this.color_b,this.node_grs.moveTo(n,i),this.no_line=!1,!0},e.prototype.grs_move=function(t){if(!this.node_scrawl.active||this.no_line)return!1;var e=t.touch._point.x,o=t.touch._point.y,n=this.point_list.length,i=this.point_list[n-1],c=i[0],r=i[1];if(e!=c||o!=r){this.point_list.push([e,o]),this.node_grs.lineTo(e,o);try{this.node_grs.stroke()}catch(t){this.no_line=!0}}},e.prototype.grs_end=function(t){if(!this.node_scrawl.active)return!1;var e=this.color_b.toHEX("#rrggbb");this.chat_model.send({opt:"scrawl",color:e,width:this.line_w,line:this.point_list}),this.point_list=[]},e.prototype.grs_cancel=function(t){},__decorate([s(cc.Node)],e.prototype,"node_start",void 0),__decorate([s(cc.Label)],e.prototype,"lbl_info",void 0),__decorate([s(cc.EditBox)],e.prototype,"edit_name",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_man",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_woman",void 0),__decorate([s(cc.Button)],e.prototype,"btn_start",void 0),__decorate([s(cc.Node)],e.prototype,"node_main",void 0),__decorate([s(cc.Button)],e.prototype,"btn_back",void 0),__decorate([s(cc.Button)],e.prototype,"btn_change",void 0),__decorate([s(cc.Label)],e.prototype,"lbl_name",void 0),__decorate([s(cc.Graphics)],e.prototype,"node_grs",void 0),__decorate([s(cc.Graphics)],e.prototype,"node_grs2",void 0),__decorate([s(cc.Node)],e.prototype,"node_scrawl",void 0),__decorate([s(cc.Button)],e.prototype,"btn_clean",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_fine",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_middle",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_wide",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_red",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_violet",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_green",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_yellow",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_blue",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_cyan",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_pink",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_lavender",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_ondine",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_yellowish",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_smoke",void 0),__decorate([s(cc.Toggle)],e.prototype,"toe_nattierblue",void 0),__decorate([s(cc.Node)],e.prototype,"node_chat",void 0),__decorate([s(cc.EditBox)],e.prototype,"edit_info",void 0),__decorate([s(cc.Button)],e.prototype,"btn_send",void 0),__decorate([s(cc.ScrollView)],e.prototype,"scl_info",void 0),__decorate([s(cc.Prefab)],e.prototype,"item",void 0),e=__decorate([r],e)}(cc.Component);o.default=l,cc._RF.pop()},{"./ChatCtrl":"ChatCtrl","./ChatModel":"ChatModel"}],Http:[function(t,e,o){"use strict";cc._RF.push(e,"cebd7rOJM1M5KOjRXsTbNjG","Http"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,i=n.ccclass,c=(n.property,function(){function t(){}return t.get=function(t,e,o){var n=new XMLHttpRequest;n.onreadystatechange=function(){},n.onerror=function(){e.call(o,"ERROR",n)},n.onprogress=function(){e.call(o,"PROGRESS",n)},n.onloadend=function(){e.call(o,"COMPLETE",n)},n.ontimeout=function(){e.call(o,"TIMEOUT",n)},n.open("GET",t,!0),n.send()},t.post=function(t,e,o,n){var i=new XMLHttpRequest;i.onreadystatechange=function(){},i.onerror=function(){o.call(n,"ERROR",i)},i.onprogress=function(){o.call(n,"PROGRESS",i)},i.onloadend=function(){o.call(n,"COMPLETE",i)},i.ontimeout=function(){o.call(n,"TIMEOUT",i)},i.open("POST",t,!0),i.send(e)},t=__decorate([i],t)}());o.Http=c,cc._RF.pop()},{}],NetWork:[function(t,e,o){"use strict";cc._RF.push(e,"25ad946FR5NQbNNmihC7qEd","NetWork"),Object.defineProperty(o,"__esModule",{value:!0});var n,i=cc._decorator,c=i.ccclass,r=(i.property,function(){function t(){this.isInit=!1,this.socket=null,this.host=null,this.closedByClient=!1,this.USEGZIP=!1,cc.NetTarget=new cc.EventTarget,console.log("\u521d\u59cb\u5316\u6d88\u606f\u961f\u5217")}return Object.defineProperty(t.prototype,"readyState",{get:function(){return null==this.socket?WebSocket.CLOSED:this.socket.readyState},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isConnected",{get:function(){return this.readyState==WebSocket.OPEN},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isClosedByClient",{get:function(){return this.closedByClient},enumerable:!0,configurable:!0}),t.prototype.Utf8ArrayToStr=function(t){var e,o,n,i,c,r;for(e="",n=t.length,o=0;o<n;)switch((i=t[o++])>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:e+=String.fromCharCode(i);break;case 12:case 13:c=t[o++],e+=String.fromCharCode((31&i)<<6|63&c);break;case 14:c=t[o++],r=t[o++],e+=String.fromCharCode((15&i)<<12|(63&c)<<6|(63&r)<<0)}return e},t.prototype.ab2str=function(t){return String.fromCharCode.apply(null,new Uint8Array(t))},t.prototype.connect=function(t){var e=this,o=this;if(!o.isInit){o.closedByClient=!1;var n="";n=-1==t.indexOf("ws://")?"ws://"+t:t,o.host=n,o.socket=new WebSocket(n),o.socket.onopen=function(t){cc.log("Network onopen...",t),o.isInit=!0,cc.NetTarget.emit("netstart",t)},o.socket.onmessage=function(t){if(e.USEGZIP);else{var n=JSON.parse(t.data);o.appandeMsg(n)}},o.socket.onerror=function(t){cc.log("Network onerror..."),cc.NetTarget.emit("neterror",t)},o.socket.onclose=function(t){cc.log("Network onclose...1"),t.closeByClient=o.closedByClient,cc.NetTarget.emit("netclose",t),e.isInit=!1}}},t.prototype.str2UTF8=function(t){var e,o,n=new Array;e=t.length;for(var i=0;i<e;i++)(o=t.charCodeAt(i))>=65536&&o<=1114111?(n.push(o>>18&7|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(63&o|128)):o>=2048&&o<=65535?(n.push(o>>12&15|224),n.push(o>>6&63|128),n.push(63&o|128)):o>=128&&o<=2047?(n.push(o>>6&31|192),n.push(63&o|128)):n.push(255&o);return n},t.prototype.sendmc=function(t,e,o){var n={c:t,m:e,data:o};this.send(n)},t.prototype.send=function(t){if(this.USEGZIP);else{var e=JSON.stringify(t);this.socket.send(e)}},t.prototype.close=function(){console.log("\u5173\u95ed\u7f51\u7edc"),this.socket&&(console.log("\u5173\u95ed\u7f51\u7edc1"),this.closedByClient=!0,this.socket.close(),this.socket.onclose=null,this.socket.onerror=null,this.socket.onmessage=null,this.socket.onopen=null,this.socket=null,this.isInit=!1)},t.prototype.appandeMsg=function(t){cc.log("-----------------------\x3e",t),t.src="tcp","kick"==t.m?cc.NetTarget.emit("kick",t):cc.NetTarget.emit("net",t)},t.instance=null,t=__decorate([c],t)}());o.Network=r,n=new r,cc.Network=n||new r,cc._RF.pop()},{}]},{},["ChatCtrl","ChatItem","ChatModel","ChatView","Http","NetWork"]);