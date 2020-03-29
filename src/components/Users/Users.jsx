import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios' ;

// [
//     { id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR57Pz7X7j2pagy_Q9IlQOiYJN37F_lUHOsVMHPRBtfAtRHkgWr', followed: true, fullName: 'Dmitry', status: 'I\'m a BOSS!', location: { city: 'Minsk', country: 'Belarus' } },
//     { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWEj-oaqCMXbKzIDXKFY9d1AdIxI2zzP9tI5ys7gjX3WNhnX2w', followed: false, fullName: 'Victor', status: 'My palm turned into a fist.', location: { city: 'Saint Petersburg', country: 'Russia' } },
//     { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-XAEAl5EN3m-j7QPn20vLv4JVDVhkooHDOjTR32sQ35BycF9S', followed: true, fullName: 'Petr', status: 'Целая жизнь дана, чтобы душу изменить.', location: { city: 'Moscow', country: 'Russia' } },
//     { id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkAKDPsgwoERNNyUZNWhNfKyHdC-nYG9wUi47CfUe5Y4bzWYQW', followed: false, fullName: 'Sasha', status: 'Не лгите родителям и врачам.', location: { city: 'Kiev', country: 'Ukraine' } }
// ]

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            props.setUsers(response.data.items);
        });
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>follow</button>
                            : <button onClick={() => { props.follow(u.id) }}>unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div> 

}

export default Users;

