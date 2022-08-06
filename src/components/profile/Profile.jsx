import styles from "./Profile.module.css";
export const Profile = ({ username, tag, location, avatar = "https://www.fillmurray.com/640/360", stats }) => {
  return (<div className={styles.profile}>
    <div className={styles.description}>
      <div className={styles.thumb}>
        <img
          src={avatar}
          alt={username}
          className={styles.avatar}
        />
      </div>
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.statsList}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.statsList}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li className={styles.statsList}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>)
};