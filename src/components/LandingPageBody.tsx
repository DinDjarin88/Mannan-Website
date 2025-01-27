import mannan1 from '../assets/mannan1.jpg'; 

function PersonalIntro() {
    return (
        <>
            <div className="main-intro-contain">
                <img src={mannan1} className="photo"></img>
                <div className="intro-contain">

                    <text className="mannan-intro"> Hi! I'm Mannan, a second-year student at UNSW, diving headfirst into the exciting world of Electrical Engineering and Computer Science. It's been a wild ride so far, juggling circuits and code, but I'm loving every minute of it! Ever since I was a kid, i've loved to code and got my first soldering iron at 11, making engineering my passion from a young
                    When I'm not buried in textbooks or debugging my latest project, you'll often find me taking part in competitions or hackathons. Speaking of teamwork, I thrive on collaboration. There's nothing quite like the buzz of a group project coming together, with everyone bringing their unique strengths to the table. Whether it's brainstorming innovative solutions or divvying up tasks, I'm all about fostering a positive team spirit.
                    Organization is my secret weapon – my color-coded google calendar alwyas keeps me on track. It's how I manage to balance my coursework, extracurricular activities, and still have time for a cheeky game of badminton on the weekend.
                    So yeah, that's me in a nutshell – a budding engineer with a passion for tech, a flair for leadership, and an unhealthy addiction to coffee. Cheers!
                    </text>
                </div>
            </div>
            <hr className="menu-bar"></hr>
            <text className="mannan-intro"> This site has been made from scratch by me, and has been written in React.
            </text>
        </>

    )
}

export default PersonalIntro;