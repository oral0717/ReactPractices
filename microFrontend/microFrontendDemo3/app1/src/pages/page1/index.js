import { useModel } from 'umi';

function MyPage() {
  const mainAppProps = useModel('@@qiankunStateFromMaster');
  console.log('mainAppProps', mainAppProps)
  return <div>App1中page1{JSON.stringify(mainAppProps)}</div>;
}

export default MyPage