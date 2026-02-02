sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/m/MessageToast"
], function (Controller, UIComponent, MessageToast) {
    "use strict";

    return Controller.extend("gestionale.controller.Orders", {
        onInit: function () {
        },

        onNavBack: function () {
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteDashboard");
        },

        onRefresh: function () {
            MessageToast.show("Orders refreshed from server");
        },

        onSort: function () {
            MessageToast.show("Sort functionality not implemented in mock");
        }
    });
});
