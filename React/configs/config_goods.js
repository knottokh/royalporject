var _config_goods={
  pageTitle:"ตาราง goods",
    tablename:"goods",
    dbfield:{
      primary :"goods_id",
      value : 0,
      goods_id:"goods_id",//p
      goods_name:"goods_name",
     // accmount:"accmount",
    },
    dbselectcolumn:"",
    dbwhere:"",
    viewcolumn:[
      {"key":"goods_name","label":"goods_name","type":"String"},
    ],
    FieldInput:[
      {
	        title:"goods_name ",
	        dbfield:"goods_name",
	        value:'',
	        type:'text',
	        require:true,
	      },
    ]
}
