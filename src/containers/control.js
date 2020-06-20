import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeRandomGrid, tick, startPlaying, stopPlaying, clear } from '../actions/';
import { Button, Row, Col } from 'antd';
class Control extends Component {
  componentDidMount(){
    this.togglePlay();
  }
  render(){
    return (
      <Row>
        <Col span={6}>
          <Button
            type="primary" 
            onClick={() => this.props.showModal()}>
             New Game
          </Button>
        </Col>
        <Col offset={5} span={5}>
         <Button
            danger
            onClick={() => this.clear()}
            type="" >
            Clear
          </Button>
        </Col>
        <Col offset={3} span={3}>
            <Button
              onClick={() => this.togglePlay()}>
              {this.props.gameState.isRunning ? 'Pause' : 'Play'}
          </Button>
        </Col>
      </Row>
    );
  }
  togglePlay(){
    if (this.props.gameState.isRunning) {
      clearInterval(this.props.gameState.timerId);
      this.props.stopPlaying();
    } else {
      let interval = setInterval(this.props.tick,300);
      this.props.startPlaying(interval);
    }
  }
  clear(){
    if (this.props.gameState.isRunning) {
      clearInterval(this.props.gameState.timerId);
      this.props.stopPlaying();
    }
      this.props.clear();
  }
}


const mapStateToProps = ({gameState}) => {
  return { gameState };
}

const mapDispatchToProps = (dispatch) => {
  return {
    random: () => dispatch(makeRandomGrid()),
    tick: () => dispatch(tick()),
    startPlaying: (timerId) => dispatch(startPlaying(timerId)),
    stopPlaying: () => dispatch(stopPlaying()),
    clear: () => dispatch(clear())
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Control)
