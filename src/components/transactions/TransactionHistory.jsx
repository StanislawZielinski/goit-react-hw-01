import styles from "./Transactions.module.css";
export const TransactionHistory = ({ transactions }) => {
    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.head}>
                <th className={styles.headTitle}>Type</th>
                <th className={styles.headTitle}>Amount</th>
                <th className={styles.headTitle}>Currency</th>
            </thead>
            <tbody>
                {transactions.map(transaction =>
                    <tr className={styles.transaction} key={transaction.id}>
                        <td className={styles.type}>{transaction.type}</td>
                        <td className={styles.amount}>{transaction.amount}</td>
                        <td className={styles.currency}>{transaction.currency}</td>
                    </tr>)
                    }
            </tbody>    
        </table>)
};