/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/09/02/CTF-MISC杂项/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/2024/09/02/CTF-MISC杂项/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/2024/09/02/CTF-MISC杂项/11.png","632743aa25dd12abd402b9cbd07922db"],["/2024/09/02/CTF-MISC杂项/12.png","f234877bfb7b8c589922442b3ac34230"],["/2024/09/02/CTF-MISC杂项/13.png","409afcfab151d464fc9b0f72fba0a024"],["/2024/09/02/CTF-MISC杂项/14.png","1d5586234c96048e17ad23833d85351e"],["/2024/09/02/CTF-MISC杂项/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/2024/09/02/CTF-MISC杂项/16.png","0e75817718fbec22671ca7640d0d14bf"],["/2024/09/02/CTF-MISC杂项/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/2024/09/02/CTF-MISC杂项/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/2024/09/02/CTF-MISC杂项/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/2024/09/02/CTF-MISC杂项/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/2024/09/02/CTF-MISC杂项/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/2024/09/02/CTF-MISC杂项/21.png","1f71f461f3633cd57c6269411fe29be7"],["/2024/09/02/CTF-MISC杂项/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/2024/09/02/CTF-MISC杂项/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/2024/09/02/CTF-MISC杂项/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/2024/09/02/CTF-MISC杂项/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/2024/09/02/CTF-MISC杂项/26.png","828502176f804a0a06d9f582ea27b88e"],["/2024/09/02/CTF-MISC杂项/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/2024/09/02/CTF-MISC杂项/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/2024/09/02/CTF-MISC杂项/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/2024/09/02/CTF-MISC杂项/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/2024/09/02/CTF-MISC杂项/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/2024/09/02/CTF-MISC杂项/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/2024/09/02/CTF-MISC杂项/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/2024/09/02/CTF-MISC杂项/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/2024/09/02/CTF-MISC杂项/34.png","4010e0abeb962759213178015ee9e9d2"],["/2024/09/02/CTF-MISC杂项/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/2024/09/02/CTF-MISC杂项/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/2024/09/02/CTF-MISC杂项/6.png","89da246e43ebbfdab47811875bccd2ae"],["/2024/09/02/CTF-MISC杂项/7.png","551ef643af504f9d22fda0085c200706"],["/2024/09/02/CTF-MISC杂项/8.png","e669c8a27a2bb300202df722b8e9354b"],["/2024/09/02/CTF-MISC杂项/9.png","44a9b3d8245ad8bea494519e99142e39"],["/2024/09/02/CTF-MISC杂项/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/2024/09/02/CTF-MISC杂项/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/2024/09/02/CTF-MISC杂项/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/2024/09/02/CTF-MISC杂项/index.html","28f5e2d89d8a48c69d6442d1f11a087f"],["/2024/09/02/CTF-PHP代码审计/index.html","293f9eb56a4515c847bf4596820f994d"],["/2024/09/02/Javascript基础/index.html","537d3ef23614d515bcf8d1c8df78931e"],["/2024/09/02/Linux基础/index.html","02a76b250ea55d1f93a9a47f89933098"],["/2024/09/02/MySQL数据库基础/index.html","04c06b1ae326ae9f0759a1003cc571e8"],["/2024/09/02/PHP-MySQL「登录功能实现」/index.html","4b86d79aa6dd1cb3f3ce9f4fc72b90c3"],["/2024/09/02/PHP-使用预处理防止SQL注入/index.html","9addf7bac7f17d9283d12aba8097af61"],["/2024/09/02/STL库（一）-Vector/index.html","dd66f723665df5485317281a006f5220"],["/2024/09/02/STL库（二）-Pair-x-y/index.html","18680baf3e31f9c28d24b5b53a3b9a51"],["/2024/09/02/Web安全-SQL注入/index.html","57fa54d871616bc50e995a53842d862a"],["/2024/09/02/Web安全-XSS注入/index.html","58850b092c075c0c1b31ec81fc101468"],["/2024/09/02/Web安全-信息收集/image-20240903184446288.png","bc4300b13c15c832ec9d449714c51a17"],["/2024/09/02/Web安全-信息收集/index.html","cb0a3a23b4646884d9093d9435d04dda"],["/2024/09/02/Web安全-文件上传漏洞/1.png","318c463a0ab60f68b07b4757786cdb2d"],["/2024/09/02/Web安全-文件上传漏洞/2.png","39b1cfd14ad637ef47d9ce329eda3687"],["/2024/09/02/Web安全-文件上传漏洞/3.png","a311642dee0f36e85df522bdc5d91885"],["/2024/09/02/Web安全-文件上传漏洞/4.png","841bd0ddf6d8e5dd79c3301fd09969f1"],["/2024/09/02/Web安全-文件上传漏洞/click.png","20d6d8a082c16549831ff0584e198653"],["/2024/09/02/Web安全-文件上传漏洞/click2.png","0da275dba1cf379d7d9cf9af1a56b8a9"],["/2024/09/02/Web安全-文件上传漏洞/command.png","a07b04ee64ee04d55e9457eb2df9223f"],["/2024/09/02/Web安全-文件上传漏洞/connect.png","0c65c5dbaa9d7ee6e792861f3cd62c98"],["/2024/09/02/Web安全-文件上传漏洞/connect1.png","2f3cd2292882e5bb0fc5d476c3c5790a"],["/2024/09/02/Web安全-文件上传漏洞/eval.png","a2e810ddfbb9b698306584d415f6c371"],["/2024/09/02/Web安全-文件上传漏洞/html.png","aaeedfcf270d59eefd47f86054097e19"],["/2024/09/02/Web安全-文件上传漏洞/index.html","35c6e1cdc64560f846dc1f80cc097939"],["/2024/09/02/Web安全-文件上传漏洞/terminal.png","1a63c50a49d29bade66a71b07f8b30e2"],["/2024/09/02/Web安全-文件上传漏洞/test.png","a2256c150a58df92d1b669cc7b1306e7"],["/2024/09/02/上清元道真经/index.html","2c0ea1ecfc0489aaae5f01e496d4f569"],["/2024/09/02/八大神咒/index.html","a661b325a31a2b84f24a1946b8d0c3cb"],["/2024/09/02/前后端交互-AJAX笔记/index.html","125f35c8fe6c01a4a1713a47ac8192e7"],["/2024/09/02/后端开发-PHP基础/index.html","e977990b30da6ead1d5613dcafc56c18"],["/2024/09/02/后端开发-Python「Flask模板」/index.html","259f80dee29e88f615a0ee2ea895f6a4"],["/2024/09/02/太上老君说常清净经/index.html","bf69551cbbdd2a3354fdd4c5f22dbeb2"],["/2024/09/02/太乙金华宗旨「上」/index.html","68867d5daba64156132484ca6dc04dd7"],["/2024/09/02/太乙金华宗旨「下」/index.html","82d1abd0885738a9d83351f778d1e267"],["/2024/09/02/渔樵对问「上」/index.html","cb019ab9260a7492855468793c5b420a"],["/2024/09/02/渔樵对问「下」/index.html","9e18bd5c6f7da4ec42c40bd13c642696"],["/2024/09/02/皇帝阴符经/index.html","d5eb06055f8a6f41817c4ab8c97578d6"],["/2024/09/02/黄帝内经「一」/index.html","77b6febd1986519674dacf209aee00b0"],["/archives/2024/09/index.html","bf0881ad39b4ad7e8a68ca8acc01b501"],["/archives/2024/09/page/2/index.html","bf16c339434c57f15b8bd1d0b317ea60"],["/archives/2024/09/page/3/index.html","a3562aade8395fc5a5cae017bf7a1be8"],["/archives/2024/index.html","e331251dfeb332689331ffdf1ed25384"],["/archives/2024/page/2/index.html","94c9a4659516ce2b315e8e2184fa712f"],["/archives/2024/page/3/index.html","accd01a197705ecad37b6c7e8b385256"],["/archives/index.html","1ae2eb2c32e9d2bea4a7fb40b059270e"],["/archives/page/2/index.html","6b2d6375395bd478a62154be5b6dffb2"],["/archives/page/3/index.html","8c3c51b1d68da4369950f6783666c6e3"],["/categories/index.html","02e5056495c09772f9d4c82adee2b49d"],["/categories/玄门五术/index.html","45f87fcdbf90e24fe192faa25ffe3a71"],["/categories/道家经典/index.html","37bb512bb157150f94ffe331dcaadea0"],["/css/index.css","e4d82b2e31218485e96426c1c12ebad6"],["/css/mine.css","6d43f7ff7f995b3d178725d3fc1e8067"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1.jpg","00f048436ea63d52faaf2d7deef670a3"],["/img/11.jpg","6a2951940af53900232a0d7d72437809"],["/img/12.jpg","bc6f235bd928595d53d39cc6cc68c4e1"],["/img/13.jpg","e64f953235bffeb787693fe1b72c403e"],["/img/14.jpg","91d7080efc43aa5cb4899ab2b2602a86"],["/img/15.jpg","d18c380f89d19fdbedf4565de69d4c9a"],["/img/16.jpg","970b63d80ee7938ef32b5faadb977fb2"],["/img/17.jpg","d4937382cf77ab204b1fdbbc9b668453"],["/img/18.jpg","0f34085a9c8c2905c672da1318c45077"],["/img/19.jpg","2444b929e32bdb666fe42181fc16ec45"],["/img/2.jpg","6b37ae398f00d521b78ea0cc6f65ba6f"],["/img/20.jpg","5c0b95e0f25a5d5f936deaf2546816d0"],["/img/21.jpg","0455dd37d0d612329714f34b5f49cdc9"],["/img/22.jpg","c937612b8fe0903e127556c04ca0aada"],["/img/23.jpg","5521b2e59339adf2930cc9e1adb74cf4"],["/img/24.jpg","d6739f910460e7d921877aa0761763c6"],["/img/25.jpg","2801dd07199606fd439e60799198e8dd"],["/img/26.jpg","dfae079806a707837e316dd4183c1857"],["/img/27.jpg","760b76caccc843dc333ec2dc49935a57"],["/img/28.jpg","d1bbf367f87863fa447691b78b5c703b"],["/img/3.jpg","fbe3e1ab6d87741662af69e5519ee528"],["/img/4.jpg","748582a9e4afea930bbbfbe84def3f5a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","f9c7906b46f16739dc952c89c024c66f"],["/img/6.jpg","2a8ece86f32be46a2fad62d9956e6d7b"],["/img/7.jpg","f484a223cfcb97b0c3b8f237cda83da0"],["/img/8.jpg","dada9ea8abd01011003095775ec0fea2"],["/img/9.jpg","664cb3520a2d47f0424712d816a566ff"],["/img/avator.jpg","39a880389c759d2b70b8b6f33cefca2d"],["/img/favicon.png","8423b3728cf6badec63fc07e807f577c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.jpg","db9fd294c1afb374a5755a92a8d04108"],["/img/top.png","d266c4a87c29396fe7fc417cff63212a"],["/index.html","b2254eb52e51c253916c8c057679a501"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/sakuraPlus.js","1fdc142b25f0f8ba106ecd2522aac3ea"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","8b551ce47afe77727f38ff2fef39264b"],["/page/3/index.html","f9b6d885d43646367c0dd182bc0cacd9"],["/sw-register.js","d5f848552389cd3ab5ba532c51c7e2d2"],["/tags/AJAX/index.html","e1b2ec47e43e7abb1575034b92b5c90a"],["/tags/C/index.html","22a79c7fae32794506b94616d712e8a8"],["/tags/CTF/index.html","3deece6c8d788118486f143a458b2089"],["/tags/Flask/index.html","9d5ad21f0df6d41695a16be713fc5747"],["/tags/MISC/index.html","52b7a8663bf29ba7c885f15629cd8aac"],["/tags/MySQL/index.html","a85b2b755526d4aad17970e1c9d690b2"],["/tags/PHP/index.html","5d49f11c9e4af05d10546ca6f13ae18a"],["/tags/Python/index.html","4768f3a92bc740113bbccdba264251ff"],["/tags/STL/index.html","d71b95dab57451930061675e90474e30"],["/tags/Web安全/index.html","e66672d66b782504aca9dd94ca314ff0"],["/tags/代码审计/index.html","e0f245a71af4a416e90eaae42ca50b10"],["/tags/前端开发/index.html","0dac081513588ab1440d0b564e6246af"],["/tags/医术/index.html","a7faf103343be4f3d3ea4c98db924ab6"],["/tags/卜术/index.html","208857d27475f4043a1e0969b49473e7"],["/tags/后端开发/index.html","aaefd9a2699683bf2529a3cb04567fbb"],["/tags/山术/index.html","829d877976d499cbe52cd1bc5c6a9588"],["/tags/算法/index.html","4fc3104bf3ef7fc924cd1ce61e566ee6"],["/tags/计算机/index.html","327cc7ddc23bbfa093092f1b028eb447"]];
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
