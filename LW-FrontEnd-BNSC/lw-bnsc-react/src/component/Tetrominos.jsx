import React, { Component } from 'react'

export class Tetrominos extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "300px", margin: "auto", textAlign: "center" }}>
                    <div id="score"></div>
                    <canvas id="tetris" width="360px" height="600px"></canvas>

                </div>
            </React.Fragment>
        )
    }
}

export default Tetrominos
