const _0x298481=_0x1368;function _0x5b4c(){const _0x3a09f5=['96830TaCKqU','748Lmhpmr','998IYBnOz','1146vQODCW','25755HxKcYB','3080248oSVYtt','refreshRkey','getRkey','nCjHO','rkeyData','tEioh','GET','expired_time','774SXHZqZ','getTime','isExpired','48556552ggpSYm','serverUrl','uXXZX','1176615OQxFYI','45731TzeaGn','HttpGetJson','1088FyzVcW','http://napcat-sign.wumiao.wang:2082/rkey'];_0x5b4c=function(){return _0x3a09f5;};return _0x5b4c();}(function(_0x3b437c,_0x41cf21){const _0x172d0e=_0x1368,_0x273949=_0x3b437c();while(!![]){try{const _0x389756=parseInt(_0x172d0e(0x111))/0x1*(-parseInt(_0x172d0e(0x115))/0x2)+-parseInt(_0x172d0e(0x10e))/0x3+parseInt(_0x172d0e(0x114))/0x4*(-parseInt(_0x172d0e(0xff))/0x5)+-parseInt(_0x172d0e(0x116))/0x6*(parseInt(_0x172d0e(0x10f))/0x7)+parseInt(_0x172d0e(0x100))/0x8+-parseInt(_0x172d0e(0x108))/0x9*(parseInt(_0x172d0e(0x113))/0xa)+parseInt(_0x172d0e(0x10b))/0xb;if(_0x389756===_0x41cf21)break;else _0x273949['push'](_0x273949['shift']());}catch(_0x20d98f){_0x273949['push'](_0x273949['shift']());}}}(_0x5b4c,0xc8490));import{logError}from'@/common/utils/log';function _0x1368(_0x25317d,_0x61638e){const _0x5b4caa=_0x5b4c();return _0x1368=function(_0x1368d6,_0x16571a){_0x1368d6=_0x1368d6-0xff;let _0x82c44c=_0x5b4caa[_0x1368d6];return _0x82c44c;},_0x1368(_0x25317d,_0x61638e);}import{RequestUtil}from'@/common/utils/request';class RkeyManager{[_0x298481(0x10c)]='';[_0x298481(0x104)]={'group_rkey':'','private_rkey':'','expired_time':0x0};constructor(_0x4ea20f){const _0x58a381=_0x298481;this[_0x58a381(0x10c)]=_0x4ea20f;}async[_0x298481(0x102)](){const _0x15bced=_0x298481,_0x222692={'nCjHO':'获取rkey失败'};if(this[_0x15bced(0x10a)]())try{await this['refreshRkey']();}catch(_0x5e25fb){logError(_0x222692[_0x15bced(0x103)],_0x5e25fb);}return this['rkeyData'];}[_0x298481(0x10a)](){const _0x2483e1=_0x298481,_0xd0fead={'ewKaT':function(_0x18df3f,_0xfde9a5){return _0x18df3f/_0xfde9a5;},'uXXZX':function(_0x140d78,_0x1fbff4){return _0x140d78>_0x1fbff4;}},_0xa8e64d=_0xd0fead['ewKaT'](new Date()[_0x2483e1(0x109)](),0x3e8);return _0xd0fead[_0x2483e1(0x10d)](_0xa8e64d,this['rkeyData'][_0x2483e1(0x107)]);}async[_0x298481(0x101)](){const _0x3513e7=_0x298481,_0x4a1600={'tEioh':_0x3513e7(0x106)};this['rkeyData']=await RequestUtil[_0x3513e7(0x110)](this[_0x3513e7(0x10c)],_0x4a1600[_0x3513e7(0x105)]);}}export const rkeyManager=new RkeyManager(_0x298481(0x112));