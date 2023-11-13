import Image from 'next/image'
import styles from './transaction.module.css'

const Transaction = () => {
    const tableHeadr = ['Name', 'Status', 'Date', 'Amount']
    const tableData = [{
        img: '/noavatar.png',
        name: 'Mohamed Nazeem',
        status: 'pending',
        date: '14.02.2023',
        amount: 12

    },
    {
        img: '/noavatar.png',
        name: 'Joe Riffle',
        status: 'done',
        date: '1.04.2023',
        amount: 10

    },
    {
        img: '/noavatar.png',
        name: 'Ahmed Nawar',
        status: 'pending',
        date: '1.02.2023',
        amount: 19

    },
    {
        img: '/noavatar.png',
        name: 'Mohamed Mosaad',
        status: 'cancelled',
        date: '14.11.2023',
        amount: 121

    }

]
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Latest Transactions</h2>
        <table className={styles.table}>
            <thead>
                <tr>
                    {tableHeadr.map((td, i) => <td key={i}>{td}</td>)}
                </tr>
            </thead>
            <tbody>
                
                    {tableData.map((row,i) => {
                        return(
                            <tr key={i}>
                         <td>
                            <div className={styles.user}>
                            <Image src={row.img} width={40} height={40} className={styles.image} />
                            <span>{row.name}</span>
                            </div>
                        </td>
                        <td><span className={`${styles.status} ${row.status === 'pending' ? styles.pending : row.status === 'cancelled' ? styles.cancelled : row.status === 'done' ? styles.done : ''}`}>{row.status}</span></td>
                        <td>{row.date}</td>
                        <td>{row.amount}</td>
                        </tr>
                        )
                    }
                       
                    )}
            </tbody>
        </table>
    </div>
  )
}

export default Transaction