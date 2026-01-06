sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/DateFormat",
	"./formatter"
], function (MessageToast, Controller, JSONModel, DateFormat, Formatter) {
	"use strict";

	return Controller.extend("com.winslow.Activities.Card", {
		Formatter: Formatter,
		onInit: function () {
			debugger;
			// Read URL parameters
			var oParams = new URLSearchParams(window.location.search);
			var sTitle = oParams.get("title"); // Holiday
			// Set visibility based on Title
			var oModel = new sap.ui.model.json.JSONModel({ BTN: sTitle === "Holiday" });
			this.getView().setModel(oModel, "oVisibleModel");

			this.getView().setBusy(true);
			this.getView().attachModelContextChange(this._onModelArrival, this);
            this._onModelArrival();
		},

		_onModelArrival: function () {
            var oODataModel = this.getOwnerComponent().getModel();
            if (oODataModel) {
                this.getView().detachModelContextChange(this._onModelArrival, this);
                oODataModel.metadataLoaded().then(function () {
                    this._loadData();
                }.bind(this));
            }
        },

		onAfterRendering: function () {
			const oView = this.getView();
			oView.setBusy(true);
			var oDateFormat = DateFormat.getInstance({ pattern: "yyyy-MM-dd" });
			var sToday = oDateFormat.format(new Date());
			var sSixMonthsBack = oDateFormat.format(new Date(new Date().setMonth(new Date().getMonth() - 6)));
			this.getOwnerComponent().getModel().read("/OTFilesByDateRange", {
				urlParameters: {
					fromDate: sSixMonthsBack,
					toDate: sToday,
					page: 1,
					search: "",
					top: 5
				},
				success: function (oData) {
					try {
						var res = JSON.parse(oData.OTFilesByDateRange);
						debugger
						this.getOwnerComponent().setModel(new JSONModel(res.files || []), "LocalModel");
					} catch (e) {
						console.error("JSON Parse Error", e);
					} finally {
						oView.setBusy(false);
					}
				}.bind(this),
				error: function (oError) {
					console.error("API Error", oError);
					oView.setBusy(false);
				}
			});
		},		

		handleFilePress: function (oEvent) {
			var oContext = oEvent.getSource().getBindingContext("LocalModel");
			var sUrl = oContext.getProperty("url");
			if (sUrl) sap.m.URLHelper.redirect(sUrl, true);
		},

		onPressLink: function () {
			const path = this.getOwnerComponent().getModel("cardData").getProperty("/ActivityPath");
			window.location.href = window.location.origin + path + "?headless=true"
		}
	});
});