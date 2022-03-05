"use strict";

function DrunkDrivingProcess(s, o) {
    s >= stopPos1 ? s >= stopPos2 ? (stopValue = s + 300, $(".stickyMainItem").removeClass("behind"), $(".stickyMsg").removeClass("show"), $(".stickyCar").removeClass("hide"), $(".Roadblock").removeClass("show"), $(".drunkman").removeClass("show"), $(".DPO").removeClass("show"), stopValue >= stopPos3 && stopValue < stopPos4 ? ($(".stickyCar").addClass("hide"), $(".DPO").addClass("show"), console.log("in DPO")) : stopValue >= stopPos4 && stopValue < stopPos5 ? ($(".stickyCar").removeClass("hide"), $(".stickyMainItem").removeClass("behind"), $(".stickyMsg").addClass("show"), $(".stickyMsg").text("所以我就在訊息尾端都標上數字了。然後這一則訊息我寫長一點看看會不會發生甚麼事，這邊的文字內容就要麻煩鄒芸熹了喔！這樣應該夠長了(3)"), $(".DPO").removeClass("show")) : stopValue >= stopPos5 && stopValue < endPos ? ($(".EndList").removeClass("show"), $(".stickyMsg").addClass("show big"), $(".stickyMsg").html('<span>喔原來這裡還有一框，而且是用html嵌入</span><a class="inlineLink" href="epilogue.html" target="_blank">還有不同效果欸</a><span>不知道會長怎樣(4)</span>'), $(".judge").removeClass("show")) : stopValue >= endPos && ($(".stickyMsg").removeClass("show big"), $(".stickyCar").addClass("hide"), $(".stickyMainItem").addClass("behind"), $(".EndList").addClass(), setTimeout(function () {
        $(".judge").addClass("show")
    }, 1e3)), console.log(s, stopValue)) : (console.log("car crash"), console.log(s), $(".stickyCar").removeClass("hide"), $(".drunkman").addClass("show"), $(".stickyMsg").addClass("show"), $(".stickyMsg").text("然後他寫文字的地方分散在程式碼的不同位置，甚至沒有照順序排(2)"), $(".Roadblock").addClass("show")) : ($(".stickyCar").addClass("hide"), $(".stickyMsg").removeClass("show"), $(".stickyMainItem").addClass("behind"), s >= startPos && ($(".stickyMainItem").removeClass("behind"), $(".stickyCar").removeClass("hide"), $(".stickyMsg").addClass("show"), $(".stickyMsg").text("這裡就是飛機區的文字要放的地方了(1)"), $(".drunkman").removeClass("show"), $(".Roadblock").removeClass("show")))
}

function scrollHandler(s) {
    window.innerWidth >= 1600 ? (startPos = morphyBallH - 100, stopPos1 = 700 + morphyBallH, stopPos2 = 1e3 + morphyBallH, stopPos3 = 2200, stopPos4 = 3300, stopPos5 = 4e3, endPos = 4200) : window.innerWidth < 1600 && window.innerWidth > 1024 && (startPos = morphyBallH, stopPos1 = 700 + morphyBallH, stopPos2 = 1e3 + morphyBallH, stopPos3 = 2e3, stopPos4 = 3e3, stopPos5 = 3700, endPos = 4100), DrunkDrivingProcess(s, !1)
}

function scrollHandlerMobile(s) {
    window.innerWidth <= 1024 && window.innerWidth >= 768 ? (startPos = morphyBallH - 100, stopPos1 = 600 + morphyBallH, stopPos2 = 1100 + morphyBallH, stopPos3 = 2100, stopPos4 = 3e3, stopPos5 = 3600, endPos = 4e3) : window.innerWidth < 768 && window.innerWidth > 320 ? (startPos = morphyBallH - 100, stopPos1 = 600 + morphyBallH, stopPos2 = 1100 + morphyBallH, stopPos3 = 1900, stopPos4 = 3100, stopPos5 = 3700, endPos = 4e3) : window.innerWidth <= 320 && (startPos = morphyBallH - 100, stopPos1 = 600 + morphyBallH, stopPos2 = 1100 + morphyBallH, stopPos3 = 2100, stopPos4 = 2900, stopPos5 = 3700, endPos = 4e3), DrunkDrivingProcess(s, !0)
}
var scrollTop = 0,
    newScrollTop = 0,
    scrollContrl = !0,
    startPos, stopPos1, stopPos2, stopPos3, stopPos4, stopPos5, endPos, dialoguePos1, dialoguePos2, dialoguePos3, morphyBallH = $(".morphyBall").height(),
    scrollIndex = 0,
    stopValue = 0;
$(".menu-toggle").on("click", function () {
    scrollContrl = !1
}), $(".closeMenu").on("click", function () {
    scrollContrl = !0
});
var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    container = $(".indexScrollOuter"),
    ticking = !1,
    myEfficientFn = function () {
        newScrollTop = container[0].scrollTop, device ? scrollHandlerMobile(newScrollTop) : scrollHandler(newScrollTop)
    };
container.on("scroll.scroller", function () {
    myEfficientFn()
});
//# sourceMappingURL=http://localhost:3000/_maps/indexScrollCar.js.map