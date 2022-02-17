import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2 style={{ fontStyle: 'bold' }}>Error 404</h2>
      <div>Can not find this page</div>
      <Link to="/" style={{ marginTop: '25px' }}>&gt;&gt; Вернуться на главную &lt;&lt;</Link>
    </div>
  );
}

export default NotFoundScreen;
