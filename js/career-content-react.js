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
    linkFifaHead = "./assets/img/career/2008-2009/head-fifa.jpg"
}){
    return(
        <>
            <img src= {linkAvaHead} className="avatar left"/>
            <div className="nation-club">
                <p><img src="./assets/img/career/nation-icon.jpg" alt=""/> Nation: {nation}</p>
                <p><img src="./assets/img/career/icon-club.jpg" alt=""/> Club: {club}</p>
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
    descYoutube = 'Cristiano Ronaldo Hightlights 2008/09'
}){
    return(
        <>
            <iframe src="https://www.youtube.com/embed/Quk-X1BEznE"></iframe>
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
function Content({
    club = 'Real Madrid',
    nation = 'Portugal',
    // Shirts
    season = '2008/09',

    linkHomeShirt = './assets/img/career/2008-2009/home-shirt.jpg',
    linkHomeShirtBack = './assets/img/career/2008-2009/home-shirt-back.jpg', 
    linkAwayShirt = './assets/img/career/2008-2009/away-shirt.jpg',
    linkAwayShirtBack = './assets/img/career/2008-2009/away-shirt-back.jpg',
    linkThirdShirt = './assets/img/career/2008-2009/third-shirt.jpg',
    linkThirdShirtBack ='./assets/img/career/2008-2009/third-shirt-back.jpg',
    linkNationHomeShirt ='./assets/img/career/2008-2009/nation-home.jpg',
    linkNationHomeShirtBack=  './assets/img/career/2008-2009/nation-home-back.jpg',
    linkNationAwayShirt='./assets/img/career/2008-2009/nation-away.jpg',
    linkNationAwayShirtBack= './assets/img/career/2008-2009/nation-away-back.jpg'

}){

    // Hover Shirt
    const [isHoverHomeShirt, setIsHoverHomeShirt] = React.useState(false);
    const [isHoverAwayShirt, setIsHoverAwayShirt] = React.useState(false);
    const [isHoverThirdShirt, setIsHoverThirdShirt] = React.useState(false);
    const [isHoverNationHomeShirt, setIsHoverNationHomeShirt] = React.useState(false);
    const [isHoverNationAwayShirt, setIsHoverNationAwayShirt] = React.useState(false);


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
    
    // Add function to buy button.
    function showModal(){
        var modal = document.querySelector('.modal')
        modal.classList.add('open')
    }

    // Return the model.
    return(
        <>

        <div className="career__shirts">
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
        </div>

        <div className="career__shirts">
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
        </div>

        </>
    )
}

// Get the content container DOM.
const careerHead = ReactDOM.createRoot(document.querySelector('.career-head'))
const careerMoment = ReactDOM.createRoot(document.querySelector('.career__moment'))
const careerVideo = ReactDOM.createRoot(document.querySelector('.career__video'))
const clubShirts = ReactDOM.createRoot(document.querySelector('.club__shirts'))
const nationShirts = ReactDOM.createRoot(document.querySelector('.nation__shirts'))


careerHead.render(<Header
    nation = 'Portugal'
    club = 'Real Madrid'
    linkAvaHead = './assets/img/career/2009-2010/head-avatar.jpg'
    linkFifaHead = './assets/img/career/2009-2010/head-fifa.jpg'
/>)

careerMoment.render(<CareerMoment

/>)

careerVideo.render(<CareerVideo

/>)

clubShirts.render(<ClubShirts 
    nation = 'Portugal'
    club = 'Real Madrid'
    // linkAvaHead = './assets/img/career/2009-2010/head-avatar.jpg'
    // linkFifaHead = './assets/img/career/2009-2010/head-fifa.jpg'

    linkHomeShirt = './assets/img/career/2009-2010/home-shirt.jpg'
    linkHomeShirtBack = './assets/img/career/2009-2010/home-shirt-back.jpg'
    linkAwayShirt = './assets/img/career/2009-2010/away-shirt.jpg'
    linkAwayShirtBack = './assets/img/career/2009-2010/away-shirt-back.jpg'
    linkThirdShirt = './assets/img/career/2009-2010/third-shirt.jpg'
    linkThirdShirtBack ='./assets/img/career/2009-2010/third-shirt-back.jpg'
    // linkNationHomeShirt ='./assets/img/career/2009-2010/nation-home.jpg'
    // linkNationHomeShirtBack=  './assets/img/career/2009-2010/nation-home-back.jpg'
    // linkNationAwayShirt='./assets/img/career/2009-2010/nation-away.jpg'
    // linkNationAwayShirtBack= './assets/img/career/2009-2010/nation-away-back.jpg'
/>)

nationShirts.render(<NationShirts
    nation = 'Portugal'
    club = 'Real Madrid'
    linkNationHomeShirt ='./assets/img/career/2009-2010/nation-home.jpg'
    linkNationHomeShirtBack=  './assets/img/career/2009-2010/nation-home-back.jpg'
    linkNationAwayShirt='./assets/img/career/2009-2010/nation-away.jpg'
    linkNationAwayShirtBack= './assets/img/career/2009-2010/nation-away-back.jpg'
/>)


