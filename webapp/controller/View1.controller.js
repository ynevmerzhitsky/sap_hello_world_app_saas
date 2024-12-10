sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("sap.btp.helloworldui5.controller.View1", {
        onInit: function () {
        },
        onSubmit: function () {
            // Get the input control by ID
            var nameValue = this.getView().byId("nameInput").getValue().trim();

            // Check if the input is empty
            if (!nameValue) {
                debugger;
                // If empty, show alert message
                MessageBox.alert("Please provide a name");

                return;
            }

            // Show the entered name in an alert
            MessageBox.alert("Hello, " + nameValue);
        }
    });
});