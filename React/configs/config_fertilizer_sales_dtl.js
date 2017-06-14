var _config_fertilizer_sales_dtl={
   pageTitle:"ตาราง fertilizer_sales_dtl",
    tablename:"fertilizer_sales_dtl",
    dbfield:{
      primary :"sales_id",
      value : 0,
      sales_id:"sales_id",//from fertilizer_sales_tn
      fertilizer_id:"fertilizer_id",//from fertilizer
      sales_total:"sales_total",
      cost_unit:"cost_unit",
      remark : "remark",
    },
    dbselectcolumn:"fertilizer_sales_tn.sales_detail,fertilizer.fertilizer_formula,fertilizer_sales_dtl.sales_id,"+
                  "fertilizer_sales_dtl.fertilizer_id,fertilizer_sales_dtl.sales_total,fertilizer_sales_dtl.cost_unit,fertilizer_sales_dtl.remark",
    dbwhere:"left join fertilizer_sales_tn on fertilizer_sales_tn.sales_id = fertilizer_sales_dtl.sales_id "+
					"left join fertilizer on fertilizer.fertilizer_id = fertilizer_sales_dtl.fertilizer_id ",
    viewcolumn:[
       {"key":"sales_detail","label":"sales_detail","type":"String"},
       {"key":"fertilizer_formula","label":"fertilizer_formula","type":"String"},
       {"key":"sales_total","label":"sales_total","type":"Number"},
       {"key":"cost_unit","label":"cost_unit Type","type":"Number"},
       {"key":"remark","label":"remark","type":"String"},
    ],
    FieldInput:[
       {
	        title:"sales_detail",
	        dbfield:"sales_id",
	        value:'',
	        type:'dropdown-autocomplete',
	        require:true,
	        sourcetable:{
	        	table:"fertilizer_sales_tn",
	        	dbselectcolumn:"*",
	        	dbwhere:""
	        },  //require
	        field:"sales_detail:sales_id",  //require
	        number:true
	      },
	       {
	        title:"fertilizer_formula",
	        dbfield:"fertilizer_id",
	        value:'',
	        type:'dropdown-autocomplete',
	        require:true,
	        sourcetable:{
	        	table:"fertilizer",
	        	dbselectcolumn:"*",
	        	dbwhere:""
	        },  //require
	        field:"fertilizer_formula:fertilizer_id",  //require
	        number:true
	      },
	      {
	        title:"sales_total",
	        dbfield:"sales_total",
	        value:'',
	        type:'number',
	        require:false,
	        number:true
	      },
	      {
	        title:"cost_unit",
	        dbfield:"cost_unit",
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
