 const proffys = [
   {
     name:"Diego Fernandes",
     avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
     whatsapp:"341255678",
      bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
      subject:"Química",
      cost:"R$ 20,00",
      weekday:[
        0
      ], 
      time_from:[720], 
      time_to:[1220] 
    },

    {
    name:"Ian Stewart",
    avatar:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ian_stewart_mathematician.jpg/200px-Ian_stewart_mathematician.jpg",
    whatsapp:"341255678",
    bio:"É professor de matemática na Universidade de Warwick, Inglaterra, e um conhecido escritor de ciência popular e ficção científica.<br><br>Em 2008 foi o primeiro a receber a Medalha Christopher Zeeman..",
    subject:"Matemática",
    cost:"R$ 90,00",
    weekday:[
        0
      ], 
      time_from:[720], 
      time_to:[1220] 
    }
 ]

 function pageLanding(req, res){
  return res.render("index.html")
 }
 function pageStudy(req, res){
  return res.render("study.html", { proffys })  
 }
 function pageGiveClasses(req, res){
  return res.render("give-classes.html")  
 }
 
 
 const express = require('express')
 const server = express()
 

 //configurar nunjuck
 const nunjucks = require('nunjucks')
 nunjucks.configure('src/views', {
   express:server,
   noCache:true,
 })


//configuração de arquivos estáticos (Html,CSS, img)
server.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500)