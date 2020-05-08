// Variables
var totalPrice = 0.00;

// Functions

// Add to cart - takes called item and places it on the cart popup
function addtoCart(item) {
	if(item === "smalltree") {
		$("#smalltree_sc").css("display", "block");
		totalPrice += 20.00;
	} else if(item === "gifttree") {
		$("#gifttree_sc").css("display", "block");
		totalPrice += 80.00;
	} else if(item === "growntree") {
		$("#growntree_sc").css("display", "block");
		totalPrice += 50.00;
	} else if(item === "tshirt") {
		$("#tshirt_sc").css("display", "block");
		totalPrice += 35.00;
	} else if(item === "totebag") {
		$("#totebag_sc").css("display", "block");
		totalPrice += 15.00;
	}
}

// Sum total - find all prices on popup and add up to a total, display
function sumTotal() {
	
}

$(document).ready(function(evt) {
	
	$(".shop-btn").click(function() {
		$("#noitems").css("display", "none");
		var item_id = this.id;
		$("#" + item_id).text("ADDED TO CART");
		$("#" + item_id).attr("disabled", "true");
		$("#" + item_id).css("background-color", "#6e6e6e");
		addtoCart(item_id);
	});
	
	$("#cart").click(function() {
		$("#totalprice").text("$" + totalPrice.toFixed(2));
		if (totalPrice > 0) {
			$("#shopwarning").css("display", "none");
		}
		$(".popup").fadeIn();
	});
	
	$("p#remove").click(function() {
		var remove = $(this).parent().attr('id');
		totalPrice -= parseFloat($("#" + remove).find("h5 #price").text());
		$("#totalprice").text("$" + totalPrice.toFixed(2));
		$("#" + remove.substring(0, remove.length - 3)).text("ADD TO CART");
		$("#" + remove.substring(0, remove.length - 3)).removeAttr("disabled");
		$("#" + remove.substring(0, remove.length - 3)).css("background-color", "#376cd0");
		$("#" + remove).fadeOut();
	});
	
	$("#purchase").click(function() {
		if (totalPrice <= 0) {
			$("#shopwarning").css("display", "block");
		}
	});
	
	$(".closepop").click(function() {
		$(".popup").fadeOut();
	});
});