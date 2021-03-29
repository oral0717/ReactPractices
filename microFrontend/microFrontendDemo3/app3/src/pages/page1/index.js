import { useModel } from 'umi';

function MyPage() {
  const mainAppProps = useModel('@@qiankunStateFromMaster');
  console.log('mainAppProps', mainAppProps)
  return <div>app3中page1{JSON.stringify(mainAppProps)}</div>;
}

export default MyPage