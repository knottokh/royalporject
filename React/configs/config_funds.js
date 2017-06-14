var _config_funds={
   pageTitle:"ตาราง funds",
    tablename:"funds",
    dbfield:{
      primary :"fund_id",
      value : 0,
      fund_id:"fund_id",//p
      fund_name:"fund_name",
      history:"history",
    },
    dbselectcolumn:"",
    dbwhere:"",
    viewcolumn:[
       {"key":"fund_name","label":"fund_name","type":"String"},
       {"key":"history","label":"history","type":"String"},
    ],
    FieldInput:[
      {
	        title:"fund_name ",
	        dbfield:"fund_name",
	        value:'',
	        type:'text',
	        require:true,
	      },
	      {
	        title:"history ",
	        dbfield:"history",
	        value:'',
	        type:'textarea',
	        require:true,
	      },
    ]
}
