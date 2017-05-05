$(document).ready(function() {

	

		var playerScoreX=0;
		var playerScoreO=0;
		var playerClass = "X";
			

			var s1=$("#s1");
			var s2=$("#s2");
			var s3=$("#s3");
			var s4=$("#s4");
			var s5=$("#s5");
			var s6=$("#s6");
			var s7=$("#s7");
			var s8=$("#s8");
			var s9=$("#s9");
			var messages = $("#messages");


			var win=false;

	function checkWin(){
		if( s1.hasClass(playerClass) && s2.hasClass(playerClass) && s3.hasClass(playerClass) ||
					s4.hasClass(playerClass) && s5.hasClass(playerClass) && s6.hasClass(playerClass) ||
					s7.hasClass(playerClass) && s8.hasClass(playerClass) && s9.hasClass(playerClass) ||
					s1.hasClass(playerClass) && s4.hasClass(playerClass) && s7.hasClass(playerClass) ||
					s2.hasClass(playerClass) && s5.hasClass(playerClass) && s8.hasClass(playerClass) ||
					s3.hasClass(playerClass) && s6.hasClass(playerClass) && s9.hasClass(playerClass) ||
					s1.hasClass(playerClass) && s5.hasClass(playerClass) && s9.hasClass(playerClass) ||
					s3.hasClass(playerClass) && s5.hasClass(playerClass) && s7.hasClass(playerClass) 

					){


						messages.html("Player: "+ playerClass+" Wins");
						win =true;

						if(playerClass ==="X"){
							playerScoreX++;
						}
						else {
							playerScoreO++;
						}

						$("#playerScoreX").html("Player X Score: "+ playerScoreX);
						$("#playerScoreO").html("Player O Score: "+ playerScoreO);


		}

		
				
		

	}

		

			
			

			$(".square").click(function(){
				


				 if(win===false){

				 	  	if($(this).html()==="X"|| $(this).html()==="O"){
				 			$("#messages").html("Already taken");
				 		}

				 		else{
				 			
				 			$(this).html(playerClass).addClass(playerClass);
				 			checkWin();
				 			playerSwitch();
				 		}

				 }






				



				
					
					


			});


			function playerSwitch(){

				if(win===false){
					if (playerClass ==="X"){
							
							playerClass ="O";
						}
						else{
							
							playerClass ="X";
						}

						messages.html("Player Turn :"+ playerClass);
				}
			}



			$("#reset").click(function(){
				win=false;

				$("#s1, #s2, #s3, #s4, #s5, #s6, #s7, #s8, #s9").removeClass("X").removeClass("O").html("");

			});

			
		
	
	

});