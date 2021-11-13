class MatrixCalculator {
	constructor() {
		this.matrixA = [];
		this.matrixB = [];
		for(var i=0; i<3; i++) {
			this.matrixA[i] = [];
			this.matrixB[i] = [];
		}
		
		this.AxDimension = 3;
		this.AyDimension = 3;
		this.BxDimension = 3;
		this.ByDimension = 3;
	}
	calculateDimensions() {
		this.AxDimension = 3;
		this.AyDimension = 3;
		
		var count = 2;
		while (count>=0 && this.matrixA[0][count]==0 && this.matrixA[1][count]==0 && this.matrixA[2][count]==0) {
			this.AxDimension--;
			count--;
		}
		count = 2;
		while (count>=0 && this.matrixA[count][0]==0 && this.matrixA[count][1]==0 && this.matrixA[count][2]==0) {
			this.AyDimension--;
			count--;
		}
		
	
		this.BxDimension = 3;
		this.ByDimension = 3;
		
		var count = 2;
	
		while (count>=0 && this.matrixB[0][count]==0 && this.matrixB[1][count]==0 && this.matrixB[2][count]==0) {
			this.BxDimension--;
			count--;
		}
		count = 2;
	
		while (count>=0 && this.matrixB[count][0]==0 && this.matrixB[count][1]==0 && this.matrixB[count][2]==0) {
			this.ByDimension--;
			count--;
		}		
	}

    rebuildMatrix() {
		var row1 = document.getElementsByClassName("m1r1");
		var row2 = document.getElementsByClassName("m1r2");
		var row3 = document.getElementsByClassName("m1r3");
		for (var i=0; i<3; i++) {
			this.matrixA[0][i] = row1[i].value;
			this.matrixA[1][i] = row2[i].value;
			this.matrixA[2][i] = row3[i].value;
		}
		row1 = document.getElementsByClassName("m2r1");
		row2 = document.getElementsByClassName("m2r2");
		row3 = document.getElementsByClassName("m2r3");
		for (var i=0; i<3; i++) {
			this.matrixB[0][i] = row1[i].value;
			this.matrixB[1][i] = row2[i].value;
			this.matrixB[2][i] = row3[i].value;
		}
		this.calculateDimensions();
	}
	


	clear(){
       this.printOnConsole(document.getElementById('console').value = 'Result:');

	}
    calRankB() {
		this.rebuildMatrix();
		
		var rank = this.BxDimension;
		var row = this.ByDimension;
		var mat = this.matrixB;
		
		for (row = 0; row < rank; row++) { 
			if (mat[row][row]) { 
			   for (var col = 0; col < this.ByDimension; col++) { 
				   if (col != row) { 
					 var mult = Math.round(mat[col][row] / mat[row][row]*100)/100; 
					 for (var i = 0; i < rank; i++) 
					   mat[col][i] -= mult * mat[row][i]; 
				  } 
			   } 
			} 
			else
			{ 
				var reduce = true; 
				for (var i = row + 1; i < this.ByDimension;  i++) 
				{ 
					if (mat[i][row]) 
					{ 
						var aux = mat[row];
						mat[row] = math[i];
						math[i] = aux;
						reduce = false; 
						break; 
					} 
				} 
				if (reduce) 
				{ 
					rank--; 
					for (i = 0; i < this.ByDimension; i++) 
						mat[i][row] = mat[i][rank]; 
				} 
				row--; 
			} 
		} 
		let rankB;
		if(localStorage.getItem('Rank(B)')===null){
			rankB=[];
		}else{
			rankB=JSON.parse(localStorage.getItem('Rank(B)'));
		}
		rankB.push(rank);
		localStorage.setItem('Rank(B)',JSON.stringify(rankB));
		this.printOnConsole("Rank of matrix B: "+rank); 		
	}
    
	calRankA() {
		this.rebuildMatrix();
		
		var rank = this.AxDimension;
		var row = this.AyDimension;
		var mat = this.matrixA;
		
		for (row = 0; row < rank; row++) { 
			if (mat[row][row]) { 
			   for (var col = 0; col < this.AyDimension; col++) { 
				   if (col != row) { 
					 var mult = Math.round(mat[col][row] / mat[row][row]*100)/100; 
					 for (var i = 0; i < rank; i++) 
					   mat[col][i] -= mult * mat[row][i]; 
				  } 
			   } 
			} 
			else
			{ 
				var reduce = true; 
				for (var i = row + 1; i < this.AyDimension;  i++) 
				{ 
					if (mat[i][row]) 
					{ 
						var aux = mat[row];
						mat[row] = math[i];
						math[i] = aux;
						reduce = false; 
						break; 
					} 
				} 
				if (reduce) 
				{ 
					rank--; 
					for (i = 0; i < this.AyDimension; i++) 
						mat[i][row] = mat[i][rank]; 
				} 
				row--; 
			} 
		} 
		let rankA;
		if(localStorage.getItem('Rank(A)')===null){
			rankA=[];
		}else{
			rankA=JSON.parse(localStorage.getItem('Rank(A)'));
		}
		rankA.push(rank);
		localStorage.setItem('Rank(A)',JSON.stringify(rankA));
		this.printOnConsole("Rank of matrix A: "+rank); 		
	}
	

    
	printOnConsole(val) {
		document.getElementById("console").value = val;
	}
	
	
	
}

var mc = new MatrixCalculator();