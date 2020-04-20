// 'use strict';
// require('dotenv').config();
// const express = require('express');
// const pg = require('pg');
// const PORT = process.env.PORT || 3000;
// const app = express();
// const superagent = require('superagent');
// app.use('/public',express.static('public'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');
// const client = new pg.Client(process.env.DATABASE_URL);
// const methodOverRide = require('method-override'); //////////
// app.use(methodOverRide('_method'));

// app.get('/', saveToDB);
// app.get('/test', getPage);
// app.post('/', saveToDB);
// // const url = 'https://thesportsdb.com/api/v1/json/1/searchteams.php?t=team';
// // superagent.get(url).then((apiResponse) => {
// //     console.log(apiResponse.query);
// // });
// function getPage(req, res) {
//   res.render('pages/error');
// }
// //***************************************************** Functions */
// // const teamsNamesForHome = []
// // function getDataFromDB(req, res) {
// //   const SQL = 'SELECT * FROM teamOne;';
// //   return client.query(SQL)
// //     .then(result => {
// //       res.render('./pages/index', { data: result.rows })
// //     }).catch((err) => {
// //       console.log('error');
// //       errorHandler(err, req, res);
// //     });
// // }

// function saveToDB(req, res) {
//   let title2 = req.body.team;
//   let { team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes } = req.body;
//   // console.log(req.body);
//   let SQL = 'INSERT INTO teamOne (team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);';
//   let safeValues = [team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes];
//   let safetitle =[title2];
//   const SQL2 = 'SELECT * FROM teamOne WHERE team =$1;';
//   client.query(SQL, safeValues)
//     .then(() => {
//     })
//   return client.query(SQL2,safetitle)
//     .then(result => {
//       // console.log(result.rows[0].id);
//       res.render('./pages/index', { data: result.rows })
//     }).catch((err) => {
//       console.log('error');
//       errorHandler(err, req, res);
//     });
// }

// // function api1Results(req,res) {
// //   /////////
// //   ////////////
// //   // const teamJson = require('./data/team.json');
// //   const disply_name = req.query.team;
// //   const SQL = 'INSERT INTO teamOne (team, formed) VALUES ($1,$2);';
// //   // const databaseQuery = 'SELECT team FROM teamOne WHERE team =$1';
// //   const {team, formed} = req.body;
// //   const values = [team, formed];
// //   client.query(SQL, values).then((result) => {
// //   if (result.rows.length > 0) {
// //     res.status(200).json(result.rows[0]);
// //   } else {
// //   return superagent.get(`https://thesportsdb.com/api/v1/json/1/searchteams.php?t=${values[0]}`)
// //     .then(result => {
// //       console.log(result);
// //       let theTeam = result.body.teams.map((name)=>{
// //         return new Api1(name);
// //       })
// //       console.log(theTeam);
// //       res.render('pages/index', {teamData: theTeam});
// //     }).catch((err) => {
// //       console.log('error');
// //       errorHandler(err, req, res);
// //     });
// // }
// //   });
// // }
// //******************************************** constructor */

// function Api1 (name){
//   this.team = name.teams.strTeam;
//   this.formed = name.teams.intFormedYear;
//   this.sport = name.teams.strSport;
//   this.league = name.teams.strLeague;
//   this.staduim = name.teams.strStadium;
//   this.staduimImg = name.teams.strStadiumThumb;
//   this.staduimLocation = name.teams.strStadiumLocation;
//   this.website = name.teams.strWebsite;
//   this.teamDescription = name.teams.strDescriptionEN;
//   this.badge = name.teams.strTeamBadge;
//   this.logo = name.teams.strTeamLogo;
//   this.clothes = name.teams.strTeamJersey;
//   // allTeams.push(this);
// }
// // allTeams = [];

// function Api2 (value){
//   this.title = value.title;
//   this.embedTitle = value.videos.title;
//   this.embed = value.embed;
//   this.thumbnail = value.thumbnail;
//   this.resultName1 = value.side1.name;
//   this.resultUrl1 = value.side1.url;
//   this.resultName2 = value.side2.name;
//   this.resultUrl2 = value.side2.url;
//   this.totalResults1 = value.competition.name;
//   this.totalResults2 = value.competition.url;
// }

// /////////////////////////////////////////////////////

// function errorHandler(err, req, res) {
//   res.status(500).render('pages/error', { error: err });
// }

// app.use('*', (request, response) => {
//   response.status(404).send('NOT FOUND!');
// });

// client.connect().then(() => {
//   app.listen(PORT, () => console.log(`My server is up and running on ${PORT}`));
// });





















































'use strict';
require('dotenv').config();
const express = require('express');
const pg = require('pg');
const PORT = process.env.PORT || 4000;
const app = express();
const superagent = require('superagent');
app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const client = new pg.Client(process.env.DATABASE_URL);
const methodOverRide = require('method-override');
app.use(methodOverRide('_method'));

// app.get('/', databaseResults);
// app.post('/', databaseResults);






// app.get('/', getDataFromDB);
// app.get('/addTeam',getDataFromDB);
// app.get('/show-search/:teamID', detailsFun);
// app.post('/addTeam', saveToDB);

//****************************Functions**************************/

// function databaseResults(req, res) {
//   const SQL = 'SELECT * FROM teamTwo;';
//   client.query(SQL).then((results) => {
//     res.render('pages/index', { teams: results.rows });
//   }).catch((err) =>{
//     console.log('error');
//     errorHandler(err, req, res)
//   });
// }

// function databaseResults(req, res) {
//   const { title, teamDescription } = req.body;
//   const SQL = 'INSERT INTO teamTwo (title, teamDescription) VALUES ($1,$2);';
//   const value = [title, teamDescription];
//   client.query(SQL, value).then((results) => {
//     res.redirect('/');
//   }).catch((err) => {
//     console.log('error');
//     errorHandler(err, req, res)
//   });
// }
//****************************Render Home***************************/

// app.get('/', (req, res) => {
//   res.render('pages/index');
// });

// app.post('/', (req, res) => {
//   superagent.get(`https://www.scorebat.com/video-api/v1/`)
//     .then(theData => {
//       let teamRender = theData.map((value) => {
//         return new Api2(value);
//       })
//       res.render('pages/index', { teamRender: teamRender });
//     }).catch((err) => {
//       console.log('error');
//       errorHandler(err, req, res);
//     });
// });


// res.writeHead(200, {"Content-Type": "application/json"});
// res.end(JSON.stringify(someObject));


app.get('/', (req,res) => {
  try {
    const teamsDataJson = require('./data/team.json');
    teamsDataJson.map((data)=>{
      new Api2(data);
    })
    res.render('pages/index', { teamRender: teamsDataJson });
  } catch (err) {
    console.log('error');
    errorHandler(err, req, res);
  }
})

app.post('/', (req, res) => {
  superagent.get(`https://www.scorebat.com/video-api/v1/`)
    .then(theData => {
      let teamRender = theData.map((value) => {
        return new Api2(value);
      })
      res.render('pages/index', { teamRender: teamRender });
    }).catch((err) => {
      console.log('error');
      errorHandler(err, req, res);
    });
});

//****************************Search*******************************/

app.get('/search', (req, res) => {
  res.render('pages/searches/search-new');
});

app.post('/searches/show', (req, res) => {
  superagent.get(`https://thesportsdb.com/api/v1/json/1/searchteams.php?t=${req.body.search}`)
    .then(data => {
      let teamSearch = data.body.teams.map((name) => {
        return new Api1(name);
      })
      res.render('pages/searches/show-search', { teamSearch: teamSearch });
    }).catch((err) => {
      errorHandler(err, req, res);
    });
  console.log('The data what we getting from post:', req.body);
});

//*****************************Favourite*************************/

// app.get('/add', getForm);
// app.post('/add', addBook);
// function getForm(req, res) {
//   res.render('pages/books/add-book');
// }

// function addBook(req, res) {
//   const { author, title, isbn, image_url, description, bookshelf } = req.body;
//   const SQL = 'INSERT INTO books (author,title,isbn,image_url,description,bookshelf) VALUES ($1,$2,$3,$4,$5,$6);';
//   const value = [author, title, isbn, image_url, description, bookshelf];
//   client.query(SQL, value).then((results) => {
//       res.redirect('/');
//   }).catch((err) => errorHandler(err, req, res));
// }




function saveToDB(req, res) {
  let ln;
  let title2 = req.body.team;
  let { team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes} = req.body;
  // console.log(req.body);
  let SQL = 'INSERT INTO teamone (team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);';
  let safeValues = [team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes];
  let safetitle =[title2];
  const SQL2 = 'SELECT * FROM teamone WHERE team =$1;';
  client.query(SQL, safeValues)
    .then(() => {
    })
  return client.query(SQL2,safetitle)
    .then(result => {
      // console.log(result.rows[0].id);
      ln=result.rows[0].id;
      res.redirect(`/addTeam/${ln}`);
    })
    .catch((err) => {
      errorHandler(err, req, res);
    });
}



//*****************************constructor***********************/

function Api1(name) {
  // this.id = name.idTeam
  this.team = name.strTeam;
  this.formed = name.intFormedYear;
  this.sport = name.strSport;
  this.league = name.strLeague;
  this.staduim = name.strStadium;
  this.staduimImg = name.strStadiumThumb;
  this.staduimLocation = name.strStadiumLocation;
  this.website = name.strWebsite;
  this.teamDescription = name.strDescriptionEN;
  this.badge = name.strTeamBadge;
  this.logo = name.strTeamLogo;
  this.clothes = name.strTeamJersey;
  // allTeams.push(this);
}
// allTeams = [];

function Api2(value) {
  this.title = value.title;
  this.embedTitle = value.videos.title;
  this.embedVideo = value.videos.embed;
  this.embed = value.embed;
  this.thumbnail = value.thumbnail;
  this.resultName1 = value.side1.name;
  this.resultUrl1 = value.side1.url;
  this.resultName2 = value.side2.name;
  this.resultUrl2 = value.side2.url;
  this.totalResults1 = value.competition.name;
  this.totalResults2 = value.competition.url;
}

/////////////////////////////////////////////////////









































function detailsFun(req, res) {
  let saveId = [req.params.teamID];
  // console.log(saveId);
  let sql = 'SELECT * FROM teamone WHERE id = $1;'
  // let SQL2 = 'SELECT DISTINCT bookshelf FROM books;'
  // let arrOfTeamsSh=[];
  // client.query(SQL2)
  //   .then(result=>{
  //     arrOfTeamsSh=result.rows;
  //   })
  return client.query(sql, saveId)
    .then(result => {
      res.render('pages/searches/show-search', { teamSearch: result.rows[0]}) //arrOfBookSh : arrOfSh })
    })
}











// app.delete('/delete/:deleted_team',deletBook);
// function deletBook(req,res){
//   let idParam = req.params.deleted_team;
//   let saveID = [idParam];
//   let sql = 'DELETE FROM teamone WHERE id=$1;';
//   return client.query(sql,saveID)
//     .then(()=>{
//       res.redirect('/favourite');
//     })
// }









function getDataFromDB(req, res) {
  const SQL = 'SELECT * FROM teamone;';
  return client.query(SQL)
    .then(result => {
      res.render('pages/searches/favourite', { theteam: result.rows })
    })
}




// app.put('/update/:update_team', newUpdate);
// function newUpdate (req , res){
//   //collect
//   let { team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes} = req.body;
//   //update
//   let SQL = 'UPDATE teamone set team=$1,formed=$2,sport=$3,league=$4,stadium=$5,stadiumImg=$6,stadiumLocation=$7,website=$8,teamDescription=$9,badge=$10,logo=$11,clothes=$12 ;';
//   //safevalues
//   let idParam = req.params.update_team;
//   let safeValues = [team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes,idParam];
//   client.query(SQL,safeValues)
//     .then(()=>{
//       res.redirect(`/show-detail/${idParam}`);
//     })
// }






















/////////////////////////////////////////////////////////////////////////////////////


// // app.post('/addTeam' , addedToDb)


// function addedToDb(req,res){


//   res.status(200).send('/addTeam')

//   // will go the insertation of DATABASE .
//   let {team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes} =req.body;
//   let SQL = `INSERT INTO teamone (team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) ;`;
//   let values = [team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes];
//   return client.query(SQL ,values)
//     .then( (res) => {
//       res.redirect('/pages/searches/favourite');

//       //res.redirect(/favourtes)
//     })
// }
// // app.post('/pages/searches/favourite',process)

// function process(req,res){
//   let id = req.params.allteams_id;
//   let SQL =`SELECT * FROM teamone WHERE id=$1`;
//   let values = [id];
//   client.query(SQL ,values)
//     .then ( data =>{
//       res.render( 'pages/searches/favourite' , { teamSearch : data.rows[0]})
//     })

//   //res.render pages/seareches/favourite
// }


// app.put('/update/:book_id', updateBook)// function 7
// app.delete('/delete/:the_book' , deleteBook) // function 8


// // function 3
// function getAllTeams(req ,res){
//   let SQL = `SELECT * FROM teamone ;`;
//   return client.query(SQL)
//     .then( result => {
//       console.log(result.rows);
      
//       res.render('pages/searches/show-search' , {theteam : result.rows});
      
//     })
// }

// // function 4
// function addTeam(req , res){
//   res.render('pages/searches/favourite');
// }

// // function 5
// function processTeam (req ,res){
//   let {team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes} =req.body;
//   let SQL = `INSERT INTO teamone (team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) ;`;
//   let values = [team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes];
//   return client.query(SQL ,values)
//     .then( () => {
//       res.redirect('/pages/searches/search-detail');
//     })
// }

// // function 6
// function addTeamById( req ,res){
//   // from database books_id_seq
//   let id = req.params.allteams_id;
//   let SQL =`SELECT * FROM teamone WHERE id=$1`;
//   let values = [id];
//   client.query(SQL ,values)
//     .then ( data =>{
//       res.render( 'pages/searches/favourite' , { teamSearch : data.rows[0]})
//     })

// }














////////////////////////////////////////////////////////////////////////////

function errorHandler(err, req, res) {
  res.status(500).render('pages/error', { error: err });
}

app.use('*', (request, response) => {
  response.status(404).send('NOT FOUND!');
});

client.connect().then(() => {
  app.listen(PORT, () => console.log(`My server is up and running on ${PORT}`));
});

