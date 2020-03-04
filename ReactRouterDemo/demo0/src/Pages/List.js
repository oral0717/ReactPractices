import React,{Component,Fragment} from 'react';
import { Link } from 'react-router-dom'

class List extends Component {
  constructor(){
    super()
    this.state={
      list: [
        {cid: 123, title: '第1个'},
        {cid: 456, title: '第2个'},
        {cid: 789, title: '第3个'}
      ]
    }
  }
  render() {
    return (
      <Fragment>
        <h2>这里是列表页</h2>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return <li key={item.cid}><Link to={`/list/${item.cid}`}>{item.title}</Link></li>
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default List;