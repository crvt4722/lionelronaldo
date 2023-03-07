'use strict'
// Header fixed.
let header = document.getElementById('header')
header.style = `position: fixed;`

// Navigator stop
let navigatorItems = document.querySelector('.main-menu__items')
navigatorItems.style = `animation: none;`

// Side bar.
let sidebarSeason = document.querySelector('.text')
let sidebarSeasonYear = document.querySelector('.sidebar__seasons')
var cnt = 1;

function showOrHideSeasons(){
    if (cnt == 1){
        sidebarSeasonYear.style = `display: inline;`
        cnt = 2
    }
    else {
        sidebarSeasonYear.style = `display: none;`
        cnt = 1
    }
}

sidebarSeason.addEventListener('click', showOrHideSeasons)