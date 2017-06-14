var _config_mill_expense_type={
    pageTitle:"ตาราง mill_expense_type",
    tablename:"mill_expense_type",
    dbfield:{
      primary :"mill_expense_id",
      value : 0,
      mill_expense_id:"mill_expense_id",//p
      expense_name:"expense_name",
    },
    dbselectcolumn:"",
    dbwhere:"",
    viewcolumn:[
      {"key":"expense_name","label":"expense_name","type":"String"},
    ],
    FieldInput:[
      {
	        title:"expense_name ",
	        dbfield:"expense_name",
	        value:'',
	        type:'text',
	        require:true,
	      },
    ]
}
