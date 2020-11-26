import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkUserIsAdmin } from './../../Utils/Utils';
import './AdminToolbar.scss';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const AdminToolbar = props => {

    const { currentUser } = useSelector(mapState);

    const isAdmin = checkUserIsAdmin(currentUser);
    if (!isAdmin) return null;

    return (
        <div className='admintoolbar'>
            <ul>
                <li>
                    <Link to='/admin'>
                        My Admin
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default AdminToolbar;
