import styles from './App.module.scss'
import {Button} from "./components/Button/Button.tsx";
import {PersonAcceptIcon} from "@/components/Icons/PersonAcceptIcon.tsx";

function App() {
    return (
        <main className={styles['page']}>
            <h1 className={styles['page-title']}>Зарабатывайте вместе с нами</h1>
            <div className="page-content">

            </div>
            <Button>
                <PersonAcceptIcon/>
                Стать партнером
            </Button>
        </main>
    )
}

export default App
