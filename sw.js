/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/09/02/CTF-MISC杂项/1.png","f806e5a03bf4b1f3e094e911a33c1718"],["/2024/09/02/CTF-MISC杂项/10.png","02b9a37a926c34af8ac79b5f05f58a0a"],["/2024/09/02/CTF-MISC杂项/11.png","632743aa25dd12abd402b9cbd07922db"],["/2024/09/02/CTF-MISC杂项/12.png","f234877bfb7b8c589922442b3ac34230"],["/2024/09/02/CTF-MISC杂项/13.png","409afcfab151d464fc9b0f72fba0a024"],["/2024/09/02/CTF-MISC杂项/14.png","1d5586234c96048e17ad23833d85351e"],["/2024/09/02/CTF-MISC杂项/15.png","ff22ca281a23f0269d05057ff6c2ecf5"],["/2024/09/02/CTF-MISC杂项/16.png","0e75817718fbec22671ca7640d0d14bf"],["/2024/09/02/CTF-MISC杂项/17.png","ce8576c8a1a71aa4ccc3bb88fc297b01"],["/2024/09/02/CTF-MISC杂项/18.png","8567a521a781fa53ef1b8e59910a73c8"],["/2024/09/02/CTF-MISC杂项/19.png","0dcd88318e0112a722be0d39a25d39ff"],["/2024/09/02/CTF-MISC杂项/2.png","7bff1e33ee38aca7bbefd9d7e42f44c1"],["/2024/09/02/CTF-MISC杂项/20.png","bc3aa2163c7575ff07257de1f24d56c4"],["/2024/09/02/CTF-MISC杂项/21.png","1f71f461f3633cd57c6269411fe29be7"],["/2024/09/02/CTF-MISC杂项/22.png","0bcffbc294aacf22f3391d41704bcc0c"],["/2024/09/02/CTF-MISC杂项/23.png","29a636d1b023f6b46992c6cc30eb2dfa"],["/2024/09/02/CTF-MISC杂项/24.png","f464a729d128f9d3a51c86853bbad6a2"],["/2024/09/02/CTF-MISC杂项/25.png","5e6cc7ef1f56c93e6f9f8f52f9b816b8"],["/2024/09/02/CTF-MISC杂项/26.png","828502176f804a0a06d9f582ea27b88e"],["/2024/09/02/CTF-MISC杂项/27.png","4ad45dfd523d5423e1ffd435cd9d4e53"],["/2024/09/02/CTF-MISC杂项/28.png","48c72736ede7f65dedf9f0255dcb829a"],["/2024/09/02/CTF-MISC杂项/29.png","f4d70c2c005d93c00ca766f81bbea860"],["/2024/09/02/CTF-MISC杂项/3.png","ec90b5ba44f203bff174b672c2a0bf02"],["/2024/09/02/CTF-MISC杂项/30.png","4ed384e21a1f139a9b73cee1f6fef0b0"],["/2024/09/02/CTF-MISC杂项/31.png","bad547262c9cc4ed8d9ad247ee9fb1e7"],["/2024/09/02/CTF-MISC杂项/32.png","53049f32ae330f9acf8fd77a6df1afb0"],["/2024/09/02/CTF-MISC杂项/33.png","d358f43cfdc13f8d4a317e44d4fcf886"],["/2024/09/02/CTF-MISC杂项/34.png","4010e0abeb962759213178015ee9e9d2"],["/2024/09/02/CTF-MISC杂项/4.png","ecb05a3101ac2d78e894be7caa66aea7"],["/2024/09/02/CTF-MISC杂项/5.png","7328b242197e1f9bc36b7f9c612a6926"],["/2024/09/02/CTF-MISC杂项/6.png","89da246e43ebbfdab47811875bccd2ae"],["/2024/09/02/CTF-MISC杂项/7.png","551ef643af504f9d22fda0085c200706"],["/2024/09/02/CTF-MISC杂项/8.png","e669c8a27a2bb300202df722b8e9354b"],["/2024/09/02/CTF-MISC杂项/9.png","44a9b3d8245ad8bea494519e99142e39"],["/2024/09/02/CTF-MISC杂项/Mouse_Key2.png","ec4bb6b1d4e0883f3b788e859cc4675b"],["/2024/09/02/CTF-MISC杂项/Mouse_key.png","13262224ee9602080f63e2be93bf8b15"],["/2024/09/02/CTF-MISC杂项/aaaaa.png","d0f7ca3aea208c2fff412551c1bbf1d4"],["/2024/09/02/CTF-MISC杂项/index.html","b37a47be7b6aee4b51cf59fe89e7de8d"],["/2024/09/02/CTF-PHP代码审计/index.html","aa1a0c2ab4c03eafcc3f85ed1b926293"],["/2024/09/02/Javascript基础/index.html","d6ddb219e881c5f9c0738e07be54f69e"],["/2024/09/02/Linux基础/index.html","837c5c895404c374e8a85b7fe2803f23"],["/2024/09/02/MySQL数据库基础/index.html","44eef069374190186aa3ddd6ca0e4351"],["/2024/09/02/PHP-MySQL「登录功能实现」/index.html","df35d484bda6afecd15c60443ee32b5a"],["/2024/09/02/PHP-使用预处理防止SQL注入/index.html","fa9ece4cf83477ed70458018bf8d7f35"],["/2024/09/02/STL库（一）-Vector/index.html","ac7da1ceef798dbe4a154fbe5f88a73e"],["/2024/09/02/STL库（二）-Pair-x-y/index.html","08bcb89d6e798341676aa3ad6292c689"],["/2024/09/02/Web安全-SQL注入/index.html","e703e6b827cf79ad9a3645f536db67b5"],["/2024/09/02/Web安全-XSS注入/index.html","b8777a922f16cc22196959dd09b89c7a"],["/2024/09/02/Web安全-信息收集/image-20240903184446288.png","bc4300b13c15c832ec9d449714c51a17"],["/2024/09/02/Web安全-信息收集/index.html","b340b6a9345439fd8805d30c323e5bd3"],["/2024/09/02/Web安全-文件上传漏洞/1.png","318c463a0ab60f68b07b4757786cdb2d"],["/2024/09/02/Web安全-文件上传漏洞/2.png","39b1cfd14ad637ef47d9ce329eda3687"],["/2024/09/02/Web安全-文件上传漏洞/3.png","a311642dee0f36e85df522bdc5d91885"],["/2024/09/02/Web安全-文件上传漏洞/4.png","841bd0ddf6d8e5dd79c3301fd09969f1"],["/2024/09/02/Web安全-文件上传漏洞/click.png","20d6d8a082c16549831ff0584e198653"],["/2024/09/02/Web安全-文件上传漏洞/click2.png","0da275dba1cf379d7d9cf9af1a56b8a9"],["/2024/09/02/Web安全-文件上传漏洞/command.png","a07b04ee64ee04d55e9457eb2df9223f"],["/2024/09/02/Web安全-文件上传漏洞/connect.png","0c65c5dbaa9d7ee6e792861f3cd62c98"],["/2024/09/02/Web安全-文件上传漏洞/connect1.png","2f3cd2292882e5bb0fc5d476c3c5790a"],["/2024/09/02/Web安全-文件上传漏洞/eval.png","a2e810ddfbb9b698306584d415f6c371"],["/2024/09/02/Web安全-文件上传漏洞/html.png","aaeedfcf270d59eefd47f86054097e19"],["/2024/09/02/Web安全-文件上传漏洞/index.html","cb27b6a556f2345803318fc7106198d8"],["/2024/09/02/Web安全-文件上传漏洞/terminal.png","1a63c50a49d29bade66a71b07f8b30e2"],["/2024/09/02/Web安全-文件上传漏洞/test.png","a2256c150a58df92d1b669cc7b1306e7"],["/2024/09/02/八大神咒/index.html","16a35b5bd55394ebfba460906fb10b59"],["/2024/09/02/前后端交互-AJAX笔记/index.html","ef05105db65f6b60076aa4f8f55dc702"],["/2024/09/02/后端开发-PHP基础/index.html","14b4bad34759075525a599d265404ec9"],["/2024/09/02/太上老君说常清静经/index.html","6bb7f56a9d7bca6c99e0c3093c618f01"],["/2024/09/02/太乙金华宗旨「上」/index.html","8925eb55776d468281a31122a58dafc7"],["/2024/09/02/太乙金华宗旨「下」/index.html","dc8789be87e51dd838451c96065880f2"],["/2024/09/02/太清元道真经/index.html","5b3b7d88c7fa08dc7285d86c96ce5165"],["/2024/09/02/渔樵对问「上」/index.html","c17034c7ef8a4a37138959099ec4cffd"],["/2024/09/02/渔樵对问「下」/index.html","135c3dd2252185a6878ddb0b333fa9b9"],["/2024/09/02/皇帝阴符经/index.html","20ee3ad5f00735e8c0bb2f08dbc83521"],["/2024/09/02/黄帝内经「一」/index.html","5a680ca35690bcd7250bb0ebedaf5f34"],["/2024/09/04/网安队大纲/index.html","e0107e3650fbc0907449a39cd1ceaaa2"],["/2024/09/09/全栈开发-Cookie验证/index.html","f9eec3dd08bd47f6434af9e0d202b439"],["/2024/09/09/前后端分离开发-JWT验证/index.html","d475f439dae8fe905ba0c620e421ce86"],["/2024/09/09/后端开发-Session验证/index.html","95e62fe90bdb1f34e06b6b8517615d79"],["/2024/09/23/PHP代码审计-序列化与反序列化/image-20240923102429809.png","f67e42a96cd8da9b4e930b9540d6a83f"],["/2024/09/23/PHP代码审计-序列化与反序列化/index.html","ee9eaa6cad90e8e271383ec4e9e9b29c"],["/2024/09/28/CTF常用工具/index.html","c04ea07b4384afb6a33ed6d3c6ce79ed"],["/2024/10/02/后端开发-Python「Flask框架」/index.html","865b18181735ef5294f5a43cc53798e5"],["/2024/10/07/清微道法枢纽-雷法/image-20241007193355976.png","1c99c86b6e758ff3573ae83d1f58e967"],["/2024/10/07/清微道法枢纽-雷法/index.html","1ef68de932b2caf54dc2fabe2c980d01"],["/2024/10/12/课程链接分享/index.html","15351aa2edd0562714f977324a4fca18"],["/WriteUp/index.html","2cc661be061138c19a51a582d41caee8"],["/archives/2024/09/index.html","70a6bb8b16df3d179c6611e7bb9b07c3"],["/archives/2024/09/page/2/index.html","d795bea6ee681773a4f73d0875104e6f"],["/archives/2024/09/page/3/index.html","3b0051357dab6a250f6f20c373842428"],["/archives/2024/10/index.html","ad7021f0bcc35a0454f4291e1c68ff9e"],["/archives/2024/index.html","c2631a84f0750111a30b9611cb943e23"],["/archives/2024/page/2/index.html","51be268970fc53256ada6f3d6348400e"],["/archives/2024/page/3/index.html","0c82274181ace7d974609344f727f19c"],["/archives/2024/page/4/index.html","c9938cb5d158cf372cc4be6bd61b8303"],["/archives/index.html","ced974e8033c1b2212e93bd586d64a2e"],["/archives/page/2/index.html","4d272bee3c2b23b297e12e1d28e60705"],["/archives/page/3/index.html","c7048fcf455252737181566af7b5aae2"],["/archives/page/4/index.html","25a46e66cdcd18c00120f503f338e0e4"],["/categories/index.html","1b54b058009a0254d079907dff8bad60"],["/categories/玄门五术/index.html","dc7bb84f45b64d09ea819a22eb549c43"],["/categories/道家经典/index.html","9f416e851587ffce664827a2820d91ed"],["/css/index.css","e4d82b2e31218485e96426c1c12ebad6"],["/css/mine.css","6d43f7ff7f995b3d178725d3fc1e8067"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/10.jpg","0017c0178994589053d519a902bc011f"],["/img/11.jpg","d9327b01246a311afd896d388f928bec"],["/img/12.png","38f41073a455475b49c1819f37b0c91c"],["/img/13.jpg","754af80ea380965d27bff8cc04bdbabe"],["/img/14.png","c72ac4590635ca077aaef11dde175c92"],["/img/15.jpg","d802ceb58385abbbffdd1e89781f852d"],["/img/16.jpg","e645e65beaec13986cbe0a4a07888317"],["/img/17.jpg","1bff6253862fad08e72c7ce6b48666e2"],["/img/18.png","614cf6e272432492f9bdd52e0d132816"],["/img/19.jpg","8b37d3bdafe1653f1ea726c55ec67f7c"],["/img/2.png","c61ab6feb905386e9a7be0fe29c257de"],["/img/22.jpg","0d3b1fa8e65c725a0542e3246a5e3202"],["/img/23.jpg","259472f235e1dc160562687c164f7fec"],["/img/24.png","2bb831c8a9b71d8d258b36fe5150e05d"],["/img/25.png","284e795c4ecb773215ede897638d07b1"],["/img/26.png","06094401901ad61a2e71526508e8f58c"],["/img/27.jpg","b6c214316a61c3956ca7a549d7c383f5"],["/img/28.png","99a06c1ffa5fad2cc5973c3d1bbe6f97"],["/img/29.jpg","c361a8f66a6de038ce20304f287c0c4a"],["/img/4.jpg","90b40b5d95fc1fc9b35cee44162acd5b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/5.jpg","cf5e3a949f51584482f3750aed63ef33"],["/img/6.png","200cc96e5d9ef16c49dcadfb5ca3ff03"],["/img/7.png","5454bcc43e08be49bde6cb09d877b444"],["/img/8.jpg","db2503745e51bc7de6da0147ad9124b8"],["/img/9.jpg","65cb0f3facd5791af0a42ec16e9f6f05"],["/img/avator.jpg","39a880389c759d2b70b8b6f33cefca2d"],["/img/favicon.png","8423b3728cf6badec63fc07e807f577c"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index_img.jpg","a662930e0208cd91ed1b84ed3d4f77c9"],["/img/top.png","d266c4a87c29396fe7fc417cff63212a"],["/index.html","9021720cff72c9bc64f11ce89f40862c"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/sakuraPlus.js","1fdc142b25f0f8ba106ecd2522aac3ea"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/page/2/index.html","6a20c22ece20185c4b14845153bce25a"],["/page/3/index.html","2e54d9b697d89a01c847d6dcfe6dcdf2"],["/page/4/index.html","1e58e38d592726110a431e1b2fb28e9e"],["/sw-register.js","7f0326ba7a0eb192a1d2a58164ff4d63"],["/tags/AJAX/index.html","7088c8e5fce83e0729fb0e1be0e393d7"],["/tags/C/index.html","2cfdbc40762daafe7f0043fc6b5e0205"],["/tags/CTF/index.html","60539962229318399d30e2803fba1a1d"],["/tags/Cookie/index.html","953e3f5671a20d174da2eb27ad5d6250"],["/tags/Flask/index.html","32dbae39907df3ccc9e14945d7f997d6"],["/tags/MISC/index.html","a286f90ae17edb286d88f2a70a66cf45"],["/tags/MySQL/index.html","e6af4ebab51ff44ab8021939bcba58fb"],["/tags/PHP/index.html","d171c8f008bdce3a2416680d7b00df76"],["/tags/Python/index.html","e3e255b9897daedbd4da76828fe9d473"],["/tags/STL/index.html","a506fa8ff85eda17217bb5c7fc24b77a"],["/tags/Session/index.html","1a36217eff59109d9672878247bd0d91"],["/tags/Web安全/index.html","921b6c0e327f0ad921e14d457b1a19ec"],["/tags/index.html","d00c8f51d444b3e58bd9ad920c1d4034"],["/tags/代码审计/index.html","61cf693e1998df0688bb1e5ccc279d8c"],["/tags/前后端分离/index.html","26259d949c9d1694eaf9017a0064b24f"],["/tags/前端开发/index.html","166d2e55eacb63d576d9ae2e900aa6ea"],["/tags/医术/index.html","d3138cafb8fb73135a5ab6bfffb89193"],["/tags/卜术/index.html","2218404925ccfc16082f8c295c0be00a"],["/tags/后端开发/index.html","aa974bffce69e852311014239523adda"],["/tags/山术/index.html","6bea2e65632728defc2fe37b5cfbd266"],["/tags/杂项/index.html","343fee4213fdafbdd955c527df7edaa6"],["/tags/算法/index.html","829c2cf4fe114366ea8bfde3e28c2d9a"],["/tags/计算机/index.html","86bd917303e9802cbba678a141bd93eb"]];
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
