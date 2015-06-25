import Model from "ampersand-model"
import githubMixin from "../mixins/github-mixin"
import RepoCollection from "./repo-collection"

export default Model.extend(githubMixin, {
	url: "https://api.github.com/user",
	initialize () {
		this.token = window.localStorage.token
		this.on("change:token", this.onTokenChange)
	},
	
	onTokenChange (){
		window.localStorage.token = this.token
		this.fetchInitialData()
	},
	props : {
		id: "number",
		login : "string",
		avatar_url : "string"
	},
	session : {
		token: "string"
	},
	collections : {
		repos: RepoCollection
	},
	
	fetchInitialData() {
		if (this.token){
			this.fetch()
			this.repos.fetch()
		}
	}
})