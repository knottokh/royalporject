var $adminTables= {
	 tablename:'agriculture_goods_tn',
	 tablenamechild:'agriculture_goods_dtl',
	 $giid :null,
	 $taskDialog:null,
	 $formValid:null,
	  defaultimg:"",
	 objdata : function(){
	 	 return $pageEntity.getColumns($adminTables.tablename);
	},
	 objdatachild : function(){
	 	 return $pageEntity.getColumns($adminTables.tablenamechild);
	},
	init : function(){
				  $(document).on('click.bs.modal.data-api', '.btn-dlg-newItem', function (event) {
				  		$adminTables.dialogShow();
            return false;
        });
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
	 		searchtext = " where "+$adminTables.tablename+".buy_date >= '"+fromdate+"' and "+$adminTables.tablename+".buy_date <= '"+todate+"'";
	 	}
	 	else if(fromdate!="" && todate==""){
	 		searchtext = " where "+$adminTables.tablename+".buy_date >= '"+fromdate+"'"
	 	}
	 	else if(fromdate=="" && todate!=""){
	 		searchtext = " where "+$adminTables.tablename+".buy_date <= '"+todate+"'";
	 	}
	 	
	 		        var data = {	table: $adminTables.tablename, 
								    	objdata : $adminTables.objdata(),
								    colselect: $adminTables.tablename+".buy_id,"+
								    		   $adminTables.tablename+".buy_date,"+
								    		   $adminTables.tablename+".buy_vender,"+
								    		   $adminTables.tablename+".acct_flag,"+
								    		   $adminTables.tablenamechild+".dtl_id,"+
								    		   $adminTables.tablenamechild+".buy_detail,"+
								    		   $adminTables.tablenamechild+".amount,"+
								    		   $adminTables.tablenamechild+".buy_unit,"+
								    		   $adminTables.tablenamechild+".price_unit"
								    ,
								    where :"left join "+$adminTables.tablenamechild+" on "+$adminTables.tablename+
											   	".buy_id = "+$adminTables.tablenamechild+	".buy_id "+
											   	searchtext
					    			};
				  data.method = "get";	    			

 			var authorize = true;
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
                		data.buy_id,
                		data.dtl_id,
                		data.RecordNo,
                    	data.buy_date,
	                    data.buy_vender,
	                    data.buy_detail,
	                    data.amount,
	                    data.buy_unit,
	                    data.price_unit,
	                    data.acct_flag
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
		 $adminTables.$taskDialog.find(divid).datetimepicker({
		                    locale: 'th',
		                   format: 'YYYY-MM-DD',
		                    widgetPositioning: {
									            horizontal: 'auto',
									            vertical: 'bottom'
									        }
		                });

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
	},
		getDateForSearch:function(divid){
   		return $pageEntity.dateFormate(new Date($('#'+divid).data('DateTimePicker').date().toString()));
   },
	 dialogShow:function ($row, id){
			var childid;
			try{
				childid = $row.data("childid");
			}catch(e){}
	 		$spinner.show();
	 		
	 		try{	   	
            $adminTables.$taskDialog = $dialogFirst.init('#tablesDataTmp');
            $adminTables.$formValid = $adminTables.$taskDialog.find("#tablesDataForms");
            $adminTables.$formValid.validate({
		            rules: {
		                 buy_date: {
		                    required: true
		                },
		                buy_vender: {
		                    required: true,
		                    maxlength:100,
		                },
		                 buy_detail: {
		                    required: true,
		                    maxlength:100,
		                },
		                amount: {
		                    required: true,
		                    number: true,
		                    maxlength:11,
		                    digits: true,
		                },
		                buy_unit: {
		                    required: true,
		                    maxlength:20,
		                },
		                price_unit: {
		                    required: true,
		                    number: true,
		                },
		            },
		          /*  messages: {
		                TablesName: {
		                    required: "required",
		                },
		                TablesLevel: {
		                    required: "required",
		                    number:"number only",
		                },
		                 TablesGroup: {
		                    required: "required",
		                    number:"number only",
		                },
		            }*/
		        });

            $adminTables.$taskDialog.find(".btn-close").hide();
             $adminTables.ToCalendarDate("#buy_date");
            if(id){


            	var tracking = $(this.name).attr("tracking");
            	if(tracking == "V"){
            			$adminTables.$taskDialog.find(".btn-save").hide();
            			$adminTables.$taskDialog.find(".btn-cancel").hide();
            			$adminTables.$taskDialog.find(".btn-close").show();
            			$adminTables.$taskDialog.find('input').prop('readonly', true);	
            			$adminTables.$taskDialog.find('textarea').prop('readonly', true);
            	}else{
            		 $adminTables.$taskDialog.find(".btn-save").click(function(){
            		 				$adminTables.onSubmitUpdateTables(id,childid);
            		 });
            	}
            		var attno = $adminTables.objdata();
	 									attno.value = id;
				 					var objgetdata = {	table: $adminTables.tablename, 
											    					objdata: attno,
											    					where :"join "+$adminTables.tablenamechild+" on "+$adminTables.tablename+
											    					".buy_id = "+$adminTables.tablenamechild+	".buy_id where "
											    					+$adminTables.tablenamechild+".buy_id = "+id
											    				};
				 					$pageEntity.GetData($globalKudo.apipath,objgetdata,function(data){
				 									
				 												var jsonobj = JSON.parse(data.data);
				 												//alert(jsonobj[0].Name);
				 												try{
				 												 $adminTables.$taskDialog.find('#buy_date').data('DateTimePicker').date($pageEntity.MysqlDatetoDate(jsonobj[0].buy_date));	
				 												 $adminTables.$taskDialog.find('textarea[name=buy_vender]').html(jsonobj[0].buy_vender);
				 												 $adminTables.$taskDialog.find('textarea[name=buy_detail]').html(jsonobj[0].buy_detail);
				 												 $adminTables.$taskDialog.find('input[name=amount]').val(jsonobj[0].amount);
				 												 $adminTables.$taskDialog.find('input[name=buy_unit]').val(jsonobj[0].buy_unit);
				 												 $adminTables.$taskDialog.find('input[name=price_unit]').val(jsonobj[0].price_unit);
				 												}catch(e){}
           			 						
				 									  $spinner.hide();		
           			 								$adminTables.$taskDialog.show();
				 					});
            }	else{


	             	$adminTables.$taskDialog.find(".btn-save").click($adminTables.onSubmitNewTables);
            		 $spinner.hide();		
           			 $adminTables.$taskDialog.show();
            }
	 		}
	 		catch(e){
	 			$spinner.hide();	
	 			var params = { message: "เกิดข้อผิดพลาด : "+e.message };
	 			$alert.error(params);
	 		}


	 },
	deleteItems: function ($row, id) {
        var params = { id: id,childid :$row.data("childid") };
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
								
											if(params.childid){
					   			 			var attnochild = $adminTables.objdatachild();
						 								attnochild.value = params.childid;
							 						var savedatachild = {	table: $adminTables.tablenamechild, 
														    						objdata: attnochild
											    					};
					
													    //Logic to delete the item
												$pageEntity.DeleteData($globalKudo.apipath,savedatachild,function(){
													
															$adminTables.$grid.Bind();	
					
												});
					
						 				}	
						 					else{$adminTables.$grid.Bind();	}

							});

	 				}		
   		return false;
   },
   RemoveItems: function ($row, id) {
        var params = { id: id,childid :$row.data("childid") };
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
											if(params.childid){
					   			 			var attnochild = $adminTables.objdatachild();
						 								attnochild.value = params.childid;
							 						var savedatachild = {	table: $adminTables.tablenamechild, 
														    						objdata: attnochild
											    					};
					
													    //Logic to delete the item
												$pageEntity.RemoveData($globalKudo.apipath,savedatachild,function(){
													
															$adminTables.$grid.Bind();	
					
												});

	 				}		
	 				else{$adminTables.$grid.Bind();	}

							});

	 				}		
   		return false;
   },
   onSubmitNewTables:function(){
   		$adminTables.addToDatabase();
   		return false;
   },
   onSubmitUpdateTables:function(id,childid){
   		$adminTables.addToDatabase(id,childid);
   		return false;
   },
    getDateToDb:function(divid){
   		return $pageEntity.dateFormate(new Date($adminTables.$taskDialog.find('#'+divid).data('DateTimePicker').date().toString()));
   },
   addToDatabase:function(itemid,itemidchild){
   		if( $adminTables.$formValid.valid()){
   						 $spinner.show();	
   					//	var file_data = $adminTables.$taskDialog.find('#files').prop('files')[0];   
   						var buy_date 	= $adminTables.getDateToDb('buy_date');
   						var buy_vender		= $adminTables.$taskDialog.find('textarea[name=buy_vender]').html();
					   // var acct_flag 	= $adminTables.$taskDialog.find('input[name=acct_flag]').val();
   					 	var attno = $adminTables.objdata();
	 								attno.buy_date = buy_date;
	 								attno.buy_vender = buy_vender;
									attno.acct_flag = "N";		
	 						if(itemid){
	 										attno.value = itemid;
	 								}	

	 						 	var savedata = {	table: $adminTables.tablename, 
												    					objdata: attno
									    					};				

								$adminTables.InserUpdate(itemid,savedata,function(insertid){
									
										var buy_id		=insertid;
									    var buy_detail	= $adminTables.$taskDialog.find('textarea[name=buy_detail]').html();
									    var amount 	= $adminTables.$taskDialog.find('input[name=amount]').val();
									    var buy_unit 	= $adminTables.$taskDialog.find('input[name=buy_unit]').val();
									    var price_unit 	= $adminTables.$taskDialog.find('input[name=price_unit]').val();
				   					 	var attnochild = $adminTables.objdatachild();
					 								
					 								attnochild.buy_detail = buy_detail;
													attnochild.amount = amount;	
													attnochild.buy_unit = buy_unit;
													attnochild.price_unit = price_unit;	
					 						if(itemidchild){
					 										attnochild.value = itemidchild;
					 								}	
					 								else{
					 									attnochild.buy_id = buy_id;
					 								}
				
					 						 	var savedatachild = {	table: $adminTables.tablenamechild, 
																    					objdata: attnochild
													    					};				
				
												$adminTables.InserUpdate(itemidchild,savedatachild);
									
								});
	 								
		   	
		   	}
   },
   InserUpdate:function(id,data,callback){
   			
   			if(id){
	 										$pageEntity.EditData($globalKudo.apipath,data,function(msg){
	 												 $spinner.hide();	
									 				 if(callback){
								                        if(typeof callback == "function"){
								                             callback(msg);
								                        }
								                    }
								                    else{
									 				$adminTables.$grid.Bind();	
									 				$adminTables.$taskDialog.hide();
								                    }
									 });  
	 								}
	 								else{
					 		
									 $pageEntity.InsertData($globalKudo.apipath,data,function(msg){
									 				 $spinner.hide();
									 				 if(callback){
								                        if(typeof callback == "function"){
								                             callback(msg);
								                        }
								                    }
								                    else{
									 				$adminTables.$grid.Bind();	
									 				$adminTables.$taskDialog.hide();
								                    }
									 });  
			 }
   }
	
};

