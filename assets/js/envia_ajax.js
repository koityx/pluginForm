(function($){
	$.fn.serializeObject = function() {
                var o = Object.create(null),
                    elementMapper = function(element) {
                        element.name = $.camelCase(element.name);
                        return element;
                    },
                    appendToResult = function(i, element) {
                        var node = o[element.name];

                        if ('undefined' != typeof node && node !== null) {
                            o[element.name] = node.push ? node.push(element.value) : [node, element.value];
                        } else {
                            o[element.name] = element.value;
                        }
                    };

                $.each($.map(this.serializeArray(), elementMapper), appendToResult);
                return o;
            };

	$.fn.envia_ajax = function(options){
				/*---conversao de email---*/
				var email,c_email,file;
				email = $("#email").val();
				c_email = $.md5(email);
				$("#email").val(c_email);
				
				/*---*conversao de email---*/

				/*---Envio do formulario---*/

				var url ="http://api.vtexcrm.com.br/codeby/dataentities/TC/documents";
				var dataJson = $("#formContato").serializeObject();
				$.ajax({
					url: url,
					type: 'POST',
					data: JSON.stringify( dataJson ),
					headers:{
                        "Accept":"application/json; charset=utf-8",
                        "Content-Type":"application/json; charset=utf-8"
                    },		          	
		          	success: function(){
		          		alert("Enviado com sucesso");
		          	},
		          	error: function(){
		          		alert("Ocorreu algum erro.");
		          	}
		        });


		        /*---*Envio do formulario---*/
		        $("#nome").val('');
				$("#email").val('');
				$("#estado").val('');
				$("#nivel").val('');
				
				/*---fecha o form---*/
				var	changeUrl = window.location.href;
				changeUrl = changeUrl.replace('#openModal','#close')
				window.location = changeUrl;
				/*---limpa a tela---*/
				$('.openModal').css("display", "none");
				/*console.log('sdasadd22222')
				
				var methods; 
				$.ajax({
					xhrFields: {
        			withCredentials: true
    					},
					type : "GET",
					async: true,
					crossDomain: true,
				  	url: "http://www.casadascuecas.com.br/api/catalog_system/pub/products/search/?fq=P:[0%20TO%2010]",
				  	data : "productId",
				  	dataType: "jsonp",
				  	 beforeSend: function(xhrObj){
                         xhrObj.setRequestHeader("Access-Control-Allow-Origin","*");
                         xhrObj.setRequestHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
                         xhrObj.setRequestHeader("Access-Control-Allow-Headers","Content-Type");
                         xhrObj.setRequestHeader("Content-Type","application/json");
                         xhrObj.setRequestHeader("Accept","application/json");
                     },
				  	headers:{
				  		'Access-Control-Allow-Origin'   : 'http://localhost/',
				    	"accept": "application/json",
				    	"dataType": 'application/json'
				  	},				  	
				    success:function(data){
				    	alert(data);
				    	var tdados = jQuery.parseJSON(data);
				    	
				    	$("#prateleira").html('asdsdsda')
				    },
				    error:function(result){alert("nao deu certo" + result)}
				});*/
	}
}(jQuery));
