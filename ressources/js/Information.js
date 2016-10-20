var Information = function() {
	this.jsonMultiTab = {};
	this.character = [];
	this.characterLoaded = [];
};

Information.prototype = {
	create: function() {
		this.jsonMultiTab.character = this.character;
		var var1 = {
			"1": {
				"name": "Patrick",
				"hobby": "teletubies",
				"personality": "Bad",
				"value" : 1000,
				"postes": [
					"Concepteur Java", "Intégrateur"
				]
			}
		};
		var var2 = {
			"2": {
				"name": "Michel",
				"hobby": "petanque",
				"personality": "gentil",
				"value" : 1500,
				"postes": [
					"Concepteur Java", "Concept design"
				]
			}
		};
		var var3 = {
			"3": {
				"name": "Marc",
				"hobby": "oiseau",
				"personality": "rêveur",
				"value" : 2000,
				"postes": [
					"Testeur", "Concepteur Java"
				]
			}
		};
		var var4 = {
			"4": {
				"name": "Justin",
				"hobby": "poney",
				"personality": "ambianceur",
				"value" : 3000,
				"postes": [
					"Concepteur Java"
				]
			}
		};
		this.jsonMultiTab.character.push(var1);
		this.jsonMultiTab.character.push(var2);
		this.jsonMultiTab.character.push(var3);
		this.jsonMultiTab.character.push(var4);
		// console.log(JSON.stringify(this.jsonMultiTab));
		for (var prop in this.jsonMultiTab) {
			// console.log(prop);
			for (var i = 0; i < this.jsonMultiTab[prop].length; i++) {
				// console.log(this.jsonMultiTab[prop][i][i + 1]);
				this.characterLoaded.push(this.jsonMultiTab[prop][i][i + 1]);
			}

		}
	},

		getInformationByKey : function(key) {
		console.log("yooooooohoooooooo"+this.characterLoaded[key-1]);
		return this.characterLoaded[key-1];
	}
}