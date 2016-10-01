var $pageEntity = {
	 init : function(){

	 },
	 getColumns : function(tablename){
	 			var returnobj;
	 			switch (tablename){
	 				case "acct_no":
	 								returnobj ={
	 											primary :"acct_id",
	 											value : 0,
	 											acct_id :"acct_id",
	 											acct_name:"acct_name",
	 											acct_level:"acct_level",
	 											acct_group:"acct_group",
	 								};
	 								break;
	 				case "acct_start":
	 								returnobj ={
	 											primary :"acctype_id",
	 											value : 0,
	 											acctype_id:"acctype_id",
	 											accyear:"accyear",
	 											accmount:"accmount",
	 											balance_backward:"balance_backward",
	 											balance_tomount : "balance_tomount",
	 											balance_forward : "balance_forward"
	 								};
	 								break;
	 				case "acct_type" :
	 								returnobj ={

	 								};
	 								break;
	 				case "agriculture_goods_dtl":
	 								returnobj ={

	 								};
	 								break;
	 				case "agriculture_goods_tn":
	 								returnobj ={

	 								};
	 								break;	
	 				case "asset_if":
	 								returnobj ={

	 								};
	 								break;
	 				case "funds":
	 								returnobj ={

	 								};
	 								break;
	 				case "goods":
	 								returnobj ={

	 								};
	 								break;
	 				case "goods_tf":
	 								returnobj ={

	 								};
	 								break;
	 				case "participant_tf":
	 								returnobj ={

	 								};
	 								break;																
	 				default :
				 				returnobj = undefined;
	 			}

	 			return returnobj;
	 },
	 GetData:function(phppage,data,callback){
	 		data.method = "get";
	 				jQuery.ajax({
					    type: "POST",
					    url: phppage,
					    dataType: 'json',
					    data: data,
					    success: function (obj, textstatus) {
					                  if( !('error' in obj) ) {
																callback(obj);
					                  }
					                  else {
					                       alert(obj.error);
					                  }
					            },
					   error: function (textStatus, errorThrown) {
                alert(textStatus.responseText);
            }

					});	
	 },
	 InsertData:function(phppage,data,callback){
	 		//data.objdata.Created = $pageEntity.dateFormate(new Date());
	 	//	data.objdata.Updated = $pageEntity.dateFormate(new Date());
	 		
	 			data.method = "POST";
	 				jQuery.ajax({
					    type: "POST",
					    url: phppage,
					    dataType: 'json',
					    data: data,
					     success: function (obj, textstatus) {
					                  if( !('error' in obj) ) {
					                     //alert("Insert Success");
					                     callback("Insert Success");
					                  }
					                  else {
					                       alert(obj.error);
					                  }
					            },
					   error: function (textStatus, errorThrown) {
               alert(textStatus.responseText);
            }

					});	
	 },
	 EditData:function(phppage,data,callback){
	 //	data.objdata.Updated = $pageEntity.dateFormate(new Date());
	 			data.method = "PUT";
	 				jQuery.ajax({
					    type: "POST",
					    url: phppage,
					    dataType: 'json',
					    data: data,
					    success: function (obj, textstatus) {
					                  if( !('error' in obj) ) {
					                     //alert("Edit Success");
					                     callback("Update Success");
					                  }
					                  else {
					                       alert(obj.error);
					                  }
					            },
					   error: function (textStatus, errorThrown) {
               alert(textStatus.responseText);
            }

					});	
	 },
	  DeleteData:function(phppage,data,callback){
	  	//	data.objdata.Active = "N";
	  		//data.objdata.Updated = $pageEntity.dateFormate(new Date());
	 			data.method = "PUT";
	 				jQuery.ajax({
					    type: "POST",
					    url: phppage,
					    dataType: 'json',
					    data: data,
					    success: function (obj, textstatus) {
					                  if( !('error' in obj) ) {
					                     //alert("Edit Success");
					                     callback("Update Success");
					                  }
					                  else {
					                       alert(obj.error);
					                  }
					            },
					   error: function (textStatus, errorThrown) {
               alert(textStatus.responseText);
            }

					});	
	 },
	  RestoreData:function(phppage,data,callback){
	  		//data.objdata.Active = "Y";
	  		//data.objdata.Updated = $pageEntity.dateFormate(new Date());
	 			data.method = "PUT";
	 				jQuery.ajax({
					    type: "POST",
					    url: phppage,
					    dataType: 'json',
					    data: data,
					    success: function (obj, textstatus) {
					                  if( !('error' in obj) ) {
					                     //alert("Edit Success");
					                     callback("Update Success");
					                  }
					                  else {
					                       alert(obj.error);
					                  }
					            },
					   error: function (textStatus, errorThrown) {
               alert(textStatus.responseText);
            }

					});	
	 },
	 RemoveData:function(phppage,data,callback){
	 			data.method = "DELETE";
	 				jQuery.ajax({
					    type: "POST",
					    url: phppage,
					    dataType: 'json',
					    data: data,
					    success: function (obj, textstatus) {
					                  if( !('error' in obj) ) {
																//alert("Delete Success");
																callback("Delete Success");
					                  }
					                  else {
					                      alert(obj.error);
					                  }
					            },
					   error: function (textStatus, errorThrown) {
					   			alert(textStatus.responseText);
            }

					});	
	 },
	 dateFormate: function (date) {

        return 	date.getFullYear() +"-" 
        				+(date.getMonth() + 1) +"-"
                + date.getDate() + " "
                + date.getHours() + ":"
                + date.getMinutes() + ":"
                + date.getSeconds();
    },
   MysqlDatetoDate:function (dateString) {
  		var dt  = dateString.split(/\-|\s|:/);
  		var m = parseInt(dt[1]) - 1;
  		dt[1] = m;
  		return new Date(dt[0],dt[1],dt[2],dt[3],dt[4],dt[5]);
		},
	 getParameterByName:function(name, url) {
		    if (!url) url = window.location.href;
		    name = name.replace(/[\[\]]/g, "\\$&");
		    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		        results = regex.exec(url);
		    if (!results) return null;
		    if (!results[2]) return '';
		    return decodeURIComponent(results[2].replace(/\+/g, " "));
		}
};