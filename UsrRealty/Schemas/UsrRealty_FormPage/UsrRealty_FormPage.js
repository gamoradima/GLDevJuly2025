define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "f30b1510-aec3-4d74-b192-a1a93f80343b",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ActionsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ActionsButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunCalcAvgPriceProcessMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunCalcAvgPriceProcessMenuItem_caption)#",
					"visible": true,
					"icon": "process-button-icon",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcAverageRealtyPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": false,
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					}
				},
				"parentName": "ActionsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MaxPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MaxPriceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest"
					},
					"icon": "calculator-icon"
				},
				"parentName": "ActionsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest",
						"params": {
							"myParamName": "myParamValue"
						}
					},
					"clickMode": "default",
					"icon": "send-test-email-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_e2h8qpn",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_e2h8qpn"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_1krch76",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_1krch76"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_11qgaxm",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_11qgaxm",
					"visible": false,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_hbsimy4",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_hbsimy4",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_jv2ury7",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_jzr5qo5",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_jzr5qo5",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_vjaftzn",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_vjaftzn_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_jv2ury7",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_euq4ky2",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_euq4ky2",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_fq2gc28",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_fq2gc28",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent_yn5jfjp",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent_yn5jfjp",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_wxbaylr",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_wxbaylr",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "CategoryMultiSelect",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(CategoryMultiSelect_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentRealty",
					"selectSchemaName": "UsrCategoryInRealty",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_nb9rdme",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_nb9rdme_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_ip83ajd",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_nb9rdme",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_7tum17m",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_ip83ajd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_kwuu94h",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_kwuu94h_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_7tum17m",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_88exuki",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_88exuki_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_rnudka5DS"
						}
					}
				},
				"parentName": "FlexContainer_7tum17m",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_kk11wcv",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_kk11wcv_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_7tum17m",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_a11w82p",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_a11w82p_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitsGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_kk11wcv",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_8blo3c8",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_8blo3c8_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_kk11wcv",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_k5v4jp3",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_k5v4jp3_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_k5v4jp3_GridDetail_rnudka5",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_rnudka5"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_k5v4jp3_SearchValue",
							"GridDetailSearchFilter_k5v4jp3_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_7tum17m",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_7w6w74m",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_nb9rdme",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitsGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_rnudka5",
					"activeRow": "$GridDetail_rnudka5_ActiveRow",
					"selectionState": "$GridDetail_rnudka5_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_rnudka5_SelectionState"
					},
					"primaryColumnName": "GridDetail_rnudka5DS_Id",
					"columns": [
						{
							"id": "976ca1a6-8e3e-f8b2-65b0-4bc4f556f789",
							"code": "GridDetail_rnudka5DS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_rnudka5DS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 174
						},
						{
							"id": "cc0d0c3e-8cb5-219c-94da-aef7a831716a",
							"code": "GridDetail_rnudka5DS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_rnudka5DS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"width": 169
						},
						{
							"id": "c048bc2d-e30e-e950-4770-01e0d396119b",
							"code": "GridDetail_rnudka5DS_UsrComment",
							"caption": "#ResourceString(GridDetail_rnudka5DS_UsrComment)#",
							"dataValueType": 28,
							"width": 140
						},
						{
							"id": "861f832b-07da-71d1-5d74-8983ac74be62",
							"code": "GridDetail_rnudka5DS_UsrManager",
							"caption": "#ResourceString(GridDetail_rnudka5DS_UsrManager)#",
							"dataValueType": 10,
							"width": 136
						},
						{
							"id": "164b2a3e-ca4c-28a3-c75c-aa0736270005",
							"code": "GridDetail_rnudka5DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_rnudka5DS_CreatedOn)#",
							"dataValueType": 7,
							"width": 179
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_7w6w74m",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_rnudka5_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_rnudka5DS",
							"filters": "$GridDetail_rnudka5 | crt.ToCollectionFilters : 'GridDetail_rnudka5' : $GridDetail_rnudka5_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_rnudka5_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_rnudka5_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_rnudka5DS",
							"filters": "$GridDetail_rnudka5 | crt.ToCollectionFilters : 'GridDetail_rnudka5' : $GridDetail_rnudka5_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_rnudka5_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_rnudka5_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_rnudka5_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitsGridDetail",
							"filters": "$GridDetail_rnudka5 | crt.ToCollectionFilters : 'GridDetail_rnudka5' : $GridDetail_rnudka5_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_rnudka5_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_rnudka5_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_rnudka5DS",
							"filters": "$GridDetail_rnudka5 | crt.ToCollectionFilters : 'GridDetail_rnudka5' : $GridDetail_rnudka5_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_rnudka5_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_e2h8qpn": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_1krch76": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_hbsimy4": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_jzr5qo5": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_euq4ky2": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_fq2gc28": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_wxbaylr": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCommission_11qgaxm": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent_yn5jfjp": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent_yn5jfjp"
						}
					},
					"GridDetail_rnudka5": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_rnudka5DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_k5v4jp3_GridDetail_rnudka5",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "CreatedOn"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_rnudka5DS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_rnudka5DS.UsrVisitDateTime"
									}
								},
								"GridDetail_rnudka5DS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_rnudka5DS.UsrPotentialCustomer"
									}
								},
								"GridDetail_rnudka5DS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_rnudka5DS.UsrComment"
									}
								},
								"GridDetail_rnudka5DS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_rnudka5DS.UsrManager"
									}
								},
								"GridDetail_rnudka5DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_rnudka5DS.CreatedOn"
									}
								},
								"GridDetail_rnudka5DS_Id": {
									"modelConfig": {
										"path": "GridDetail_rnudka5DS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_rnudka5DS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent_yn5jfjp": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_rnudka5DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_e2h8qpn;
					console.log("Price = " + price);
					request.$context.PDS_UsrArea_1krch76 = 4000;
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrPrice_e2h8qpn' || 				             // if price changed
					   request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent_yn5jfjp' ) { 		// or percent changed
						var price = await request.$context.PDS_UsrPrice_e2h8qpn;
						var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent_yn5jfjp;
						var commission = price * percent / 100;
						request.$context.PDS_UsrCommission_11qgaxm = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "usr.RunWebServiceButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run web service button works...");

					// get id from type lookup type object
					var typeObject = await request.$context.PDS_UsrType_hbsimy4;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}

					// get id from type lookup offer type object
					var offerTypeObject = await request.$context.PDS_UsrOfferType_jzr5qo5;
					var offerTypeId = "";
					if (offerTypeObject) {
						offerTypeId = offerTypeObject.value;
					}

					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "RealtyService";
					const methodName = "GetMaxPriceByTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					
					//const endpoint = "http://localhost/D1_Studio/0/rest/RealtyService/GetMaxPriceByTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId
					};
					const response = await httpClientService.post(endpoint, params);
					
					console.log("response max price = " + response.body.GetMaxPriceByTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});