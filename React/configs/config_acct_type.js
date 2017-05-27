var _config_acct_type={
    pageTitle:"ตาราง acct_type",
    tablename:"acct_type",
    dbfield:{
      primary :"acctype_id",
      value : 0,
      acctype_id:"acctype_id",//p
      acctype_name:"acctype_name",
      fund_id:"fund_id",//From funds
    },
    dbselectcolumn:"funds.fund_name,acct_type.acctype_id,acct_type.acctype_name,acct_type.fund_id",
		dbwhere:"left join funds on funds.fund_id = acct_type.fund_id ",
    viewcolumn:[
      {"key":"acctype_name","label":"acctype_name","type":"String"},
      {"key":"fund_name","label":"fund_name","type":"String"},
    ],
    FieldInput:[
      {
	        title:"acctype_name ",
	        dbfield:"acctype_name",
	        value:'',
	        type:'text',
	        require:true,
	      },
	     {
	        title:"fund_name",
	        dbfield:"fund_id",
	        value:'',
	        type:'dropdown-autocomplete',
	        require:true,
	        sourcetable:{
	        	table:"funds",
	        	dbselectcolumn:"*",
	        	dbwhere:""
	        },  //require
	        field:"fund_name:fund_id",  //require
	        number:true
	      },
    ]
}
