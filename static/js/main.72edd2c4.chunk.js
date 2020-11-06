(this["webpackJsonpreact-portfolio-03"]=this["webpackJsonpreact-portfolio-03"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Character Builder","image":"https://raw.githubusercontent.com/bskutivan/character_builder/master/screenshots/Screenshot1.png","github":"https://github.com/bskutivan/character_builder","deployedapp":"https://dnd-char-builder.herokuapp.com/","description":"A Dungeons and Dragons character building and sharing app."},{"id":2,"name":"Budget Tracker","image":"https://raw.githubusercontent.com/bskutivan/budget-tracker-pwa/master/screenshots/screenshot1.png","github":"https://github.com/bskutivan/budget-tracker-pwa","deployedapp":"https://budget-tracker-12221.herokuapp.com/","description":"A budget tracking app that utilizes service workers and IndexedDB to work offlince."},{"id":3,"name":"Tech Blog","image":"https://raw.githubusercontent.com/bskutivan/tech-blog/master/screenshots/screenshot1.png","github":"https://github.com/bskutivan/tech-blog","deployedapp":"https://tech-blog-sleepy-ninja.herokuapp.com/","description":"A tech blogging app."},{"id":4,"name":"National Park Planner","image":"https://raw.githubusercontent.com/bskutivan/National-Park-Planner/master/assets/images/Screenshot1.png","github":"https://github.com/bskutivan/National-Park-Planner","deployedapp":"https://bskutivan.github.io/National-Park-Planner/","description":"An app that utilizes Google api and the NPS api to list parks closest to the input address."},{"id":5,"name":"Weather Dashboard","image":"https://raw.githubusercontent.com/bskutivan/Weather-Dashboard/master/assets/images/Screenshot1.jpg","github":"https://github.com/bskutivan/Weather-Dashboard","deployedapp":"https://bskutivan.github.io/Weather-Dashboard/","description":"An app that utilizes weather api to dynamically list and save weather information."},{"id":6,"name":"Run Buddy","image":"https://raw.githubusercontent.com/bskutivan/run-buddy/master/screenshot1.png","github":"https://github.com/bskutivan/run-buddy","deployedapp":"https://bskutivan.github.io/run-buddy/","description":"The first webpage I ever built that utilizes custom CSS and HTML to mock a fitness training web service."},{"id":7,"name":"Shop Shoppe","image":"https://raw.githubusercontent.com/bskutivan/ShopShoppe/master/screenshots/screenshot1.png","github":"https://github.com/bskutivan/ShopShoppe","deployedapp":"https://shop-shoppe.herokuapp.com/","description":"A MERN stack ecommerce site that utilizes redux to manage its state!"},{"id":8,"name":"Kicks","image":"https://raw.githubusercontent.com/bskutivan/kicks/master/Screenshot.png","github":"https://github.com/bskutivan/kicks","deployedapp":"https://kicks-shoes.herokuapp.com/","description":"A full PWA MERN stack shopping app that uses Redux to manage state!"}]')},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(2),c=a.n(s),i=a(14),r=a.n(i),o=(a(21),a(9)),A=(a(22),a(23),a(24),function(e){return Object(n.jsx)("ul",{className:"nav nav-tabs",children:["About","Portfolio","Contact","Resume"].map((function(t){return Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active test":"nav-link",children:t})},t)}))})});var h=function(e){return Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{children:"Brandon Kutivan"}),Object(n.jsx)("div",{children:Object(n.jsx)(A,{handlePageChange:e.handlePageChange,currentPage:e.currentPage})})]})},u=a(33),l=a(34),d=a(35),g=(a(25),a.p+"static/media/me.c48b22cc.JPG");var j=function(){return Object(n.jsx)(u.a,{className:"container",children:Object(n.jsxs)(l.a,{className:"about",children:[Object(n.jsx)(d.a,{xs:"3",className:"aboutTitle",children:Object(n.jsx)("h1",{children:"About Me"})}),Object(n.jsx)(d.a,{xs:"6",className:"aboutText",children:Object(n.jsxs)("p",{children:["I am a coding bootcamp graduate with a passion for learning new technologies and solving new problems.",Object(n.jsx)("br",{}),"I pursued studying History and ancient languages during my time at UCSC and have been spending the last 8 months learning as many new coding languages as I can.",Object(n.jsx)("br",{}),"I am based in central California and am an avid gardener and cultivator of curious campanula and feathery ferns."]})}),Object(n.jsx)(d.a,{className:"imgCont",xs:"3",children:Object(n.jsx)("img",{className:"aboutImg",src:g,alt:"Brandon Kutivan holding flowers"})})]})})};a(28);var b=function(e){return Object(n.jsx)("div",{className:"wrapper",children:e.children})};a(29);var m=function(e){return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"img-container",children:Object(n.jsx)("img",{alt:e.name,src:e.image})}),Object(n.jsx)("div",{className:"title-container",children:Object(n.jsx)("a",{href:e.deployedapp,children:e.name})}),Object(n.jsx)("a",{className:"project-github",href:e.github,children:"Project Github"}),Object(n.jsx)("div",{className:"about-container",children:Object(n.jsx)("a",{className:"project-about",href:e.description,children:e.description})})]})},p=a(15);a(30);var O=function(){return Object(n.jsx)(b,{children:Object(n.jsxs)(u.a,{children:[Object(n.jsx)(l.a,{className:"projects-title",children:Object(n.jsx)("h1",{children:"Projects:"})}),Object(n.jsx)(l.a,{children:p.map((function(e){return Object(n.jsx)(m,{id:e.id,name:e.name,image:e.image,github:e.github,deployedapp:e.deployedapp,description:e.description},e.id)}))})]})})},k=a(10),x=a(12);var w=a(36),f=a(37),B=a(38),C=a(39),v=a(40);var S=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),a=t[0],c=t[1],i=a.name,r=a.message,A=Object(s.useState)(""),h=Object(o.a)(A,2),u=h[0],l=h[1];function d(e){if("email"===e.target.name){var t=(n=e.target.value,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase()));console.log(t),l(t?"":"Your email is invalid.")}else e.target.value.length?l(""):l("".concat(e.target.name," is required."));var n;u||c(Object(x.a)(Object(x.a)({},a),{},Object(k.a)({},e.target.name,e.target.value)))}return Object(n.jsxs)(w.a,{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a)},children:[Object(n.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(n.jsxs)(f.a,{children:[Object(n.jsx)(B.a,{for:"name",children:"Name:"}),Object(n.jsx)(C.a,{type:"text",name:"name",defaultValue:i,onBlur:d})]}),Object(n.jsxs)(f.a,{children:[Object(n.jsx)(B.a,{for:"message",children:"Message:"}),Object(n.jsx)(C.a,{type:"textarea",name:"message",defaultValue:r,onBlur:d})]}),u&&Object(n.jsx)("div",{children:Object(n.jsx)("p",{className:"error-text",children:u})}),Object(n.jsx)(v.a,{"data-testid":"subbutton",type:"submit",children:"Submit"})]})};var G=function(){return Object(n.jsxs)("section",{children:[Object(n.jsx)("h1",{className:"resume-title",children:"Resume"}),Object(n.jsx)("div",{className:"resume-link",children:Object(n.jsx)("a",{href:"https://docs.google.com/document/d/1cl7e0kt1595hbr7V23vOmSdDpnkVAO3FUQWVZKad21k/edit?usp=sharing",children:"View Resume"})}),Object(n.jsx)("div",{className:"resume-main",children:Object(n.jsx)("h3",{children:"Proficiencies and Technologies Known"})}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"HTML/CSS/Sass"}),Object(n.jsx)("li",{children:"JS/jQuery"}),Object(n.jsx)("li",{children:"Bootstrap/Tailwind"}),Object(n.jsx)("li",{children:"Handlebars"}),Object(n.jsx)("li",{children:"Local Storage/Session Storage/IndexedDB"}),Object(n.jsx)("li",{children:"MERN Stack (MongoDB, Express, React, Node.js)"}),Object(n.jsx)("li",{children:"MySQL/Sequelize/NoSQL"})]})}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"RESTful API and CRUD API management"}),Object(n.jsx)("li",{children:"Dry coding practices/Seperation of concerns"}),Object(n.jsx)("li",{children:"Progressive Web App development"}),Object(n.jsx)("li",{children:"User Authentication and input validation"})]})})]})},D=(a(31),function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsx)("a",{href:"https://github.com/bskutivan",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{alt:"Github",className:"footer-img",src:"data:image/png;base64,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"})}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/brandon-kutivan/",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{alt:"LinkedIn",className:"footer-img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABAlJREFUeJzt3c1rXGUUx/FvYhXRtrZatQoVN750URRBVFxo7cadL1iE/gOCiLqRupNuuijFuhIF10qlrgVdFERai4iCWgSRtOhCaX0hTWJFkrh4EgjjTTIz9zx3OjnfDzyLhOQ8Z+79Tea+ByRJkiRJkiRJkiRJkvq3GzgMnAL+AOaBWeB74D3gSWByZN2pml3ACWCxj/EdsHc0baqGfZR3ez8rf+U4BEyMoF8F2gf8w+Arf3kc7b5lRdnFcO/83nGg68YVo9/P/PXGRWBbx72rpd3ErPzl8Xq37autw8QG4Gy37autU8QGYBHY2ekrSCziQMy9ATW6qKkGEQG4IaBGr+0VaqpBRAAuB9To9XeFmmoQEYBzATV6TVWoqQYRATgdUGOli8CPwTW1iogAnAiosdJHwEJwTVU0STmrF7H7N497AGNpLzEBONZ144pziHYr/wxwbeddK8wE5ZTusCt/R/ctq4YDlC35fj/zj+E7f8PZRjmrd5bmFX8BeAc3+Eaui8uwdlJW9HbKEb4pyn6+u3qSJEmS1DnvxolxC/AE8BCwB7hz6XvXUXZ3LwF/Aj8BPwBfACeBX0fQq4JsBV6kXBS7wHCHwL8EXgZu6rh3tbADOAJME3cV9CzwFnB7h69DA5oEXgH+Iv4y+OUxAxwEru7oNYWosSCeu8LmvwP4vNJcTeMb4O4BlsHQfEDD+h4HvgYe7XDO+4CvgGdqT2QA1rYf+AS4cQRzb6Zcb/lCzUk21Sw+5p4FPgCuGmEPk5TT5gDv1ppA//cI8D6jXfkrvQ08PeomVrMRNwKvxDEN3DXAcumLfwHGxxbgQ4J3EQ3AeLkfeDWyoAEYP28At0UVMwDj53rgtahiEWcDFwNq9NpP//cc1ph/PdOU2+F+W/r6VspZwC0dzT9HOTr5e0fzrSnLXsA85bjAYzTvHm6i3CJ3fOlna/fz0gDLqKoMAfgWeGCAnh5k9XsiosaZAfqpaqMH4GPKhR2D2gx8WrGvBcpFJ624Ebi205QTMnND/O4M8BTloo8aJgh40LYBWN0l4HnaPQNpbqnGMAHqx8NtCxiA1R0Bfg6oMwW8GVCnyT2V6g5kI24DXCb2FPDNwL8V+mz9LCX/AjQ7SXn6eZQLwGeB9Za1frC2AWgW/eSzWjW3ti1gAJqdr1DzXIWa17QtYACazVaoOVOhZmsGIDkDkJwBSM4AJGcAkjMAyRmA5AxAcgYgOQOQnAFIzgAkZwCSMwDJGYDkDEByBiA5A5CcAUjOACRnAJIzAMkZgOQMQHIGIDkDkJwBSM4AJGcAkjMAyRmA5AxAcgYgOQOQnAFIzgAkF/Fv444H1Oj1y4jnj3hCaK/z1OlVkiRJkiRJkiRJkiRJkiRJ2f0Ha+gW6Zu4Ib0AAAAASUVORK5CYII="})}),Object(n.jsx)("a",{href:"https://stackoverflow.com/users/12876711/brandonk",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("img",{alt:"Stack Overflow",className:"footer-img",src:"data:image/png;base64,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"})})]})})});var I=function(){var e=Object(s.useState)("About"),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.jsxs)("div",{className:"page-container",children:[Object(n.jsx)(h,{currentPage:a,handlePageChange:c}),Object(n.jsx)("main",{children:function(){switch(a){case"About":return Object(n.jsx)(j,{});case"Portfolio":return Object(n.jsx)(O,{});case"Contact":return Object(n.jsx)(S,{});case"Resume":return Object(n.jsx)(G,{});default:return Object(n.jsx)(j,{})}}()}),Object(n.jsx)(D,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.72edd2c4.chunk.js.map