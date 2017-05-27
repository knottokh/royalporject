var _config_acct_no={
    pageTitle:"ตาราง acct_no",
    tablename:"acct_no",
    dbfield:{
      primary :"acct_id",
      value : 0,
      acct_id :"acct_id",//p
      acct_name:"acct_name",
      acct_level:"acct_level",
      acct_group:"acct_group",
    },
    dbselectcolumn:"",
    dbwhere:"",
    viewcolumn:[
      {"key":"acct_name","label":"Name","type":"String"},
      {"key":"acct_level","label":"Level","type":"Number"},
      {"key":"acct_group","label":"Group","type":"Number"},
    ],
    FieldInput:[
      {
	        title:"Name ",
	        dbfield:"acct_name",
	        value:'',
	        type:'text',
	        require:true,
	      },
	      {
	        title:"Level",
	        dbfield:"acct_level",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
	      {
	        title:"Group ",
	        dbfield:"acct_group",
	        value:'',
	        type:'number',
	        require:true,
	      }
    ]
}
