var _config_mill_expense_transf={
    pageTitle:"ตาราง mill_expense_transf",
    tablename:"mill_expense_transf",
    dbfield:{
      primary :"tn_id",
      value : 0,
      tn_id:"tn_id",//p
      tn_date:"tn_date",
      tn_detail:"tn_detail",
      rice_id:"rice_id", // from rice
      amount:"amount",
      price_per_unit:"price_per_unit",
      transf_amount : "transf_amount",
    },
    dbselectcolumn:"*",
    dbwhere:"left join rice on rice.rice_id = mill_expense_transf.rice_id ",
    viewcolumn:[
      {"key":"tn_date","label":"tn_date","type":"Date"},
      {"key":"tn_detail","label":"tn_detail","type":"String"},
       {"key":"rice_name","label":"rice_name","type":"String"},
       {"key":"amount","label":"amount","type":"Number"},
       {"key":"price_per_unit","label":"price_per_unit","type":"Number"},
       {"key":"transf_amount","label":"transf_amount","type":"Number"},
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
	        title:"tn_detail ",
	        dbfield:"tn_detail",
	        value:'',
	        type:'textarea',
	        require:true,
	      },
		{
	        title:"rice_name",
	        dbfield:"rice_id",
	        value:'',
	        type:'dropdown-autocomplete',
	        require:true,
	        sourcetable:{
	        	table:"rice",
	        	dbselectcolumn:"*",
	        	dbwhere:""
	        },  //require
	        field:"rice_name:rice_id",  //require
	        number:true
	      },
	      {
	        title:"amount",
	        dbfield:"amount",
	        value:'',
	        type:'number',
	        require:false,
	        number:true
	      },
	      {
	        title:"price_per_unit",
	        dbfield:"price_per_unit",
	        value:'',
	        type:'number',
	        require:false,
	        number:true
	      },
	      {
	        title:"transf_amount",
	        dbfield:"transf_amount",
	        value:'',
	        type:'number',
	        require:false,
	        number:true
	      },
    ]
}
