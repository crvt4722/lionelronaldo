// Add function to buy button.
function showModal(){
    var modal = document.querySelector('.modal')
    modal.classList.add('open')
}

function Header({
    //Header
    linkAvaHead = "./assets/img/career/2008-2009/head-avatar.jpg", 
    nation = 'Portugal',
    club = 'Manchester United',
    linkFifaHead = "./assets/img/career/2008-2009/head-fifa.jpg",
    linkClubIcon = './assets/img/career/2008-2009/club-icon.jpg',
    linkNationIcon = './assets/img/career/2008-2009/nation-icon.jpg'
}){
    return(
        <>
            <img src= {linkAvaHead} className="avatar left"/>
            <div className="nation-club">
                <p><img src= {linkNationIcon} alt=""/> Nation: {nation}</p>
                <p><img src= {linkClubIcon} alt=""/> Club: {club}</p>
            </div>
            <img src= {linkFifaHead} className="fifa-card right"/>
        </>
    )
}

function CareerMoment({
    linkImgMoment1 = "./assets/img/career/2008-2009/moment1.jpg",
    linkImgMoment2 = "./assets/img/career/2008-2009/moment2.jpg",
    linkImgMoment3 = "./assets/img/career/2008-2009/moment3.jpg", 
    linkImgMoment4 = "./assets/img/career/2008-2009/moment4.jpg",
    descMoment1 = "Cristiano Ronaldo 2008/09",
    descMoment2 = 'His first Champions League title',
    descMoment3 = `Also his first Balon d'Or`,
    descMoment4 = 'Cristiano Ronaldo 2008/09',
    
    // Achivement
    goalsAmount = 35,
    assistsAmount = 12,
    goalsC1 = 1,
    goalsNation = 3
}){
    return (
        <>
            <div className="achivement">
                <div className="goals-assits">
                    <div className="goals-assits__left">
                        <h3><i className="fa-sharp fa-solid fa-futbol"></i> Goals : <span>{goalsAmount}</span></h3>
                        <h3><i className="fa-sharp fa-solid fa-users"></i> Assits: <span>{assistsAmount}</span></h3>
                    </div>

                    <div className="goals-assits__right">
                        <h3><i className="fa-sharp fa-solid fa-futbol"></i> Cup C1: <span>{goalsC1}</span></h3>
                        <h3><i className="fa-sharp fa-solid fa-futbol"></i> Nation: <span>{goalsNation}</span></h3>
                    </div>
                </div>

                <div className="titles-awards">
                    <div className="titles">
                        <h3><i className="fa-solid fa-trophy"></i> TROPHIES <i className="fa-sharp fa-solid fa-trophy"></i></h3>

                        <h3><span className="icon c1"></span>Champions League</h3>
                        <h3><span className="icon nha"></span>Premier League</h3>
                        <h3><span className="icon ffclubwc"></span>FIFA Club World Cup</h3>
                        <h3><span className="icon comunityshield"></span>Community Shield</h3>
                    </div>

                    <div className="awards">
                        <h3><i className="fa-solid fa-award"></i> AWARDS <i className="fa-solid fa-award"></i></h3>
                        
                        <h3><span className="icon balondor"></span>Ballon d'Or</h3>
                        <h3><span className="icon goldenshoe"></span>European Golden Shoe</h3>
                        <h3><span className="icon goldmedal"></span>World Soccer Player of the Year</h3>
                        <h3><span className="icon goldmedal"></span>UEFA Team of the Year</h3>
                    </div>
                </div>
            </div>

            <div className="moment">
                <img src= {linkImgMoment1} alt=""/>
                <p>{descMoment1}</p>

                <img src={linkImgMoment2} alt=""/>
                <p>{descMoment2}</p>

                <img src={linkImgMoment3} alt=""/>
                <p>{descMoment3}</p>

                <img src={linkImgMoment4} alt=""/>
                <p>{descMoment4} </p>
            </div>
        
        </>
    )
}

function CareerVideo({
    // Video
    linkYoutube = 'https://www.youtube.com/embed/Quk-X1BEznE',
    descYoutube = 'Cristiano Ronaldo Hightlights 2008/09'
}){
    return(
        <>
            <iframe src = {linkYoutube}></iframe>
            <p>{descYoutube}</p>
        </>
    )
}

function ClubShirts({
    club = 'Real Madrid',
    nation = 'Portugal',
    // Shirts
    season = '2008/09',

    linkHomeShirt = './assets/img/career/2008-2009/home-shirt.jpg',
    linkHomeShirtBack = './assets/img/career/2008-2009/home-shirt-back.jpg', 
    linkAwayShirt = './assets/img/career/2008-2009/away-shirt.jpg',
    linkAwayShirtBack = './assets/img/career/2008-2009/away-shirt-back.jpg',
    linkThirdShirt = './assets/img/career/2008-2009/third-shirt.jpg',
    linkThirdShirtBack ='./assets/img/career/2008-2009/third-shirt-back.jpg'
}){

    // Hover Shirt
    const [isHoverHomeShirt, setIsHoverHomeShirt] = React.useState(false);
    const [isHoverAwayShirt, setIsHoverAwayShirt] = React.useState(false);
    const [isHoverThirdShirt, setIsHoverThirdShirt] = React.useState(false);

    
    // Home Shirt
    linkHomeShirt = `url(` +`'` + linkHomeShirt  +`'` +`)`
    linkHomeShirtBack = `url(` +`'` + linkHomeShirtBack  +`'` +`)`

    const homeShirt = {
        backgroundImage: isHoverHomeShirt? 
        linkHomeShirtBack: linkHomeShirt,
    }

    function handleHoverHomeShirt(){
        setIsHoverHomeShirt(true)
    }

    function handleLeaveHomeShirt(){
        setIsHoverHomeShirt(false)
    }

    // Away Shirt

    linkAwayShirt = `url(` +`'` + linkAwayShirt  +`'` +`)`
    linkAwayShirtBack = `url(` +`'` + linkAwayShirtBack  +`'` +`)`

    const awayShirt = {
        backgroundImage: isHoverAwayShirt? 
        linkAwayShirtBack: linkAwayShirt,
    }

    function handleHoverAwayShirt(){
        setIsHoverAwayShirt(true)
    }

    function handleLeaveAwayShirt(){
        setIsHoverAwayShirt(false)
    }

    // Third Shirt

    linkThirdShirt = `url(` +`'` + linkThirdShirt  +`'` +`)`
    linkThirdShirtBack = `url(` +`'` + linkThirdShirtBack  +`'` +`)`

    const thirdShirt = {
        backgroundImage: isHoverThirdShirt? 
        linkThirdShirtBack: linkThirdShirt,
    }

    function handleHoverThirdShirt(){
        setIsHoverThirdShirt(true)
    }

    function handleLeaveThirdShirt(){
        setIsHoverThirdShirt(false)
    }

    return(
        <>
            <div className="shirt club-shirt-home" >
                <div className="shirt-image" 
                    style={homeShirt}
                    onMouseEnter = {handleHoverHomeShirt}
                    onMouseLeave = {handleLeaveHomeShirt}
                    ></div>
                <div className="club text">{club}</div>
                <div className="desc text">{season} Home</div>
                <div className="buy-btn" onClick = {showModal}>Buy <i className="fa-sharp fa-solid fa-cart-shopping" ></i></div>
            </div>
            
            <div className="shirt club-shirt-away">
                <div className="shirt-image"
                    style={awayShirt}
                    onMouseEnter = {handleHoverAwayShirt}
                    onMouseLeave = {handleLeaveAwayShirt}
                ></div>
                <div className="club text">{club}</div>
                <div className="desc text">{season} Away</div>
                <div className="buy-btn" onClick = {showModal}>Buy <i className="fa-sharp fa-solid fa-cart-shopping" ></i></div>
            </div>

            <div className="shirt club-shirt-third">
                <div className="shirt-image"
                    style={thirdShirt}
                    onMouseEnter = {handleHoverThirdShirt}
                    onMouseLeave = {handleLeaveThirdShirt}
                ></div>
                <div className="club text">{club}</div>
                <div className="desc text">{season} Third</div>
                <div className="buy-btn" onClick = {showModal}>Buy <i className="fa-sharp fa-solid fa-cart-shopping" ></i></div>
            </div>
        </>
    )
}

function NationShirts({
    club = 'Real Madrid',
    nation = 'Portugal',
    season = '2008/09',

    linkNationHomeShirt ='./assets/img/career/2008-2009/nation-home.jpg',
    linkNationHomeShirtBack=  './assets/img/career/2008-2009/nation-home-back.jpg',
    linkNationAwayShirt='./assets/img/career/2008-2009/nation-away.jpg',
    linkNationAwayShirtBack= './assets/img/career/2008-2009/nation-away-back.jpg'
}){

    const [isHoverNationHomeShirt, setIsHoverNationHomeShirt] = React.useState(false);
    const [isHoverNationAwayShirt, setIsHoverNationAwayShirt] = React.useState(false);

    // Nation Home Shirt

    linkNationHomeShirt = `url(` +`'` + linkNationHomeShirt  +`'` +`)`
    linkNationHomeShirtBack = `url(` +`'` + linkNationHomeShirtBack  +`'` +`)`

    const nationHomeShirt = {
        backgroundImage: isHoverNationHomeShirt? 
        linkNationHomeShirtBack: linkNationHomeShirt,
    }

    function handleHoverNationHomeShirt(){
        setIsHoverNationHomeShirt(true)
    }

    function handleLeaveNationHomeShirt(){
        setIsHoverNationHomeShirt(false)
    }

    // Nation Away Shirt

    linkNationAwayShirt = `url(` +`'` + linkNationAwayShirt  +`'` +`)`
    linkNationAwayShirtBack = `url(` +`'` + linkNationAwayShirtBack  +`'` +`)`
    const nationAwayShirt = {
        backgroundImage: isHoverNationAwayShirt? 
        linkNationAwayShirtBack: linkNationAwayShirt,
    }

    function handleHoverNationAwayShirt(){
        setIsHoverNationAwayShirt(true)
    }

    function handleLeaveNationAwayShirt(){
        setIsHoverNationAwayShirt(false)
    }


    return(
        <>
            <div className="shirt nation-shirt-home">
                <div className="shirt-image"
                    style={nationHomeShirt}
                    onMouseEnter = {handleHoverNationHomeShirt}
                    onMouseLeave = {handleLeaveNationHomeShirt}
                ></div>
                <div className="club text">{nation}</div>
                <div className="desc text">{season} Home</div>
                <div className="buy-btn" onClick = {showModal}>Buy <i className="fa-sharp fa-solid fa-cart-shopping"></i></div>
            </div>
            
            <div className="shirt nation-shirt-away">
                <div className="shirt-image"
                    style={nationAwayShirt}
                    onMouseEnter = {handleHoverNationAwayShirt}
                    onMouseLeave = {handleLeaveNationAwayShirt}
                ></div>
                <div className="club text">{nation}</div>
                <div className="desc text">{season} Away</div>
                <div className="buy-btn" onClick = {showModal}>Buy <i className="fa-sharp fa-solid fa-cart-shopping"></i></div>
            </div>
        </>
    )
}


function getLinkImageInSeason(season = '2008-2009'){
    let club = ''
    const mu = ['2008-2009', '2021-2022']
    const alnassr = ['2022-2023']
    const juventus = ['2018-2019', '2019-2020', '2020-2021']

    if(mu.includes(season)) club = 'Manchester United'
    else if (alnassr.includes(season)) club = 'Al-nassr'
    else if (juventus.includes(season)) club = 'Juventus'
    else club = 'Real Madrid'

    return ({
        club: club,
        clubIcon: './assets/img/career/'  + season + '/club-icon.jpg',
        nationIcon: './assets/img/career/'  + season + '/nation-icon.jpg',
        headAvatar: './assets/img/career/'  + season + '/head-avatar.jpg',
        headFifa: './assets/img/career/'  + season + '/head-fifa.jpg',
        homeShirt: './assets/img/career/'  + season + '/home-shirt.jpg',
        awayShirt: './assets/img/career/'  + season + '/away-shirt.jpg',
        thirdShirt: './assets/img/career/'  + season + '/third-shirt.jpg',
        nationHome: './assets/img/career/'  + season + '/nation-home.jpg',
        nationAway: './assets/img/career/'  + season + '/nation-away.jpg'
    })
}

function changeCareerContent(props = {}){
    careerHead.render(<Header
        club= {props.club}
        linkAvaHead={props.headAvatar}
        linkFifaHead = {props.headFifa}
        linkClubIcon = {props.clubIcon}
        linkNationIcon ={props.nationIcon}
    />)
    
    careerMoment.render(<CareerMoment
    
    />)
    
    careerVideo.render(<CareerVideo
    />)
    
    clubShirts.render(<ClubShirts 
        linkHomeShirt= {props.homeShirt}
        linkAwayShirt = {props.awayShirt}
        linkThirdShirt = {props.thirdShirt}
    />)
    
    nationShirts.render(<NationShirts
        linkNationHomeShirt = {props.nationHome}
        linkNationAwayShirt = {props.nationAway}
    />)
}

var cntSideBar = 1;
function SideBar(){
    const [show, setShow]  = React.useState(false)
    

    const sidebarSeason = {
        listStyle: 'none',
        display: show? 'inline': 'none'
    }

    function showOrHideSeasons(){
        if (cntSideBar == 1){
            setShow(true)
            cntSideBar = 0
        }
        else{
            setShow(false)
            cntSideBar = 1
        }
    }

    

    return(
        <>
        
        <li className="sidebar__introduce"><i className="fa-sharp fa-solid fa-circle-info"> Introduce</i> </li>
        <li className="text" onClick = {showOrHideSeasons}><i className="fa-sharp fa-regular fa-calendar-days"> Season</i></li>

        <div className="sidebar__seasons" style = {sidebarSeason}>

            <li className="sidebar__items one" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.one')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2008-2009</li>
            <li className="sidebar__items two" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.two')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2009-2010</li>
            <li className="sidebar__items three" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.three')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2010-2011</li>
            <li className="sidebar__items four" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.four')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2011-2012</li>
            <li className="sidebar__items five" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.five')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2012-2013</li>
            <li className="sidebar__items six" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.six')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2013-2014</li>
            <li className="sidebar__items seven" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.seven')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2014-2015</li>
            <li className="sidebar__items eight" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.eight')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2015-2016</li>
            <li className="sidebar__items nine" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.nine')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2016-2017</li>
            <li className="sidebar__items ten" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.ten')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2017-2018</li>
            <li className="sidebar__items eleven" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.eleven')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2018-2019</li>
            <li className="sidebar__items twelve" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.twelve')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2019-2020</li>
            <li className="sidebar__items thirteen" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.thirteen')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2020-2021</li>
            <li className="sidebar__items fourteen" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.fourteen')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2021-2022</li>
            <li className="sidebar__items fifteen" onClick={()=>{
                const itemOne = document.querySelector('.sidebar__items.fifteen')
                changeCareerContent(getLinkImageInSeason(itemOne.innerHTML))
            }}>2022-2023</li>
        </div>
        
    
        </>
    )
}

const sidebar = ReactDOM.createRoot(document.querySelector('.sidebar'))
sidebar.render(<SideBar/>)

// Get the content container DOM.
const careerHead = ReactDOM.createRoot(document.querySelector('.career-head'))
const careerMoment = ReactDOM.createRoot(document.querySelector('.career__moment'))
const careerVideo = ReactDOM.createRoot(document.querySelector('.career__video'))
const clubShirts = ReactDOM.createRoot(document.querySelector('.club__shirts'))
const nationShirts = ReactDOM.createRoot(document.querySelector('.nation__shirts'))


careerHead.render(<Header

/>)

careerMoment.render(<CareerMoment

/>)

careerVideo.render(<CareerVideo
/>)

clubShirts.render(<ClubShirts 

/>)

nationShirts.render(<NationShirts

/>)




