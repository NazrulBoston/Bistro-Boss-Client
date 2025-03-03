import { NavLink } from "react-router";

const Dashboard = () => {
    return (
        <div>
            <div>
                <div className="w-64 min-h-screen bg-orange-400">
                    <ul>
                        <li><NavLink to='/dashboard/cart'>My Cart</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="flex-1">
                
            </div>
        </div>
    );
};

export default Dashboard;