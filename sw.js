/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/09/02/CTF-MISC杂项/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/2024/09/02/CTF-MISC杂项/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/2024/09/02/CTF-MISC杂项/11.png","632743aa25dd12abd402b9cbd07922db"],["/2024/09/02/CTF-MISC杂项/12.png","f234877bfb7b8c589922442b3ac34230"],["/2024/09/02/CTF-MISC杂项/13.png","409afcfab151d464fc9b0f72fba0a024"],["/2024/09/02/CTF-MISC杂项/14.png","1d5586234c96048e17ad23833d85351e"],["/2024/09/02/CTF-MISC杂项/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/2024/09/02/CTF-MISC杂项/16.png","0e75817718fbec22671ca7640d0d14bf"],["/2024/09/02/CTF-MISC杂项/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/2024/09/02/CTF-MISC杂项/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/2024/09/02/CTF-MISC杂项/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/2024/09/02/CTF-MISC杂项/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/2024/09/02/CTF-MISC杂项/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/2024/09/02/CTF-MISC杂项/21.png","1f71f461f3633cd57c6269411fe29be7"],["/2024/09/02/CTF-MISC杂项/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/2024/09/02/CTF-MISC杂项/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/2024/09/02/CTF-MISC杂项/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/2024/09/02/CTF-MISC杂项/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/2024/09/02/CTF-MISC杂项/26.png","828502176f804a0a06d9f582ea27b88e"],["/2024/09/02/CTF-MISC杂项/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/2024/09/02/CTF-MISC杂项/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/2024/09/02/CTF-MISC杂项/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/2024/09/02/CTF-MISC杂项/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/2024/09/02/CTF-MISC杂项/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/2024/09/02/CTF-MISC杂项/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/2024/09/02/CTF-MISC杂项/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/2024/09/02/CTF-MISC杂项/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/2024/09/02/CTF-MISC杂项/34.png","4010e0abeb962759213178015ee9e9d2"],["/2024/09/02/CTF-MISC杂项/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/2024/09/02/CTF-MISC杂项/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/2024/09/02/CTF-MISC杂项/6.png","89da246e43ebbfdab47811875bccd2ae"],["/2024/09/02/CTF-MISC杂项/7.png","551ef643af504f9d22fda0085c200706"],["/2024/09/02/CTF-MISC杂项/8.png","e669c8a27a2bb300202df722b8e9354b"],["/2024/09/02/CTF-MISC杂项/9.png","44a9b3d8245ad8bea494519e99142e39"],["/2024/09/02/CTF-MISC杂项/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/2024/09/02/CTF-MISC杂项/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/2024/09/02/CTF-MISC杂项/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/2024/09/02/CTF-MISC杂项/index.html","b376fabbda6103dde1073bdf2a069895"],["/2024/09/02/CTF-PHP代码审计/index.html","7f146c816323279486930c22b19e6898"],["/2024/09/02/Javascript基础/index.html","bd28aa7d92c68f01940246c9bd116ad0"],["/2024/09/02/Linux基础/index.html","fd1bc341ae0773792e00a03fd60b079b"],["/2024/09/02/MySQL数据库基础/index.html","2cd073b66a5725294ae77ce64fcc87d7"],["/2024/09/02/PHP-MySQL「登录功能实现」/index.html","715bc4f4642f427cd1c9c2cba80f1211"],["/2024/09/02/PHP-使用预处理防止SQL注入/index.html","a4a06417bb2bec097ebd9523cf1db61a"],["/2024/09/02/STL库（一）-Vector/index.html","7487b063b09ccae423cfa6a23b38c0cc"],["/2024/09/02/STL库（二）-Pair-x-y/index.html","02eb3b880b09ce47b1c140f9b61528ae"],["/2024/09/02/Web安全-SQL注入/index.html","bbe9e5f5ea18ac721b9f44caf0fddc88"],["/2024/09/02/Web安全-XSS注入/index.html","fb11341c02c27e79e5481d2367801a9e"],["/2024/09/02/Web安全-信息收集/image-20240903184446288.png","bc4300b13c15c832ec9d449714c51a17"],["/2024/09/02/Web安全-信息收集/index.html","d6f74baf27ebea52fd9d2ed541e92794"],["/2024/09/02/Web安全-文件上传漏洞/1.png","318c463a0ab60f68b07b4757786cdb2d"],["/2024/09/02/Web安全-文件上传漏洞/2.png","39b1cfd14ad637ef47d9ce329eda3687"],["/2024/09/02/Web安全-文件上传漏洞/3.png","a311642dee0f36e85df522bdc5d91885"],["/2024/09/02/Web安全-文件上传漏洞/4.png","841bd0ddf6d8e5dd79c3301fd09969f1"],["/2024/09/02/Web安全-文件上传漏洞/click.png","20d6d8a082c16549831ff0584e198653"],["/2024/09/02/Web安全-文件上传漏洞/click2.png","0da275dba1cf379d7d9cf9af1a56b8a9"],["/2024/09/02/Web安全-文件上传漏洞/command.png","a07b04ee64ee04d55e9457eb2df9223f"],["/2024/09/02/Web安全-文件上传漏洞/connect.png","0c65c5dbaa9d7ee6e792861f3cd62c98"],["/2024/09/02/Web安全-文件上传漏洞/connect1.png","2f3cd2292882e5bb0fc5d476c3c5790a"],["/2024/09/02/Web安全-文件上传漏洞/eval.png","a2e810ddfbb9b698306584d415f6c371"],["/2024/09/02/Web安全-文件上传漏洞/html.png","aaeedfcf270d59eefd47f86054097e19"],["/2024/09/02/Web安全-文件上传漏洞/index.html","fe49517ef56ec3de5f16ceaee9d80478"],["/2024/09/02/Web安全-文件上传漏洞/terminal.png","1a63c50a49d29bade66a71b07f8b30e2"],["/2024/09/02/Web安全-文件上传漏洞/test.png","a2256c150a58df92d1b669cc7b1306e7"],["/2024/09/02/上清元道真经/index.html","6d29417cc27a91cfc20cfdd277df76b0"],["/2024/09/02/八大神咒/index.html","7c393ea91feca4fe8a40384b44c405c3"],["/2024/09/02/前后端交互-AJAX笔记/index.html","fb17f6a6a12af0cb4ec3f6a3877fc77a"],["/2024/09/02/后端开发-PHP基础/index.html","fdbdcef895c78d97400c9023286ea312"],["/2024/09/02/后端开发-Python「Flask模板」/index.html","e4c41ee82c85935683e443065e68907f"],["/2024/09/02/太上老君说常清净经/index.html","8e8a3c02fed408d5b73949d5d9cddc69"],["/2024/09/02/太乙金华宗旨「上」/index.html","60f05d87f181d5f106c2df65703fb621"],["/2024/09/02/太乙金华宗旨「下」/index.html","84986b03741d49b458838d0f76b975af"],["/2024/09/02/渔樵对问「上」/index.html","147eb757fc91233408968b455a51c1f6"],["/2024/09/02/渔樵对问「下」/index.html","35e965c91b220d3cc0b151b75d53ab93"],["/2024/09/02/皇帝阴符经/index.html","5566c97403005756b56ca43fa021dc03"],["/2024/09/02/黄帝内经「一」/index.html","39d3da979e58258524c50c48a14f1c21"],["/2024/09/04/网安队大纲/index.html","0b214680ee48f732c8083e39861c4c5d"],["/2024/09/09/全栈开发-Cookie验证/index.html","254099131d60a133132d118e35f9f924"],["/2024/09/09/前后端分离开发-JWT验证/index.html","2e5fbbe94f94cb97f7f4607512a58aa1"],["/2024/09/09/后端开发-Session验证/index.html","6aba3335fca5becd17862b490987cf53"],["/archives/2024/09/index.html","76fe07c321a823eaa12cda1b74dd88d7"],["/archives/2024/09/page/2/index.html","aa821aac95b7cf1d421e252fdde9163c"],["/archives/2024/09/page/3/index.html","38811fdcc5ad53fb3466fa81e3f836e2"],["/archives/2024/index.html","75d02bd2ccfc8a980b03ec88f7a19697"],["/archives/2024/page/2/index.html","30c92a259cfa99b075e4479abeafa924"],["/archives/2024/page/3/index.html","f77e9645e3d82addf8b2ba734dff81a9"],["/archives/index.html","b25ab48908b9540ca28b7be8d2850b4f"],["/archives/page/2/index.html","7bcd75234c94e1da3410a2432fb871fc"],["/archives/page/3/index.html","aab4d9cd6c28df807f53f3396f92fac4"],["/categories/index.html","d4b041274d3e8a02de65306d9405a3fa"],["/categories/玄门五术/index.html","16428fba05dd9f8aa1fc55e31073018a"],["/categories/道家经典/index.html","67aa7eda6e9b2983e191c0cbced244a9"],["/css/index.css","e4d82b2e31218485e96426c1c12ebad6"],["/css/mine.css","6d43f7ff7f995b3d178725d3fc1e8067"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1.jpg","6b37ae398f00d521b78ea0cc6f65ba6f"],["/img/10.jpg","6a2951940af53900232a0d7d72437809"],["/img/11.jpg","bc6f235bd928595d53d39cc6cc68c4e1"],["/img/12.jpg","e64f953235bffeb787693fe1b72c403e"],["/img/13.jpg","91d7080efc43aa5cb4899ab2b2602a86"],["/img/14.jpg","d18c380f89d19fdbedf4565de69d4c9a"],["/img/15.jpg","970b63d80ee7938ef32b5faadb977fb2"],["/img/16.jpg","d4937382cf77ab204b1fdbbc9b668453"],["/img/17.jpg","0f34085a9c8c2905c672da1318c45077"],["/img/18.jpg","2444b929e32bdb666fe42181fc16ec45"],["/img/19.jpg","5c0b95e0f25a5d5f936deaf2546816d0"],["/img/2.jpg","fbe3e1ab6d87741662af69e5519ee528"],["/img/20.jpg","0455dd37d0d612329714f34b5f49cdc9"],["/img/21.jpg","c937612b8fe0903e127556c04ca0aada"],["/img/22.jpg","5521b2e59339adf2930cc9e1adb74cf4"],["/img/23.jpg","d6739f910460e7d921877aa0761763c6"],["/img/24.jpg","2801dd07199606fd439e60799198e8dd"],["/img/25.jpg","dfae079806a707837e316dd4183c1857"],["/img/26.jpg","760b76caccc843dc333ec2dc49935a57"],["/img/27.jpg","d1bbf367f87863fa447691b78b5c703b"],["/img/28.jpg","0a011072745523efa30680cc25f79193"],["/img/3.jpg","748582a9e4afea930bbbfbe84def3f5a"],["/img/30.jpg","31a0e48bacdf4790b503f7d78220af2b"],["/img/32.jpg","af58bbbf73056abd1d6c7b2d8fcba14c"],["/img/33.jpg","42714b149d96ebcf94fdfa8a329723ea"],["/img/34.jpg","ec2afad7cee1ee6e4cdea4a8e7f5f2ec"],["/img/35.jpg","00c90b3cd8cf501eb20d7aaf0c1a2669"],["/img/4.jpg","f9c7906b46f16739dc952c89c024c66f"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","2a8ece86f32be46a2fad62d9956e6d7b"],["/img/6.jpg","f484a223cfcb97b0c3b8f237cda83da0"],["/img/7.jpg","dada9ea8abd01011003095775ec0fea2"],["/img/8.jpg","664cb3520a2d47f0424712d816a566ff"],["/img/avator.jpg","39a880389c759d2b70b8b6f33cefca2d"],["/img/favicon.png","8423b3728cf6badec63fc07e807f577c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.jpg","db9fd294c1afb374a5755a92a8d04108"],["/img/top.png","d266c4a87c29396fe7fc417cff63212a"],["/index.html","58e11b0a37e7f51b2e8479f5078aa4f9"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/sakuraPlus.js","1fdc142b25f0f8ba106ecd2522aac3ea"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","19bcdcdf5bb8c8ed93da8c134f996632"],["/page/3/index.html","10f2e517db774578e711de2207ca62ee"],["/sw-register.js","75aa9684ca1991f6696be7dc985d58ee"],["/tags/AJAX/index.html","13be1429d3c1d2690e3158c0355c1919"],["/tags/C/index.html","907dfa18e98947ea9a22106ffff91cfc"],["/tags/CTF/index.html","03b9b8a55dd2a250dba7c582a9827c80"],["/tags/Cookie/index.html","4ea49cbe2ae71e16fb65513badb98d09"],["/tags/Flask/index.html","7cb7eae1568b6725edeee2f43186ebb2"],["/tags/MISC/index.html","5e2741101adba209e7f5fde11d87b1ce"],["/tags/MySQL/index.html","54dbccc9b172f2fe2aa585cecaf289a1"],["/tags/PHP/index.html","62f09ab10a20b8808b6c8c65ed959163"],["/tags/Python/index.html","c393a2a2f808ca167bb330ee8359a95f"],["/tags/STL/index.html","4abbe6ad922967f2bb6522b4f77b5f96"],["/tags/Session/index.html","32663a9da37251a48730fd67563aaaa1"],["/tags/Web安全/index.html","4df512dee8c57f1bda91777b3d30e17d"],["/tags/代码审计/index.html","e5364ceae2720f3dff797e890f1b8f87"],["/tags/前后端分离/index.html","0707a03c7562839b183e7ed186bc11cf"],["/tags/前端开发/index.html","9990601888b6077aa5df621fd316191f"],["/tags/医术/index.html","22247772d7d84b71ece09bc97b5121cc"],["/tags/卜术/index.html","42d2c8008032cc9a2ec87f20c84c378a"],["/tags/后端开发/index.html","5af5d979651abfb747fe8e60997bb495"],["/tags/山术/index.html","ef873b804816eeb8708f540674290c77"],["/tags/杂项/index.html","eba13b423715e7dc6cbe894c5569a9fd"],["/tags/算法/index.html","b69c2800a5f6f3d98c2ab60882dbcf34"],["/tags/计算机/index.html","d0417deceeda6a9461831a71347ab04a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
