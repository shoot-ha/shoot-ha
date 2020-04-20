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
const cors = require('cors');
const express = require('express');
const pg = require('pg');
const PORT = process.env.PORT || 4000;
const app = express();
const superagent = require('superagent');
const client = new pg.Client(process.env.DATABASE_URL);
const methodOverRide = require('method-override');
app.use(cors());
app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(methodOverRide('_method'));

// app.get('/', databaseResults);
// app.post('/', databaseResults);


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
// ****************************Render Home***************************/

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


app.get('/', (req, res) => {
  try {
    const teamsDataJson = require('./data/team.json');
    teamsDataJson.map((data) => {
      new Api2(data);
    })
    res.render('pages/index', { teamRender: teamsDataJson });
  } catch (err) {
    console.log('error');
    errorHandler(err, req, res);
  }
})

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
//**************************Try Something***************************** */


// app.get('/', getInfo)
// var idForImg = document.getElementById('rendImg');
// var chosenOne = [];
// idForImg.addEventListener('click', getInfo);
// function getInfo(event, req,res) {
//   for (var x = 0 ; x < Api1.allTeams.length ; x++ ) {
//     if (event.target.id === `${Api1.allTeams[x].thumbnail}`) {
//       if (!chosenOne.includes(Api1.allTeams[x])) {
//         chosenOne.push(Api1.allTeams[x]);
//         res.render('pages/searches/show-search', { teamSearch: Api1.allTeams[x] });
//       }
//     }
//   }
// }

//*****************************Just Idea************************ */
// app.post('/', saveToDB);
// function saveToDB(req, res) {
//   let ln;
//   let title2 = req.body.embedTitle;
//   let { title,embedTitle,thumbnail,resultName1,resultUrl1,resultName2,resultUrl2,totalResults1,totalResults2,embedVideo } = req.body;
//   let SQL = 'INSERT INTO teamTwo (title,embedTitle,thumbnail,resultName1,resultUrl1,resultName2,resultUrl2,totalResults1,totalResults2,embedVideo) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);';
//   let safeValues = [title,embedTitle,thumbnail,resultName1,resultUrl1,resultName2,resultUrl2,totalResults1,totalResults2,embedVideo];
//   let safetitle = [title2];
//   const SQL2 = 'SELECT * FROM teamTwo WHERE title =$1;';
//   client.query(SQL, safeValues)
//     .then(() => {
//     })
//   return client.query(SQL2, safetitle)
//     .then(result => {
//       ln = result.rows[0].id;
//       res.redirect(`/team/${ln}`);
//     }).catch((err) => {
//       console.log('error');
//       errorHandler(err, req, res);
//     });
// }
// app.get('team', getDataFromDB);
// function getDataFromDB(req, res) {
//   const SQL = 'SELECT * FROM books;';
//   return client.query(SQL)
//     .then(result => {
//       res.render('./pages/index', { data: result.rows })
//     })
// }
// app.get('/de',readJson);
// const readJson = () => {
//   $.ajax('./data/team.json').then(data => {
//     data.forEach(items => {
//       let theData = new Api2(items);
//       theData.render('pages/teams/detail',{ teamRender: theData });
//     });
//   })
// };

// app.get('/team', (req, res) => {
//   res.render('pages/teams/detail');
// });
// app.get('/team/:id', detailsFun);
// function detailsFun(req, res) {
//   const SQL = 'SELECT * FROM teamTwo WHERE id=$1;';
//   const value = [req.params.id];
//   client.query(SQL, value).then((result) => {
//     res.render('pages/teams/detail', { theTeam: result.rows[0] });
//   }).catch((err) => {
//     console.log('error');
//     errorHandler(err, req, res);
//   });
// }
////////////////////////////////////////
// app.get('/team/:id', (req, res) => {
//   try {
//     // let arrIdTeam = [];
//     const teamsDataJson = require('./data/team.json');
//     teamsDataJson.map((data) => {
//       new Api2(data);
//       // let idTeam = data.id;
//       // arrIdTeam.push(idTeam);
//     })
//     // const value = [req.params.id];
//     // client.query(teamsDataJson,value).then((result) => {
//     res.render('pages/teams/detail', { teamRender: teamsDataJson });
//     // res.render('pages/teams/detail', { teamRender: value });
//     // })
//   } catch (err) {
//     console.log('error');
//     errorHandler(err, req, res);
//   }
// })

//*****************************Constructors***********************/

function Api1(name) {
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
}

function Api2(value) {
  this.title = value.title;
  this.embedTitle = value.videos.title;
  this.embed = value.embed;
  this.thumbnail = value.thumbnail;
  this.resultName1 = value.side1.name;
  this.resultUrl1 = value.side1.url;
  this.resultName2 = value.side2.name;
  this.resultUrl2 = value.side2.url;
  this.totalResults1 = value.competition.name;
  this.totalResults2 = value.competition.url;
  this.id = value.id;
  // Api1.allTeams.push(this);
}
// Api1.allTeams = [];

//*************************************************************/

function errorHandler(err, req, res) {
  res.status(500).render('pages/error', { error: err });
}

app.use('*', (request, response) => {
  response.status(404).send('NOT FOUND!');
});

client.connect().then(() => {
  app.listen(PORT, () => console.log(`My server is up and running on ${PORT}`));
});
