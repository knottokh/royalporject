var royalentitey = {
		"acct_fund":{
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
			dbselectcolumn:"",
			dbwhere:"",
			viewcolumn:[
                    {"key":"acct_id","label":"acct_id","type":"Number"},
                    {"key":"tn_date","label":"tn_date","type":"Date"},
                    {"key":"tn_detail","label":"tn_detail Type","type":"String"},
                    {"key":"amount","label":"amount","type":"String"},
                    {"key":"remark","label":"remark","type":"String"}
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
	        field:"acctype_name:acctype_id"  //require
	      },
	      {
	        title:"acct_id",
	        dbfield:"acct_id",
	        value:'',
	        type:'text',
	        require:true
	      },
	      {
	        title:"tn_date",
	        dbfield:"tn_date",
	        value:'',
	        type:'date',
	        require:false,
	        format:"YYYY-MM-DD"
	      },
	      {
	        title:"tn_detail ",
	        dbfield:"tn_detail",
	        value:'',
	        type:'textarea',
	        require:false,
	      },
	      {
	        title:"amount",
	        dbfield:"amount",
	        value:'',
	        type:'number',
	        require:false,
	      },
	      {
	        title:"remark",
	        dbfield:"remark",
	        value:'',
	        type:'textarea',
	        require:false,
	      }

      ]
	 },
	 "acct_no":{
	 											primary :"acct_id",
	 											value : 0,
	 											acct_id :"acct_id",//p
	 											acct_name:"acct_name",
	 											acct_level:"acct_level",
	 											acct_group:"acct_group", 
	 	},
	 	"acct_start":{
	 											primary :"acctype_id",
	 											value : 0,
	 											acctype_id:"acctype_id",//From acct_type
	 											accyear:"accyear",
	 											accmount:"accmount",
	 											balance_backward:"balance_backward",
	 											balance_tomount : "balance_tomount",
	 											balance_forward : "balance_forward"
	 								},
	"acct_type":{
			tablename:"acct_type",
		 	dbfield:{	
	 					primary :"acctype_id",
	 					value : 0,
	 					acctype_id:"acctype_id",//p
	 					acctype_name:"acctype_name",
	 					fund_id:"fund_id",//From funds
			 	},
			dbselectcolumn:"*",
			dbwhere:""

	 }	,	
	"agriculture_goods_dtl"://5
		 						{
		 											primary :"dtl_id",
		 											value : 0,
		 											dtl_id:"dtl_id",//p
		 											buy_id:"buy_id",
		 											buy_detail:"buy_detail",
		 											amount:"amount",
		 											buy_unit : "buy_unit",
		 											price_unit : "price_unit"
		},
 "agriculture_goods_tn"://6
	{
		 											primary :"buy_id",
		 											value : 0,
		 											buy_id:"buy_id",//p
		 											buy_date:"buy_date",
		 											buy_vender:"buy_vender",
		 											acct_flag:"acct_flag",
		 											tn_id:"tn_id",
	},
 "asset_if"://7
	{
		 											primary :"asset_id",
		 											value : 0,
		 											asset_id:"asset_id",//p
		 											tn_date:"tn_date",
		 											asset_detail:"asset_detail",
		 											asset_amt:"asset_amt",
		 											asset_unit : "asset_unit",
		 											asset_unit_cost : "asset_unit_cost",
		 											acctype_id:"acctype_id",
		 											acct_flag : "acct_flag",
	},
	"fertilizer"://8
	{
		 											primary :"fertilizer_id",
		 											value : 0,
		 											fertilizer_id:"fertilizer_id",//p
		 											fertilizer_formula:"fertilizer_formula",
		 											brand:"brand",
		 											amount:"amount",
		 											cost : "cost",
		 											price : "price",
		 											year_import : "year_import"
	},
	"fertilizer_sales_dtl"://9
	{
		 											primary :"sales_id",
		 											value : 0,
		 											sales_id:"sales_id",//from fertilizer_sales_tn
		 											fertilizer_id:"fertilizer_id",
		 											sales_total:"sales_total",
		 											cost_unit:"cost_unit",
		 											remark : "remark",
	},
	"fertilizer_sales_tn"://10
	{
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
	"funds"://11
	{
		 											primary :"fund_id",
		 											value : 0,
		 											fund_id:"fund_id",//p
		 											fund_name:"fund_name",
		 											history:"history",
	},
	"goods"://12
	{
		 											primary :"goods_id",
		 											value : 0,
		 											goods_id:"goods_id",//p
		 											goods_name:"goods_name",
		 											accmount:"accmount",
	},
	"goods_tf"://13
	{
		 											primary :"tf_id",
		 											value : 0,
		 											tf_id:"tf_id",//p
		 											tn_date:"tn_date",
		 											goods_id:"goods_id",
		 											goods_amt:"goods_amt",
		 											acctype_id : "acctype_id",
		 											goods_price : "goods_price"
	},
	"milling_fund_summary"://14
	{
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
	"milling_fund_tn"://15
	{
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
	"mill_expense_tn"://16
	{
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
	"mill_expense_transf"://17
	{
		 											primary :"tn_id",
		 											value : 0,
		 											tn_id:"tn_id",//p
		 											tn_date:"tn_date",
		 											tn_detail:"tn_detail",
		 											net:"net",
		 											remark : "remark",
	},
	"mill_expense_transf_dtl"://18
	{
		 											primary :"tn_id",
		 											value : 0,
		 											tn_id:"tn_id",//p
		 											rice_id:"rice_id",
		 											amount:"amount",
		 											price_per_unit:"price_per_unit",
		 											transf_amount : "transf_amount",
	},
	"mill_expense_type"://19
	{
		 											primary :"mill_expense_id",
		 											value : 0,
		 											mill_expense_id:"mill_expense_id",//p
		 											expense_name:"expense_name",
	},
	"mill_fund_board"://20
	{
		 											primary :"board_id",
		 											value : 0,
		 											board_id:"board_id",//p
		 											board_name:"board_name",
		 											board_position:"board_position",
		 											board_status:"board_status",
	},
	"mill_fund_member"://21
	{
		 											primary :"member_id",
		 											value : 0,
		 											member_id:"member_id",//p
		 											prename:"prename",
		 											first_name:"first_name",
		 											last_name:"last_name",
		 											address_no : "address_no",
		 											moo : "moo",
		 											sub_district:"sub_district",
		 											district:"district",
		 											province:"province",
		 											share_amount:"share_amount",
		 											share_price_unit : "share_price_unit",
		 											apply_date:"apply_date",
		 											active_flag:"active_flag",
		 											remark : "remark",
	},
	"mill_income_dtl"://22
	{
		 											primary :"dtl_id",
		 											value : 0,
		 											dtl_id:"dtl_id",//p
		 											tn_id:"tn_id",
		 											mill_product_id:"mill_product_id",
		 											amount:"amount",
		 											price_per_unit : "price_per_unit",
	},
	"mill_income_tn"://23
	{
		 											primary :"tn_id",
		 											value : 0,
		 											tn_id:"tn_id",//p
		 											tn_detail:"tn_detail",
		 											tn_date:"tn_date",
		 											remark:"remark",
		 											net_sale : "net_sale",
	},
	 "mill_product"://24
	{
		 											primary :"mill_product_id",
		 											value : 0,
		 											mill_product_id:"mill_product_id",//p
		 											product_name:"product_name",
		 											cost:"cost",
		 											price:"price",
		 											amount : "amount",
	},
	"observe_activity_tn"://25
	{
		 											primary :"obs_activity_id",
		 											value : 0,
		 											obs_activity_id:"obs_activity_id",//p
		 											obs_date:"obs_date",
		 											obs_detail:"obs_detail",
		 											obs_amount:"obs_amount",
		 											obs_expense : "obs_expense",
		 											obs_remark : "obs_remark"
	},
	"operating_schedule"://26
	{
		 											primary :"tn_id",
		 											value : 0,
		 											tn_id:"tn_id",//p
		 											operate_date:"operate_date",
		 											board_id:"board_id",
		 											remark:"remark",
	},
	"participant_tf"://27
	{
		 											primary :"pt_id",
		 											value : 0,
		 											pt_id:"pt_id",//p
		 											tn_date:"tn_date",
		 											join_name:"join_name",
		 											acctype_id:"acctype_id",
	},
	"rice"://28
	{
		 											primary :"rice_id",
		 											value : 0,
		 											rice_id:"rice_id",//p
		 											rice_name:"rice_name",
	}				
}

var royalobj = {
    rootpath : '/React',
    apipath : '/php/api.php',
    upload : '/php/upload.php',
    authorize : true,
    perpage:10,
    menus:[
    	{
    		title:"หน้าหลัก",
    		link:"/",
    		type:"link"
    	},
    	{
    		title:"กำหนดค่าเริ่นต้นระบบใหม่",
    		link:"/setup",
    		type:"title",
    		Childs:[
    			{title:"Home",link:"/setup/child1",type:"link2",}
    		]
    	},
    	{
    		title:"การบริหารจัดการงานกองทุนตลาด",
    		link:"/manage",
    		type:"title",
    		Childs:[
    			{title:"Home",link:"/setup/child2",type:"link2",}
    		]
    	},
    	{
    		title:"ผู้ดูแลระบบ",
    		link:"/admin",
    		type:"title",
    		Childs:[
    			{title:"ตาราง acct_fund",link:"/setup/acct_fund",type:"link2",}
    		]
    	}
    ],
    entitydata:royalentitey
}
      /*****start Important*****/
       window.variable = royalobj;
      /*****end Important*****/