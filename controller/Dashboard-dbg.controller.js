sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("gestionale.controller.Dashboard", {
        onInit: function () {
        },

        onNavToProducts: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("RouteProducts");
        },

        onMakeCoffee: function () {
            MessageToast.show("Coffee machine is not connected to the cloud yet!");
        }
    });
});
