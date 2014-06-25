# Dojo de Gulp #

Arquivos e informações adicionais para o Dojo.

A estrutura de pastas será a seguinte:

		| Gulp
			|-- gulpfile.js
			|-- package.json
			|-- config.rb
		---------------
		| Content
			|-- sass
				|-- layout
				|-- style.scss
			|-- css
			|-- img
			|-- config.rb
		------------------------
		| Scripts
			|-- plugins
			|-- controllers
			|-- min
		------------------------
		| Views
			|-- index.html

Para iniciar o projeto deve-se usar o
		
		npm init

Após criarmos o package.json, devemos inserir nossas dependências, que serão:

 - gulp (Gerenciador de tarefas)
 - gulp-compass (Compilador de sass+compass)
 - gulp-tinypng (Otimizador de png que usa a API do tinypng)
 - gulp-imagemin (Otimizador de jpg)
 - gulp-changed (Verfica os arquivos inalterados para não perder tempo na task)
 - gulp-uglify (Minificador de JS)
 - gulp-concat (Concatenador de arquivos JS)
 - gulp-w3cjs (Validador da w3c)
 - browser-sync (Livereload e criador de servidor ou proxy)

Para instalá-los usaremos 

		npm install --save nome-da-dependencia

Essa é a base. Teremos que criar um gulpfile.js funcional usando a documentação de cada dependência listada aqui.