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
    addMatrix() {
		this.rebuildMatrix();
		if (this.AxDimension!=this.AyDimension) {
			this.printOnConsole("Matrices have different dimmensions.");
			return;
		}
		var result = [];
		for(var i=0; i<3; i++) 
			result[i]=[];
		for (i =0; i<this.AyDimension; i++) {
			for (var j=0; j<this.AxDimension; j++) {
				//Parsing is necessary here since addition operator can also concatenate strings
				result[i][j]=Math.round((parseFloat(this.matrixA[i][j])+parseFloat(this.matrixB[i][j]))*100)/100;
			}
		}
		var string = "Addition result:\r";
		for (i =0; i<this.AyDimension; i++) {
			for (var j=0; j<this.AxDimension; j++) {
				string=string+"\t"+result[i][j];
			}
			string=string+"\r";
		}
		this.printOnConsole(string);
	}
    
	subtractMatrix() {
		this.rebuildMatrix();
		if (this.AxDimension!=this.AyDimension) {
			this.printOnConsole("Matrices have different dimmensions.");
			return;
		}
		var result = [];
		for(var i=0; i<3; i++) 
			result[i]=[];
		for (i =0; i<this.AyDimension; i++) {
			for (var j=0; j<this.AxDimension; j++) {
				result[i][j]=Math.round((parseFloat(this.matrixA[i][j])-parseFloat(this.matrixB[i][j]))*100)/100;
			}
		}
		var string = "Subtraction result:\r";
		for (i =0; i<this.AyDimension; i++) {
			for (var j=0; j<this.AxDimension; j++) {
				string=string+"\t"+result[i][j];
			}
			string=string+"\r";
		}
		this.printOnConsole(string);
	}
	

    
	printOnConsole(val) {
		document.getElementById("console").value = val;
	}
	
	
	
}

var mc = new MatrixCalculator();