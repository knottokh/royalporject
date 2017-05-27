var _config_acct_func={
	pageTitle:"ตาราง acct_fund",
    tablename:"acct_fund",
		 	dbfield:{	
		 			primary :"tn_id",
			 		value : 0,
			 		tn_id :"tn_id",//p
			 		acctype_id:"acctype_id", //from acc_type
			 		acct_id:"acct_id",  //from acct_no
			 		tn_date:"tn_date",
			 		tn_detail:"tn_detail",
			 		amount:"amount",
			 		remark:"remark"
			 	},
	dbselectcolumn:"acct_type.acctype_name,acct_no.acct_name,acct_fund.tn_id,acct_fund.tn_date,"+
						"acct_fund.tn_detail,acct_fund.amount,acct_fund.remark",
	dbwhere:"left join acct_type on acct_fund.acctype_id = acct_type.acctype_id "+
					"left join acct_no on acct_fund.acct_id = acct_no.acct_id ",
	viewcolumn:[
       {"key":"acctype_name","label":"acctype_name","type":"String"},
       {"key":"acct_name","label":"acct_name","type":"String"},
       {"key":"tn_date","label":"tn_date","type":"Date"},
       {"key":"tn_detail","label":"tn_detail Type","type":"String"},
       {"key":"amount","label":"amount","type":"String"},
       {"key":"remark","label":"remark","type":"String"},
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
	        title:"acct_id",
	        dbfield:"acct_id",
	        value:'',
	        type:'dropdown-autocomplete',
	        require:true,
	        sourcetable:{
	        	table:"acct_no",
	        	dbselectcolumn:"*",
	        	dbwhere:""
	        },  //require
	        field:"acct_name:acct_id",  //require
	        number:true
	      },
	      {
	        title:"tn_date",
	        dbfield:"tn_date",
	        value:'',
	        type:'date',
	        require:true,
	        format:"YYYY-MM-DD"
	      },
	      {
	        title:"tn_detail ",
	        dbfield:"tn_detail",
	        value:'',
	        type:'textarea',
	        require:true,
	      },
	      {
	        title:"amount",
	        dbfield:"amount",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
	      {
	        title:"remark",
	        dbfield:"remark",
	        value:'',
	        type:'textarea',
	        require:false,
	      }

    ]
}
