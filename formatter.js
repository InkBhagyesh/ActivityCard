sap.ui.define([
    "sap/ui/core/format/DateFormat"
], function (DateFormat) {
    "use strict";
    return {
        doctypetext: function (mime) {
            if (!mime) return "";
            if (mime === "application/pdf") {
                return "PDF Document";
            }
            else if (mime === "image/png" || mime === "image/jpeg" || mime === "image/webp") {
                return "Image File";
            }
            else if (mime === "text/plain") {
                return "Text Document";
            }
            else if (mime === "video/mp4") {
                return "Video File";
            }
            else if (mime === "Workpage URL") {
                return "Workpage URL";
            }
            else if (mime === "application/msword" || mime === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
                return "MS Word Document";
            }
            else if (mime === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || mime === "application/vnd.ms-excel") {
                return "Excel Document";
            }
            else {
                return "File";
            }
        },

        formatDate: function (oDate) {
            return new Date(oDate).toLocaleString();
        }
    }
});