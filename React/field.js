/*************
 * 
 *  pageTitle:"ตาราง milling_fund_tn",
		{
	        title:"acctype_name ",
	        dbfield:"acctype_name",
	        value:'',
	        type:'text',
	        require:true,
	      },
	     {
	        title:"fund_name",
	        dbfield:"fund_id",
	        value:'',
	        type:'dropdown-autocomplete',
	        require:true,
	        sourcetable:{
	        	table:"funds",
	        	dbselectcolumn:"*",
	        	dbwhere:""
	        },  //require
	        field:"fund_name:fund_id",  //require
	        number:true
	      },
	       {
	        title:"buy_date",
	        dbfield:"buy_date",
	        value:'',
	        type:'date',
	        require:true,
	        format:"YYYY-MM-DD"
	    },
	     {
	        title:"tn_id",
	        dbfield:"tn_id",
	        value:'',
	        type:'number',
	        require:true,
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
	      {
	        title:"tn_detail ",
	        dbfield:"tn_detail",
	        value:'',
	        type:'textarea',
	        require:true,
	      },
	      
	      
******************/	      