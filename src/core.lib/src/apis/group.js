const _0x438dbe=_0x425f;(function(_0x4ae412,_0x2b122b){const _0x2cbded=_0x425f,_0x46cef9=_0x4ae412();while(!![]){try{const _0xf9b841=-parseInt(_0x2cbded(0x70))/0x1*(-parseInt(_0x2cbded(0x79))/0x2)+-parseInt(_0x2cbded(0x7f))/0x3*(-parseInt(_0x2cbded(0xa6))/0x4)+parseInt(_0x2cbded(0xa1))/0x5*(parseInt(_0x2cbded(0x90))/0x6)+-parseInt(_0x2cbded(0xaa))/0x7+-parseInt(_0x2cbded(0x96))/0x8+parseInt(_0x2cbded(0x86))/0x9+-parseInt(_0x2cbded(0x7d))/0xa*(parseInt(_0x2cbded(0xae))/0xb);if(_0xf9b841===_0x2b122b)break;else _0x46cef9['push'](_0x46cef9['shift']());}catch(_0x57fb7a){_0x46cef9['push'](_0x46cef9['shift']());}}}(_0x38f3,0x9b030));import{NTQQUserApi,napCatCore}from'@/core';import{GroupListener}from'@/core/index';import{uid2UinMap}from'@/core/data';import{logDebug}from'@/common/utils/log';import{randomUUID}from'crypto';const groupMemberTasks=new Map(),groupListener=new GroupListener();groupListener[_0x438dbe(0x77)]=(_0x4b533e,_0x2cb79e)=>{const _0x40860a=_0x438dbe,_0x377dbd={'NFXWQ':function(_0x1e0936,_0x23d2a9,_0x101006){return _0x1e0936(_0x23d2a9,_0x101006);}};for(const [_0x56605d,_0x3a4446]of groupMemberTasks){_0x377dbd[_0x40860a(0x87)](_0x3a4446,_0x4b533e,_0x2cb79e),groupMemberTasks[_0x40860a(0xad)](_0x56605d);}},setTimeout(()=>{const _0x381f0f=_0x438dbe;napCatCore[_0x381f0f(0x8c)](()=>{const _0x1103f4=_0x381f0f;napCatCore[_0x1103f4(0x8a)](groupListener);});},0x64);function _0x425f(_0x2b0941,_0x117b24){const _0x38f35b=_0x38f3();return _0x425f=function(_0x425f97,_0x1ad02f){_0x425f97=_0x425f97-0x70;let _0x141100=_0x38f35b[_0x425f97];return _0x141100;},_0x425f(_0x2b0941,_0x117b24);}export class NTQQGroupApi{static async['getGroups'](_0xdbd66e=![]){const _0x36463a=_0x438dbe,_0xb4a636={'MDFrL':function(_0x413c69,_0x3339b1,_0x549747){return _0x413c69(_0x3339b1,_0x549747);},'ioxsh':_0x36463a(0x82),'eLmUA':function(_0x5cc7e5){return _0x5cc7e5();}};let _0x255599=![];return new Promise((_0xa8dcd4,_0xcd4373)=>{const _0x14f07d=_0x36463a,_0x5b2402={'FaRLK':_0x14f07d(0x9c),'DMeWE':function(_0x1cde3c,_0x569c74,_0x489b44){const _0xb3ca8f=_0x14f07d;return _0xb4a636[_0xb3ca8f(0x93)](_0x1cde3c,_0x569c74,_0x489b44);},'KBrGI':_0xb4a636[_0x14f07d(0x72)]};_0xb4a636[_0x14f07d(0x93)](setTimeout,()=>{const _0x1c44bf=_0x14f07d;!_0x255599&&(logDebug(_0x5b2402[_0x1c44bf(0xac)]),_0xcd4373(_0x5b2402[_0x1c44bf(0xac)]));},0x1388);const _0x10c710=(_0x4bb7b5,_0x28983a)=>{const _0x5e2720=_0x14f07d;_0x255599=!![],_0x5b2402[_0x5e2720(0x9a)](logDebug,_0x5b2402[_0x5e2720(0x95)],_0x28983a),_0xa8dcd4(_0x28983a);};groupMemberTasks['set'](_0xb4a636[_0x14f07d(0x74)](randomUUID),_0x10c710),napCatCore[_0x14f07d(0x75)][_0x14f07d(0x76)]()[_0x14f07d(0x9e)](_0xdbd66e)['then']();});}static async[_0x438dbe(0x7c)](_0x4cf48d,_0x233438=0xbb8){const _0x49430e=_0x438dbe,_0x2d39be={'TAftx':'groupMemberList_MainWindow','CUIhJ':function(_0x4892f7,_0x5c9ae8){return _0x4892f7!==_0x5c9ae8;},'QpJNB':function(_0x272a03,_0x4e851c){return _0x272a03+_0x4e851c;},'MxFTM':_0x49430e(0xa7)},_0x33b626=napCatCore[_0x49430e(0x75)][_0x49430e(0x76)](),_0x5aa4d3=_0x33b626[_0x49430e(0x99)](_0x4cf48d,_0x2d39be[_0x49430e(0x83)]),_0x278f67=await _0x33b626[_0x49430e(0xa3)](_0x5aa4d3,undefined,_0x233438);if(_0x2d39be['CUIhJ'](_0x278f67['errCode'],0x0))throw _0x2d39be[_0x49430e(0x81)](_0x2d39be[_0x49430e(0x73)],_0x278f67[_0x49430e(0xaf)]);return logDebug(_0x49430e(0x8b)+_0x4cf48d+_0x49430e(0x97),_0x49430e(0x7a)+_0x278f67[_0x49430e(0x78)][_0x49430e(0x80)]),_0x278f67[_0x49430e(0x78)]['infos'][_0x49430e(0x71)](_0x399495=>{const _0x173269=_0x49430e;uid2UinMap[_0x399495[_0x173269(0xa0)]]=_0x399495[_0x173269(0x85)];}),_0x278f67[_0x49430e(0x78)]['infos'];}static async[_0x438dbe(0xab)](){}static async[_0x438dbe(0x98)](){}static async[_0x438dbe(0x84)](_0x12dc00,_0x4b3950){const _0x285dd0=_0x438dbe,_0x1a525e={'CAOrL':_0x285dd0(0x8f)},_0x3e306f=(await NTQQUserApi[_0x285dd0(0x9d)]([_0x1a525e['CAOrL']]))[_0x1a525e['CAOrL']];return napCatCore['session'][_0x285dd0(0x76)]()['uploadGroupBulletinPic'](_0x12dc00,_0x3e306f,_0x4b3950);}static async[_0x438dbe(0xa5)](_0x2a611c,_0x394f7a,_0x556b6a){const _0x51f87a=_0x438dbe,_0x7f503={'KmRkh':function(_0x31294f,_0x26e9a3){return _0x31294f||_0x26e9a3;}};return napCatCore[_0x51f87a(0x75)]['getGroupService']()[_0x51f87a(0x8d)](![],{'operateType':_0x394f7a,'targetMsg':{'seq':_0x2a611c['seq'],'type':_0x2a611c['type'],'groupCode':_0x2a611c[_0x51f87a(0xa8)][_0x51f87a(0x94)],'postscript':_0x7f503[_0x51f87a(0x89)](_0x556b6a,'')}});}static async[_0x438dbe(0x9f)](_0x3c7bb5){const _0xed058f=_0x438dbe;return napCatCore['session'][_0xed058f(0x76)]()[_0xed058f(0x9f)](_0x3c7bb5);}static async[_0x438dbe(0x91)](_0x3efb4c,_0x12f028,_0x2090ab=![],_0x18ce2a=''){const _0x4175ab=_0x438dbe;return napCatCore[_0x4175ab(0x75)][_0x4175ab(0x76)]()[_0x4175ab(0x91)](_0x3efb4c,_0x12f028,_0x2090ab,_0x18ce2a);}static async['banMember'](_0x39b7f6,_0x2e4a9b){const _0xe3ae42=_0x438dbe;return napCatCore[_0xe3ae42(0x75)][_0xe3ae42(0x76)]()['setMemberShutUp'](_0x39b7f6,_0x2e4a9b);}static async[_0x438dbe(0xa4)](_0x32c8ab,_0x22c6a0){const _0x29faeb=_0x438dbe;return napCatCore[_0x29faeb(0x75)]['getGroupService']()[_0x29faeb(0x88)](_0x32c8ab,_0x22c6a0);}static async[_0x438dbe(0x7e)](_0x1ecd9d,_0x43acf6,_0x4e83b3){const _0x45b390=_0x438dbe;return napCatCore[_0x45b390(0x75)]['getGroupService']()[_0x45b390(0xa2)](_0x1ecd9d,_0x43acf6,_0x4e83b3);}static async['setMemberRole'](_0x42f42f,_0x1e7f5a,_0x424716){const _0xa51161=_0x438dbe;return napCatCore[_0xa51161(0x75)][_0xa51161(0x76)]()[_0xa51161(0x7b)](_0x42f42f,_0x1e7f5a,_0x424716);}static async[_0x438dbe(0x8e)](_0x54c090,_0x563b6d){const _0x37dda0=_0x438dbe;return napCatCore[_0x37dda0(0x75)][_0x37dda0(0x76)]()[_0x37dda0(0x92)](_0x54c090,_0x563b6d,![]);}static async['setGroupTitle'](_0x5e7dad,_0x54bc1b,_0x4009ae){}static async[_0x438dbe(0xa9)](_0x5b9535,_0x46e4df,_0x49a471=undefined,_0x265a2f=0x0,_0x416ee7=0x0){const _0xa1c1fa=_0x438dbe,_0x41e196={'yEpBB':_0xa1c1fa(0x8f)},_0x35dff4=(await NTQQUserApi['getPSkey']([_0x41e196[_0xa1c1fa(0x9b)]]))[_0x41e196[_0xa1c1fa(0x9b)]];let _0x2b036a={'text':encodeURI(_0x46e4df),'picInfo':_0x49a471,'oldFeedsId':'','pinned':_0x265a2f,'confirmRequired':_0x416ee7};return napCatCore[_0xa1c1fa(0x75)][_0xa1c1fa(0x76)]()[_0xa1c1fa(0xa9)](_0x5b9535,_0x35dff4,_0x2b036a);}}function _0x38f3(){const _0x2efc60=['banGroup','handleGroupRequest','41764lHEyaD','获取群成员列表出错,','group','publishGroupBulletin','6602316gRZBTB','getGroupNotifies','FaRLK','delete','2488453LDnzCp','errMsg','102031cVabRx','forEach','ioxsh','MxFTM','eLmUA','session','getGroupService','onGroupListUpdate','result','8mxIvPl','finish:\x20','modifyMemberRole','getGroupMembers','20lNJwLd','setMemberCard','21fhhqQI','finish','QpJNB','获取群列表完成','TAftx','uploadGroupBulletinPic','uin','5508873ndQFMg','NFXWQ','setGroupShutUp','KmRkh','addListener','获取群(','onLoginSuccess','operateSysNotify','setGroupName','qun.qq.com','6ywDHdM','kickMember','modifyGroupName','MDFrL','groupCode','KBrGI','1355240UqBvDk',')成员列表结果:','getGroupIgnoreNotifies','createMemberListScene','DMeWE','yEpBB','获取群列表超时','getPSkey','getGroupList','quitGroup','uid','5533295snffsG','modifyMemberCardName','getNextMemberList'];_0x38f3=function(){return _0x2efc60;};return _0x38f3();}