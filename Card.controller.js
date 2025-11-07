sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (MessageToast, Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.winslow.Activities.Card", {
		onInit: function () {
			var oModel = new JSONModel({
				"json": [
					{
						"date": "1 OCTOBER, 2024",
						"title": "PERMIT TO WORK FORM UPDATED",
						"description": "View the new document",
						"link": "#"
					},
					{
						"date": "1 OCTOBER, 2024",
						"title": "MELBOURNE CUP",
						"description": "Victoria public holiday on Tuesday 5/11/2024"
					},
					{
						"date": "1 OCTOBER, 2024",
						"title": "2024 DAILY PRESTART",
						"description": "View the new document",
						"link": "#"
					},
					{
						"date": "1 OCTOBER, 2024",
						"title": "KINGS PUBLIC HOLIDAY",
						"description": "Public Holiday for all regions on Monday 7/10/2024"
					}
				]
			});
			this.getView().setModel(oModel,"oJsonModel");
		}
	});
});