function checkSimilarity(){
	var content1 = document.getElementById('t3').value;
	var content2 = document.getElementById('t4').value;
	if(content1 == content2){
		alert("the email are same");
	}
	else{
		alert("the emails are not same");
	}
}
function validate(){
	var ckc = false;
	var ckr = false;
    var i;
	var vechile=document.forms[0];
	for(i=0; i<vechile.length; i++){
		if(vechile[i].type==='checkbox'&&vechile[i].checked == true){
			ckc = true;
		}
	}
	
	
	
    var cku=true;
	var ckp=true;
	var ckn=true;
	var cke1=true;
	var cke2 = true;
	var cks=true;

	var x = document.getElementById("t1");
	var y = document.getElementById("t2");
	var z = document.getElementById("t5");
	var z1 = document.getElementById("t3");
	var z2 = document.getElementById("t4");
	var z3 = document.getElementById("em1");

		if(x.value==""){
			cku = false;
		}
	if(y.value==""){
			ckp = false;
		}
    if(z.value==""){
			ckn = false;
		}
	if(z1.value==""){
			cke1 = false;
		}
    if(z2.value==""){
			cke2 = false;
		}
	if(z3.value==""){
			cks = false;
		}
	
	var c1 =false;
	var c2 = false;
	
	var a = document.getElementsByName("gender");
	var b = document.getElementsByName("name");
	for(var i=0; i<a.length; i++){
		if(a[i].checked){
			c1 = true;
		}
		if(b[i].checked){
			c2 = true;
		}
	}
	if(c1 ==true&&c2==true){
		ckr = true;
	}
	
	
	if(ckc==true &&ckr ==true&&cku==true &&ckp == true&&ckn ==true&&cke1==true && cke2 == true&&cks ==true){
		alert("All field has been completed");
	}else{
		var str = "the fields that are not completed are";
			if(ckc==false){
				str = str+ " Checkbox," ;
			}
			if(cku ==false){
				str= str+" User Name field,";
			}
			if(ckr==false){
				str = str+" Radio button,";
			}
			if(ckp==false){
				str = str+ " Password field," ;
			}
			if(ckn ==false){
				str= str+" Name field,";
			}
			if(cke1==false){
				str = str+" First Email,";
			}
			if(cke2 ==false){
				str= str+" Enter Email again field,";
			}
			if(cks==false){
				str = str+" Self Describe field,";
			}
		
		alert(str);
	}
	
}
window.onload = function(){

var checker = document.getElementById('check');
checker.addEventListener('click', checkSimilarity);

var val1 = document.getElementById('valid');
val1.addEventListener('click',validate);

}





