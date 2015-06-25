
import Router from 'ampersand-router'
import React from 'react'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import Layout from "./layout"

export default Router.extend({
	routes: {
		"" 			: "public",
		"repos" 	: "repos",
	},
	renderPage (page, opts = {layout:true}){
		if(opts.layout){
			page = ( <Layout>
					{page}
				</Layout>
			)
		}
		React.render(page, document.body)
	},
	public () {
		this.renderPage(<PublicPage/>, {layout:false})
	},
	repos () {
		this.renderPage(<ReposPage/>)
	}
})

