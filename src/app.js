document.addEventListener("DOMContentLoaded", () => {
	console.log("App loaded")
	
	var text = document.getElementById("prof-pic")
	var angelfire = new Angelfire()
	
	var config = {
		"options": [
		{
			"name": "Add",
			"event": function() {
				alert("Add clicked!")
			}
		},
		{
			"name": "Subtract",
			"event": function() {
				alert("Subtract clicked!")
			}
		},
		{
			"name": "Multiply",
			"event": function() {
				alert("Multiply clicked!")
			}
		}
		],
		"menu-styles": { // CSS props for menu
			"background-color": "red",
			"color": "white",
		}
	}
	
	angelfire.addMenu(text, config)
})