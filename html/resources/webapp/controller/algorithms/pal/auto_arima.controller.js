sap.ui.define([
	"forecasts/html/base/algorithms/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("forecasts.html.controller.algorithms.pal.auto_arima", {
		forcedSelectedAlgorithm: "auto_arima",
		onPressExecute: function(oEvent) {
			Controller.prototype.onPressExecute.apply(this, oEvent);
				this.setVizProperties("result_fit_viz_frame", "result_fit_popover");			
		}
	});
});
