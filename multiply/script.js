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
    multiplyMatrix() {
		this.rebuildMatrix();
		if (this.AxDimension!=this.ByDimension) {
			this.printOnConsole("Number of columns on A is different from number of rows on B.");
			return;
		}
		var result = [];
		for(var i=0; i<3; i++) 
			result[i]=[];
		i=0;
		var j=0;
		//x refers to columns, y refers to rows
		var rowsRes = this.AyDimension;
		var columnsRes = this.BxDimension;
		
		for (i=0; i<rowsRes; i++) {
			for (j=0; j<columnsRes; j++) {
				result[i][j] = this.matrixA[i][0]*this.matrixB[0][j]+this.matrixA[i][1]*this.matrixB[1][j]+this.matrixA[i][2]*this.matrixB[2][j];
				result[i][j] = Math.round(result[i][j]*100)/100;
			}
		}
		var string = "Multiplication result:\r";
		for (i=0; i<rowsRes; i++) {
			for (j=0; j<columnsRes; j++) {
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