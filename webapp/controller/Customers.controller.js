sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/UIComponent"
], function (Controller, Filter, FilterOperator, UIComponent) {
    "use strict";

    return Controller.extend("gestionale.controller.Customers", {
        onInit: function () {
        },

        onNavBack: function () {
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteDashboard");
        },

        onSearch: function (oEvent) {
            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new Filter("name", FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }
            var oTable = this.byId("customersTable");
            var oBinding = oTable.getBinding("items");
            oBinding.filter(aFilters, "Application");
        }
    });
});
