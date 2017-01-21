(function($){
	$.fn.cria_form = function(options){
		var form;
		var settings = $.extend({}, $.fn.cria_form.defaults , options);
		$.fn.cria_form.defaults = {
			uf : false,
			nivel: false
		}

		return this.each(function(){
			$(this).html("<h2>NOME DO SEU FORMULARIO</h2>	 <form id='formContato' method='post'><div class='nomeForm col-xs-12'>Nome: <br><input type='text' name='nomeDev' id='nome' placeholder='Digite seu nome'></div><div class='emailForm col-xs-12'>E-mail: <br><input type='email' name='email' id='email' placeholder='Digite seu e-mail'></div><div><input type='token'style='position:absolute; top:-9999px'  readonly='readonly' name='token 'id='token' value='512e3e0460c772efdb487295824d3181'></div></form>");
			$('form div:last-of-type').after("<div class='buttonForm col-xs-12'><input type='button' value='ENVIAR' name='enviar' id='enviar_contato'></div>");
			
			if(settings.uf === true){
				$('form div:last-of-type').before("<div class='estadoForm col-xs-6'>Estado: <select name='estado' id='estado'>	<option value=''>Selecione</option>	<option value='AC'>AC</option>	<option value='AL'>AL</option>	<option value='AM'>AM</option>	<option value='AP'>AP</option>	<option value='BA'>BA</option>	<option value='CE'>CE</option>	<option value='DF'>DF</option>	<option value='ES'>ES</option>	<option value='GO'>GO</option>	<option value='MA'>MA</option>	<option value='MG'>MG</option>	<option value='MS'>MS</option>	<option value='MT'>MT</option>	<option value='PA'>PA</option>	<option value='PB'>PB</option>	<option value='PE'>PE</option>	<option value='PI'>PI</option>	<option value='PR'>PR</option>	<option value='RJ'>RJ</option>	<option value='RN'>RN</option>	<option value='RS'>RS</option>	<option value='RO'>RO</option>	<option value='RR'>RR</option>	<option value='SC'>SC</option>	<option value='SE'>SE</option>	<option value='SP'>SP</option>	<option value='TO'>TO</option> </select></div>")
			};

			if(settings.nivel===true){
				$('form div:last-of-type').before("<div class='nivelForm col-xs-6'>Nivel: <select name='nivel' id='nivel'><option value=''>Selecione</option><option value='junior'>Junior</option><option value='senior'>Senior</option><option value='ninja'>Ninja</option></div>")
			};

			$("#enviar_contato").on("click", function(){
				/*---Validação dos campos---*/
				if($("#nome").val() == ""){
					alert("Preencha o campo NOME");
					$("#nome").focus();
					end();
				};
				if($("#email").val() == ""){
					alert("Preencha o campo EMAIL");
					$("#email").focus();
					end();
				};
				if($("#estado").is(":visible")){
					if($("#estado").val() == ""){
						alert("Selecione um Estado");
						$("#estado").focus();
						end();
					};
				};
				if($("#nivel").is(":visible")){
					if($("#nivel").val() == ""){
						alert("Selecione um Nivel");
						$("#nivel").focus();
						end();
					};
				};
				/*---*Validação dos campos---*/
				$("#formContato").envia_ajax();
			});
		});
	
}
}(jQuery));
