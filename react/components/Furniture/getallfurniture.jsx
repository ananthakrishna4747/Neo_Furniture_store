import React, { Component } from 'react'
import Getashfurniture from './getashfurniture'
import Getglassfurniture from './getglassfurniture'
import Getoakfurniture from './getoakfurniture'
import Getpinefurniture from './getpinefurniture'

export class Getallfurniture extends Component {
    render() {
        return (
            <div>
                <Getashfurniture/>
                <Getoakfurniture/>
                <Getpinefurniture/>
                <Getglassfurniture/>
            </div>
        )
    }
}

export default Getallfurniture
