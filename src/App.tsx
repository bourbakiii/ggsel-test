import styles from './App.module.scss'
import {Button} from "./components/Button/Button.tsx";
import {PersonAcceptIcon} from "@/components/Icons/PersonAcceptIcon/PersonAcceptIcon.tsx";
import {Card} from "@/components/Card/Card.tsx";
import classNames from "classnames";

function App() {
    return (
        <main className={styles['page']}>
            <h1 className={classNames(styles['page-title'], 'roboto-bold')}>Зарабатывайте вместе с нами</h1>
            <div className={styles['page-content']}>
                <div className={styles['page-content-inner']}>
                <Card number={1} text="Получите<br/>партнерскую ссылку" variant='blue' image='/blue-card.svg' withArrow={true}/>
                <Card number={2} text=" Расскажите<br/>iiii.COM" variant='purple' image='/purple-card.svg' withArrow={true}/>
                <Card number={3} text=" Получайте хороший процент<br/>от покупок по вашей ссылке!" variant='green'
                      image='/green-card.svg'/>
                </div>
            </div>
            <Button className={styles['page-button']}>
                <PersonAcceptIcon/>
                Стать партнером
            </Button>
        </main>
    )
}

export default App
