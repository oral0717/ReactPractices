import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom'

class Index extends Component {
  render() {
    return (
      <Fragment>
        <div>这里是首页</div>

        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list/">列表</Link></li>
        </ul>
      </Fragment>
    );
  }
}

export default Index;