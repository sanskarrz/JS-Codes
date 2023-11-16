
var n;
function lengthh(){
	 n=document.getElementById('1').value;
	var str="You have entered length:"+n;
	document.getElementById("res").innerHTML=str;
}
var Array=[n];
function arrayip(){
	let arrval=document.getElementById('2').value;
    console.log(arrval)	;
	Array=arrval.split(',');
    console.log(Array.length);
    console.log(n);
    if(Array.length > n){
        var str="You have entered more elements as compared to the array size";
        document.getElementById("res").innerHTML=str; 
    }
    else{
        var str="You have entered :"+Array;
        document.getElementById("res").innerHTML=str;
    }
		
}
function del(){
	let val=document.getElementById('delete').value;
	var f=Array.indexOf(val); 	
	if(f==-1){
		var str="Value :"+val+" is not present in array";
		document.getElementById("res").innerHTML=str;	
	}
	else{
		delete Array[f];
		var str="Value :"+val+" is deleted";
		document.getElementById("res").innerHTML=str;		
	}	
}
function find(){
	var val=document.getElementById('fnd').value;
 	var f=Array.indexOf(val);
	if(f==-1){
		var str="Value :"+val+" is not present in array";
		document.getElementById("res").innerHTML=str;	
	}
	else{
		var str="Value :"+val+" is present in array";
		document.getElementById("res").innerHTML=str;	
	}
}
function Empty(){
	Array=[];
	document.getElementById("res").innerHTML="Array is Emptied";
}
function Display(){
	var str="";
	for(var i=0;i<Array.length;i++){
		if(Array[i]!=undefined)
			str+=Array[i]+" ";
	}
	document.getElementById("res").innerHTML=str;
}