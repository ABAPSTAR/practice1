sap.ui.jsview("testak.view.main",{
    getController : function(){
  return "testak.controller.main"
    },
    createContent : function(ocon){
        var opage = new sap.m.Page({title:"test",
            content:[]
        });
    }
});