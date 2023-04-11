function Shirt({
    season ,
    shirtType 
}){
    function getUrlBackground(season = '', type = ''){
        let link =  "url('./assets/img/career/" + season +'/' + type +"')"

        return{
            backgroundImage: link
        }
        
    }

    function showModal(){
        document.querySelector('.order-info').classList.add('open')
    }
    
    return(
        <>
        {
            season.map((value, index)=>{
                let shirt = shirtType[index]
                if(shirt.includes('home')) shirt = 'Home'
                else if (shirt.includes('away')) shirt = 'Away'
                else shirt = 'Third'

                let background = getUrlBackground(value, shirtType[index])
                console.log(background.backgroundImage)
                return (
                    <div key = {index} className="shirt">
                        <div className="shirt-image" style = {background}></div>
                        <div className="club text">{season[index]} United</div>
                        <div className="desc text">{value} {shirt}</div>
                        <div className="more-info-btn" onClick = {showModal}>More Information</div>
                    </div> 
                )
            })
        }
        </>
    )
}

let data = `{
"shirtType": ["home-shirt.jpg","third-shirt.jpg","away-shirt.jpg","home-shirt.jpg","home-shirt.jpg"], 
"season": ["2015-2016","2008-2009","2010-2011","2021-2022","2022-2023"] 
}`

data = JSON.parse(data)
console.log(data)

const root = ReactDOM.createRoot(document.querySelector('.container'))
root.render(<Shirt 
season={data.season}
shirtType={data.shirtType}
/>)
