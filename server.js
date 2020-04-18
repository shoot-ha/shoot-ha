'use strict';
require('dotenv').config();
const express = require('express');
const pg = require('pg');
const PORT = process.env.PORT || 3000;
const app = express();
const superagent = require('superagent');
app.use('/public',express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const client = new pg.Client(process.env.DATABASE_URL);
const methodOverRide = require('method-override'); //////////
app.use(methodOverRide('_method'));

app.get('/', saveToDB);
app.get('/test', getPage);
app.post('/', saveToDB);
// const url = 'https://thesportsdb.com/api/v1/json/1/searchteams.php?t=team';
// superagent.get(url).then((apiResponse) => {
//     console.log(apiResponse.query);
// });
function getPage(req, res) {
  res.render('pages/error');
}
//***************************************************** Functions */
// const teamsNamesForHome = []
// function getDataFromDB(req, res) {
//   const SQL = 'SELECT * FROM teamOne;';
//   return client.query(SQL)
//     .then(result => {
//       res.render('./pages/index', { data: result.rows })
//     }).catch((err) => {
//       console.log('error');
//       errorHandler(err, req, res);
//     });
// }

function saveToDB(req, res) {
  let title2 = req.body.team;
  let { team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes } = req.body;
  // console.log(req.body);
  let SQL = 'INSERT INTO teamOne (team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);';
  let safeValues = [team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,teamDescription,badge,logo,clothes];
  let safetitle =[title2];
  const SQL2 = 'SELECT * FROM teamOne WHERE team =$1;';
  client.query(SQL, safeValues)
    .then(() => {
    })
  return client.query(SQL2,safetitle)
    .then(result => {
      // console.log(result.rows[0].id);
      res.render('./pages/index', { data: result.rows })
    }).catch((err) => {
      console.log('error');
      errorHandler(err, req, res);
    });
}

// function api1Results(req,res) {
//   /////////
//   ////////////
//   // const teamJson = require('./data/team.json');
//   const disply_name = req.query.team;
//   const SQL = 'INSERT INTO teamOne (team, formed) VALUES ($1,$2);';
//   // const databaseQuery = 'SELECT team FROM teamOne WHERE team =$1';
//   const {team, formed} = req.body;
//   const values = [team, formed];
//   client.query(SQL, values).then((result) => {
//   if (result.rows.length > 0) {
//     res.status(200).json(result.rows[0]);
//   } else {
//   return superagent.get(`https://thesportsdb.com/api/v1/json/1/searchteams.php?t=${values[0]}`)
//     .then(result => {
//       console.log(result);
//       let theTeam = result.body.teams.map((name)=>{
//         return new Api1(name);
//       })
//       console.log(theTeam);
//       res.render('pages/index', {teamData: theTeam});
//     }).catch((err) => {
//       console.log('error');
//       errorHandler(err, req, res);
//     });
// }
//   });
// }
//******************************************** constructor */

function Api1 (name){
  this.team = name.teams.strTeam;
  this.formed = name.teams.intFormedYear;
  this.sport = name.teams.strSport;
  this.league = name.teams.strLeague;
  this.staduim = name.teams.strStadium;
  this.staduimImg = name.teams.strStadiumThumb;
  this.staduimLocation = name.teams.strStadiumLocation;
  this.website = name.teams.strWebsite;
  this.teamDescription = name.teams.strDescriptionEN;
  this.badge = name.teams.strTeamBadge;
  this.logo = name.teams.strTeamLogo;
  this.clothes = name.teams.strTeamJersey;
  // allTeams.push(this);
}
// allTeams = [];

function Api2 (value){
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
}

/////////////////////////////////////////////////////

function errorHandler(err, req, res) {
  res.status(500).render('pages/error', { error: err });
}

app.use('*', (request, response) => {
  response.status(404).send('NOT FOUND!');
});

client.connect().then(() => {
  app.listen(PORT, () => console.log(`My server is up and running on ${PORT}`));
});

