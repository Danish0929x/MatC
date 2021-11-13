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
    calDeterminantA() {
		this.rebuildMatrix();
		if (this.AxDimension!=this.AyDimension) {
			this.determinantA=null;
			this.printOnConsole("Non-square matrix, determinant cannot be calculated.");
			return;
		}
		var determinant;
		if (this.AxDimension==1) {
			determinant = this.matrixA[0][0];
		}
		if (this.AxDimension==2) {
			determinant = (this.matrixA[0][0]*this.matrixA[1][1])-(this.matrixA[0][1]*this.matrixA[1][0]);
		}
		if (this.AxDimension==3) {
			// Calculate determinatant of a 3*3 matrix 
			//      |a b c|
			// |A|= |d e f|  = ( a*e*i + b*f*g + c*d*h - a*f*h -b*f*g - c*e*g)
			//      |g h i|

			var op1, op2, op3, r1, r2, r3;
			op1 = this.matrixA[0][0]*this.matrixA[1][1]*this.matrixA[2][2];
			op2 = this.matrixA[0][1]*this.matrixA[1][2]*this.matrixA[2][0];
			op3 = this.matrixA[0][2]*this.matrixA[1][0]*this.matrixA[2][1];
			r1 = this.matrixA[0][2]*this.matrixA[1][1]*this.matrixA[2][0];
			r2 = this.matrixA[0][0]*this.matrixA[1][2]*this.matrixA[2][1];
			r3 = this.matrixA[0][1]*this.matrixA[1][0]*this.matrixA[2][2];
			determinant = Math.round((op1+op2+op3-r1-r2-r3)*100)/100;
		}
		this.determinantA = determinant;
		//adding determinant of A in local storage
		let det;
		if(localStorage.getItem('Determinant(A)')===null){
			det=[];
		}else{
			det=JSON.parse(localStorage.getItem('Determinant(A)'));
		}
		det.push(determinant);
		localStorage.setItem('Determinant(A)',JSON.stringify(det));

		this.printOnConsole("Determinant of matrix A: "+determinant)
		return;
	}



	calDeterminantB() {
		this.rebuildMatrix();
		if (this.BxDimension!=this.ByDimension) {
			this.determinantB=null;
			this.printOnConsole("Non-square matrix, determinant cannot be calculated.");
			return;
		}
		var determinant;
		if (this.BxDimension==1) {
			determinant = this.matrixB[0][0];
		}
		if (this.BxDimension==2) {
			determinant = (this.matrixB[0][0]*this.matrixB[1][1])-(this.matrixB[0][1]*this.matrixB[1][0]);
		}
		if (this.BxDimension==3) {
			var op1, op2, op3, r1, r2, r3;
			op1 = this.matrixB[0][0]*this.matrixB[1][1]*this.matrixB[2][2];
			op2 = this.matrixB[0][1]*this.matrixB[1][2]*this.matrixB[2][0];
			op3 = this.matrixB[0][2]*this.matrixB[1][0]*this.matrixB[2][1];
			r1 = this.matrixB[0][2]*this.matrixB[1][1]*this.matrixB[2][0];
			r2 = this.matrixB[0][0]*this.matrixB[1][2]*this.matrixB[2][1];
			r3 = this.matrixB[0][1]*this.matrixB[1][0]*this.matrixB[2][2];
			determinant = Math.round((op1+op2+op3-r1-r2-r3)*100)/100;
		}
		this.determinantB = determinant;
		let det;
		if(localStorage.getItem('Determinant(B)')===null){
			det=[];
		}else{
			det=JSON.parse(localStorage.getItem('Determinant(B)'));
		}
		det.push(determinant);
		localStorage.setItem('Determinant(B)',JSON.stringify(det));
		this.printOnConsole("Determinant of matrix B: "+determinant)
		return;
	}
  
	

    
	printOnConsole(val) {
		document.getElementById("console").value = val;
	}
	
	
	
}

var mc = new MatrixCalculator();
