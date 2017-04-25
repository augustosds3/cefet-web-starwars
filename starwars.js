// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
	$.ajax({
		url:'http://swapi.co/api/films/',
		method: 'GET',

		success: function(resposta){
			console.dir(resposta);
			let i = 0;
			$("ul").empty();

			let results = resposta.results;
			for(let res of results){
				$("ul").append('<li>'+res.title+ '</li>');
				$("ul").attr('url', res.url);
				console.log(res.url);

			}
		}

	})

