import React, { Component } from 'react'
import '../assets/style.css'
import logo from "../assets/logo.png"
import rss from "../assets/rss.png"
import sharethis from "../assets/sharethis.png"
import picasa from "../assets/picasa.png";
import myspace from "../assets/myspace.png";
import tetris from "../assets/tetris.mp4";
import endlessDragon from "../assets/EndlessDragon.png"
import tetrominos from "../assets/Tetrominos.png";
import blob from "../assets/Blob.png";
import fb from "../assets/fb.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"
import youtube from "../assets/youtube.png"
import { Link } from "react-router-dom"
import styled from "styled-components";
import Tetrominos from './Tetrominos';

const BgModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  align-items: center;
  z-index:100000;
`;

const ModalContent = styled.div`
  width: 800px;
  height: 800px;
  background-color: white;
  border-radius: 5px;
  position: relative;
  text-align: center;
  padding: 20px;
`;

const Close = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 42px;
  color: #333;
  transform: rotate(45deg);
  cursor: pointer;
  &:hover {
    color: #666;
  }
`;

const Content = styled.div`
  margin: 15px auto;
  display: block;
  width: 50%;
  padding: 8px;
  margin-top: 20px;
  border: 1px solid gray;
  color: red;
`;



export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingScreen: true,
            displayModal: false,
        }
    }

    playTetro = () => {
        this.setState({ displayModal: true });
    }

    closeModal = () => {
        this.setState({ displayModal: false });
    }


    render() {
        return (
            <React.Fragment>
                <div id="menu" style={{ zIndex: "5" }}>
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <img src={rss} style={{ paddingTop: "120px" }} alt="Logo" />
                    <img src={sharethis} style={{ paddingTop: "50px" }} alt="Logo" />
                    <img src={picasa} style={{ paddingTop: "50px" }} alt="Logo" />
                    <Link to="/register">
                        <img src={myspace} style={{ paddingTop: "50px" }} alt="Logo" />
                    </Link>
                </div>
                <div id="title">
                    <section style={{ paddingTop: "0px", paddingBottom: "0px", margin: "0px" }}>
                        <div className="video-wrapper">
                            <video autoPlay loop muted>
                                <source src={tetris} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                                Video not supported.
                            </video>

                            <div>
                                <h1>Indonesia Game Portal</h1>
                                <p>Compete against your friends and other players in the Epic Tetrominos or in the Endless Dragon.</p>
                            </div>
                        </div>
                    </section>
                    <h1 className="display-resp">Indonesia Game Portal</h1>

                    <div className="content-games">
                        <div className="single-game">
                            <img src={endlessDragon} alt="Endless Dragon" />
                            <div className="inner-content">
                                <button>Play Game</button>
                            </div>
                            <h1>Endless Dragon</h1>
                            <div className="inner-content">
                                <p>Endless Dragon is a 2011 side-scrolling endless dragon action video game created by Halfbrick
                                    Studios. It was released for iOS devices on the App Store on September 1, 2011, and has been
                                    ported
                        to other systems.</p>
                            </div>
                        </div>
                        <div className="single-game">
                            <img src={tetrominos} alt="Endless Dragon" />
                            <div className="inner-content">
                                <button onClick={this.playTetro}>Play Game</button>
                                {this.state.displayModal ?
                                    <BgModal>
                                        <ModalContent>
                                            <Close onClick={this.closeModal}>+</Close>
                                            <img src={logo} style={{ height: "200px" }} alt="logo" />
                                            <Tetrominos />
                                        </ModalContent>
                                    </BgModal> : ""}
                            </div>
                            <h1>Tetrominos</h1>
                            <div className="inner-content">
                                <p>Tetrominos, video game created by Russian designer Alexey Pajitnov in 1985 that allows players to
                                    rotate falling blocks strategically to clear levels. Pajitnov claimed he created the name of the
                                    game by combining the Greek prefix tetra, which refers to the four squares contained in each
                                    block, with the word tennis.
                                </p>
                            </div>
                        </div>
                        <div className="single-game">
                            <img src={blob} alt="Endless Dragon" />
                            <div className="inner-content">
                                <button>Play Game</button>
                            </div>
                            <h1>Blob</h1>
                            <div className="inner-content">
                                <p>The objective of Blobs is to grow a cell on a Petri dish by swallowing both randomly generated
                                    pellets (blobs), which slightly increases a cell's mass, and smaller cells, without being
                        swallowed by larger cells.</p>
                            </div>
                        </div>

                    </div>
                    <div className="social-media">
                        <img src={fb} alt="fb" />
                        <img src={twitter} alt="fb" />
                        <img src={instagram} alt="fb" />
                        <img src={youtube} alt="fb" />

                    </div>

                    <div id="footer">
                        <p>Copyright &copy;</p>
                        <p>Designed By:Kelwin Tantono</p>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Home
