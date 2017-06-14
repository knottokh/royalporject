var _config_goods_tf={
   pageTitle:"ตาราง goods_tf",
    tablename:"goods_tf",
    dbfield:{
      primary :"tf_id",
      value : 0,
      tf_id:"tf_id",//p
      tn_date:"tn_date",
      goods_id:"goods_id",//from goods
      goods_amt:"goods_amt",
      acctype_id : "acctype_id", //from acctype
      goods_price : "goods_price"
    },
    dbselectcolumn:"goods.goods_name,acct_type.acctype_name,goods_tf.tf_id,goods_tf.tn_date,"+
                    "goods_tf.goods_id,goods_tf.goods_amt,goods_tf.acctype_id,goods_tf.goods_price",
    dbwhere:"left join goods on goods.goods_id = goods_tf.goods_id "+
					  "left join acct_type on acct_type.acctype_id = goods_tf.acctype_id ",
    viewcolumn:[
      {"key":"tn_date","label":"tn_date","type":"Date"},
      {"key":"goods_name","label":"goods_name","type":"String"},
      {"key":"goods_amt","label":"goods_amt","type":"Number"},
      {"key":"acctype_name","label":"acctype_name","type":"String"},
      {"key":"goods_price","label":"goods_price","type":"Number"},
    ],
    FieldInput:[
       {
	        title:"tn_date",
	        dbfield:"tn_date",
	        value:'',
	        type:'date',
	        require:true,
	        format:"YYYY-MM-DD"
	    },
	    {
	        title:"goods_name",
	        dbfield:"goods_id",
	        value:'',
	        type:'dropdown-autocomplete',
	        require:true,
	        sourcetable:{
	        	table:"goods",
	        	dbselectcolumn:"*",
	        	dbwhere:""
	        },  //require
	        field:"goods_name:goods_id",  //require
	        number:true
	      },
	      {
	        title:"goods_amt",
	        dbfield:"goods_amt",
	        value:'',
	        type:'number',
	        require:false,
	        number:true
	      },
	      {
	        title:"acctype_name",
	        dbfield:"acctype_id",
	        value:'',
	        type:'dropdown-autocomplete',
	        require:true,
	        sourcetable:{
	        	table:"acct_type",
	        	dbselectcolumn:"*",
	        	dbwhere:""
	        },  //require
	        field:"acctype_name:acctype_id",  //require
	        number:true
	      },
	      {
	        title:"goods_price",
	        dbfield:"goods_price",
	        value:'',
	        type:'number',
	        require:false,
	        number:true
	      },
    ]
}
