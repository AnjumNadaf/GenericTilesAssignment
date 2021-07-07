sap.ui.define(["sap/m/GenericTile"], 
            function(GenericTile) {
    GenericTile.extend("generictilesassignment.Control.Color", {
      metadata: {
        properties: {
          "bgColor":  "sap.ui.core.CSSColor"
        }
      },
      renderer: {},
      onAfterRendering: function() {
        GenericTile.prototype.onAfterRendering &&
          GenericTile.prototype.onAfterRendering.apply(this, arguments);
        if (this.getBgColor()) {
          this.$().css("background", this.getBgColor());
        }
      },

      
     });
  });