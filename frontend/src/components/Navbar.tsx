import { Link } from "react-router-dom";

interface Notification {
  id: string;
  title: string;
  description: string;
}

interface Props {
  notifications: Notification[]
}

const Navbar = ({ notifications }: Props) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/transfer">Pay & Transfer</Link></li>
            <li><a>Log Out</a></li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">Quark Bank</Link>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            {notifications.length > 0 && <span className="badge badge-xs badge-primary indicator-item"></span>}
          </div>
        </button>
      </div>
    </div>
  )
}

export default Navbar