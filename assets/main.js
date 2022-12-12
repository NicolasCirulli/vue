const { createApp } = Vue

createApp({
	data() {
		return {
			peliculas: [],
			link: 'https://image.tmdb.org/t/p/w500',
			generos : [],
			checked: [],
			peliculasFiltradas : [],
			search: ''
		}
	},

	created() {
		fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd'
		)
			.then((response) => response.json())
			.then((response) => {
				this.peliculas = response.results
				this.peliculasFiltradas = response.results
				this.generos = [...new Set(this.peliculas.map( pelicula => pelicula.genre_ids).flat())]
			})
	},

	methods: {
		buscar: function(){
			this.peliculasFiltradas = this.peliculas.filter( pelicula => pelicula.title.toLowerCase().includes( this.search.toLowerCase().trim() ) )
		}
	},
}).mount('#app')

