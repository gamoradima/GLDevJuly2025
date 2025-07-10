define("UsrRealtyTypeListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TopAreaProfileContainer",
				"values": {
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "DataGrid_xhldhp3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 10,
						"row": 1,
						"rowSpan": 11
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_xhldhp3",
					"primaryColumnName": "DataGrid_xhldhp3DS_Id",
					"columns": [
						{
							"id": "0881cc66-a189-6145-86ea-bf7b1e2cff38",
							"code": "DataGrid_xhldhp3DS_Name",
							"caption": "#ResourceString(DataGrid_xhldhp3DS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "3612b6c0-fbe1-9b20-e274-cecd9d73b70c",
							"code": "DataGrid_xhldhp3DS_UsrMyColor",
							"caption": "#ResourceString(DataGrid_xhldhp3DS_UsrMyColor)#",
							"dataValueType": 18
						},
						{
							"id": "7c9f2b53-8e1e-e9b0-c25a-91677016c3f2",
							"code": "DataGrid_xhldhp3DS_Description",
							"caption": "#ResourceString(DataGrid_xhldhp3DS_Description)#",
							"dataValueType": 28
						},
						{
							"id": "efe7f5ab-2abe-4766-3f8d-781beab402db",
							"code": "DataGrid_xhldhp3DS_CreatedOn",
							"caption": "#ResourceString(DataGrid_xhldhp3DS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_xhldhp3": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_xhldhp3DS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_xhldhp3DS_Name": {
									"modelConfig": {
										"path": "DataGrid_xhldhp3DS.Name"
									}
								},
								"DataGrid_xhldhp3DS_UsrMyColor": {
									"modelConfig": {
										"path": "DataGrid_xhldhp3DS.UsrMyColor"
									}
								},
								"DataGrid_xhldhp3DS_Description": {
									"modelConfig": {
										"path": "DataGrid_xhldhp3DS.Description"
									}
								},
								"DataGrid_xhldhp3DS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_xhldhp3DS.CreatedOn"
									}
								},
								"DataGrid_xhldhp3DS_Id": {
									"modelConfig": {
										"path": "DataGrid_xhldhp3DS.Id"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"DataGrid_xhldhp3DS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "UsrRealtyType",
								"attributes": {
									"Name": {
										"path": "Name"
									},
									"UsrMyColor": {
										"path": "UsrMyColor"
									},
									"Description": {
										"path": "Description"
									},
									"CreatedOn": {
										"path": "CreatedOn"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});