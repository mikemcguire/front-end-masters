import app from 'ampersand-app'
import Router from 'ampersand-router'
import React from 'react'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import Layout from "./layout"
import qs from "qs"
import xhr from "xhr"
import Events from "./helpers/events"
export default Router.extend({
	routes: {
		"" 			: "public",
		"repos" 	: "repos",
		"login"		: "login",
		"logout"	: "logout",
		"auth/callback?:query" : "authCallback"
	},
	renderPage (page, opts = {layout:true}){
		if(opts.layout){
			page = ( 
				<Events classNam="container">
					<Layout me={app.me}>
						{page}
					</Layout>
				</Events>
			)
		}
		React.render(page, document.body)
	},
	public () {
		this.renderPage(<PublicPage/>, {layout:false})
	},
	repos () {
		this.renderPage(<ReposPage repos={app.me.repos} />)
	},
	authCallback (query){
		query = qs.parse(query)
		xhr({
			url: "https://labelr-localhost.herokuapp.com/authenticate/" + query.code,
			json: true
		}, (err, req, body) => {
			app.me.token = body.token
			console.log(body)
			this.redirectTo("/repos")
		})
	},
	login (){
		window.location = "https://github.com/login/oauth/authorize?" + qs.stringify({
			scope: 'user,repo',
			redirect_uri: window.location.origin + "/auth/callback",
			client_id: 'f8dd69187841cdd22a26'
		})
	},
	logout (){
		window.localStorage.clear()
		window.location = "/"
	},
})

