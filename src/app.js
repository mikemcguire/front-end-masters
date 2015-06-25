import Router from "./router"
import styles from "./styles/styles.css"
window.app = {
	init() {
		this.router = new Router()
		this.router.history.start()
	}
}

window.app.init()