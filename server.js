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
const methodOverRide = require('method-override') //////////
app.use(methodOverRide('_method'))



// const url = 'https://thesportsdb.com/api/v1/json/1/searchteams.php?t=team';
// superagent.get(url).then((apiResponse) => {
//     console.log(apiResponse.query);
// });



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
}

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
