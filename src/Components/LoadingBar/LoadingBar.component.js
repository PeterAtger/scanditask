/* eslint-disable */
import React, { Component } from 'react'
import './LoadingBar.styles.scss'
import PropTypes from 'prop-types';
import { AiOutlineCheck } from 'react-icons/ai'


export default class LoadingBar extends Component {
    static propTypes = {
        title: PropTypes.string,
        isDone: PropTypes.bool,
        isFirst: PropTypes.bool,
        step: PropTypes.string,
        stepMap: PropTypes.object
    }


    getIndex = () => {
        let json = this.props.stepMap;
        let keytoFind = this.props.step;
        let index = Object.keys(json).indexOf(keytoFind);
        return index + 1
    }

    render() {
        console.log(this.props.isDone)
        return (
            <div className="bar-and-circle">
                {!this.props.isFirst && <div className="circle-and-text">
                    <div className="circle">
                        {this.props.isDone ? <AiOutlineCheck className="icon" /> : this.getIndex()}
                    </div>
                    <div className="text">
                        {this.props.stepMap[this.props.step].title}
                    </div>
                </div>
                }
                <div className="Loading-Bar" >
                    <div className={this.props.isDone ? "Loading-Bar-Coloring" : ""} />
                </div >

            </div>
        )
    }
}
