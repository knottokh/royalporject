var _config_milling_fund_summary={
    pageTitle:"ตาราง milling_fund_summary",
    tablename:"milling_fund_summary",
    dbfield:{
      primary :"summary_key",
      value : 0,
      summary_key:"summary_key",//p
      summary_date:"summary_date",
      net_amount:"net_amount",
      net_weight_paddy:"net_weight_paddy",
      net_weight_rice : "net_weight_rice",
      net_broken_milled_rice : "net_broken_milled_rice",
      net_rice_bran : "net_rice_bran",
    },
    dbselectcolumn:"",
    dbwhere:"",
    viewcolumn:[
      {"key":"summary_date","label":"summary_date","type":"Date"},
      {"key":"net_amount","label":"net_amount","type":"Number"},
      {"key":"net_weight_paddy","label":"net_weight_paddy","type":"Number"},
      {"key":"net_weight_rice","label":"net_weight_rice","type":"Number"},
      {"key":"net_broken_milled_rice","label":"net_broken_milled_rice","type":"Number"},
      {"key":"net_rice_bran","label":"net_rice_bran","type":"Number"},
    ],
    FieldInput:[
      {
	        title:"summary_date",
	        dbfield:"summary_date",
	        value:'',
	        type:'date',
	        require:true,
	        format:"YYYY-MM-DD"
	    },
	    {
	        title:"net_amount",
	        dbfield:"net_amount",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
	      {
	        title:"net_weight_paddy",
	        dbfield:"net_weight_paddy",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
	      {
	        title:"net_weight_rice",
	        dbfield:"net_weight_rice",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
	      {
	        title:"net_broken_milled_rice",
	        dbfield:"net_broken_milled_rice",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
	      {
	        title:"net_rice_bran",
	        dbfield:"net_rice_bran",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
    ]
}
