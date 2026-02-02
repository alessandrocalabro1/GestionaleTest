sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast",
    "sap/ui/core/UIComponent"
], function (Controller, Filter, FilterOperator, MessageToast, UIComponent) {
    "use strict";

    return Controller.extend("gestionale.controller.ProductList", {
        onInit: function () {
        },

        onNavBack: function () {
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("RouteDashboard");
        },

        onSearch: function (oEvent) {
            // add filter for search
            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new Filter("name", FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }

            // update list binding
            var oTable = this.byId("productsTable");
            var oBinding = oTable.getBinding("items");
            oBinding.filter(aFilters, "Application");
        },

        onAddProduct: function () {
            MessageToast.show("Add Product Dialog would open here.");
        },

        onProductSelect: function (oEvent) {
            var oItem = oEvent.getParameter("listItem");
            var sPath = oItem.getBindingContext("productModel").getPath();
            // Maybe navigate to detail details?
            MessageToast.show("Selected: " + sPath);
        }
    });
});
