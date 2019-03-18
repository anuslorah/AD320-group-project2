var barID;
function showForm(clickedID) {
	//bars = undefined;
	barID = clickedID;
	//alert(barID);
	$(document).ready(function(){
		$(".buttonU").click(function(){
    		$(".hideBars").hide();
			$(".updateThis").show(this);
			
			$(".updateThis[ID!=barID])").hide();
		});
	});
}

function update(clickedID) {
	var id = clickedID;	
	alert("id is: " + barID);
	
	
	
 }