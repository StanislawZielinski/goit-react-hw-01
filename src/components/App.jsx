import { Profile } from './profile/Profile.jsx';
import { Statistics } from './statistics/Statistics.jsx';
import { FriendList } from './friends/Friends.jsx';
import { TransactionHistory } from './transactions/TransactionHistory.jsx';
import user from './profile/user.json'
import data from './statistics/data.json';
import friends from './friends/friends.json';
import transactions from './transactions/transactions.json';


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile 
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats} />
            
    <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};


