var _config_fertilizer={
	pageTitle:"ตาราง fertilizer",
    tablename:"fertilizer",
    dbfield:{
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
    dbselectcolumn:"",
    dbwhere:"",
    viewcolumn:[
      {"key":"fertilizer_formula","label":"fertilizer_formula","type":"String"},
      {"key":"brand","label":"brand","type":"String"},
      {"key":"amount","label":"amount","type":"Number"},
      {"key":"cost","label":"cost","type":"Number"},
      {"key":"price","label":"price","type":"Number"},
      {"key":"year_import","label":"year_import","type":"Number"},
    ],
    FieldInput:[
      {
	        title:"fertilizer_formula ",
	        dbfield:"fertilizer_formula",
	        value:'',
	        type:'text',
	        require:true,
	      },
	      {
	        title:"brand ",
	        dbfield:"brand",
	        value:'',
	        type:'text',
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
	        title:"cost",
	        dbfield:"cost",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
	      {
	        title:"price",
	        dbfield:"price",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
	      {
	        title:"year_import",
	        dbfield:"year_import",
	        value:'',
	        type:'number',
	        require:true,
	        number:true
	      },
    ]
}
