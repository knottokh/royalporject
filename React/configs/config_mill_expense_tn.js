var _config_mill_expense_tn={
    pageTitle:"ตาราง mill_expense_tn",
    tablename:"mill_expense_tn",
    dbfield:{
      primary :"tn_id",
      value : 0,
      tn_id:"tn_id",//p
      tn_date:"tn_date",
      tn_detail:"tn_detail",
      mill_expense_id:"mill_expense_id",
      units : "units",
      amount : "amount",
      price_per_unit:"price_per_unit",
      remark : "remark",
    },
    dbselectcolumn:"mill_expense_type.expense_name,mill_expense_tn.tn_id,mill_expense_tn.tn_date,mill_expense_tn.tn_detail,mill_expense_tn.mill_expense_id,"+
    				"mill_expense_tn.units,mill_expense_tn.amount,mill_expense_tn.price_per_unit,mill_expense_tn.remark",
    dbwhere:"left join mill_expense_type on mill_expense_type.mill_expense_id = mill_expense_tn.mill_expense_id ",
    viewcolumn:[
       {"key":"tn_date","label":"tn_date","type":"Date"},
       {"key":"tn_detail","label":"tn_detail","type":"String"},
       {"key":"expense_name","label":"expense_name","type":"String"},
       {"key":"units","label":"units","type":"String"},
       {"key":"amount","label":"amount","type":"Number"},
       {"key":"price_per_unit","label":"price_per_unit","type":"Number"},
       {"key":"remark","label":"remark","type":"String"},
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
	        title:"expense_name",
	        dbfield:"mill_expense_id",
	        value:'',
	        type:'dropdown-autocomplete',
	        require:true,
	        sourcetable:{
	        	table:"mill_expense_type",
	        	dbselectcolumn:"*",
	        	dbwhere:""
	        },  //require
	        field:"expense_name:mill_expense_id",  //require
	        number:true
	      },
	      {
	        title:"units ",
	        dbfield:"units",
	        value:'',
	        type:'text',
	        require:true,
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
	        title:"remark ",
	        dbfield:"remark",
	        value:'',
	        type:'textarea',
	        require:true,
	      },
    ]
}
