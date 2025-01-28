import git from '../assets/Git.png'
import linkedin from '../assets/LinkedIn.png'
import insta from '../assets/instaLogo.png'

// import instagram from '../assets'

function ContactMe() {

    
    const handleClick = (link: string) => {
        if (link === 'Instagram') {
            window.open('https://www.instagram.com/mannan_plays_the_flute/', '_blank');
        }
        if (link === 'Linkedin') {
            window.open('https://www.linkedin.com/in/mannan-zaveri-70824b166', '_blank');
            
        }
        if (link === 'Github') {
            window.open('https://github.com/DinDjarin88', '_blank');
        }
    }


    return(

        <div className="contact-me-container"> 
            <h1 className="contact-header">
                Contact Me (clickable)
            </h1> 
            
            <hr className="menu-bar"></hr>

            <div className="socials-contain">
                <img className="contact-pic"src={insta} onClick={ () => handleClick('Instagram') }></img>
                <a className="conact-link" onClick={ () => handleClick('Instagram') }>@mannan_plays_the_flute</a>
            </div>
            <div className="socials-contain">
                <img className="contact-pic"src={linkedin} onClick={ () => handleClick('Linkedin') }></img>
                <a className="conact-link" onClick={ () => handleClick('Linkedin') }>Mannan Vivek Zaveri</a>
            </div>
            <div className="socials-contain">
                <img className="contact-pic"src={git} onClick={ () => handleClick('Github') }></img>
                <a className="conact-link" onClick={ () => handleClick('Github') }>DinDjarin88</a>
            </div>
            

        </div>
    )
}


export default ContactMe;