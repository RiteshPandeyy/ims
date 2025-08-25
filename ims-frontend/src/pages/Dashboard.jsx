import { useSelector,useDispatch } from "react-redux";

import { logout } from "../store/slices/authSlice";

export default function Dashboard(){

    const dispatch = useDispatch();
    const user = useSelector(s=>s.auth.user);

    return(
        <div style={{padding:24}}>
            <h2>DashBoard</h2>
            <p>Welcome, {user?.name}</p>
            <button onClick={()=>dispatch(logout())}>Logout</button>
        </div>
    )
}
