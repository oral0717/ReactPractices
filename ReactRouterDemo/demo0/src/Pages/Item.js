import React, {Component,Fragment} from 'react'
// import {Redirect} from 'react-router-dom'
class Item extends Component {
  constructor(props) {
    super(props);
    this.props.history.push('/') //重定向
  }
  render() {
    console.log(this.props)
    const {id} = this.props.match.params
    return (
      <Fragment>

        {/* <Redirect to='/'/> */}
        <div>列表->{id}</div>

      </Fragment>
    );
  }
  // componentDidMount(){
  //   console.log(this.props)
  // }
}
 
export default Item;