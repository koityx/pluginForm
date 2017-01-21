- Para realizar a instalação do Plug-in, primeiramente, é necessário fazer a chamada dos Arquivos: "cria-form.js" e "style-plugin.css" no Header;

É de extrema necessidade que você já tenha a chamada das bibliotecas: jquery "<script src="https://code.jquery.com/jquery-3.1.1.min.js" type="text/javascript" charset="UTF-8"></script>" antes de prosseguir. 

- No Body do seu HTML, é necessário criar uma DIV com um ID de preferência para que a função possa criar o form!

Exemplo: 
<div id="plugin-form"></div>

- Após os procedimentos citados acima, realize a chamada do Plug-in, passando a ID da sua DIV como parâmetro.

Exemplo: 

<script>
		$(function(){
			$('#plugin-form').cria_form({
				uf:true,
				nivel:true
			});
		});
</script>


As opções "uf" e "nível" estão com o padrão como desativadas. Caso queira utilizar essas opções, basta deixa-las ativas como nos exemplos exibidos anteriormente.





- To install the plugin, you may need to do the file call: "cria-form.js" and "style-plugin.css" in your Header;

It's very important that you make the files call: jquery "<script src="https://code.jquery.com/jquery-3.1.1.min.js" type="text/javascript" charset="UTF-8"></script>" before to proceed. 

- In Body (HTML), is necessary create a new DIV, with a ID of prefference. So, the function will create the form.

Example:

<div id="plugin-form"></div>

- Now, make the file call again (plugin's file call), passing the ID for your DIV as parameter;

Example:

<script>
		$(function(){
			$('#plugin-form').cria_form({
				uf:true,
				nivel:true
			});
		});
</script>

The options "uf" and "nível" will be as disconnect's preset. If you wish to use this options, just activate then using the examples. 

