sap.ui.define(['sap/ui/core/UIComponent'],
	function (UIComponent) {
		"use strict";

		var Component = UIComponent.extend("com.winslow.Activities.Component", {

			metadata: {
				manifest: "json"
			}
		});
		jQuery.sap.includeStyleSheet(
			sap.ui.require.toUrl("activity/card/component/css/style.css")
		);

		return Component;

	});
