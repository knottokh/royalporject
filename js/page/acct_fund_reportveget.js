var $adminTables= {
	 tablename:'acct_fund',
	 $giid :null,
	 $taskDialog:null,
	 $formValid:null,
	  defaultimg:"",
	 objdata : function(){
	 	 return $pageEntity.getColumns($adminTables.tablename);
	},
	init : function(){
			/*	  $(document).on('click.bs.modal.data-api', '.btn-dlg-newItem', function (event) {
				  		$adminTables.dialogShow();
            return false;
        });*/
         $(document).on('click.bs.modal.data-api', '.btn-dlg-searchItem', function (event) {
				  		$adminTables.loadData();
            return false;
        });
        	$adminTables.ToCalendarDateSearch("#searchfrom");
        	$adminTables.ToCalendarDateSearch("#searchto");
			$adminTables.defaultimg =  $globalKudo.rootpath+"images/defaults/no-image.jpg";
	 },
	 loadData:function(){
	 		var fromdate = "";
	 	try{
	 		fromdate =$adminTables.getDateForSearch("searchfrom");
	 	}catch(e){}
	 	var todate = "";
	 	try{
	 		todate =$adminTables.getDateForSearch("searchto");
	 	}catch(e){}
	 	var searchtext = "";
	 	if(fromdate!="" && todate!=""){
	 		searchtext = " and acct_fund.acctype_id='1' and acct_fund.tn_date >= '"+fromdate+"' and acct_fund.tn_date <= '"+todate+"'";
	 	}
	 	else if(fromdate!="" && todate==""){
	 		searchtext = " and acct_fund.acctype_id='1' and  acct_fund.tn_date >= '"+fromdate+"'"
	 	}
	 	else if(fromdate=="" && todate!=""){
	 		searchtext = " and acct_fund.acctype_id='1' and  acct_fund.tn_date <= '"+todate+"'";
	 	}
	 	
	 	var typename = "acct_type";
	 	var noname = "acct_no";
	 		        var data = {	table: $adminTables.tablename, 
								    	objdata : $adminTables.objdata(),
								      colselect: typename+".acctype_name,"+
								    		   noname+".acct_name,"+
								    		   $adminTables.tablename+".tn_id,"+
								    		   $adminTables.tablename+".tn_date,"+
								    		   $adminTables.tablename+".tn_detail,"+
								    		   $adminTables.tablename+".amount,"+
								    		   $adminTables.tablename+".remark"
								    ,
								    where :"left join "+typename+" on "+
								    		$adminTables.tablename+".acctype_id = "+typename+	".acctype_id "+
											"left join "+noname+" on "+
											$adminTables.tablename+	".acct_id = "+noname+	".acct_id "+
											" where "+$adminTables.tablename+".acctype_id='1' "+
											searchtext
					    			};
				  data.method = "get";	      			

 			var authorize = false;
			 $adminTables.$grid = new Grid({
           // TableId: "tblRoleListTask",
            // TableDataId: "tblRoleListDataTask",
            DivSelector: "#gridMainTables",
            DivDataSelector: "#gridMainTablesTeamp",
            SourceUrl: $globalKudo.apipath,
            Data : data,
            Sorting: { sort: false, excepts: ["records_no", "action"] },
            Searching: false,
            PerPage:20,
            fnRowDisplayFormat: function (html, data) {
                return html.format(
                		data.tn_id,
                		data.RecordNo,
                    	data.acctype_name,
	                    data.acct_name,
	                    data.tn_date,
	                    data.tn_detail,
	                    data.amount,
	                    data.remark
                    );
            },
            fnRowElementsAction: [{
                name: ".btn-delete",
                callback: $adminTables.RemoveItems,
                authorize:authorize
            },
            {
                name: ".btn-assign",
                callback: $adminTables.dialogShow,
                authorize: authorize
            },
            {
                name: ".btn-view",
                callback: $adminTables.dialogShow,
                authorize: authorize
            }],
            fnRowCreated: function ($html, data) {
               /* if (data.Id == 1) {
                    $html.find('.btn').remove();
                }*/

                return $html;
            },
        });
				$adminTables.$grid.Bind();
	 },
	 ToCalendarDate:function(divid){
		//	$adminMatches.$taskDialog.find('#datetimepicker1').datetimepicker();
		 $adminTables.$taskDialog.find(divid).datetimepicker({
		                    locale: 'th',
		                  //  sideBySide:true,
		                   format: 'YYYY-MM-DD',
		                    widgetPositioning: {
									            horizontal: 'auto',
									            vertical: 'bottom'
									        }
		                  //  widgetParent:".wiget-calendar-div"
		                });
		//  $adminMatches.$taskDialog.find(divid).on("dp.change", function (e) {
       //     $adminMatches.$taskDialog.find('#EndDateInput').data("DateTimePicker").minDate(e.date);
       // });
	},
	ToCalendarDateSearch:function(divid){
		//	$adminMatches.$taskDialog.find('#datetimepicker1').datetimepicker();
		 $(divid).datetimepicker({
		                    locale: 'th',
		                  //  sideBySide:true,
		                   format: 'YYYY-MM-DD',
		                    widgetPositioning: {
									            horizontal: 'auto',
									            vertical: 'bottom'
									        }
		                  //  widgetParent:".wiget-calendar-div"
		                });
		//  $adminMatches.$taskDialog.find(divid).on("dp.change", function (e) {
       //     $adminMatches.$taskDialog.find('#EndDateInput').data("DateTimePicker").minDate(e.date);
       // });
	},
	getDateForSearch:function(divid){
   		return $pageEntity.dateFormate(new Date($('#'+divid).data('DateTimePicker').date().toString()));
   },
	ToCalendarDateTime:function(divid){
		//	$adminMatches.$taskDialog.find('#datetimepicker1').datetimepicker();
		 $adminTables.$taskDialog.find(divid).datetimepicker({
		                    locale: 'th',
		                  //  sideBySide:true,
		                    widgetPositioning: {
									            horizontal: 'auto',
									            vertical: 'bottom'
									        }
		                  //  widgetParent:".wiget-calendar-div"
		                });
		//  $adminMatches.$taskDialog.find(divid).on("dp.change", function (e) {
       //     $adminMatches.$taskDialog.find('#EndDateInput').data("DateTimePicker").minDate(e.date);
       // });
	},
		ToDropdownAcctType:function(divid,callback){
		var tablename = "acct_type"
		  var objgetdata = {	table: tablename, 
							objdata : $pageEntity.getColumns(tablename)
				};
		 objgetdata.method = "get";	   
				  
				 					$pageEntity.GetData($globalKudo.apipath,objgetdata,function(data){
				 									
				 						var jsonobj = JSON.parse(data.data);
				 						var $selectdiv = $adminTables.$taskDialog.find(divid);
				 						for(var i =0;i<jsonobj.length;i++){
				 							 $("<option />", {value: jsonobj[i].acctype_id, text: jsonobj[i].acctype_name}).appendTo($selectdiv);
				 						}
				 						if(callback){
								                        if(typeof callback == "function"){
								                             callback();
								                        }
								                    }

				 					});
	},
	ToDropdownAcctNo:function(divid,callback){
		var tablename = "acct_no"
		  var objgetdata = {	table: tablename, 
							objdata : $pageEntity.getColumns(tablename)
				};
		 objgetdata.method = "get";	   
				  
				 					$pageEntity.GetData($globalKudo.apipath,objgetdata,function(data){
				 									
				 						var jsonobj = JSON.parse(data.data);
				 						var $selectdiv = $adminTables.$taskDialog.find(divid);
				 						for(var i =0;i<jsonobj.length;i++){
				 							 $("<option />", {value: jsonobj[i].acct_id, text: jsonobj[i].acct_name}).appendTo($selectdiv);
				 						}
											if(callback){
								                        if(typeof callback == "function"){
								                             callback();
								                        }
								                    }
				 					});
	},
	 dialogShow:function ($row, id){
			$spinner.show();
	 		
	 		try{	   	
            $adminTables.$taskDialog = $dialogFirst.init('#tablesDataTmp');
            $adminTables.$formValid = $adminTables.$taskDialog.find("#tablesDataForms");
            $adminTables.$formValid.validate({
		            rules: {
		                acctype_id: {
		                    required: true,
		                    number: true,
		                    maxlength:11,
		                    digits: true,
		                },
		                acct_id: {
		                    required: true,
		                    number: true,
		                    maxlength:11,
		                    digits: true,
		                },
		                tn_date: {
		                    required: true,
		                },
		                tn_detail: {
		                    required: true,
		                },
		                amount: {
		                    required: true,
		                    number: true,
		                },
		                remark: {
		                    required: true,
		                },
		            },
		           /* messages: {
		                acctype_id: {
		                    required: "required",
		                    number:"number only",
		                },
		                acct_id: {
		                    required: "required",
		                    number:"number only",
		                },
		                 tn_date: {
		                    required: "required",
		                },
		                tn_detail: {
		                    required: "required",
		                },
		                amount: {
		                    required: "required",
		                    number:"number only",
		                },
		                 remark: {
		                    required: "required",
		                },
		            }*/
		        });

            $adminTables.$taskDialog.find(".btn-close").hide();
			$adminTables.ToCalendarDate("#tn_date");
				var tracking = $(this.name).attr("tracking");
			$adminTables.ToDropdownAcctType("#acctype_id",function(){
				
					$adminTables.ToDropdownAcctNo("#acct_id",function(){
							
            if(id){


            
            	if(tracking == "V"){
            			$adminTables.$taskDialog.find(".btn-save").hide();
            			$adminTables.$taskDialog.find(".btn-cancel").hide();
            			$adminTables.$taskDialog.find(".btn-close").show();
            			$adminTables.$taskDialog.find('input').prop('readonly', true);	
            			$adminTables.$taskDialog.find('select').attr("disabled", true); 
            			$adminTables.$taskDialog.find('textarea').prop('readonly', true);
            	}else{
            		 $adminTables.$taskDialog.find(".btn-save").click(function(){
            		 				$adminTables.onSubmitUpdateTables(id);
            		 });
            	}
            		var attno = $adminTables.objdata();
	 									attno.value = id;
				 					var objgetdata = {	table: $adminTables.tablename, 
											    					objdata: attno
											    				};
				 					$pageEntity.GetData($globalKudo.apipath,objgetdata,function(data){
				 									
				 												var jsonobj = JSON.parse(data.data);
				 												//alert(jsonobj[0].Name);
				 												 $adminTables.$taskDialog.find('select[name=acctype_id]').val(jsonobj[0].acctype_id);	
				 												 $adminTables.$taskDialog.find('select[name=acct_id]').val(jsonobj[0].acct_id);
				 												 $adminTables.$taskDialog.find('#tn_date').data('DateTimePicker').date($pageEntity.MysqlDatetoDate(jsonobj[0].tn_date));	
				 												 //$adminTables.$taskDialog.find('input[name=tn_date]').val(jsonobj[0].tn_date);
				 												 $adminTables.$taskDialog.find('textarea[name=tn_detail]').html(jsonobj[0].tn_detail);	
				 												 $adminTables.$taskDialog.find('input[name=amount]').val(jsonobj[0].amount);
				 												 $adminTables.$taskDialog.find('textarea[name=remark]').html(jsonobj[0].remark);
           			 						
				 									  $spinner.hide();		
           			 								$adminTables.$taskDialog.show();
				 					});
            }	else{


	             	$adminTables.$taskDialog.find(".btn-save").click($adminTables.onSubmitNewTables);
            		 $spinner.hide();		
           			 $adminTables.$taskDialog.show();
            }
					});
			});
		
			//$adminTables.$taskDialog.find('#acctype_id').prop('readonly', true);	
		

	 		}
	 		catch(e){
	 			$spinner.hide();	
	 			var params = { message: "เกิดข้อผิดพลาด : "+e.message };
	 			$alert.error(params);
	 		}

	 },
	deleteItems: function ($row, id) {
        var params = { id: id };
        $alert.confirmDelete($adminTables.onSubmitDeleteItems, params);
   },
   onSubmitDeleteItems:function(params){
   		if(params.id){
   			 			var attno = $adminTables.objdata();
	 								attno.value = params.id;
		 						var savedata = {	table: $adminTables.tablename, 
									    						objdata: attno
						    					};

								    //Logic to delete the item
							$pageEntity.DeleteData($globalKudo.apipath,savedata,function(){
										$adminTables.$grid.Bind();	

							});

	 				}		
   		return false;
   },
   RemoveItems: function ($row, id) {
        var params = { id: id };
        $alert.confirmDelete($adminTables.onSubmitRemoveItems, params);
   },
   onSubmitRemoveItems:function(params){
   		if(params.id){
   			 			var attno = $adminTables.objdata();
	 								attno.value = params.id;
		 						var savedata = {	table: $adminTables.tablename, 
									    						objdata: attno
						    					};

								    //Logic to delete the item
							$pageEntity.RemoveData($globalKudo.apipath,savedata,function(){
										$adminTables.$grid.Bind();	

							});

	 				}		
   		return false;
   },
   onSubmitNewTables:function(){
   		$adminTables.addToDatabase();
   		return false;
   },
   onSubmitUpdateTables:function(id){
   		$adminTables.addToDatabase(id);
   		return false;
   },
   getDateToDb:function(divid){
   		return $pageEntity.dateFormate(new Date($adminTables.$taskDialog.find('#'+divid).data('DateTimePicker').date().toString()));
   },
   addToDatabase:function(itemid){
   		if( $adminTables.$formValid.valid()){
   					//	var file_data = $adminTables.$taskDialog.find('#files').prop('files')[0];   
   						var acctype_id		= $adminTables.$taskDialog.find('select[name=acctype_id]').val();
					    var acct_id 	= $adminTables.$taskDialog.find('select[name=acct_id]').val();
					    var tn_date 	= $adminTables.getDateToDb('tn_date');
					    var tn_detail	= $adminTables.$taskDialog.find('textarea[name=tn_detail]').html();
					    var amount 	= $adminTables.$taskDialog.find('input[name=amount]').val();
					    var remark 	= $adminTables.$taskDialog.find('textarea[name=remark]').html();
   					 	var attno = $adminTables.objdata();
	 								attno.acctype_id = acctype_id;
	 								attno.acct_id = acct_id;
									attno.tn_date = tn_date;	
									attno.tn_detail = tn_detail;
	 								attno.amount = amount;
									attno.remark = remark;	
	 						if(itemid){
	 										attno.value = itemid;
	 								}	

	 						 	var savedata = {	table: $adminTables.tablename, 
												    					objdata: attno
									    					};				

								$adminTables.InserUpdate(itemid,savedata);
	 								
		   	
		   	}
   },
   InserUpdate:function(id,data){
   			 $spinner.show();	
   			if(id){
	 										$pageEntity.EditData($globalKudo.apipath,data,function(msg){
	 												 $spinner.hide();	
									 				$adminTables.$grid.Bind();	
									 				$adminTables.$taskDialog.hide();
									 });  
	 								}
	 								else{
					 		
									 $pageEntity.InsertData($globalKudo.apipath,data,function(msg){
									 				 $spinner.hide();	
									 				$adminTables.$grid.Bind();	
									 				$adminTables.$taskDialog.hide();
									 });  
			 }
   }
	
};

