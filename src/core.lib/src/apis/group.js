const _0x76843d=_0x9909;(function(_0x2027e6,_0x20d9df){const _0x3ea7fd=_0x9909,_0x3718ee=_0x2027e6();while(!![]){try{const _0x5d2c4e=-parseInt(_0x3ea7fd(0x16b))/0x1*(parseInt(_0x3ea7fd(0x168))/0x2)+parseInt(_0x3ea7fd(0x178))/0x3+-parseInt(_0x3ea7fd(0x14d))/0x4+-parseInt(_0x3ea7fd(0x14a))/0x5+-parseInt(_0x3ea7fd(0x166))/0x6+parseInt(_0x3ea7fd(0x14c))/0x7+parseInt(_0x3ea7fd(0x147))/0x8;if(_0x5d2c4e===_0x20d9df)break;else _0x3718ee['push'](_0x3718ee['shift']());}catch(_0x41826a){_0x3718ee['push'](_0x3718ee['shift']());}}}(_0x4a0b,0x8d095));import{NTQQUserApi,napCatCore}from'@/core';import{GroupListener}from'@/core/index';function _0x4a0b(){const _0x4fb0f9=['getGroupNotifies','618042alGtxq','PoGfA','operateSysNotify','1otzxVD','onGroupListUpdate','infos','group','groupMemberList_MainWindow','bFENh','uin','eERqC','type','set','getNextMemberList','nJxVY','result','1584294Ykspsr','modifyMemberRole','session','MPjeH','getPSkey','SvUXr','modifyMemberCardName','获取群列表超时','setMemberRole','hpxmu','banGroup','获取群(','4274304IjygYo','forEach','获取群成员列表出错,','3266725usRIBg','TYZHF','5265743UeyNoX','527884fZgjcV','getGroupService','getGroupList','获取群列表完成','errMsg','finish:\x20','ScyvF','createMemberListScene','publishGroupBulletin','TghyK','iyhjJ','setGroupShutUp','ybMDW','banMember',')成员列表结果:','quitGroup','groupCode','seq','uploadGroupBulletinPic','fjSHC','qun.qq.com','setGroupName','setGroupTitle','onLoginSuccess','addListener','855678VfWCzR'];_0x4a0b=function(){return _0x4fb0f9;};return _0x4a0b();}function _0x9909(_0x2525b9,_0x39d848){const _0x4a0b56=_0x4a0b();return _0x9909=function(_0x9909e4,_0x2b3ed8){_0x9909e4=_0x9909e4-0x143;let _0x48333f=_0x4a0b56[_0x9909e4];return _0x48333f;},_0x9909(_0x2525b9,_0x39d848);}import{uid2UinMap}from'@/core/data';import{logDebug}from'@/common/utils/log';import{randomUUID}from'crypto';const groupMemberTasks=new Map(),groupListener=new GroupListener();groupListener[_0x76843d(0x16c)]=(_0x28f691,_0x355763)=>{const _0x4f1d63=_0x76843d,_0x57ec48={'PoGfA':function(_0x1e17d6,_0x3bdd8d,_0x42bcd2){return _0x1e17d6(_0x3bdd8d,_0x42bcd2);}};for(const [_0x27ba36,_0x58ce8d]of groupMemberTasks){_0x57ec48[_0x4f1d63(0x169)](_0x58ce8d,_0x28f691,_0x355763),groupMemberTasks['delete'](_0x27ba36);}},setTimeout(()=>{const _0x4c3842=_0x76843d;napCatCore[_0x4c3842(0x164)](()=>{const _0x5d4074=_0x4c3842;napCatCore[_0x5d4074(0x165)](groupListener);});},0x64);export class NTQQGroupApi{static async['getGroups'](_0xd6cae0=![]){const _0x4882b=_0x76843d,_0x1e060f={'ScyvF':function(_0x4381bb,_0x1db562,_0x2b55e2){return _0x4381bb(_0x1db562,_0x2b55e2);},'fjSHC':function(_0x3557ce,_0x2be4bf){return _0x3557ce(_0x2be4bf);},'SvUXr':_0x4882b(0x17f),'TYZHF':function(_0x67c26d,_0xfab70d){return _0x67c26d(_0xfab70d);},'ybMDW':function(_0x2f176d){return _0x2f176d();}};let _0x357c0a=![];return new Promise((_0x28d492,_0x57c6cb)=>{const _0x4222ac=_0x4882b,_0x4ab19f={'TghyK':_0x1e060f[_0x4222ac(0x17d)],'MPjeH':function(_0x16a306,_0x315cad){const _0x31d82c=_0x4222ac;return _0x1e060f[_0x31d82c(0x14b)](_0x16a306,_0x315cad);}};_0x1e060f[_0x4222ac(0x153)](setTimeout,()=>{const _0x24af76=_0x4222ac;!_0x357c0a&&(logDebug(_0x4ab19f[_0x24af76(0x156)]),_0x4ab19f[_0x24af76(0x17b)](_0x57c6cb,_0x24af76(0x17f)));},0x1388);const _0x2cff59=(_0x2f370e,_0x4e2257)=>{const _0x5dc8b7=_0x4222ac;_0x357c0a=!![],_0x1e060f[_0x5dc8b7(0x153)](logDebug,_0x5dc8b7(0x150),_0x4e2257),_0x1e060f[_0x5dc8b7(0x160)](_0x28d492,_0x4e2257);};groupMemberTasks[_0x4222ac(0x174)](_0x1e060f[_0x4222ac(0x159)](randomUUID),_0x2cff59),napCatCore[_0x4222ac(0x17a)]['getGroupService']()[_0x4222ac(0x14f)](_0xd6cae0)['then']();});}static async['getGroupMembers'](_0x5c3172,_0x2deac0=0xbb8){const _0x15956f=_0x76843d,_0x4f6e13={'nJxVY':_0x15956f(0x16f),'IhJUe':function(_0x2335c4,_0x2b0868){return _0x2335c4!==_0x2b0868;},'HpwDw':function(_0x4aafe6,_0x1ac525,_0x351aea){return _0x4aafe6(_0x1ac525,_0x351aea);}},_0x8e32f8=napCatCore[_0x15956f(0x17a)]['getGroupService'](),_0x53024a=_0x8e32f8[_0x15956f(0x154)](_0x5c3172,_0x4f6e13[_0x15956f(0x176)]),_0x3dae59=await _0x8e32f8[_0x15956f(0x175)](_0x53024a,undefined,_0x2deac0);if(_0x4f6e13['IhJUe'](_0x3dae59['errCode'],0x0))throw _0x15956f(0x149)+_0x3dae59[_0x15956f(0x151)];return _0x4f6e13['HpwDw'](logDebug,_0x15956f(0x146)+_0x5c3172+_0x15956f(0x15b),_0x15956f(0x152)+_0x3dae59[_0x15956f(0x177)]['finish']),_0x3dae59['result'][_0x15956f(0x16d)][_0x15956f(0x148)](_0x1a40e9=>{const _0x1206ef=_0x15956f;uid2UinMap[_0x1a40e9['uid']]=_0x1a40e9[_0x1206ef(0x171)];}),_0x3dae59[_0x15956f(0x177)]['infos'];}static async[_0x76843d(0x167)](){}static async['getGroupIgnoreNotifies'](){}static async[_0x76843d(0x15f)](_0x5ecb78,_0x157f6d){const _0x338830=_0x76843d,_0x39373f={'hpxmu':'qun.qq.com'},_0x4ca8d5=(await NTQQUserApi[_0x338830(0x17c)]([_0x39373f[_0x338830(0x144)]]))[_0x39373f['hpxmu']];return napCatCore[_0x338830(0x17a)][_0x338830(0x14e)]()[_0x338830(0x15f)](_0x5ecb78,_0x4ca8d5,_0x157f6d);}static async['handleGroupRequest'](_0x56cea6,_0x3c2ebc,_0x63f701){const _0x23d236=_0x76843d,_0x56bb9={'eERqC':function(_0x277ac1,_0x5d98b7){return _0x277ac1||_0x5d98b7;}};return napCatCore[_0x23d236(0x17a)]['getGroupService']()[_0x23d236(0x16a)](![],{'operateType':_0x3c2ebc,'targetMsg':{'seq':_0x56cea6[_0x23d236(0x15e)],'type':_0x56cea6[_0x23d236(0x173)],'groupCode':_0x56cea6[_0x23d236(0x16e)][_0x23d236(0x15d)],'postscript':_0x56bb9[_0x23d236(0x172)](_0x63f701,'')}});}static async[_0x76843d(0x15c)](_0x2cdc56){const _0x4d6b66=_0x76843d;return napCatCore[_0x4d6b66(0x17a)][_0x4d6b66(0x14e)]()[_0x4d6b66(0x15c)](_0x2cdc56);}static async['kickMember'](_0x1205a6,_0x45c1cc,_0x5de520=![],_0x27e6a4=''){const _0x598382=_0x76843d;return napCatCore[_0x598382(0x17a)][_0x598382(0x14e)]()['kickMember'](_0x1205a6,_0x45c1cc,_0x5de520,_0x27e6a4);}static async[_0x76843d(0x15a)](_0x78953d,_0x196bf3){const _0x22b2c8=_0x76843d;return napCatCore[_0x22b2c8(0x17a)][_0x22b2c8(0x14e)]()['setMemberShutUp'](_0x78953d,_0x196bf3);}static async[_0x76843d(0x145)](_0x1dcc61,_0x44d877){const _0x418d62=_0x76843d;return napCatCore[_0x418d62(0x17a)]['getGroupService']()[_0x418d62(0x158)](_0x1dcc61,_0x44d877);}static async['setMemberCard'](_0x155f2a,_0x3cd1bf,_0x2a97d3){const _0x5f3e4d=_0x76843d;return napCatCore['session'][_0x5f3e4d(0x14e)]()[_0x5f3e4d(0x17e)](_0x155f2a,_0x3cd1bf,_0x2a97d3);}static async[_0x76843d(0x143)](_0x345011,_0x542636,_0x219e20){const _0x2e96b5=_0x76843d;return napCatCore[_0x2e96b5(0x17a)][_0x2e96b5(0x14e)]()[_0x2e96b5(0x179)](_0x345011,_0x542636,_0x219e20);}static async[_0x76843d(0x162)](_0x58b00a,_0x28a279){const _0x5bf3bf=_0x76843d;return napCatCore[_0x5bf3bf(0x17a)][_0x5bf3bf(0x14e)]()['modifyGroupName'](_0x58b00a,_0x28a279,![]);}static async[_0x76843d(0x163)](_0x38989f,_0x20ad2d,_0x5aa449){}static async[_0x76843d(0x155)](_0x5c2484,_0x189d8d,_0x34fd12=undefined,_0x17e245=0x0,_0x398ed3=0x0){const _0x524a0c=_0x76843d,_0x56a5c2={'bFENh':_0x524a0c(0x161),'iyhjJ':function(_0x2948d5,_0x3e7835){return _0x2948d5(_0x3e7835);}},_0x512ee5=(await NTQQUserApi[_0x524a0c(0x17c)]([_0x56a5c2['bFENh']]))[_0x56a5c2[_0x524a0c(0x170)]];let _0x392209={'text':_0x56a5c2[_0x524a0c(0x157)](encodeURI,_0x189d8d),'picInfo':_0x34fd12,'oldFeedsId':'','pinned':_0x17e245,'confirmRequired':_0x398ed3};return napCatCore[_0x524a0c(0x17a)][_0x524a0c(0x14e)]()[_0x524a0c(0x155)](_0x5c2484,_0x512ee5,_0x392209);}}