import './rightbar.css'

export default function Rightbar(){
    return <div className='rightbar'>
        <div className="rightbarWrapper">
            <div className="birthdayContainer">
                <img src='assets/gift.png' alt='birthday' className='birthdayImg' />
                <span className='birthdayText'>rahul gandhi and 3 other are celebrating their birthdays today, wish em!</span>
            </div>
            <img className='rightbarAd' src='/assets/ad.png' alt='ad' />
        </div>
    </div>
}