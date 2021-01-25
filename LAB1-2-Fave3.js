/*LAB 1-2: CONSTRUCTOR FUNCTIONS*/
//FAVE FRIEND CONSTRUCTOR FUNCTION

window.onload = function(){
	//FAVE 3 ARRAY
	var faveThree = [];
	//Form with favorite people stored as a variable
	var faveForm = document.forms[0];
	//The 'div' holding the list stored as a variable
	var faveBlock = document.getElementById('faveBlock');

	//Listen for the 'faveForm' to be 'submitted', then fire the clearForm() function
	faveForm.addEventListener('submit', clearForm);

	//Constructor function - creates a new FaveNames object
	function Friend(name, number) {
		this.friendName = name;
		this.friendNumber = number;
	}

	//A function to clear the div holding the faveForm and construct a new FaveNames object.
	function clearForm() {
		faveForm.style.display = "none";
		faveBlock.style.display = "inline";
		createNewList();
	}

	function createNewList() {
		var friendOne = new Friend(faveForm.n_1.value, faveForm.p_1.value);
		var friendTwo = new Friend(faveForm.n_2.value, faveForm.p_2.value);
		var friendThree = new Friend(faveForm.n_3.value, faveForm.p_3.value);

		faveThree.push(friendOne, friendTwo, friendThree);
		appendList();
	}

	function appendList() {
		var faveList = document.getElementById('faveList');
		faveThree.forEach(name => {
			var listItem = document.createElement('li');
			var textContent = document.createTextNode(name.friendName);
			listItem.appendChild(textContent);
			faveList.appendChild(listItem);
		});
	}


};//END OF onload FUNCTION