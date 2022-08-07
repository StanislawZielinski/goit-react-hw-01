import PropTypes from "prop-types";
import styles from "./Friends.module.css";
export const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend=>
                <li className={styles.item} key={friend.id}>
                    <div className={styles.container}>
                        <span className={friend.isOnline ? styles.online : styles.offline}></span>
                        <div className={styles.thumb}>
                            <img
                                src={friend.avatar}
                                alt={friend.name}
                                className={styles.avatar}
                                    width="48" />
                        </div>
                        <p className={styles.name}>{friend.name}</p>
                    </div>
                </li>)
            }
    </ul>)
};
FriendList.propTypes = {
  data:PropTypes.object.isRequired,
};