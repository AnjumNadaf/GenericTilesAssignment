sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,
	MessageToast) {
		"use strict";

		return Controller.extend("generictilesassignment.controller.View1", {
			onInit: function () {
				
			
			},

			
// To Open Fragment
			onOpenDialog:function(){
				debugger;
				var id = "fragmentid";
				var oView = this.getView();
				if(!this.oDialog){
					this.oDialog = new sap.ui.xmlfragment(oView.getId(), "generictilesassignment.view.Form", this );
					this.getView().addDependent(this.oDialog);
				}

				this.oDialog.open();

				
			},
			onOpenDialog2:function(){
				debugger;
				var id = "fragmentid2";
				//var oView = this.getView();
				if(!this.oDialog2){
					this.oDialog2 = new sap.ui.xmlfragment(id, "generictilesassignment.view.Form2", this );
					this.getView().addDependent(this.oDialog2);
				}

				this.oDialog2.open();

				
			},
// To Close the Fragment 
			onClose:function(){
				debugger;
				var oView = this.getView();
				var id = oView.getId();
				sap.ui.core.Fragment.byId(id, "title" ).setValue("");
				sap.ui.core.Fragment.byId(id,"descrp").setValue("");
				var oGenericTile = sap.ui.core.Fragment.byId(id,"tile1");
				oGenericTile.setHeader("Title");
				oGenericTile.setSubheader("Description");
				oGenericTile.setBackgroundImage("");
				var oFileUpload = sap.ui.core.Fragment.byId(id, "fileUploader");
				oFileUpload.setVisible(false);
				var oButton = sap.ui.core.Fragment.byId(id,"upload");
				oButton.setVisible(false);
				this.oDialog.close();
			},
			onClose2:function(){
				debugger;
				var id = "fragmentid2";
				sap.ui.core.Fragment.byId(id, "title2" ).setValue("");
				sap.ui.core.Fragment.byId(id,"descrp2").setValue("");
				var oGenericTile = sap.ui.core.Fragment.byId(id,"tile2");
				oGenericTile.setHeader("Title");
				oGenericTile.setSubheader("Description");
				oGenericTile.setBackgroundImage("");
				var oFileUpload = sap.ui.core.Fragment.byId(id, "fileUploader2");
				oFileUpload.setVisible(false);
				var oButton = sap.ui.core.Fragment.byId(id,"upload2");
				oButton.setVisible(false);
				this.oDialog2.close();
			},
	
// To Create New Generic Tiles			
			onCreateNewTile:function(){
				debugger;
				
				var oView = this.getView();
				var id = oView.getId();
				var title1 = sap.ui.core.Fragment.byId(id, "title" ).getValue();
				var descriptn = sap.ui.core.Fragment.byId(id,"descrp").getValue();
				var ocolor = sap.ui.core.Fragment.byId(id,"selectid").getSelectedItem().getKey();

				if(title1 == "" && descriptn == ""){
					MessageToast.show("Please add Title and Descripation");
				}else{
					var oGenericTile = sap.ui.core.Fragment.byId(id,"tile1");
					oGenericTile.setHeader("Title");
					oGenericTile.setSubheader("Description");
					oGenericTile.setBgColor("");
					oGenericTile.setBackgroundImage("");
					
					
					sap.ui.core.Fragment.byId(id, "title" ).setValue("");
					sap.ui.core.Fragment.byId(id,"descrp").setValue("");
			
					var oFileUpload = sap.ui.core.Fragment.byId(id, "fileUploader");
					oFileUpload.setVisible(false);
					var oButton = sap.ui.core.Fragment.byId(id,"upload");
					oButton.setVisible(false);
	
					var bgImage = sap.ui.core.myGlobalVar;
					//var img = bgImage;
	
					this.oDialog.close();
	
					
					var newTile = new generictilesassignment.Control.Color({
						header:title1,
						subheader:descriptn,
						tileContent:new sap.m.TileContent({
							unit:"Unit",
							footer:"August 21, 2016",
							
							content:new sap.m.NumericContent({
								value:"13",
								withMargin:false,
								contentText:"SAP Unveils Powerful New Player Comparision Tool Exclusively on NFL.com"
	
							})
	
	
	
						})
					});
					if(bgImage == ""){
					newTile.setBgColor(ocolor);
					newTile.addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop tileLayout");
					var oHBox = this.getView().byId("hbox");
					oHBox.addItem(newTile);
					}else if(bgImage !== ""){
					newTile.setBackgroundImage(bgImage);
					newTile.addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop tileLayout");
					var oHBox = this.getView().byId("hbox");
					oHBox.addItem(newTile);
					}
	
				}
				
				
				


            },

			onCreateNewTile2:function(){
				debugger;
				
				// var oView = this.getView();
				// var id = oView.getId();
				var id = "fragmentid2";
				var title1 = sap.ui.core.Fragment.byId(id, "title2" ).getValue();
				var descriptn = sap.ui.core.Fragment.byId(id,"descrp2").getValue();
				var ocolor = sap.ui.core.Fragment.byId(id,"selectid2").getSelectedItem().getKey();

				if(title1 == "" && descriptn == ""){
					MessageToast.show("Please add Title and Descripation");
				}else{
					var oGenericTile = sap.ui.core.Fragment.byId(id,"tile2");
					oGenericTile.setHeader("Title");
					oGenericTile.setSubheader("Description");
					oGenericTile.setBgColor("");
					oGenericTile.setBackgroundImage("");
					
					
					sap.ui.core.Fragment.byId(id, "title2" ).setValue("");
					sap.ui.core.Fragment.byId(id,"descrp2").setValue("");
			
					var oFileUpload = sap.ui.core.Fragment.byId(id, "fileUploader2");
					oFileUpload.setVisible(false);
					var oButton = sap.ui.core.Fragment.byId(id,"upload2");
					oButton.setVisible(false);
	
					var bgImage = sap.ui.core.myGlobalVar;
					//var img = bgImage;
	
					this.oDialog2.close();
	
					
					var newTile = new generictilesassignment.Control.Color({
						header:title1,
						subheader:descriptn,
						frameType:"TwoByOne",
						
						tileContent:new sap.m.TileContent({
							unit:"Unit",
							footer:"August 21, 2016",
							content:new sap.m.NumericContent({
								value:"13",
								withMargin:false,
								contentText:"SAP Unveils Powerful New Player Comparision Tool Exclusively on NFL.com"
	
							})
	
	
	
						})
					});
					if(bgImage == ""){
					newTile.setBgColor(ocolor);
					newTile.addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop tileLayout");
					var slide = this.getView().byId("slide");
					slide.addTile(newTile);
					//var oHBox = this.getView().byId("HBox2");
					//oHBox.addItem(newTile);
					}else if(bgImage !== ""){
					newTile.setBackgroundImage(bgImage);
					newTile.addStyleClass("sapUiTinyMarginBegin sapUiTinyMarginTop tileLayout");
					var slide = this.getView().byId("slide");
					slide.addTile(newTile);
					// var oHBox = this.getView().byId("HBox2");
					// oHBox.addItem(newTile);
					}
	
				}
				
				
				


            },

// To set Background Image 			
			onUploadImage: function () {
					debugger;
					var oView = this.getView();
					var id = oView.getId();
				 	this.image = sap.ui.core.Fragment.byId(id, "fileUploader").oFileUpload.files[0];
				 	this.imgPath = URL.createObjectURL(this.image);
					var oGenericTile = sap.ui.core.Fragment.byId(id,"tile1");
					oGenericTile.setBgColor("");
                    oGenericTile.setBackgroundImage(this.imgPath);
					sap.ui.core.myGlobalVar = this.imgPath;

					
		            
			},
			onUploadImage2: function () {
				debugger;
				// var oView = this.getView();
				// var id = oView.getId();
				var id = "fragmentid2";
				 this.image = sap.ui.core.Fragment.byId(id, "fileUploader2").oFileUpload.files[0];
				 this.imgPath = URL.createObjectURL(this.image);
				var oGenericTile = sap.ui.core.Fragment.byId(id,"tile2");
				oGenericTile.setBgColor("");
				oGenericTile.setBackgroundImage(this.imgPath);
				sap.ui.core.myGlobalVar = this.imgPath;

				
				
		},

//To add Title 	on Tile		
			addTitle:function(){
				debugger;
				var oView = this.getView();
				var id = oView.getId();
				var title = sap.ui.core.Fragment.byId(id, "title" ).getValue();
				var oGenericTile = sap.ui.core.Fragment.byId(id,"tile1");
				oGenericTile.setHeader(title);

			},
			addTitle2:function(){
				debugger;
				// var oView = this.getView();
				// var id = oView.getId();
				var id = "fragmentid2";
				var title = sap.ui.core.Fragment.byId(id, "title2" ).getValue();
				var oGenericTile = sap.ui.core.Fragment.byId(id,"tile2");
				oGenericTile.setHeader(title);

			},

// To Add Description			
			addDescrp:function(){
				debugger;
				var oView = this.getView();
				var id = oView.getId();
				var desc1 = sap.ui.core.Fragment.byId(id, "descrp" ).getValue();
				var oGenericTile = sap.ui.core.Fragment.byId(id,"tile1");
				oGenericTile.setSubheader(desc1);

			},
			addDescrp2:function(){
				debugger;
				// var oView = this.getView();
				// var id = oView.getId();
				var id = "fragmentid2";
				var desc1 = sap.ui.core.Fragment.byId(id, "descrp2" ).getValue();
				var oGenericTile = sap.ui.core.Fragment.byId(id,"tile2");
				oGenericTile.setSubheader(desc1);

			},
// choose any one  color or image to set on tile			

			onSelect:function(oEvent){
				debugger;
				// var id = "fragmentid";
				var oView = this.getView();
				var id = oView.getId();
				var option = oEvent.getSource();
				var selectionOption= option.mProperties.text;
				if(selectionOption == "Img"){
					var oFileUpload = sap.ui.core.Fragment.byId(id, "fileUploader");
					oFileUpload.setVisible(true);
					var oButton = sap.ui.core.Fragment.byId(id,"upload");
					oButton.setVisible(true);
					var oSelect = sap.ui.core.Fragment.byId(id, "selectid");
					oSelect.setVisible(false);

				}else if(selectionOption == "Color"){
					var oFileUpload = sap.ui.core.Fragment.byId(id, "fileUploader");
					oFileUpload.setVisible(false);
					var oButton = sap.ui.core.Fragment.byId(id,"upload");
					oButton.setVisible(false);
					var oSelect = sap.ui.core.Fragment.byId(id, "selectid");
					oSelect.setVisible(true);
				}

          


			},
			onSelect2:function(oEvent){
				debugger;
				// var id = "fragmentid";
				// var oView = this.getView();
				// var id = oView.getId();
				var id = "fragmentid2";
				var option = oEvent.getSource();
				var selectionOption= option.mProperties.text;
				if(selectionOption == "Img"){
					var oFileUpload = sap.ui.core.Fragment.byId(id, "fileUploader2");
					oFileUpload.setVisible(true);
					var oButton = sap.ui.core.Fragment.byId(id,"upload2");
					oButton.setVisible(true);
					var oSelect = sap.ui.core.Fragment.byId(id, "selectid2");
					oSelect.setVisible(false);

				}else if(selectionOption == "Color"){
					var oFileUpload = sap.ui.core.Fragment.byId(id, "fileUploader2");
					oFileUpload.setVisible(false);
					var oButton = sap.ui.core.Fragment.byId(id,"upload2");
					oButton.setVisible(false);
					var oSelect = sap.ui.core.Fragment.byId(id, "selectid2");
					oSelect.setVisible(true);
				}

          


			},
// To Set Color			
			onChangeColor:function(oEvent){
				debugger;
				var color = oEvent.getSource();
				var oView = this.getView();
				var id = oView.getId();
				var oGenericTile = sap.ui.core.Fragment.byId(id,"tile1");
				var ocolor = sap.ui.core.Fragment.byId(id,"selectid").getSelectedItem().getKey();
				oGenericTile.setBgColor(ocolor);
				sap.ui.core.myGlobalVar = "";
				
			},
			onChangeColor2:function(oEvent){
				debugger;
				var color = oEvent.getSource();
				// var oView = this.getView();
				
				// var id = oView.getId();
				var id = "fragmentid2";
				var oGenericTile = sap.ui.core.Fragment.byId(id,"tile2");
				var ocolor = sap.ui.core.Fragment.byId(id,"selectid2").getSelectedItem().getKey();
				oGenericTile.setBgColor(ocolor);
				sap.ui.core.myGlobalVar = "";
				
			}


			
			

		});
	});
