import React from 'react'
import style from './Home.module.css'
import image from './My photo.jpg'
import C from './C.png'
import JS from './JS.png'
import HTML from './HTML.png'
import CSS from './CSS.png'
import REACT from './React.png'
import Todo from './Todo.png'
import Tic from './Tic.jpg'
import Typing from './Typing.webp'
import Text from './Text.png'
import Instagram from './facebook.png'
import Facebook from './instagram.png'

export default function TicTacToe() {
    document.title = "Site Book"

    let head = " Hello World ! "
    let len = head.length
    function runner() {
        let loops = setInterval(anim, 250)
        let a, b, c;
        b = 0
        c = ""
        function anim() {
            a = head[b]
            b = b + 1;
            c = c + a;
            document.getElementById("head").innerHTML = c;
        }
        setTimeout(function () {
            clearInterval(loops)
        }, 250 * len)
    }
    runner();
    setInterval(runner, 250 * len + 2000)


    return (
        <>
            <div className={style.main}>
                <nav className={style.navbar}>
                    <div className={style.navs}><a href="#about" >About</a></div>
                    <div className={style.navs}><a href="#education" >Education</a></div>
                    <div className={style.navs}><a href="#project" >Projects</a></div>
                    <div className={style.navs}><a href="#problem" >problem</a></div>
                </nav>
            </div>
            <div className={style.head}>
                <h1 id="head"> </h1>
            </div>
            <div id='about' style={{ height: '80px' }}></div>
            <hr />
            <br />
            <div className={style.about}>
                <div className={style.data}>
                    <h1>ABOUT</h1>
                    <p><strong> Name :</strong>Tarun Singh Thakur</p>
                    <p><strong>Class :</strong> First Year [B.com (comp)] (Dummy)</p>
                    <p><strong> DOB &nbsp;: </strong>26 / 10 / 2004</p>
                    <p><strong>Address :</strong> Nehru Nagar G.No : 200/3, INDORE</p>
                    <p><strong>E-mail :</strong> tarunsinghthakur6261@gamil.com</p>
                    <br />
                </div>
                <img src={image} className={style.mypic} alt="My pic" />
            </div>
            <div>
                <div id="education" style={{ height: '80px' }} >  </div>
                <hr />
                <div className={style.educationH}>
                    <div className={style.data}>
                        <h1 >Education</h1>
                    </div>
                </div>
                <div>
                    <h1 className={style.hone}>Basic knowledge of these languages.</h1>
                    <p className={style.paraone}>I have learned all these languages from YouTube. (Self Study)</p>
                </div>
                <div className={style.education}>
                    <hr /><img src={C} alt="C icon" /><hr />
                    <img src={HTML} alt=" HTML icon" /><hr />
                    <img src={CSS} alt="CSS icon" /><hr />
                    <img src={JS} alt="JS icon" /><hr />
                    <img className={style.react} src={REACT} alt="REACT icon" /><hr />
                </div>
                <br />
            </div>
            <div className={style.media}></div>
            <div className={style.educa_data}>
                <p className={style.paraguid}><strong>Guided by : </strong>SSE: Mr. Narendra Singh Thakur, &nbsp;Mr. Harris Khan (Code With Harry) .</p>
                <p className={style.paraguid}>Some basic knowledge about Github</p>
            </div>
            <div id="project" style={{ height: '80px' }} ></div>
            <hr />
            <div className={style.projectsH}>
                <div className={style.data}>
                    <h1 >Projects</h1>
                </div>
            </div>
            <h1 className={style.hone}>Here are some basic projects available.</h1>
            <p style={{ textAlign: "center", fontSize: "25px", margin: "20px" }}>That I made at my Initial stage of learning, Atleast you can try it once</p>
            <div className={style.project}>
                <div className={style.cards}><a href="/" ><img src={Tic} alt="Tic pic" /> <p>Tic-Tac-Toe</p></a>
                    <a href="/"><p>Source Code</p></a>
                </div>
                <div className={style.cards}><a href="/" ><img src={Typing} alt="Typing pic" /><p>Typing-Test</p></a>
                    <a href="/"><p>Source Code</p></a></div>
                <div className={style.cards}><a href="/" ><img src={Todo} alt="Todo pic" /><p>Todo-List</p></a>
                    <a href="/"><p>Source Code</p></a></div>
                <div className={style.cards}><a href="/"> <img src={Text} alt="Text pic" /><p >TextUtils</p></a>
                    <a href="/"><p>Source Code</p></a></div>
            </div>
            <div id="problem" style={{ height: '80px' }} ></div>
            <hr />
            <div className={style.problems}>
                <div className={style.data}>
                    <h1 >Problems</h1>
                </div>
            </div>
            <div className={style.problem}>
                <ul className={style.ulproblem}>
                    <li>This website or my projects were not fully responsive.</li>
                    <li>I will use different links instead of components because the routing files are not working on deployment.</li>
                    <li>I was unable to put a <b>title</b> attribute</li>
                    <li>In the Typing-Test project, the accuracy and net speed results were based on characters rather than words.</li>
                    <li>If you click on the Typing-Test input area, it will display an alert whether or not you have clicked on the start button.</li>
                    <li>The links using #about, #education, #projects, and #problem are not working after deployment.</li>
                </ul>
            </div>
            <footer>
                <a href='/'><img src={Instagram} alt="Instagram icon" /></a>
                <div><h1>Thank You</h1></div>
                <a href='/'><img src={Facebook} alt="Facebook icon" /></a>
            </footer>

        </>
    )
}
