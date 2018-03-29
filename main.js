//Class called Pokemon that generates Pokemon objects.

function abilities(pokemon){

	let arr = [];
	for(let i=0; i<pokemon.abilities.length; i++){
		arr.push(pokemon.abilities[i].ability.name);
	}
	return arr;
}

function hp(pokemon){

	let arr = [];
	for(let i=0; i<pokemon.stats[i].length; i++){
		arr.push(pokemon.stats[5].base_stat);
	}
	return arr;
}

function attack(pokemon){

	let arr = [];
	for(let i=0; i<pokemon.stats[i].length; i++){
		arr.push(pokemon.stats[4].base_stat);
	}
	return arr;
}

function defense(pokemon){

	let arr = [];
	for(let i=0; i<pokemon.stats[i].length; i++){
		arr.push(pokemon.stats[3].base_stat);
	}
	return arr;
}


class Pokemon {

	constructor(pokemon){
	this.hp = hp(pokemon);
	this.attack = attack(pokemon);
	this.defense = defense(pokemon);
	this.abilities = abilities(pokemon);
	}
}


class Trainer { 
              constructor(){
               this.pokemon = [] 
             }
}



// and have your trainer class have a method called maybe addPokemon(pokemonObject) 
//that will add a entire pokemon object to the empty array part of your trainer


// 	Challenge:
// Try showing extra pieces of information such as:
// move related information
// priority
// power
// accuracy
// and have this information be hidden by default and then have it display on a button click
// use an animation with the reveal

 
// Completion Requirements:
// represent a fictitious trainer name
// be deployed to Github pages
// 
// have all css code written in sass
// use materialize as the grid system

		//var pokestr = '';
		$.ajax({

			url: "https://pokeapi.co/api/v2/pokemon/kakuna",

			type: "GET",

			success: function(pokemon) {
					

					console.log(new Pokemon(pokemon))

					$('#left-screen').click(function() { 
					
					$('#abilities').text(abilities(pokemon))
					$('#hp').text(hp(pokemon))
					$('#attack').text(attack(pokemon))
					$('#defense').text(defense(pokemon))


					$('#kakuna-img').append('<img src="Images/kakuna.png"></img>')

				})


				//new Pokemon(kakuna)
						
			
			// have all pokemon stored within a container object named after your trainer name
			
			// have a method named all
			
			// accepts no parameters
			
			// returns an array of Pokemon objects
			
			// have a method named get
			
			// accepts 1 parameter called name
			
			// returns a Pokemon object housing information for the pokemon it found	

		},

		error: function(error) {
			console.log("There is an error in your function.")
		}

})

				$.ajax({

			url: "https://pokeapi.co/api/v2/pokemon/typhlosion",

			type: "GET",

			success: function(pokemon) {
			//console.log(new Pokemon(pokemon))

			// 		('#bigcircle').click(function() { 

			// 		$('#green-screen').text(new Pokemon(pokemon))

			// 	})
		
			
			// have all pokemon stored within a container object named after your trainer name
			
			// have a method named all
			
			// accepts no parameters
			
			// returns an array of Pokemon objects
			
			// have a method named get
			
			// accepts 1 parameter called name
			
			// returns a Pokemon object housing information for the pokemon it found


		},

		error: function(error) {
			console.log("There is an error in your function.")
		}

})

						$.ajax({

			url: "https://pokeapi.co/api/v2/pokemon/masquerain",

			type: "GET",

			success: function(pokemon) {
				//console.log(new Pokemon(pokemon))
				
				// 	$('#bigcircle').click(function() { 

				// 	$('#green-screen').text(new Pokemon(pokemon))

				// })

		
			
			// have all pokemon stored within a container object named after your trainer name
			
			// have a method named all
			
			// accepts no parameters
			
			// returns an array of Pokemon objects
			
			// have a method named get
			
			// accepts 1 parameter called name
			
			// returns a Pokemon object housing information for the pokemon it found

		},

		error: function(error) {
			console.log("There is an error in your function.")
		}

})
	
//-----------J Query-----------//

$('#bigcircle').click(function() { 

	$('#left-screen').append('<img src="Images/vespera.png"></img>').css("width", 10).css("height", 20).css('text-align', 'center')
	$('#left-screen').append('<img src="https://media.giphy.com/media/zdaC4L1UZQ4Ny/source.gif"></img>') 


})
