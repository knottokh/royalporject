var _config_agriculture_goods_tn={
    pageTitle:"ตาราง agriculture_goods_tn",
    tablename:"agriculture_goods_tn",
    dbfield:{
      primary :"buy_id",
      value : 0,
      buy_id:"buy_id",//p
      buy_date:"buy_date",
      buy_vender:"buy_vender",
      acct_flag:"acct_flag",//auto change
      tn_id:"tn_id",//auto addded
    },
    dbselectcolumn:"",
    dbwhere:"",
    viewcolumn:[
      {"key":"buy_date","label":"buy_date","type":"Date"},
      {"key":"buy_vender","label":"buy_vender","type":"String"},
      {"key":"acct_flag","label":"acct_flag","type":"String"},
      {"key":"tn_id","label":"tn_id","type":"Number"},
    ],
    FieldInput:[
      {
	        title:"buy_date",
	        dbfield:"buy_date",
	        value:'',
	        type:'date',
	        require:true,
	        format:"YYYY-MM-DD"
	    },
	    {
	        title:"buy_vender ",
	        dbfield:"buy_vender",
	        value:'',
	        type:'text',
	        require:true,
	      },
	    {
	        title:"tn_id",
	        dbfield:"tn_id",
	        value:'',
	        type:'number',
	        require:false,
	        number:true
	      },
	      {
	        title:"acct_flag ",
	        dbfield:"acct_flag",
	        value:'',
	        type:'dropdown',
	        choices:[{label:"Y",value:"Y"},{label:"N",value:"N"}],
	        require:true,
	      },
    ]
}
