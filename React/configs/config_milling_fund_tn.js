var _config_milling_fund_tn={
    pageTitle:"ตาราง milling_fund_tn",
    tablename:"milling_fund_tn",
    dbfield:{
      primary :"tn_id",
      value : 0,
      tn_id:"tn_id",//p
      milling_date:"milling_date",
      milling_detail:"milling_detail",
      milling_address:"milling_address",
      amount : "amount",
      weight_paddy : "weight_paddy",
      weight_rice : "weight_rice",
    },
    dbselectcolumn:"",
    dbwhere:"",
    viewcolumn:[
       {"key":"milling_date","label":"milling_date","type":"Date"},
       {"key":"milling_detail","label":"milling_detail","type":"String"},
       {"key":"milling_address","label":"milling_address","type":"String"},
       {"key":"amount","label":"amount","type":"Number"},
       {"key":"weight_paddy","label":"weight_paddy","type":"Number"},
       {"key":"weight_rice","label":"weight_rice","type":"Number"},
    ],
    FieldInput:[
      {
	        title:"milling_date",
	        dbfield:"milling_date",
	        value:'',
	        type:'date',
	        require:true,
	        format:"YYYY-MM-DD"
	    },
	    {
	        title:"milling_detail ",
	        dbfield:"milling_detail",
	        value:'',
	        type:'textarea',
	        require:true,
	      },
	      {
	        title:"milling_address ",
	        dbfield:"milling_address",
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
	        title:"weight_paddy",
	        dbfield:"weight_paddy",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
	       {
	        title:"weight_rice",
	        dbfield:"weight_rice",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
    ]
}
