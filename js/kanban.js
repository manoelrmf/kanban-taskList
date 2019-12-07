$(document).ready( function () { 

   function createDragula(){
       
    dragula([
        document.getElementById("aFazer"),
        document.getElementById("emAndamento"),
        document.getElementById("concluido")])
        
    function listener(){
      
        removeOnSpill: false.
        on("drag", function (el) {
          el.className.replace("ex-moved", "");
        }).
        on("drop", function (el) {
          el.className += "ex-moved";
        }).
        on("over", function (el, container) {
          container.className += "ex-over";
        }).
        on("out", function (el, container) {
          container.className.replace("ex-over", "");
        });
            
    }
    return{
        listener
    }
   } 
  var factoryDragula = createDragula()
  factoryDragula.listener()
 })