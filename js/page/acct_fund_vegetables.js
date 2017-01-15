var $adminTables= {
	 tablename:'acct_fund',
	 $giid :null,
	 $giidGood :null,
	 $taskDialog:null,
	 $formValid:null,
	  defaultimg:"",
	 objdata : function(){
	 	 return $pageEntity.getColumns($adminTables.tablename);
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
         $(document).on('click.bs.modal.data-api', '.btn-dlg-searchGoodItem', function (event) {
				  		$adminTables.SearchGoodData();
            return false;
        });
        
        	$adminTables.ToCalendarDateSearch("#searchfrom");
        	$adminTables.ToCalendarDateSearch("#searchto");
        	$adminTables.ToCalendarDateSearch("#searchGood");
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
	 		searchtext = " and acct_fund.tn_date >= '"+fromdate+"' and acct_fund.tn_date <= '"+todate+"'";
	 	}
	 	else if(fromdate!="" && todate==""){
	 		searchtext = " and acct_fund.tn_date >= '"+fromdate+"'"
	 	}
	 	else if(fromdate=="" && todate!=""){
	 		searchtext = " and acct_fund.tn_date <= '"+todate+"'";
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
	 SearchGoodData:function(){
	 	
	 	var goodtn = "agriculture_goods_tn";
	 	var gooddtl = "agriculture_goods_dtl";
	 		var fromdate = "";
	 	try{
	 		fromdate =$adminTables.getDateForSearch("searchGood");
	 	}catch(e){}
	 	var searchtext = "";
	 
	    if(fromdate!=""){
	 		searchtext = " and "+goodtn+".buy_date = '"+fromdate+"'";
	 	}
	 	
	 		        var data = {	table: goodtn, 
								    	objdata : $pageEntity.getColumns(goodtn),
								    colselect: goodtn+".buy_id,"+
								    		   goodtn+".buy_date,"+
								    		   goodtn+".buy_vender,"+
								    		   goodtn+".acct_flag,"+
								    		   gooddtl+".dtl_id,"+
								    		   gooddtl+".buy_detail,"+
								    		   gooddtl+".amount,"+
								    		   gooddtl+".buy_unit,"+
								    		   gooddtl+".price_unit"
								    ,
								    where :"left join "+gooddtl+" on "+goodtn+
											   	".buy_id = "+gooddtl+	".buy_id "+
											   	"where "+goodtn+".acct_flag = 'N' "+
											   	searchtext
					    			};
				  data.method = "get";	    			

 			var authorize = true;
			 $adminTables.$giidGood = new Grid({
           // TableId: "tblRoleListTask",
            // TableDataId: "tblRoleListDataTask",
            DivSelector: "#gridMainTablesGood",
            DivDataSelector: "#gridMainTablesTeampGood",
            SourceUrl: $globalKudo.apipath,
            Data : data,
            Sorting: { sort: false, excepts: ["records_no", "action"] },
            Searching: false,
            PerPage:10,
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
            fnRowElementsAction: [
           /* 	{
                name: ".btn-delete",
                callback: $adminTables.RemoveItems,
                authorize:authorize
            },
            {
                name: ".btn-assign",
                callback: $adminTables.dialogShow,
                authorize: authorize
            },*/
            {
                name: ".btn-NewDataItem",
                callback: $adminTables.dialogShowFromSearch,
                authorize: authorize
            }],
            fnRowCreated: function ($html, data) {
               /* if (data.Id == 1) {
                    $html.find('.btn').remove();
                }*/

                return $html;
            },
        });
				$adminTables.$giidGood.Bind();
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
							//$adminTables.$taskDialog.find('#acctype_id').prop('readonly', true);
			$adminTables.$taskDialog.find('select[name=acctype_id]').val(1);
			$adminTables.$taskDialog.find('#acctype_id').attr("disabled", true); 
			
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
			
		
	 		}
	 		catch(e){
	 			$spinner.hide();	
	 			var params = { message: "เกิดข้อผิดพลาด : "+e.message };
	 			$alert.error(params);
	 		}

	 },
	 dialogShowFromSearch:function ($row, id){
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
			$adminTables.ToDropdownAcctType("#acctype_id",function(){
				$adminTables.ToDropdownAcctNo("#acct_id",function(){
								//$adminTables.$taskDialog.find('#acctype_id').prop('readonly', true);	
						$adminTables.$taskDialog.find('select[name=acctype_id]').val(1);
						$adminTables.$taskDialog.find('#acctype_id').attr("disabled", true); 
						
			         
			
				         //$adminTables.$taskDialog.find(".btn-save").click($adminTables.onSubmitNewTables);
				         $adminTables.$taskDialog.find(".btn-save").click(function(){
            		 				$adminTables.onSubmitAddtoDbFromSearch(id);
            				});
			             $spinner.hide();		
			           	  $adminTables.$taskDialog.show();
					
				});
				
			});
			


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
										
											var tablename = "agriculture_goods_tn"
										  var objgetdata = {	table: tablename, 
															objdata : $pageEntity.getColumns(tablename),
															where : "where tn_id = '"+params.id+"'"
												};
										 objgetdata.method = "get";	   
												  
												 					$pageEntity.GetData($globalKudo.apipath,objgetdata,function(data){
												 									
												 						var jsonobj = JSON.parse(data.data);
						
												 						for(var i =0;i<jsonobj.length;i++){
													 							 	var attnogood = $pageEntity.getColumns(tablename);
													 							 	    attnogood.tn_id = null;
													 							 		attnogood.acct_flag = "N";		
													 									attnogood.value =jsonobj[i].buy_id;
															 						var savedatagood = {	table: tablename, 
																						    						objdata: attnogood
																			    					};
												
																				    //Logic to delete the item
																				    	$adminTables.InserUpdate(jsonobj[i].buy_id,savedatagood);
												 						}
												 						if($adminTables.$giidGood!=null){
														 							$adminTables.$giidGood.Bind();	
														 				}
																		
												 					});

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
   onSubmitAddtoDbFromSearch:function(id){
   		$adminTables.addToDatabaseSearch(id);
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
   addToDatabaseSearch:function(itemid){
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

	 						 	var savedata = {	table: $adminTables.tablename, 
												    					objdata: attno
									    					};				

								$adminTables.InserUpdate(undefined,savedata,function(idtn){

				   					 	var goodtn = $pageEntity.getColumns("agriculture_goods_tn");
				   					 				goodtn.tn_id = idtn;	
													goodtn.acct_flag = "Y";		
					 						if(itemid){
					 										goodtn.value = itemid;
					 								}	
				
					 						 	var savedata = {	table: "agriculture_goods_tn", 
																    					objdata: goodtn
													    					};				
				
												$adminTables.InserUpdate(itemid,savedata);
											
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
									 				if($adminTables.$giidGood!=null){
									 							$adminTables.$giidGood.Bind();	
									 				}
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
									 				if($adminTables.$giidGood!=null){
									 							$adminTables.$giidGood.Bind();	
									 				}
									 				$adminTables.$taskDialog.hide();
								                    }
									 });  
			 }
   }
	
};

