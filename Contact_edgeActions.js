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
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // 当组件在此处被完全加载时插入的代码将运行
         document.getElementById("StageContact").addEventListener("touchstart",function(e){
            _yS = e.touches[0].pageY;
            e.preventDefault();
         });
         document.getElementById("StageContact").addEventListener("touchend",function(e){
            _yE = e.changedTouches[0].pageY;
            var pageFlag = _yE - _yS;
            //上一页
            if(pageFlag > 0 && pageFlag > 30){
               setPlay("id13","id12","Page_Future","Symbol_Future");
            }
            //下一页
            if(pageFlag < 0 && pageFlag < -30){
               setPlay("id13","id3","PAGE_MAIN","Symbol_Main");
            }
         });
      });
      //Edge binding end
      
   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "Page_Contact");