function _0xf342(_0x1ba534,_0x5321e0){const _0xe321e7=_0xe321();return _0xf342=function(_0xf3428a,_0x4f953d){_0xf3428a=_0xf3428a-0x167;let _0x3ba2b1=_0xe321e7[_0xf3428a];return _0x3ba2b1;},_0xf342(_0x1ba534,_0x5321e0);}const _0x40d7a0=_0xf342;(function(_0x26c3cc,_0x2af59b){const _0x1659af=_0xf342,_0x102626=_0x26c3cc();while(!![]){try{const _0x38fbdd=-parseInt(_0x1659af(0x192))/0x1*(-parseInt(_0x1659af(0x17f))/0x2)+parseInt(_0x1659af(0x187))/0x3*(parseInt(_0x1659af(0x191))/0x4)+-parseInt(_0x1659af(0x18a))/0x5+-parseInt(_0x1659af(0x16f))/0x6*(-parseInt(_0x1659af(0x199))/0x7)+parseInt(_0x1659af(0x169))/0x8+parseInt(_0x1659af(0x1a4))/0x9*(-parseInt(_0x1659af(0x174))/0xa)+parseInt(_0x1659af(0x18e))/0xb*(-parseInt(_0x1659af(0x193))/0xc);if(_0x38fbdd===_0x2af59b)break;else _0x102626['push'](_0x102626['shift']());}catch(_0x318b1d){_0x102626['push'](_0x102626['shift']());}}}(_0xe321,0xf23ca));import{ElementType,IMAGE_HTTP_HOST,IMAGE_HTTP_HOST_NT}from'@/core/entities';import _0x4a3dd3 from'path';import _0x38b095 from'fs';import _0x309a96 from'fs/promises';import{logDebug}from'@/common/utils/log';import{napCatCore}from'@/core';import{calculateFileMD5}from'@/common/utils/file';import*as _0x4bf983 from'file-type';import{MsgListener}from'@/core/listeners';import _0x3cbc54 from'image-size';import{sessionConfig}from'@/core/sessionConfig';import{randomUUID}from'crypto';import{rkeyManager}from'../utils/rkey';import{AsyncQueue}from'@/common/utils/AsyncQueue';const getRKeyTaskQueue=new AsyncQueue(),downloadMediaTasks=new Map(),downloadMediaListener=new MsgListener();downloadMediaListener[_0x40d7a0(0x16b)]=_0x5fc3dc=>{for(const [_0x91ad9e,_0xc4ded6]of downloadMediaTasks){_0xc4ded6(_0x5fc3dc),downloadMediaTasks['delete'](_0x91ad9e);}},setTimeout(()=>{const _0x3e87a2=_0x40d7a0;napCatCore[_0x3e87a2(0x1a9)](()=>{const _0x4de440=_0x3e87a2;napCatCore[_0x4de440(0x1ac)](downloadMediaListener);});},0x64);export class NTQQFileApi{static async['getFileType'](_0x255ad2){const _0x24fbbc=_0x40d7a0;return _0x4bf983[_0x24fbbc(0x19a)](_0x255ad2);}static async[_0x40d7a0(0x180)](_0x3f4ad2,_0x6a9289){const _0x278f19=_0x40d7a0;await napCatCore[_0x278f19(0x1a6)][_0x278f19(0x180)](_0x3f4ad2,_0x6a9289);}static async[_0x40d7a0(0x196)](_0x224d90){const _0x372181=_0x40d7a0;return await napCatCore[_0x372181(0x1a6)][_0x372181(0x196)](_0x224d90);}static async[_0x40d7a0(0x185)](_0x2aeda3,_0x4788e0=ElementType[_0x40d7a0(0x17d)],_0x58beeb=0x0){const _0x27cf42=_0x40d7a0,_0x4b6854={'TsciD':function(_0x38e24b,_0x4c51d6){return _0x38e24b(_0x4c51d6);},'IGYJM':function(_0x4e5588,_0x2bcd85){return _0x4e5588+_0x2bcd85;},'eLHct':function(_0x1635cf,_0x4013ac){return _0x1635cf===_0x4013ac;}},_0xc0cda7=await _0x4b6854['TsciD'](calculateFileMD5,_0x2aeda3);let _0x1074de=(await NTQQFileApi[_0x27cf42(0x178)](_0x2aeda3))?.[_0x27cf42(0x17e)]||'';_0x1074de&&(_0x1074de=_0x4b6854[_0x27cf42(0x168)]('.',_0x1074de));let _0x1344fc=''+_0x4a3dd3[_0x27cf42(0x19c)](_0x2aeda3);_0x4b6854[_0x27cf42(0x1ab)](_0x1344fc['indexOf']('.'),-0x1)&&(_0x1344fc+=_0x1074de);const _0x4abd7b=napCatCore[_0x27cf42(0x197)][_0x27cf42(0x18b)]()[_0x27cf42(0x18d)]({'md5HexStr':_0xc0cda7,'fileName':_0x1344fc,'elementType':_0x4788e0,'elementSubType':_0x58beeb,'thumbSize':0x0,'needCreate':!![],'downloadType':0x1,'file_uuid':''});await NTQQFileApi[_0x27cf42(0x180)](_0x2aeda3,_0x4abd7b);const _0x119e96=await NTQQFileApi['getFileSize'](_0x2aeda3);return{'md5':_0xc0cda7,'fileName':_0x1344fc,'path':_0x4abd7b,'fileSize':_0x119e96,'ext':_0x1074de};}static async[_0x40d7a0(0x188)](_0x575f78,_0x72290b,_0x3d412a,_0x417df4,_0x1e2a48,_0x2802af,_0x5b16fb=0x3e8*0x3c*0x2,_0x5c52d9=![]){const _0x6ca5a7=_0x40d7a0,_0x157e29={'oFOzh':function(_0x15ae1e,_0x67ce59){return _0x15ae1e(_0x67ce59);},'SBryG':function(_0x39d732,_0x11a772){return _0x39d732===_0x11a772;},'Oqnra':function(_0x290508){return _0x290508();},'IOCmb':function(_0x28bd3d,_0x48c1b4,_0x3fb55b){return _0x28bd3d(_0x48c1b4,_0x3fb55b);}};if(_0x2802af&&_0x38b095[_0x6ca5a7(0x16c)](_0x2802af)){if(_0x5c52d9)try{await _0x309a96[_0x6ca5a7(0x17b)](_0x2802af);}catch(_0x5d090a){}else return _0x2802af;}return new Promise((_0x3f0323,_0x28f1a6)=>{const _0x43a66b=_0x6ca5a7,_0x1e311a={'tGtNn':function(_0x353feb,_0x50467a){const _0x97fb42=_0xf342;return _0x157e29[_0x97fb42(0x1a3)](_0x353feb,_0x50467a);},'FIrcn':function(_0x4a1062,_0x38b630){const _0x360d76=_0xf342;return _0x157e29[_0x360d76(0x184)](_0x4a1062,_0x38b630);}};let _0x427dcf=![];const _0x52d055=_0x1ffc77=>{const _0x4fda50=_0xf342;if(_0x1e311a[_0x4fda50(0x190)](_0x1ffc77[_0x4fda50(0x1a2)],_0x575f78)){_0x427dcf=!![];let _0x33dfbb=_0x1ffc77['filePath'];if(_0x33dfbb[_0x4fda50(0x1a0)]('\x5c')){const _0x7e5132=sessionConfig[_0x4fda50(0x1a1)];_0x33dfbb=_0x4a3dd3[_0x4fda50(0x173)](_0x7e5132,_0x33dfbb);}_0x1e311a[_0x4fda50(0x172)](_0x3f0323,_0x33dfbb);}};downloadMediaTasks[_0x43a66b(0x194)](_0x157e29['Oqnra'](randomUUID),_0x52d055),_0x157e29[_0x43a66b(0x19e)](setTimeout,()=>{const _0x17abf2=_0x43a66b;!_0x427dcf&&_0x157e29[_0x17abf2(0x184)](_0x28f1a6,_0x17abf2(0x189));},_0x5b16fb),napCatCore[_0x43a66b(0x197)]['getMsgService']()[_0x43a66b(0x17c)]({'fileModelId':'0','downloadSourceType':0x0,'triggerType':0x1,'msgId':_0x575f78,'chatType':_0x72290b,'peerUid':_0x3d412a,'elementId':_0x417df4,'thumbSize':0x0,'downloadType':0x1,'filePath':_0x1e2a48});});}static async[_0x40d7a0(0x176)](_0xa26c62){const _0x327c78={'OotVv':function(_0x5b52c3,_0x25b446,_0x10cee2){return _0x5b52c3(_0x25b446,_0x10cee2);}};return new Promise((_0x4f426c,_0x131c7b)=>{const _0x2fad7f=_0xf342,_0x5b9904={'kkzoE':function(_0x280a69,_0x2fb788){return _0x280a69(_0x2fb788);}};_0x327c78[_0x2fad7f(0x1a7)](_0x3cbc54,_0xa26c62,(_0x4e83b5,_0x4e2780)=>{const _0x457302=_0x2fad7f;_0x4e83b5?_0x5b9904[_0x457302(0x171)](_0x131c7b,_0x4e83b5):_0x5b9904[_0x457302(0x171)](_0x4f426c,_0x4e2780);});});}static async[_0x40d7a0(0x18f)](_0x24ce8c,_0x4b2ec7){const _0x52eacf=_0x40d7a0,_0x34d8a1={'hBHgd':_0x52eacf(0x19d),'puUBO':'&rkey=','dZhaw':function(_0x23d44b,_0x3a82d2){return _0x23d44b+_0x3a82d2;},'CuuAx':function(_0x405077,_0x12e424){return _0x405077+_0x12e424;},'wLLnS':function(_0x2c91ae,_0x92b154){return _0x2c91ae||_0x92b154;},'yhuzF':function(_0x7ef983,_0x42e294,_0x12ea0e){return _0x7ef983(_0x42e294,_0x12ea0e);}};if(!_0x24ce8c)return'';const _0x34040d=_0x24ce8c[_0x52eacf(0x18c)],_0x2c1f2b=_0x24ce8c[_0x52eacf(0x17a)],_0x249db3=_0x24ce8c[_0x52eacf(0x17a)],_0x54fc64=_0x24ce8c[_0x52eacf(0x179)];if(_0x34040d){if(_0x34040d[_0x52eacf(0x1a0)](_0x34d8a1[_0x52eacf(0x167)])){if(_0x34040d[_0x52eacf(0x186)](_0x34d8a1[_0x52eacf(0x183)]))return IMAGE_HTTP_HOST_NT+_0x34040d;const _0x1669a1=await rkeyManager[_0x52eacf(0x16a)](),_0xb4daf7=_0x4b2ec7?_0x1669a1['private_rkey']:_0x1669a1[_0x52eacf(0x181)];return _0x34d8a1[_0x52eacf(0x198)](_0x34d8a1['dZhaw'](IMAGE_HTTP_HOST_NT,_0x34040d),''+_0xb4daf7);}else return _0x34d8a1[_0x52eacf(0x1a8)](IMAGE_HTTP_HOST,_0x34040d);}else{if(_0x34d8a1[_0x52eacf(0x16d)](_0x249db3,_0x2c1f2b))return IMAGE_HTTP_HOST+'/gchatpic_new/0/0-0-'+_0x34d8a1['wLLnS'](_0x249db3,_0x2c1f2b)[_0x52eacf(0x1a5)]()+'/0';}return _0x34d8a1['yhuzF'](logDebug,_0x52eacf(0x177),_0x24ce8c),'';}}function _0xe321(){const _0x52c7e1=['puUBO','oFOzh','uploadFile','includes','18YdOjxM','downloadMedia','下载超时','6968865fbERNz','getMsgService','originImageUrl','getRichMediaFilePathForGuild','33059367xWRbZv','getImageUrl','tGtNn','1265620rgEYfZ','130nOSaHQ','12AxXXUC','set','getStorageCleanService','getFileSize','session','dZhaw','469opxZCk','fileTypeFromFile','clearCache','basename','/download','IOCmb','scanCache','startsWith','defaultFileDownloadPath','msgId','SBryG','9KqxlfH','toUpperCase','util','OotVv','CuuAx','onLoginSuccess','clearChatCache','eLHct','addListener','tmp','hBHgd','IGYJM','14087072cLxZVo','getRkey','onRichMediaDownloadComplete','existsSync','wLLnS','addCacheScannedPaths','86046jJpeSp','clearChatCacheInfo','kkzoE','FIrcn','join','10729690UsVBNg','addCacheScanedPaths','getImageSize','图片url获取失败','getFileType','fileUuid','md5HexStr','unlink','downloadRichMedia','PIC','ext','28372nNpTuv','copyFile','group_rkey','getFileCacheInfo'];_0xe321=function(){return _0x52c7e1;};return _0xe321();}export class NTQQFileCacheApi{static async['setCacheSilentScan'](_0x143dee=!![]){return'';}static['getCacheSessionPathList'](){return'';}static[_0x40d7a0(0x19b)](_0x55f8da=[_0x40d7a0(0x1ad),'hotUpdate']){const _0x3f74f1=_0x40d7a0;return napCatCore['session'][_0x3f74f1(0x195)]()['clearCacheDataByKeys'](_0x55f8da);}static[_0x40d7a0(0x16e)](_0x4493a8={}){const _0x92d9a1=_0x40d7a0;return napCatCore[_0x92d9a1(0x197)][_0x92d9a1(0x195)]()[_0x92d9a1(0x175)](_0x4493a8);}static[_0x40d7a0(0x19f)](){const _0x568f6a=_0x40d7a0;return napCatCore[_0x568f6a(0x197)][_0x568f6a(0x195)]()[_0x568f6a(0x19f)]();}static['getHotUpdateCachePath'](){return'';}static['getDesktopTmpPath'](){return'';}static['getChatCacheList'](_0x588049,_0x8d3c25=0x3e8,_0x207943=0x0){const _0x3f238b=_0x40d7a0;return napCatCore[_0x3f238b(0x197)][_0x3f238b(0x195)]()['getChatCacheInfo'](_0x588049,_0x8d3c25,0x1,_0x207943);}static[_0x40d7a0(0x182)](_0x3a0e0b,_0x329d47=0x3e8,_0x5f4aba){const _0x13aa90=_0x5f4aba?_0x5f4aba:{'fileType':_0x3a0e0b};}static async[_0x40d7a0(0x1aa)](_0x12fa03=[],_0xe8ed3d=[]){const _0x34f4cd=_0x40d7a0;return napCatCore[_0x34f4cd(0x197)][_0x34f4cd(0x195)]()[_0x34f4cd(0x170)](_0x12fa03,_0xe8ed3d);}}