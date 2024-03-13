import {
    Outlet,
} from 'react-router-dom';

export default function Root() {
    return (
        <div>
            Hi from toot
            <Outlet />
        </div>
    );
}
