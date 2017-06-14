var royalentitey = {
	"acct_fund":_config_acct_func,//1
	"acct_no":_config_acct_no,//2
	"acct_start":_config_acct_start,//3
	"acct_type":_config_acct_type,//4
	"agriculture_goods_dtl":_config_agriculture_goods_dtl,//5
    "agriculture_goods_tn":_config_agriculture_goods_tn,//6
 	"asset_if":_config_asset_if,//7
	"fertilizer_sales_dtl":_config_fertilizer_sales_dtl,//8
	"fertilizer_sales_tn":_config_fertilizer_sales_tn,//9
	"fertilizer":_config_fertilizer,//10
	"funds":_config_funds,//11
	"goods_tf":_config_goods_tf,//12,
	"goods":_config_goods,//13
	"mill_expense_tn":_config_mill_expense_tn,//14
//	"mill_expense_transf_dtl":_config_mill_expense_transf_dtl,//15
	"mill_expense_transf":_config_mill_expense_transf,//16
	"mill_expense_type":_config_mill_expense_type,//17
	"mill_fund_board":_config_mill_fund_board,//18
	"mill_fund_member":_config_mill_fund_member,//19
	"mill_income_dtl":_config_mill_income_dtl,//20
	"mill_income_tn":_config_mill_income_tn,//21
	"mill_product":_config_mill_product,//22
	"milling_fund_summary":_config_milling_fund_summary,//23
	"milling_fund_tn":_config_milling_fund_tn,//24
	"observe_activity_tn":_config_observe_activity_tn,//25
	"operating_schedule":_config_operating_schedule,//26
	"participant_tf":_config_participant_tf,//27
	"rice":_config_rice,//28
}

var royalobj = {
    rootpath : '/React',
    apipath : '/php/api.php',
    upload : '/php/upload.php',
    authorize : true,
    perpage : 10,
    tableStyle:"table-striped table-bordered",
    menus : _config_menu_navbar,
    entitydata : royalentitey
}
/*****start Important*****/
 window.variable = royalobj;
/*****end Important*****/
