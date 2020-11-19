$(document).ready(function(){
			$("#1").click(function(){
				$(".all_atm").slideDown	()
				$(".infom").slideUp();
					//alert('ok');
				$("#1").attr('checked',checked);
				// có thẻ tạo hàm sau khi show hoặc hide
				return false;
			});
			// if("#1").attr('checked',"");
			// {
			// 	$(".all_atm").slideUp();
			// 	return false;
			// }
			$("div.sub_payment>input[id!='1']").click(function()
			{
				$(".all_atm").slideUp();
				$(".infom").slideUp();
				if(this.id==6)
				{
					$(".infom").slideDown()
				}
				$(this).attr('checked',checked);
				// có thẻ tạo hàm sau khi show hoặc hide
				return false;
			});
			$(".atm").click(function(){
				// $(".atm").css({border:'unset'});
				// $(this).css({border:'1px solid rgb(0, 173, 239)',});
				$(".atm").removeClass('box');
				$(this).addClass('box');
					
					
					return false;
			});
			// $("#6").click(function(){
			// 	$(".info").slideDown()
			// 		//alert('ok');
			// 	$("#6").attr('checked',checked);
			// 	// có thẻ tạo hàm sau khi show hoặc hide
			// 	return false;
			// });
			// $("div.sub_payment input[id!='6']").click(function()
			// {
			// 	$(".info").slideUp();
			// 	$(this).attr('checked',checked);
			// 	// có thẻ tạo hàm sau khi show hoặc hide
			// 	return false;
			// });
			
		});