/***********************
* Adobe Edge Animate 组件动作
*
* 小心编辑这个文件，小心保存
* 函数签名和注释以“Edge”起始来维持
* 通过 Adobe Edge Animate 使动作可以交互
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // 常用的 Edge 类别名

   //Edge symbol: 'stage'
   (function(symbolName) {

       Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
           // 当时间轴在此处结束时插入的代码将运行
           //我们的优势
           AdobeEdge.loadComposition('Good', 'Page_Good', {
               scaleToFit: "both",
               centerStage: "both",
               minW: "0px",
               maxW: "undefined",
               width: "640px",
               height: "960px"
           }, {dom: [ ]}, {dom: [ ]});

           //成功案例
           AdobeEdge.loadComposition('Case', 'Page_Case', {
               scaleToFit: "both",
               centerStage: "both",
               minW: "0px",
               maxW: "undefined",
               width: "640px",
               height: "960px"
           }, {dom: [ ]}, {dom: [ ]});

       });
       //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // 当用户停止触摸对象时插入的代码将运行（仅用于触摸设备）
          
         document.getElementById("StageSlogan").addEventListener("touchstart",function(e)
         {
         	_yS=e.touches[0].pageY;
         	e.preventDefault();
         	console.log("start",_yS);//console能看到
         })
         document.getElementById("StageSlogan").addEventListener("touchend",function(e)
         {
         	 _yE=e.changedTouches[0].pageY;
         	 e.preventDefault();
         	console.log("end",_yE);//console能看到
         	pageFlag = _yE - _yS;
         	//如果pageFlage > 0 则跳到上一页
             if(pageFlag > 0 && pageFlag > 30){
                //空
             }
             //如果pageFlage < 0 则跳到下一页
             if(pageFlag < 0 && pageFlag < -30){
                 setPlay("id2","id3","PAGE_MAIN","Symbol_Main");
             }
         })

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "Page_Slogan");