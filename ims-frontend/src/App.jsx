import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from './store/slices/authSlice';

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector(s => s.auth.user);

  return (
    <div style={{ padding: 24 }}>
      <h1>IMS Frontend</h1>
      <p>User: {user?.name ?? 'None'}</p>
      <button onClick={() => dispatch(loginSuccess({
        user: { id: 1, name: 'Demo User' }, token: 'dev-token', role: 'ADMIN'
      }))}>Fake Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
