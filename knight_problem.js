	/*
		Knight on a Numberpad

		1) Given a phone number pad Order in 3 columns of 4 rows. 
			1 2 3 
			4 5 6
			7 8 9
			# 0 *
		2) you have a Knight that starts off sitting on the 1 piece (and moves like a chesss piece)
		3) given a number of moves that the knight will make starting on the 1
	    4) Octothrope(#) and * are removed from the board and are not valid locations
	    	1 2 3 
			4 5 6
			7 8 9
			  0 

		Calculate the total number of moves that the knight will make
	 
		~~~observations 
		The knight can never land on 5 
		The number of possible moves you can make:
	    {
			1: [8,6],
			2: [7,9],
	    	3: [8, 4],
	    	4: [3,9,0],
	    	5: [],//none
	    	6: [7,1,0],
	    	7: [2,6],
	    	8: [3,1],
	    	9: [2,4],
	    	0: [6,0]
	    }

		worst case performance is 3^n (you can always just oscilate between the same two points)

		We could think of this problem as a tree, what we are really are doing is trying to find the number 
		of leaf nodes to that tree 
	 */


	var possibleMoves =     {
			1: [8,6],
			2: [7,9],
	    	3: [8, 4],
	    	4: [3,9,0],
	    	5: [],//none
	    	6: [7,1,0],
	    	7: [2,6],
	    	8: [3,1],
	    	9: [2,4],
	    	0: [6,0]
	    };


	function calculatePermutations(numberOfMoves) {
		//since we start at 1 we initialize possible locations to 1
		//however, we can always change the location of the starting point. 
		return bruteForce([1], numberOfMoves);
	}


	function bruteForce(possibleLocations, numberOfMovesLeft) {
		var totalLocations = 0;
		if (numberOfMovesLeft === 0) {
			//we are now at the "leaf nodes" of the tree
			//we want to sum them all together
			return possibleLocations.length;
		}
		else {
			for (var i = 0; i < possibleLocations.length; i++) {
			   var nextPossibleLocation = possibleMoves[possibleLocations[i]];
			   //the function will return the length of all the leaf nodes and add them together
			   totalLocations += bruteForce(nextPossibleLocation, (numberOfMovesLeft -1));	
			}
			//this is the total possible (non-unique) end points we will be at. 
			return totalLocations;		
		}

	}
	 










calculatePermutations(3)





