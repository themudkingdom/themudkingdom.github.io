"use strict"; $(function () { function t() { if ($(".btn_twitter").click(function () { var t = $(this).attr("data-href"), e = "http://twitter.com/share?url=http://twitter.com/share?url=" + t; return window.open(e, "window", "width=550, height=450,personalbar=0,toolbar=0,scrollbars=1,resizable=1"), !1 }), $(".btn_fb").click(function () { return ga("send", "event", "button-ui", "share", "FB��鈭�"), FB.ui({ method: "share", href: $(this).attr("data-href") + "?utm_source=site.facebook&utm_medium=share&utm_campaign=fbuser" }, function (t) { }), !1 }), $(".btn_line").click(function () { ga("send", "event", "button-ui", "share", "Line��鈭�"); var t = $(this).attr("data-href").replace(" | ", "嚚�"); t += t.indexOf("?") === -1 ? "?" : "&"; var n = $(this).attr("data-title"); return e(n, t), !1 }), $(".btn_copy").length) { new ClipboardJS(".btn_copy"); $(".btn_copy").click(function () { new ClipboardJS(".btn_copy") }) } } function e(t, e) { var n = encodeURIComponent(e + "utm_source=LINE&utm_medium=share&utm_campaign=lineuser"); $.ajax({ url: "https://api-ssl.bitly.com/v3/shorten?access_token=4ad3b281a1e3c2ae3397c94bd21e6eba95fc25cc&longUrl=" + n, method: "get", async: !1, success: function (e) { window.location.href = "http://line.me/R/msg/text/?" + encodeURIComponent(t) + "%0D%0A" + e.data.url }, error: function (e) { window.location.href = "http://line.me/R/msg/text/?" + encodeURIComponent(t) + "%0D%0A" + n } }) } window.fbAsyncInit = function () { FB.init({ appId: "1235742279860141", xfbml: !0, version: "v2.11" }), FB.AppEvents.logPageView() }, function (t, e, n) { var o, i = t.getElementsByTagName(e)[0]; t.getElementById(n) || (o = t.createElement(e), o.id = n, o.src = "//connect.facebook.net/en_US/sdk.js", i.parentNode.insertBefore(o, i)) }(document, "script", "facebook-jssdk"), t() });
//# sourceMappingURL=http://localhost:3000/_maps/share.js.map