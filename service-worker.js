/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e84caa9c12d67633fbcda881a5396d76"
  },
  {
    "url": "algorithm/algos/array_best.html",
    "revision": "ffb76e790ce80e4b96b45fa352866cc2"
  },
  {
    "url": "algorithm/algos/greedy.html",
    "revision": "5ff1f812641bf38c68b53566734ea43b"
  },
  {
    "url": "algorithm/algos/linked.html",
    "revision": "f62232463334549e43017201aae7e7e7"
  },
  {
    "url": "algorithm/algos/string.html",
    "revision": "7989566d348c5a525d594b879c97ca1f"
  },
  {
    "url": "algorithm/algos/tree.html",
    "revision": "7cafc3c0f6c3d04573cec603d6bdaf5f"
  },
  {
    "url": "algorithm/components/array.html",
    "revision": "4aa596ac5a07a9eca16cfd69c8f1ef5c"
  },
  {
    "url": "algorithm/components/linked.html",
    "revision": "ffeec8105a6e9dc5da991dcd79ea9b59"
  },
  {
    "url": "algorithm/components/queue.html",
    "revision": "e4a2cc81251a41fa87ea67a0569740c8"
  },
  {
    "url": "algorithm/components/sort.html",
    "revision": "88d5d211db1a10ff5ce390036bf31b40"
  },
  {
    "url": "algorithm/components/string.html",
    "revision": "fefbf33149624197b3b2101aca5a1d29"
  },
  {
    "url": "algorithm/components/tree.html",
    "revision": "254430ed250d7fb578122640338d45ab"
  },
  {
    "url": "algorithm/index.html",
    "revision": "ce68cdcf50fb2ef05c00f0c62d739606"
  },
  {
    "url": "assets/css/0.styles.7a8c588f.css",
    "revision": "53a0744ac5e5059fe09f4bdca52ab508"
  },
  {
    "url": "assets/img/1.1e5a598c.png",
    "revision": "1e5a598c87ad18ebe1d5c3f885e25862"
  },
  {
    "url": "assets/img/1.633739e7.png",
    "revision": "633739e757ba78505e0712640a793c09"
  },
  {
    "url": "assets/img/1.8f705274.png",
    "revision": "8f705274d5b8727f231ac1b5bb2577f7"
  },
  {
    "url": "assets/img/1.a564d2fe.png",
    "revision": "a564d2fe577949771053a84e06fe951b"
  },
  {
    "url": "assets/img/1.bca330de.png",
    "revision": "bca330debdc6d93aac54b671e1b74411"
  },
  {
    "url": "assets/img/1.ce78fa55.png",
    "revision": "ce78fa552b5a629bff154b0a53e1d7c5"
  },
  {
    "url": "assets/img/11.495d7697.png",
    "revision": "495d7697c1bbea26503c0b9d22a954f9"
  },
  {
    "url": "assets/img/12.4460b1ce.png",
    "revision": "4460b1ce8165e7cda29b5e23b5018ceb"
  },
  {
    "url": "assets/img/13.d79ee3b0.png",
    "revision": "d79ee3b0a34a31365547100d9d9f4de2"
  },
  {
    "url": "assets/img/14.388e651d.png",
    "revision": "388e651d180acca0e6ba5560ef7f8fef"
  },
  {
    "url": "assets/img/15.b5c2be73.png",
    "revision": "b5c2be73db11058f3363506250499ce1"
  },
  {
    "url": "assets/img/16.b9d03673.png",
    "revision": "b9d03673ae4ec69f12e0a5e84e88cc94"
  },
  {
    "url": "assets/img/17.2b368b25.png",
    "revision": "2b368b2511ef22942fac10e339332d28"
  },
  {
    "url": "assets/img/18.48449d66.png",
    "revision": "48449d66794c37ee0182ef846f83e363"
  },
  {
    "url": "assets/img/19.c72fa0d1.png",
    "revision": "c72fa0d11e77f697ed986894f4b5601d"
  },
  {
    "url": "assets/img/2.1b85cfb6.png",
    "revision": "1b85cfb6ce1a778a8623a8752a704306"
  },
  {
    "url": "assets/img/2.ab9afd2c.png",
    "revision": "ab9afd2ca7604654d9c65c15d0d93c9f"
  },
  {
    "url": "assets/img/2.dcb426c4.png",
    "revision": "dcb426c41434f3c0b5d064c997d33ce7"
  },
  {
    "url": "assets/img/2.f2eb95fe.png",
    "revision": "f2eb95fe6346576d70dd7b8c3a38fbed"
  },
  {
    "url": "assets/img/20.bac45c08.png",
    "revision": "bac45c0857c5dc604f8186f752af135a"
  },
  {
    "url": "assets/img/21.d25b9794.png",
    "revision": "d25b9794a358cdcd85ce8b978534374c"
  },
  {
    "url": "assets/img/22.02ee716e.png",
    "revision": "02ee716e8122997a3ca0ad560b606af5"
  },
  {
    "url": "assets/img/23.800bf85f.png",
    "revision": "800bf85f681f32ad11bcf6aa354a5083"
  },
  {
    "url": "assets/img/24.0b314363.png",
    "revision": "0b314363cea0b9b98cd526275daad45b"
  },
  {
    "url": "assets/img/25.0875d80f.png",
    "revision": "0875d80f9426306a8cb6c96dd42d1f8a"
  },
  {
    "url": "assets/img/26.bb73be60.png",
    "revision": "bb73be60fe26c86464e54f4385398a67"
  },
  {
    "url": "assets/img/29.ec596926.png",
    "revision": "ec596926d9cbf86cdf4b51486054ffdb"
  },
  {
    "url": "assets/img/3.662b8c3a.png",
    "revision": "662b8c3aaef706d87e22505e54733586"
  },
  {
    "url": "assets/img/3.93e887ca.png",
    "revision": "93e887ca0f2d088b642d76e072a37044"
  },
  {
    "url": "assets/img/30.0875d80f.png",
    "revision": "0875d80f9426306a8cb6c96dd42d1f8a"
  },
  {
    "url": "assets/img/4.30e02ae4.png",
    "revision": "30e02ae44ceeecbbbdb114fd7405a6a9"
  },
  {
    "url": "assets/img/4.ac892a55.png",
    "revision": "ac892a5558ab6881bf62388de63de7c9"
  },
  {
    "url": "assets/img/5.01644a58.png",
    "revision": "01644a58e7907cbc3601f5e50fedc566"
  },
  {
    "url": "assets/img/5.c47b1155.png",
    "revision": "c47b1155e23cd620a5ae759df2359274"
  },
  {
    "url": "assets/img/6.68d466b7.jpg",
    "revision": "68d466b7ddb09c85fcde242f7e1b28b4"
  },
  {
    "url": "assets/img/6.b80ad718.png",
    "revision": "b80ad7188cc8dd9fca4b61a399f0bbb2"
  },
  {
    "url": "assets/img/7.5303dab1.jpg",
    "revision": "5303dab19adf2101cce4cce60739b9b2"
  },
  {
    "url": "assets/img/7.a4386b37.png",
    "revision": "a4386b376a8e69b5d5be2a70527e3ab3"
  },
  {
    "url": "assets/img/8.026c94bb.png",
    "revision": "026c94bb8ed2512e8340ffdb3b5ca865"
  },
  {
    "url": "assets/img/8.13d2a002.jpg",
    "revision": "13d2a002a0f0d4643997a11a72711748"
  },
  {
    "url": "assets/img/9.4d8caebb.png",
    "revision": "4d8caebb435ec75dee65bef506ceb3d1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.598aec70.js",
    "revision": "1e831692775fa50d9f5ff21c5c17f8c9"
  },
  {
    "url": "assets/js/11.0a334ef2.js",
    "revision": "c7770242d162fb9915eb868fc62ad4cd"
  },
  {
    "url": "assets/js/12.f83989bb.js",
    "revision": "d7ddd3c6a031f9042af7fd6c1a7d2dbf"
  },
  {
    "url": "assets/js/13.dd91d8f5.js",
    "revision": "b4d495f3fecc76d7d43522f29dbc5175"
  },
  {
    "url": "assets/js/14.a621ceac.js",
    "revision": "be1f8561dada352d30963363715ee0a5"
  },
  {
    "url": "assets/js/15.ad3aee55.js",
    "revision": "61bcaa1d66ef520de3e555b6a1510bd3"
  },
  {
    "url": "assets/js/16.7970749b.js",
    "revision": "6062655147fe9ce28e99ada4cc841e2e"
  },
  {
    "url": "assets/js/17.e27753d2.js",
    "revision": "8b86a745de35301b4d1c1254ae3cd692"
  },
  {
    "url": "assets/js/18.1fe75540.js",
    "revision": "8a264c1c8d170b27f40fb8c80d53b033"
  },
  {
    "url": "assets/js/19.0c5bd26b.js",
    "revision": "6fbf85b4f15b5cc443e54233378d1fbf"
  },
  {
    "url": "assets/js/2.45113de2.js",
    "revision": "1ec1fa1dc22ed234d5cedbb89a984870"
  },
  {
    "url": "assets/js/20.ec4acfac.js",
    "revision": "2fe197d43a151004a3553b8952dc5199"
  },
  {
    "url": "assets/js/21.1e0b9fa7.js",
    "revision": "95e184e40c3595d776e659420d987d10"
  },
  {
    "url": "assets/js/22.0f634031.js",
    "revision": "be12b4a88206146f4be4ee0b74a830c7"
  },
  {
    "url": "assets/js/23.c4ff9424.js",
    "revision": "3470d6e6401b14e164266dcc6bddb731"
  },
  {
    "url": "assets/js/24.6febaf73.js",
    "revision": "0bd504ce41dad22a09595a4ccde6a229"
  },
  {
    "url": "assets/js/25.49be9a43.js",
    "revision": "b5e03cc58bda6e957607f13947bf2cc5"
  },
  {
    "url": "assets/js/26.8a9a71ec.js",
    "revision": "3aa918b0af3124963a951166e7177a5d"
  },
  {
    "url": "assets/js/27.17146263.js",
    "revision": "ae628245c7b55da151c5b064ed7670ef"
  },
  {
    "url": "assets/js/28.e0a2e3c6.js",
    "revision": "33b3570e0d4f1abb2540c6269fcae73d"
  },
  {
    "url": "assets/js/29.dc94d080.js",
    "revision": "4b62320ee7bb07ac6b55a76f5c514196"
  },
  {
    "url": "assets/js/3.3d736d2f.js",
    "revision": "0685426ec4f6e117d3f1e08a6f9946da"
  },
  {
    "url": "assets/js/30.f72dd6e2.js",
    "revision": "283c44e4bc1e75bd1048f09c6f810be2"
  },
  {
    "url": "assets/js/31.42ec33bb.js",
    "revision": "d0cf02d976d1301f7332554b7e0f4dd5"
  },
  {
    "url": "assets/js/32.e00a4c90.js",
    "revision": "67f59113c02687a9d8f01de07a3d3a6e"
  },
  {
    "url": "assets/js/33.cf1f4856.js",
    "revision": "36b9a1939fd323a684d6285dda0d9e9e"
  },
  {
    "url": "assets/js/34.f8c9eb5c.js",
    "revision": "91de03925f2b02765455125e0afc1020"
  },
  {
    "url": "assets/js/35.b629392d.js",
    "revision": "2f526f16bc58d2acb33e3439dfe4e736"
  },
  {
    "url": "assets/js/36.ae67625f.js",
    "revision": "8fb170fbb99a9ac34112cb254dc59edc"
  },
  {
    "url": "assets/js/37.34e4a8dd.js",
    "revision": "86f1f78b54f3ad52040d0046d366d094"
  },
  {
    "url": "assets/js/38.aa0e663a.js",
    "revision": "9149216a0e9f23f7f97c2f661999c443"
  },
  {
    "url": "assets/js/39.3764f79c.js",
    "revision": "644785dd260fcfbcd8386820e3fadf18"
  },
  {
    "url": "assets/js/4.1ac1a89c.js",
    "revision": "3cd87e20eb6f4f4ec1f99f25ffa69e54"
  },
  {
    "url": "assets/js/40.6372fb99.js",
    "revision": "94de6d1542ca43ad249ed6ebd2be91ba"
  },
  {
    "url": "assets/js/5.6477920e.js",
    "revision": "c1b5e9e5c1d8deed1bae1b780376da9d"
  },
  {
    "url": "assets/js/6.d0ca8e10.js",
    "revision": "e4fac49728f5e48e59864683ef33d551"
  },
  {
    "url": "assets/js/7.908bb025.js",
    "revision": "dcc9e9cae78bf1c5d8edaf5f38116d63"
  },
  {
    "url": "assets/js/8.53a275f3.js",
    "revision": "9c33c675a41d525686bb82782102b175"
  },
  {
    "url": "assets/js/9.bffbc9ba.js",
    "revision": "b3a6be982acb0049b53ce52dc99737a9"
  },
  {
    "url": "assets/js/app.f426d84b.js",
    "revision": "220e9275ebea0f1cab896d362ef121c2"
  },
  {
    "url": "CSS/CSS-flex/flex.html",
    "revision": "499e9711ce149c4b4a7517da2da7709b"
  },
  {
    "url": "CSS/CSS-interview/interview.html",
    "revision": "617482ac98f2060969f996573fc1a465"
  },
  {
    "url": "CSS/CSS-layout/layout.html",
    "revision": "64250faf58e9df33ac8bb3a81095a406"
  },
  {
    "url": "guide.html",
    "revision": "69d11f54e735174a96fe58e2e08715ad"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "images/photo1.jpg",
    "revision": "c2e8139dbf2f5c36a48a848dd2b74b1d"
  },
  {
    "url": "images/vue-logo.svg",
    "revision": "346e12ee28bb0e5f5600d47beb4c7a47"
  },
  {
    "url": "index.html",
    "revision": "abe8ce7b4b707ed84409a05f937cb60e"
  },
  {
    "url": "JS/JS-handwriting/handwriting.html",
    "revision": "142bc6fbe2c83bba5962a07ebfbd35ad"
  },
  {
    "url": "JS/JS-interview/interview.html",
    "revision": "3ec89819c6b1882378c3afa293296576"
  },
  {
    "url": "JS/Promise/promise.html",
    "revision": "a092d5615952d675655495e91d1c37d9"
  },
  {
    "url": "other/git/git.html",
    "revision": "5af9a75f0341f9dc5d01f474eb013cbd"
  },
  {
    "url": "other/index.html",
    "revision": "8662b75e702c2d53c610d8bb7b3b90ac"
  },
  {
    "url": "other/network/http.html",
    "revision": "764681c829d0e2f32aa4e77ba39102e8"
  },
  {
    "url": "other/typeScript/base.html",
    "revision": "50878f785de06a7d8c9da193082a625c"
  },
  {
    "url": "other/typeScript/base1.html",
    "revision": "41db742b0c6da443bffff72c29beebab"
  },
  {
    "url": "other/webpack/webpack_advanced.html",
    "revision": "7c39d4dd68b4aa9ca2da9ab4d93b59a0"
  },
  {
    "url": "other/webpack/webpack_basic.html",
    "revision": "4c32143c75c6f796e40541f455a8e262"
  },
  {
    "url": "other/webpack/webpack_case.html",
    "revision": "a95d649915ebd673f060ca4792df738b"
  },
  {
    "url": "other/webpack/webpack_core.html",
    "revision": "0acb52a46eb957f04b049d785fe77189"
  },
  {
    "url": "other/webpack/webpack_loader.html",
    "revision": "837c1940e737cdda1d1559fb3ee53577"
  },
  {
    "url": "other/webpack/webpack_optimization.html",
    "revision": "39917c94c52aae77020a9beefcb8fa1d"
  },
  {
    "url": "other/webpack/webpack_plugin.html",
    "revision": "872dbecae521016c80bd9ad1aa454d5c"
  },
  {
    "url": "vue/sourceCode/design/design.html",
    "revision": "176bdba4c014b1a3acdc4fb99ddae76c"
  },
  {
    "url": "vue/sourceCode/intro/intro.html",
    "revision": "636d774d60bc85a49f9c410a322037dc"
  },
  {
    "url": "vue/vue-advanced/advanced.html",
    "revision": "717cc3c5c825a17508604d1ccaf02c38"
  },
  {
    "url": "vue/vue-basic/basic.html",
    "revision": "b61f4da189a9942bc850a1fcf52b8d3a"
  },
  {
    "url": "vue/vue-interview/interview.html",
    "revision": "8768830187a3167b868179661e4fefea"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
