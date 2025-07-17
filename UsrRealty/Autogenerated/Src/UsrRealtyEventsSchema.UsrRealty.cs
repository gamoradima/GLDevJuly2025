namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("21f327d7-fa81-4d3a-b16b-54d57f636fa1");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("be86af2a-17a4-4ccd-b55f-dd5268103feb");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,107,219,64,16,189,11,250,31,6,209,131,4,102,73,174,117,27,168,141,91,2,161,45,177,210,75,233,97,189,26,43,91,246,67,236,172,156,186,197,255,189,251,97,39,150,157,144,206,73,154,125,243,230,189,225,25,174,145,122,46,16,26,116,142,147,93,123,54,183,102,45,187,193,113,47,173,41,254,22,16,106,32,105,58,88,110,201,163,158,30,117,142,167,180,182,230,165,55,135,108,97,188,244,18,233,63,32,108,177,65,227,247,200,31,169,187,77,173,27,25,4,24,116,213,82,220,163,230,95,130,122,248,0,229,29,185,91,228,202,111,203,250,103,154,233,135,149,146,2,132,226,68,144,159,158,97,129,119,48,227,132,207,188,36,146,236,252,136,206,110,130,92,217,34,108,172,108,225,171,89,242,77,48,81,217,213,47,20,30,8,77,139,110,2,153,110,134,235,224,40,145,126,116,29,1,214,143,108,79,188,177,86,65,1,123,228,58,144,96,61,29,161,50,41,184,100,37,88,174,114,163,206,248,49,182,69,33,53,87,208,59,41,226,121,242,16,251,140,190,217,246,216,206,173,26,180,249,206,213,128,239,247,208,171,42,158,240,91,196,151,39,139,229,26,170,76,116,5,151,23,135,170,71,152,177,161,88,200,174,105,206,141,64,133,109,80,224,221,128,211,226,12,69,222,197,16,132,4,18,239,176,65,221,43,238,163,98,131,15,112,99,5,87,242,15,95,41,92,38,92,181,247,113,71,232,66,68,77,184,121,200,39,187,69,178,131,19,1,100,93,96,153,188,57,91,19,235,41,34,57,90,229,4,202,179,13,196,210,85,174,169,177,118,38,187,252,87,214,172,177,123,5,245,171,38,130,248,220,96,159,172,211,220,87,39,230,194,218,75,118,49,123,123,122,230,88,254,222,217,135,228,125,241,91,96,31,221,29,198,79,208,187,98,252,181,43,118,197,63,103,130,57,159,202,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("357f70b2-bfc5-1836-0dcb-bbc554d190e8"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("be86af2a-17a4-4ccd-b55f-dd5268103feb"),
				CreatedInSchemaUId = new Guid("21f327d7-fa81-4d3a-b16b-54d57f636fa1"),
				ModifiedInSchemaUId = new Guid("21f327d7-fa81-4d3a-b16b-54d57f636fa1")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("21f327d7-fa81-4d3a-b16b-54d57f636fa1"));
		}

		#endregion

	}

	#endregion

}

