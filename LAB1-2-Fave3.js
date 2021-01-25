/*LAB 1-2: CONSTRUCTOR FUNCTIONS*/
//FAVE FRIEND CONSTRUCTOR FUNCTION

window.onload = function(){
	//FAVE 3 ARRAY
	var faveThree = [];
	//Form with favorite people stored as a variable
	var faveForm = document.forms[0];
	//The 'div' holding the list stored as a variable
	var faveBlock = document.getElementById('faveBlock');

	//Constructor function - creates a new Friend object
	function Friend(name, number) {
		this.friendName = name;
		this.friendNumber = number;
	}

	//Listen for the 'faveForm' to be 'submitted', then fire the clearForm() function
	faveForm.addEventListener('submit', clearForm);

	//A function to transform the form a
	function clearForm() {
		//Hide the form
		faveForm.style.display = "none";
		//Call the createNewList() function;
		createNewList();
		//Display the list of friends
		faveBlock.style.display = "inline";
	}

	//A function to create three new friends, push them to the friend array and call another function.
	function createNewList() {
		//First new Friend object
		var friendOne = new Friend(faveForm.n_1.value, faveForm.p_1.value);
		//Second new Friend object
		var friendTwo = new Friend(faveForm.n_2.value, faveForm.p_2.value);
		//Third new Friend object
		var friendThree = new Friend(faveForm.n_3.value, faveForm.p_3.value);
		//Push the values of those new Friend objects to the faveThree array
		faveThree.push(friendOne, friendTwo, friendThree);
		//Call the generateList() function
		generateList();
	}

	//A function to generate a list of the friends passed through the form.
	function generateList() {
		var faveList = document.getElementById('faveList');
		faveThree.forEach(name => {
			var listItem = document.createElement('li');
			var textContent = document.createTextNode(name.friendName);
			listItem.appendChild(textContent);
			faveList.appendChild(listItem);
		});
	}
};//END OF onload FUNCTION