"use strict";

function DrunkDrivingProcess(s, o) {
	s >= stopPos1 ? s >= stopPos2 ? (stopValue = s + 300, $(".stickyMainItem").removeClass("behind"), $(".stickyMsg").removeClass("show"), $(".stickyCar").removeClass("hide"), $(".Roadblock").removeClass("show"), $(".drunkman").removeClass("show"), $(".DPO").removeClass("show"), stopValue >= stopPos3 && stopValue < stopPos4 ? ($(".stickyCar").addClass("hide"), $(".DPO").addClass("show"), console.log("in DPO")) : stopValue >= stopPos4 && stopValue < stopPos5 ? ($(".stickyCar").removeClass("hide"), $(".stickyMainItem").removeClass("behind"), $(".stickyMsg").addClass("show"), $(".stickyMsg").text("鋡急炎撖笔�䁅絲閮湛�諹�銝𦠜�閖堺鈭�(�𡜐蛾��)"), $(".DPO").removeClass("show")) : stopValue >= stopPos5 && stopValue < endPos ? ($(".EndList").removeClass("show"), $(".stickyMsg").addClass("show big"), $(".stickyMsg").html('<span>�𧋦撠��䔶誑�典蝱22�见𧑐�䲮瘜閖堺��餈�20撟湧�枏ế瘙箸㮾雿𦦵�箏���鞉見�𧋦嚗��梁祟�詨枂蝝�48.8�𨯬蝑�銝����㘾�𨰻��8000蝑��稲甇餃�瑟��辣嚗�</span><a class="inlineLink" href="epilogue.html" target="_blank">��贝底蝝圈�𡒊��</a><span>嚗�</span>'), $(".judge").removeClass("show")) : stopValue >= endPos && ($(".stickyMsg").removeClass("show big"), $(".stickyCar").addClass("hide"), $(".stickyMainItem").addClass("behind"), $(".EndList").addClass("show"), setTimeout(function() {
		$(".judge").addClass("show")
	}, 1e3)), console.log(s, stopValue)) : (console.log("car crash"), console.log(s), $(".stickyCar").removeClass("hide"), $(".drunkman").addClass("show"), $(".stickyMsg").addClass("show"), $(".stickyMsg").text("��𠺪�峕�𧼮�鈭箔�...�𡡞獐颲佗��"), $(".Roadblock").addClass("show")) : ($(".stickyCar").addClass("hide"), $(".stickyMsg").removeClass("show"), $(".stickyMainItem").addClass("behind"), s >= startPos && ($(".stickyMainItem").removeClass("behind"), $(".stickyCar").removeClass("hide"), $(".stickyMsg").addClass("show"), $(".stickyMsg").text("銝讠号�𡁻�𣂼�苷�撟暹𡟵嚗�末蝝荔�諹�閧�𢠃�贝�𠰴�𧼮振嚗�"), $(".drunkman").removeClass("show"), $(".Roadblock").removeClass("show")))
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
$(".menu-toggle").on("click", function() {
	scrollContrl = !1
}), $(".closeMenu").on("click", function() {
	scrollContrl = !0
});
var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
	container = $(".indexScrollOuter"),
	ticking = !1,
	myEfficientFn = function() {
		newScrollTop = container[0].scrollTop, device ? scrollHandlerMobile(newScrollTop) : scrollHandler(newScrollTop)
	};
container.on("scroll.scroller", function() {
	myEfficientFn()
});
//# sourceMappingURL=http://localhost:3000/_maps/indexScrollCar.js.map