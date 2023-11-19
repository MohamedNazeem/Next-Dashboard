import styles from '../ui/dashboard/dashboard.module.css'
import Card from '../ui/dashboard/card/card'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transaction from '../ui/transactions/transaction'
import Chart from '../ui/dashboard/chart/chart'
const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card title='Total Users' number='10,400' percent='12' msg='More than last week' />
          <Card title='Current Users' number='2,200' percent='10' msg='More than last week' />
          <Card title='Active Users' number='780' percent='80' msg='Same as last week' />
        </div>
        <Transaction/>
        <Chart />f
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  )
}

export default Dashboard