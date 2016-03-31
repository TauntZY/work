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
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // 当组件在此处被完全加载时插入的代码将运行
         
         document.getElementById("StageComIntro").addEventListener("touchstart",function(e)
         {
         	_yS=e.touches[0].pageY;
         	e.preventDefault();
         	console.log("start",_yS);//console能看到
         })
         document.getElementById("StageComIntro").addEventListener("touchend",function(e)
         {
         	 _yE=e.changedTouches[0].pageY;
         	 e.preventDefault();
         	console.log("end",_yE);//console能看到
         	pageFlag = _yE - _yS;
         	//如果pageFlage > 0 则跳到上一页
         //如果pageFlage < 0 则跳到下一页
         if(pageFlag > 0 && pageFlag > 30){
             setPlay("id4","id3","PAGE_MAIN","Symbol_Main");
         }
         if(pageFlag < 0 && pageFlag < -30){
             setPlay("id4","id5","Page_Leader","Symbol_Chen");
         }
         })

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_ComIntro'
   (function(symbolName) {   
   
   })("Symbol_ComIntro");
   //Edge symbol end:'Symbol_ComIntro'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "Page_ComIntro");