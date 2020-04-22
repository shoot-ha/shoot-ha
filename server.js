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
app.get('/about-us', (req,res) =>{
  res.render('pages/about-us') ;
} );
//************************Render Home******************************/

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

//**************************Favourite************************ */

app.get('/favourite', getDataFromDB);
app.post('/favourite', saveToDB);
app.get('/favourite/:ID', detailsFun);

function getDataFromDB(req, res) {
  const SQL = 'SELECT * FROM teamOne;';
  return client.query(SQL)
    .then(data => {
      res.render('pages/searches/favourite', { result: data.rows })
    })
}

function saveToDB(req, res) {
  let resultRows;
  let titleTeam = req.body.team;
  let { team, formed, sport, league, stadium, stadiumImg, stadiumLocation, website, description, badge, logo, clothes } = req.body;
  let SQL = 'INSERT INTO teamOne (team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,description,badge,logo,clothes) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);';
  let safeValues = [team, formed, sport, league, stadium, stadiumImg, stadiumLocation, website, description, badge, logo, clothes];
  let safeTitle = [titleTeam];
  const SQL2 = 'SELECT * FROM teamOne WHERE team =$1;';
  client.query(SQL, safeValues)
    .then(() => {
    })
  return client.query(SQL2, safeTitle)
    .then(data => {
      resultRows = data.rows[0].id;
      res.redirect(`/favourite/${resultRows}`);
    })
}

//***************************Details***************************** */

function detailsFun(req, res) {
  let saveId = [req.params.ID];
  let sql = `SELECT * FROM teamOne WHERE id = $1;`
  return client.query(sql, saveId)
    .then(result => {
      res.render('pages/searches/details', { data: result.rows[0]})
    })
}

//**************************Add New******************************* */

app.get('/favourite', getForm);
app.post('/favourite', addTeam);

function getForm(req, res) {
  res.render('pages/searches/favourite');
}

function addTeam(req, res) {
  const { team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,description,badge,logo,clothes } = req.body;
  const SQL = 'INSERT INTO teamOne (team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,description,badge,logo,clothes) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12);';
  const value = [team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,description,badge,logo,clothes];
  client.query(SQL, value).then((results) => {
    res.redirect('/favourite');
  }).catch((err) => errorHandler(err, req, res));
}

//**************************Update******************************* */
app.put('/update/:team_id', updateTeam);
app.delete('/delete/:team_id', deleteTeam);

function updateTeam(req, res) {
  const { team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,description,badge,logo,clothes } = req.body;
  const SQL =
        'UPDATE teamOne SET team=$1,formed=$2,sport=$3,league=$4,stadium=$5,stadiumImg=$6,stadiumLocation=$7,website=$8,description=$9,badge=$10,logo=$11,clothes=$12 WHERE id=$13';
  const values = [team,formed,sport,league,stadium,stadiumImg,stadiumLocation,website,description,badge,logo,clothes,req.params.team_id];
  client
    .query(SQL, values)
    .then((results) => res.redirect(`/favourite/${req.params.team_id}`))
    .catch((err) => errorHandler(err, req, res));
}
//****************************Delet**************************** */
function deleteTeam(req, res) {
  const SQL = 'DELETE FROM teamOne WHERE id=$1';
  const values = [req.params.team_id];
  client
    .query(SQL, values)
    .then((results) => res.redirect('/favourite'))
    .catch((err) => errorHandler(err, req, res));
}

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
  this.description = name.strDescriptionEN;
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
}

//**********************Error Handler************************************/

function errorHandler(err, req, res) {
  res.status(500).render('pages/error', { error: err });
}

app.use('*', (request, response) => {
  response.status(404).send('NOT FOUND!');
});

//************************Listen and Connect****************************/
client.connect().then(() => {
  app.listen(PORT, () => console.log(`My server is up and running on ${PORT}`));
});
