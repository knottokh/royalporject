var _config_asset_if={
    pageTitle:"ตาราง asset_if",
    tablename:"asset_if",
    dbfield:{
      primary :"asset_id",
      value : 0,
      asset_id:"asset_id",//p
      tn_date:"tn_date",
      asset_detail:"asset_detail",
      asset_amt:"asset_amt",
      asset_unit : "asset_unit",
      asset_unit_cost : "asset_unit_cost",
      acctype_id:"acctype_id", //from acct_type
      acct_flag : "acct_flag",
    },
    dbselectcolumn:"acct_type.acctype_name,asset_if.asset_id,asset_if.tn_date,asset_if.asset_detail,asset_if.asset_amt,asset_if.asset_unit,"+
							      "asset_if.asset_unit_cost,asset_if.acct_flag",
			dbwhere:"left join acct_type on asset_if.acctype_id = acct_type.acctype_id ",
    viewcolumn:[
      {"key":"tn_date","label":"tn_date","type":"Date"},
      {"key":"asset_detail","label":"asset_detail","type":"String"},
      {"key":"asset_amt","label":"asset_amt","type":"Number"},
      {"key":"asset_unit","label":"asset_unit Type","type":"String"},
      {"key":"asset_unit_cost","label":"asset_unit_cost","type":"Number"},
      {"key":"acctype_name","label":"acctype_name","type":"String"},
      {"key":"acct_flag","label":"acct_flag","type":"String"}
    ],
    FieldInput:[
      {
	        title:"tn_date",
	        dbfield:"tn_date",
	        value:'',
	        type:'date',
	        require:true,
	        format:"YYYY-MM-DD"
	      },
	     {
	        title:"asset_detail ",
	        dbfield:"asset_detail",
	        value:'',
	        type:'textarea',
	        require:true,
	      },
	      {
	        title:"asset_amt",
	        dbfield:"asset_amt",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
	      {
	        title:"asset_unit ",
	        dbfield:"asset_unit",
	        value:'',
	        type:'text',
	        require:true,
	      },
	      {
	        title:"asset_unit_cost",
	        dbfield:"asset_unit_cost",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
	      {
	        title:"acctype_name ",
	        dbfield:"acctype_id",
	        value:'',
	        type:'dropdown-autocomplete',
	        require:true,
	        sourcetable:{
	        	table:"acct_type",
	        	dbselectcolumn:"*",
	        	dbwhere:""
	        },  //require
	        field:"acctype_name:acctype_id",  //require
	        number:true
	      },
	      {
	        title:"acct_flag ",
	        dbfield:"acct_flag",
	        value:'',
	        type:'dropdown',
	        choices:[{label:"Y",value:"Y"},{label:"N",value:"N"}],
	        require:true,
	      },
    ]
}
