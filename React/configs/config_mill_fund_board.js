var _config_mill_fund_board={
    pageTitle:"ตาราง mill_fund_board",
    tablename:"mill_fund_board",
    dbfield:{
      primary :"board_id",
      value : 0,
      board_id:"board_id",//p
      board_name:"board_name",
      board_position:"board_position",
      board_status:"board_status",
    },
    dbselectcolumn:"",
    dbwhere:"",
    viewcolumn:[
       {"key":"board_name","label":"board_name","type":"String"},
       {"key":"board_position","label":"board_position","type":"String"},
       {"key":"board_status","label":"board_status","type":"String"},
    ],
    FieldInput:[
      {
	        title:"board_name ",
	        dbfield:"board_name",
	        value:'',
	        type:'text',
	        require:true,
	      },
	      {
	        title:"board_position ",
	        dbfield:"board_position",
	        value:'',
	        type:'text',
	        require:true,
	      },
	      {
	        title:"board_status ",
	        dbfield:"board_status",
	        value:'',
	        type:'dropdown',
	        choices:[{label:"Y",value:"Y"},{label:"N",value:"N"}],
	        require:true,
	      },
    ]
}
