# Ant Design Pro

Ant Design Pro 是一个企业级中后台前端/设计解决方案。





## 01 知识点

- ES6
- TypeScript
- React
- Ant Design
- umi
- dva
- less





## 02 准备工作

- 运行环境：node 8.10+、umi

- 编辑器：建议vs code、webstorm





## 03 安装

- 安装node

- 安装umi

  ```bash
  npm i -g umi
  ```
  
  or
  
  ```bash
  yarn global add umi
  ```
  
  





## 04 创建项目

#### 使用命令行创建

```bash
mkdir myApp && cd myApp

npm create umi 或 yarn create umi
```



#### 使用可视化界面创建

```bash
umi ui
```





## 05 介绍

#### 05-01 目录

- config： *配置*
- mock： *本地mock数据*
- node_modules： *依赖包*
- public： *公共文件*
- src： *代码资源*
- tests： *测试脚本*



#### 05-02 文件

- 点文件：.editorconfig、.eslintignore ...
- 配置文件：jest.config.js、package.json ...





## 06 代码

#### 06-01 配置相关

##### logo：
> src/layouts/BasicLayout.tsx

##### 标题:
> config/defaultSettings.js

##### 国际化：

> **config/config.ts**
>
> *locale: {*
>
> ​	default: 'zh-CN', // 默认为中文
>
> ​	antd: true, // 如果不需要国际化就设为false，控制导航上的语言选择模块显示
>
> ​	baseNavigator: true, // 默认根据浏览器的语言来显示语言版本，一般是根据系统来的，不需要就设为false
>
> *}*
>
> **src/locales**
>
> 对应的文件中进行设置
>
> **去除国际化**
>
> 如果你想删除 pro 自带的全球化，可以通过 `npm run i18n-remove`,`i18n-remove`还比较基础只是测试了 pro 自带的代码，如果你使用了高级的特性，你可能需要自己人工去进行修改。例如 `formatMessage({id:somevar})` 这种动态的代码我们可能无法帮您分析并删除。

##### 导航菜单：

> config/routes.ts

##### 底部版权：

> src/layouts/BasicLayout.jsx
>
> *<DefaultFooter />*

##### 水印去除：

> src/layouts/BasicLayout.tsx
>
> *waterMarkProps*



#### 06-02 新增页面

##### 新增一个demo页面
- 在src/pages/新建一个Demo.jsx文件
- 修改config/config.js中的路由配置
###### src/pages/Demo.tsx
```jsx
import React from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Table } from 'antd';

const Demo = props => {
  const { columns, data } = props;

  return (
    <PageHeaderWrapper>
      <Card title="demo标题">
        <Table dataSource={data} columns={columns} rowKey='id' />
      </Card>
    </PageHeaderWrapper>
  )
}

Demo.defaultProps = {
  columns: [
    {
      key: 'id',
      title: 'id',
      dataIndex: 'id'
    },
    {
      key: 'avatar',
      title: 'avatar',
      dataIndex: 'avatar'
    },
    {
      key: 'title',
      title: 'title',
      dataIndex: 'title'
    },
    {
      key: 'datetime',
      title: 'datetime',
      dataIndex: 'datetime'
    }
  ],
  data: [
    {
      id: '000000001',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '你收到了 14 份新周报',
      datetime: '2017-08-09',
      type: 'notification',
    }
  ]
}

export default Demo

```



###### config/routes.ts

```javascript
{
  name: 'demo',
  icon: 'star',
  path: '/demo',
  component: './Demo',
},
```



##### 模拟请求服务器数据

- mock/demo.js
- src/pages/Demo.jsx
- src/models/demo.js
- src/services/demo.js

###### mock/demo.js
```javascript
const getDemoList = (req, res) => {
  res.json([
    {
      id: '000000001',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '你收到了 14 份新周报',
      datetime: '2017-08-09',
      type: 'notification',
    },
    {
      id: '000000002',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      datetime: '2017-08-08',
      type: 'notification',
    },
    {
      id: '000000003',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
      title: '这种模板可以区分多种通知类型',
      datetime: '2017-08-07',
      read: true,
      type: 'notification',
    },
    {
      id: '000000004',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
      title: '左侧图标用于区分不同的类型',
      datetime: '2017-08-07',
      type: 'notification',
    },
    {
      id: '000000005',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '内容不要超过两行字，超出时自动截断',
      datetime: '2017-08-07',
      type: 'notification',
    },
    {
      id: '000000006',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: '曲丽丽 评论了你',
      description: '描述信息描述信息描述信息',
      datetime: '2017-08-07',
      type: 'message',
      clickClose: true,
    },
    {
      id: '000000007',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: '朱偏右 回复了你',
      description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
      datetime: '2017-08-07',
      type: 'message',
      clickClose: true,
    },
    {
      id: '000000008',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: '标题',
      description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
      datetime: '2017-08-07',
      type: 'message',
      clickClose: true,
    },
    {
      id: '000000009',
      title: '任务名称',
      description: '任务需要在 2017-01-12 20:00 前启动',
      extra: '未开始',
      status: 'todo',
      type: 'event',
    },
    {
      id: '000000010',
      title: '第三方紧急代码变更',
      description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
      extra: '马上到期',
      status: 'urgent',
      type: 'event',
    },
    {
      id: '000000011',
      title: '信息安全考试',
      description: '指派竹尔于 2017-01-09 前完成更新并发布',
      extra: '已耗时 8 天',
      status: 'doing',
      type: 'event',
    },
    {
      id: '000000012',
      title: 'ABCD 版本发布',
      description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
      extra: '进行中',
      status: 'processing',
      type: 'event',
    },
  ]);
};

export default {
  'GET /api/getDemoList': getDemoList,
};
```

###### src/pages/Demo.jsx
```jsx
import React, { useEffect } from 'react'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Table } from 'antd';
import { connect } from 'dva';

const Demo = props => {
  const { list, dispatch, columns, data } = props;

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'demo/fetch'
      })
    }
  }, [])

  return (
    <PageHeaderWrapper>
      <Card title="demo标题">
        <Table dataSource={list} columns={columns} rowKey='id' />
      </Card>
    </PageHeaderWrapper>
  )
}

Demo.defaultProps = {
  columns: [
    {
      key: 'id',
      title: 'id',
      dataIndex: 'id'
    },
    {
      key: 'avatar',
      title: 'avatar',
      dataIndex: 'avatar'
    },
    {
      key: 'title',
      title: 'title',
      dataIndex: 'title'
    },
    {
      key: 'datetime',
      title: 'datetime',
      dataIndex: 'datetime'
    }
  ],
  data: [
    {
      id: '000000001',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '你收到了 14 份新周报',
      datetime: '2017-08-09',
      type: 'notification',
    }
  ]
}

export default connect(({demo}) => ({
  list: demo.list
}))(Demo)

```


###### src/models/demo.js
```javascript
import { getDemoList } from '@/services/demo';

const UserModel = {
  namespace: 'demo',
  state: {
    list: [],
  },
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(getDemoList);
      yield put({
        type: 'save',
        payload: response,
      });
    }
  },
  reducers: {
    save(state, action) {
      return { ...state, list: action.payload || [] };
    }
  }
};
export default UserModel;

```

###### src/services/demo.js
```javascript
import request from '@/utils/request';

export async function getDemoList() {
  return request('/api/getDemoList');
}
```



##### 06-03 打包

```bash
yarn build
```



## 07 相关资料

- [ES6](http://es6.ruanyifeng.com/)
- [React官网](https://reactjs.org/)
- [Ant Design Pro官网](https://pro.ant.design/)
- [Ant Design Pro官网镜像](https://ant-design-pro.gitee.io/)
- [Ant Design官网](https://ant-design.gitee.io/)
- [umi官网](https://umijs.org/zh/)
- [dva官网](https://dvajs.com/)
- [less官网](http://lesscss.org/)

