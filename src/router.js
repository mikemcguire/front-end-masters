
import Router from 'ampersand-router'
import React from 'react'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'


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

  public () {
    React.render(<PublicPage/>, document.body)
  },

  repos () {
    React.render(<ReposPage/>, document.body)
  }

})

