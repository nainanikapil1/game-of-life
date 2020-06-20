import React, { Component } from 'react'
import Board from '../containers/board';
import Control from '../containers/control';
import { Row, Col,Modal, InputNumber } from 'antd';
import { connect } from 'react-redux';
import { makeRandomGrid} from "../actions"
 

class App extends Component {
  constructor(props){
    console.log(props)
    super(props);
    this.state = { visible: false, height: props.height, width: props.width };
  }

  componentDidMount(){
    this.showModal();
  }
  

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.props.initGrid(this.state.height, this.state.width)
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    
    return (
      <React.Fragment>
        <Row>
          <Col style={{margin:'0 auto'}}>
            <Board />
          </Col>
        </Row>
        <Row >
          <Col style={{ margin: '0 auto' }}>
          <Control 
            showModal = {this.showModal}
          />
          </Col>
        </Row>
        <Modal
          title="New Game"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Row gutter={10}>
            <Col offset={2} span={3}>
              Height
            </Col>
            <Col offset={2} span ={10}>
            <InputNumber  min={6} max={50} value={this.state.height} onChange={(val) => this.setState({ height: val })} />
            </Col>
          </Row>
          <br />
          <Row gutter={10}>
            <Col offset={2} span={3}>
              Width
            </Col>
            <Col offset={2} span={10}>
              <InputNumber min={6} max={50} value={this.state.width} onChange={(val)=>this.setState({width:val})} />
            </Col>
          </Row>
        </Modal>
      </React.Fragment> )
  }
}

const mapStateToProps = ({board}) => {
  return {
    ...board
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initGrid: (height, width) => dispatch(makeRandomGrid(height, width)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)