var questionsChoices = {
	1: {
		question: "How did Daenerys Targaryen eventually hatch her dragon eggs?",
		choices: ["In a lightning storm", "In a funeral pyre", "In a fireplace", "In a frozen cave"]
	},
	2: {
		question: "The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:",
		choices: ["Valar Dohaeris or 'all men must serve'", "Valar Rohnas or 'all men must live'", "Valar GoGo or 'all men must dance'", "None of the above"]
	},
	3: {
		question: "What is the only thing that can put out volatile Wildfire?",
		choices: ["Sand", "Water", "Dragon's blood", "Sunlight"]
	},
	4: {
		question: "Besides dragonglass, what is the only other substance capable of defeating White Walkers?",
		choices: ["Weirwood", "Wildfire", "Valyrian Steel", "Snowballs"]
	},
	5: {
		question: "How many times has Beric Dondarrion been brought back to life?",
		choices: ["Three times", "Five times", "Six times", "Seven times"]
	},
  6: {
		question: "Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?",
		choices: ["Ghost", "Lady", "Nymeria", "Summer"]
	},
  7: {
		question: "Arya's punishment for stealing from the Many-Face God is:",
		choices: ["Death", "Memory Loss", "Blindness", "Uncontrollable laughter"]
	},
  8: {
		question: "'It's nothing' were the last words of this infamous character:",
		choices: ["Renly Baratheon", "Tywin Lannister", "Robb Stark", "King Joffrey"]
	},
  9: {
		question: "Who is the last of the Night's Watch to stab Jon Snow?",
		choices: ["Olly", "Thorne", "Marsh", "Yarwyck"]
	},
  10: {
		question: "The name of King Tommen's favorite cat is:",
		choices: ["Battle Pus", "Little Lion", "Ser Pounce", "Prince Fuzzy"]
	},
  11: {
		question: "The Night King was created using a dagger made of:",
		choices: ["Valyrian Steel", "Blue Ice", "Dragonglass", "Weirwood"]
	},
  12: {
		question: "What is Sansa Stark's favorite treat?",
		choices: ["Apple cranberry crisp", "Strawberry rhubarb pie", "Lemon cakes", "Honey cakes"]
	},
  13: {
		question: "What was the name of Ned Stark's greatsword?",
		choices: ["Ice", "Oathkeeper", "Widow's Wail", "Northguard"]
	},
  14: {
		question: "How many arrows does Ramsay Bolton let loose at Rickon Stark?",
		choices: ["Three", "Five", "Two", "Four"]
	},
  15: {
		question: "Dead creatures revived by White Walkers are known as:",
		choices: ["Walkers", "Wights", "Zombie", "Claws"]
	}
};

var answers = {
	1: "In a funeral pyre",
	2: "Valar Dohaeris or 'all men must serve'",
	3: "Sand",
	4: "Valyrian Steel",
	5: "Six times",
  6: "Lady",
  7: "Blindness",
  8: "King Joffrey",
  9: "Olly",
  10: "Ser Pounce",
  11: "Dragonglass",
  12: "Lemon cakes",
  13: "Ice",
  14: "Four",
  15: "Wights"
};

var totalQuestions = Object.keys(questionsChoices).length;
