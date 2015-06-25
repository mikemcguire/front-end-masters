import Router from "ampersand-router"
import React from "react"
import PublicPage from "./pages/public.js"
import RepoPage from "./pages/repos.js"

export default Router.extend({
	routes: {
		"" 			: "public",
		"repos" 	: "repos",
		"login"		: "login"
	},
	public () {
		React.render(<PublicPage/>, document.body)
	},


	repos () {
		React.render(<RepoPage/>, document.body)
	}
})

