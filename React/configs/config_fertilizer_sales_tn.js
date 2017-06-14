var _config_fertilizer_sales_tn={
    pageTitle:"ตาราง fertilizer_sales_tn",
    tablename:"fertilizer_sales_tn",
    dbfield:{
      primary :"sales_id",
      value : 0,
      sales_id:"sales_id",//p
      sales_detail:"sales_detail",
      address_id:"address_id",
      address_moo:"address_moo",
      sales_date : "sales_date",
      sales_total : "sales_total",
      net_total : "net_total",
      remark : "remark",
    },
    dbselectcolumn:"",
    dbwhere:"",
    viewcolumn:[
      {"key":"sales_detail","label":"sales_detail","type":"String"},
       {"key":"address_id","label":"address_id","type":"String"},
       {"key":"address_moo","label":"address_moo","type":"String"},
       {"key":"sales_date","label":"sales_date","type":"Date"},
       {"key":"sales_total","label":"sales_total","type":"Number"},
       {"key":"net_total","label":"net_total","type":"Number"},
       {"key":"remark","label":"remark","type":"String"},
    ],
    FieldInput:[
      {
	        title:"sales_detail ",
	        dbfield:"sales_detail",
	        value:'',
	        type:'textarea',
	        require:true,
	      },
	     {
	        title:"address_id ",
	        dbfield:"address_id",
	        value:'',
	        type:'text',
	        require:true,
	      },
	      {
	        title:"address_moo ",
	        dbfield:"address_moo",
	        value:'',
	        type:'text',
	        require:true,
	      },
	       {
	        title:"sales_date",
	        dbfield:"sales_date",
	        value:'',
	        type:'date',
	        require:true,
	        format:"YYYY-MM-DD"
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
	        title:"net_total",
	        dbfield:"net_total",
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
