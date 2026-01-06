/**
 * This module was created by the BASEditor
 */
sap.ui.define(["sap/ui/integration/Designtime"], function (
    Designtime
) {
    "use strict";
    return function () {
        return new Designtime({
            form: {
                items: {
                    ActivityPath: {
                        manifestpath: "/sap.card/configuration/parameters/ActivityPath/value",
                        label: "Activity Path"
                    }
                }
            },
            preview: {
                modes: "Abstract"
            }
        });
    };
});