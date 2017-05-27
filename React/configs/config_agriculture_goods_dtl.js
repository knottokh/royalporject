var _config_agriculture_goods_dtl={
    pageTitle:"ตาราง agriculture_goods_dtl",
    tablename:"agriculture_goods_dtl",
    dbfield:{
      primary :"dtl_id",
      value : 0,
      dtl_id:"dtl_id",//p
      buy_id:"buy_id",//from agriculture_goods_tn //auto added
      buy_detail:"buy_detail",
      amount:"amount",
      buy_unit : "buy_unit",
      price_unit : "price_unit"
    },
    dbselectcolumn:"",
    dbwhere:"",
    viewcolumn:[
      {"key":"buy_id","label":"buy_id","type":"Number"},
      {"key":"buy_detail","label":"buy_detail","type":"String"},
      {"key":"amount","label":"amount","type":"Number"},
      {"key":"buy_unit","label":"buy_unit","type":"String"},
      {"key":"price_unit","label":"price_unit","type":"Number"},
    ],
    FieldInput:[
      {
	        title:"buy_id",
	        dbfield:"buy_id",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
      {
	        title:"buy_detail ",
	        dbfield:"buy_detail",
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
	        title:"buy_unit",
	        dbfield:"buy_unit",
	        value:'',
	        type:'text',
	        require:true
	      },
	      {
	        title:"price_unit",
	        dbfield:"price_unit",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
    ]
}
