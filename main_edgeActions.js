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
      


   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symbol_Main'
   (function(symbolName) {

      Symbol.bindElementAction(compId, symbolName, "${main_part1_2}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         //跳转到关于我们\
         setPlay("id3","id4","Page_ComIntro","Symbol_ComIntro3");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${main_part1_3}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         //关于我们，文字上
          setPlay("id3","id4","Page_ComIntro","Symbol_ComIntro3");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${main_part2_2}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         //跳转到我们的服务
          setPlay("id3","id8","Page_Business","Symbol_Business");
      });
         //Edge binding end
      Symbol.bindElementAction(compId, symbolName, "${main_part2_3}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         //我们的服务,文字上
          setPlay("id3","id8","Page_Business","Symbol_Business");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${main_part3_2}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         //跳转到成功案例
          setPlay("id3","id10","Page_Case","Symbol_Case_1");
      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${main_part3_3}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         //成功案例，文字
          setPlay("id3","id10","Page_Case","Symbol_Case_1");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${main_part4_3}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         //跳转到展望未来
         setPlay("id3","id12","Page_Future","Symbol_Future");
      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${main_part4_2}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         //展望未来你，文字
          setPlay("id3","id12","Page_Future","Symbol_Future");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${main_part5_2}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         //跳转到联系我们
         setPlay("id3","id13","Page_Contact",null);
      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${main_part5_3}", "touchstart", function(sym, e) {
         // 当用户开始触摸对象时插入的代码将运行（仅用于触摸设备）
         //联系我们，文字
         setPlay("id3","id13","Page_Contact",null);

      });
      //Edge binding end


   })("Symbol_Main");
   //Edge symbol end:'Symbol_Main'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "PAGE_MAIN");