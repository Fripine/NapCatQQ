(function(_0x551c6a,_0xd6fa87){const _0x266538=_0x34ce,_0x415085=_0x551c6a();while(!![]){try{const _0x41eb81=-parseInt(_0x266538(0x15e))/0x1*(parseInt(_0x266538(0x16b))/0x2)+-parseInt(_0x266538(0x150))/0x3*(parseInt(_0x266538(0x160))/0x4)+-parseInt(_0x266538(0x164))/0x5*(-parseInt(_0x266538(0x172))/0x6)+parseInt(_0x266538(0x14f))/0x7+parseInt(_0x266538(0x16c))/0x8+parseInt(_0x266538(0x158))/0x9+parseInt(_0x266538(0x17b))/0xa*(-parseInt(_0x266538(0x159))/0xb);if(_0x41eb81===_0xd6fa87)break;else _0x415085['push'](_0x415085['shift']());}catch(_0x31729a){_0x415085['push'](_0x415085['shift']());}}}(_0x184e,0x99319));import{logDebug}from'@/common/utils/log';import{NTQQUserApi}from'./user';import{selfInfo}from'../data';function _0x34ce(_0x22bc44,_0x49f9fb){const _0x184e54=_0x184e();return _0x34ce=function(_0x34ce39,_0xbf897f){_0x34ce39=_0x34ce39-0x14d;let _0x9805f1=_0x184e54[_0x34ce39];return _0x9805f1;},_0x34ce(_0x22bc44,_0x49f9fb);}import{RequestUtil}from'@/common/utils/request';import{WebApi}from'./webapi';export async function SignMiniApp(_0x43d7b8){const _0x218a52=_0x34ce,_0x32cc32={'EAFFL':_0x218a52(0x166),'LehQf':_0x218a52(0x179),'feQFl':_0x218a52(0x151),'CDNXM':function(_0x394bbb,_0x459556){return _0x394bbb+_0x459556;},'GqXau':function(_0x18233d,_0x3834ad){return _0x18233d+_0x3834ad;},'hVtJB':_0x218a52(0x157),'gAUpd':_0x218a52(0x15d),'WvQRk':_0x218a52(0x161),'Nouvy':function(_0x10bba9,_0x3e79e7){return _0x10bba9+_0x3e79e7;},'hRbfk':function(_0x30f50b,_0x2829e9){return _0x30f50b+_0x2829e9;},'XmZjf':_0x218a52(0x17a),'cMpqr':'&ark=','JjyEW':function(_0x10d149,_0x4ba2a4){return _0x10d149(_0x4ba2a4);},'VFQmA':_0x218a52(0x15c)};let _0x44d38b={'app':_0x218a52(0x15b),'bizsrc':_0x32cc32[_0x218a52(0x169)],'view':_0x32cc32['LehQf'],'prompt':_0x43d7b8[_0x218a52(0x173)],'config':{'type':'normal','forward':0x1,'autosize':0x0},'meta':{'miniapp':{'title':_0x43d7b8[_0x218a52(0x156)],'preview':_0x43d7b8[_0x218a52(0x178)]['replace'](/\\/g,_0x32cc32[_0x218a52(0x170)]),'jumpUrl':_0x43d7b8['jumpUrl'][_0x218a52(0x16d)](/\\/g,_0x32cc32['feQFl']),'tag':_0x43d7b8[_0x218a52(0x14d)],'tagIcon':_0x43d7b8['tagIcon'][_0x218a52(0x16d)](/\\/g,'\x5c/\x5c/'),'source':_0x43d7b8['source'],'sourcelogo':_0x43d7b8[_0x218a52(0x15f)][_0x218a52(0x16d)](/\\/g,_0x32cc32[_0x218a52(0x170)])}}};const _0x629034=await NTQQUserApi[_0x218a52(0x14e)]();let _0x29312a=await NTQQUserApi[_0x218a52(0x162)]();const _0x7145c9=WebApi[_0x218a52(0x16f)](_0x29312a[_0x218a52(0x154)]),_0x976c1=_0x32cc32[_0x218a52(0x15a)](_0x32cc32[_0x218a52(0x15a)](_0x32cc32[_0x218a52(0x152)](_0x218a52(0x153),_0x29312a[_0x218a52(0x154)])+_0x32cc32['hVtJB']+_0x29312a[_0x218a52(0x155)]+_0x32cc32[_0x218a52(0x165)],selfInfo[_0x218a52(0x176)]),_0x32cc32[_0x218a52(0x167)])+selfInfo['uin'];let _0x1dcacb=_0x32cc32[_0x218a52(0x171)](_0x32cc32[_0x218a52(0x152)](_0x32cc32[_0x218a52(0x16e)](_0x32cc32['XmZjf'],_0x7145c9),_0x32cc32[_0x218a52(0x175)]),_0x32cc32[_0x218a52(0x177)](encodeURIComponent,JSON[_0x218a52(0x174)](_0x44d38b))),_0xa0286f='';try{let _0x401d09=await RequestUtil[_0x218a52(0x163)](_0x1dcacb,_0x32cc32[_0x218a52(0x168)],undefined,{'Cookie':_0x976c1});_0xa0286f=_0x401d09['data']['signed_ark'];}catch(_0x26b23e){logDebug(_0x218a52(0x16a),_0x26b23e);}return _0xa0286f;}function _0x184e(){const _0xd1eb9d=['3476445hPxjpO','9esYsJa','\x5c/\x5c/','GqXau','p_skey=','p_skey','skey','title',';\x20skey=','8468028wkJJqG','22pRnRkv','CDNXM','com.tencent.miniapp.lua','GET',';\x20p_uin=o','28991jezjnu','sourcelogo','996388FpWxQx',';\x20uin=o','getQzoneCookies','HttpGetJson','942285soetoY','gAUpd','tianxuan.imgJumpArk','WvQRk','VFQmA','EAFFL','MiniApp\x20JSON\x20消息生成失败','4yhXdUA','4726760ngwOgH','replace','hRbfk','genBkn','feQFl','Nouvy','36mEIYud','prompt','stringify','cMpqr','uin','JjyEW','preview','miniapp','https://h5.qzone.qq.com/v2/vip/tx/trpc/ark-share/GenNewSignedArk?g_tk=','8631800bxDahe','tag','getSkey'];_0x184e=function(){return _0xd1eb9d;};return _0x184e();}