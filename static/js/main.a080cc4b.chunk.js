(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(7),l=a.n(r),c=(a(19),a(12)),o=a(8),s=a(9),m=a(13),d=a(11),u=(a(20),a(21),a(22),function(e){var t=e.title,a=e.description,i=void 0===a?"":a,r=e.imgUrl,l=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:r,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},i,n.a.createElement("br",null),n.a.createElement("a",{href:l},"IMDB"))))}),h=function(e){var t=e.movies,a=void 0===t?[]:t;return n.a.createElement("div",{className:"movies"},a.map((function(e){return n.a.createElement(u,Object.assign({key:e.imdbId},e))})))},p=a(5),v=a.n(p),g=a(10),f=a(3),b=(a(24),a(4)),w=function(e){return fetch("https://www.omdbapi.com/?apikey=b8de536f&t=".concat(e)).then((function(e){return e.json()})).catch((function(e){return e}))},M=function(e){var t=e.addMovieToList,a=Object(i.useState)(""),r=Object(f.a)(a,2),l=r[0],c=r[1],o=Object(i.useState)(),s=Object(f.a)(o,2),m=s[0],d=s[1],h=Object(i.useState)(!0),p=Object(f.a)(h,2),b=p[0],M=p[1];function E(){return(E=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(l);case 2:t=e.sent,N(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e){var t=e.Title,a=e.Plot,i=e.Poster,n=e.imdbID;if(void 0===t)return d(null),void M(!1);var r={title:t,description:a,imgUrl:i,imdbUrl:"https://www.imdb.com/title/".concat(n),imdbId:n};d(r)};return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"find-movie"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{value:l,onChange:function(e){c(e.target.value),M(!0)},type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-danger"})),!b&&n.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title")),n.a.createElement("div",{className:"field is-grouped"},n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-light",onClick:function(){return E.apply(this,arguments)}},"Find a movie")),n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-primary",onClick:function(){return m&&(t(m),d(""),void c(""))}},"Add to the list")))),n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"title"},"Preview"),m&&n.a.createElement(u,m)))},E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:b},e.addMovieToList=function(t){e.state.movies.some((function(e){return e.title===t.title}))||e.setState((function(e){return{movies:[].concat(Object(c.a)(e.movies),[t])}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.movies,t=this.addMovieToList;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(h,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(M,{addMovieToList:t})))}}]),a}(i.Component);l.a.render(n.a.createElement(E,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.a080cc4b.chunk.js.map