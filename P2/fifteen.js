// Jevoi's sliding 15 puzzle
//Behaviours occur on opening of HTML file
//Extra Feature is animation(different styling)
//Animation is changing the border color of each moved square
//Randomly chosen colours are blue, pink and orange
//After animation is applied a moveable sqaure no longer hovers red, but still is highlighted

window.onload = function(){
	
	var puzzle = document.getElementById("puzzlearea");
	var pieces = puzzle.children;
	var positionTop = 0;
	var positionLeft = 0;
	var emptyTop = 300;
	var emptyLeft = 300;
	var oldTop;
	var oldLeft;
	var shufflePiece;
	var shuffles = [];
	var shuffleTimes = 1000;
	var backgroundLeft = 0;
	var backgroundTop = 0;

	//Arranges squares and adds puzzlepiece class and proper background to all the squares
	
	for(var i =0; i < pieces.length; i++){
		pieces[i].addClassName ("puzzlepiece");
		pieces[i].style.top =  positionTop + "px";
		pieces[i].style.left = positionLeft + "px";
		pieces[i].style.backgroundPosition = backgroundLeft + "px " + backgroundTop + "px";
				
		if(positionLeft < 300){
			positionLeft = positionLeft + 100;
			backgroundLeft = backgroundLeft - 100;
		}
		else{
			positionLeft = 0;
			backgroundLeft = 0;
			positionTop = positionTop + 100;
			backgroundTop = backgroundTop - 100;
		}
	}

	
	for(var i =0; i < pieces.length; i++){
		pieces[i].onclick= move; 
		pieces[i].onmouseover= movable; 

	}


	$("controls").onclick = Shuffle;


	//Allows neighbouring squares to move in empty space

	function move(){
		movedColor(this);
		//console.log("the empty top is:" + emptyTop);
		//console.log("the empty left is:" + emptyLeft);
	    	oldTop = parseInt(this.style.top);
		oldLeft = parseInt(this.style.left);
		//console.log ("the old top is:" + oldTop);
		//console.log ("the old left is:" + oldLeft);
		if (oldTop == emptyTop && oldLeft == (emptyLeft-100) || oldTop == emptyTop && oldLeft == (emptyLeft+100) || oldTop == (emptyTop-100) && oldLeft == emptyLeft || oldTop == (emptyTop+100) && oldLeft == emptyLeft){
		this.style.top = emptyTop + "px";
		this.style.left = emptyLeft + "px";
		emptyTop = oldTop;
		emptyLeft = oldLeft;
		//console.log ("the empty top is:" + emptyTop);
		//console.log ("the empty left is:" + emptyLeft);
				
	}
	
	}


	//Applies movablepiece class to squares that neighbour an empty square

	function movable(){
		oldTop = parseInt(this.style.top);
		oldLeft = parseInt(this.style.left);
		if (oldTop == emptyTop && oldLeft == (emptyLeft-100) || oldTop == emptyTop && oldLeft == (emptyLeft+100) || oldTop == (emptyTop-100) && oldLeft == emptyLeft || oldTop == (emptyTop+100) && oldLeft == emptyLeft){
		this.addClassName("movablepiece");
				
		}
		else{
		this.removeClassName("movablepiece");
	}
	}

	
	//Randomly takes a square that neighbours an empty square and exchange their positions
	// It does this 1000 times to get a shuffled board
	//one random number tests and chooses from two squares- left or right and top/bottom
	// If one square does not exist it chooses the other- one of the two must exist 

	function Shuffle(){
		for(var c = 0; c < shuffleTimes; c++){
			var choice = Math.floor (Math.random () * 4);
			console.log(choice);

			if ( choice == 0) {
				(getStyle((emptyTop-100)+"px", emptyLeft+"px"))|| getStyle((emptyTop+100)+"px", emptyLeft+"px");
				oldTop = parseInt(shufflePiece.style.top);
 				//console.log( oldTop);
 				oldLeft = parseInt(shufflePiece.style.left);
 				shufflePiece.style.top = emptyTop + "px";
 				shufflePiece.style.left = emptyLeft + "px";
				emptyTop = oldTop;
 				emptyLeft = oldLeft;
 			}
	
			else if ( choice == 1) {
 				(getStyle(emptyTop+"px", (emptyLeft-100)+"px")) || getStyle(emptyTop+"px", (emptyLeft + 100)+"px");
				oldTop = parseInt(shufflePiece.style.top);
				//console.log( oldTop);
				oldLeft = parseInt(shufflePiece.style.left);
				shufflePiece.style.top = emptyTop + "px";
				shufflePiece.style.left = emptyLeft + "px";
				emptyTop = oldTop;
				emptyLeft = oldLeft;
			}
	
			else if ( choice == 2) {
				getStyle((emptyTop+100)+"px", emptyLeft+"px") || (getStyle((emptyTop-100)+"px", emptyLeft+"px"));
				oldTop = parseInt(shufflePiece.style.top);
				//console.log( oldTop);
				oldLeft = parseInt(shufflePiece.style.left);
				shufflePiece.style.top = emptyTop + "px";
				shufflePiece.style.left = emptyLeft + "px";
				emptyTop = oldTop;
				emptyLeft = oldLeft;
			}

 			else {
				getStyle(emptyTop+"px", (emptyLeft + 100)+"px") || (getStyle(emptyTop+"px", (emptyLeft-100)+"px"));
				oldTop = parseInt(shufflePiece.style.top);
				//console.log( oldTop);
				oldLeft = parseInt(shufflePiece.style.left);
				shufflePiece.style.top = emptyTop + "px";
				shufflePiece.style.left = emptyLeft + "px";
				emptyTop = oldTop;
				emptyLeft = oldLeft;
			}
		}	
	}

	//Helper function to the shuffle function
	//Gets the top and left values of each sqaure
	//Keeps track of the squares that neighbour an empty square at all times

	function getStyle(top, left){
		for(var i =0; i < pieces.length; i++){
			if(pieces[i].style.top==top && pieces[i].style.left==left){
				shufflePiece = pieces[i];
				return shufflePiece;		
			}
		}
	}
	

	// Animation feature
	//Applies a stylng feature to each square that is moved
	// changes the border color of a moved sqaure

	function movedColor(el){
		var colors = ["pink","blue", "orange"];
		var colorChoice = Math.floor (Math.random() * 3);
		var color = colors[colorChoice];

		el.style.borderColor = color;
	}

};