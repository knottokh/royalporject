var _config_acct_start={
    pageTitle:"ตาราง acct_start",
    tablename:"acct_start",
    dbfield:{
      primary :"acctype_id",
      value : 0,
      acctype_id:"acctype_id",//From acct_type
      accyear:"accyear",
      accmount:"accmount",
      balance_backward:"balance_backward",
      balance_tomount : "balance_tomount",
      balance_forward : "balance_forward"
    },
    dbselectcolumn:"acct_type.acctype_name,acct_start.acctype_id,acct_start.accyear,acct_start.accmount,acct_start.balance_backward,acct_start.balance_tomount,acct_start.balance_forward",
			dbwhere:"left join acct_type on acct_start.acctype_id = acct_type.acctype_id ",
    viewcolumn:[
       {"key":"acctype_name","label":"acctype_name","type":"String"},
       {"key":"accyear","label":"accyear","type":"Number"},
       {"key":"accmount","label":"accmount","type":"Number"},
       {"key":"balance_backward","label":"balance_backward Type","type":"Number"},
       {"key":"balance_tomount","label":"balance_tomount","type":"Number"},
       {"key":"balance_forward","label":"balance_forward","type":"Number"}
    ],
    FieldInput:[
      {
	        title:"acctype_id ",
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
	        title:"accyear",
	        dbfield:"accyear",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
	      {
	        title:"accmount",
	        dbfield:"accmount",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
	      {
	        title:"balance_backward",
	        dbfield:"balance_backward",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
	      {
	        title:"balance_tomount",
	        dbfield:"balance_tomount",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
	      {
	        title:"balance_forward",
	        dbfield:"balance_forward",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
    ]
}
