import Collection from "ampersand-rest-collection"
import Repo from "./repo"
import githubMixin from "../mixins/github-mixin"

export default Collection.extend( githubMixin, {
	url: "https://api.github.com/user/repos",
	model : Repo,
	initialize (){

	},
	getByFullName(fullName){
		let model = this.findWhere({full_name: fullName})
		if(!model){
			model = new Repo ({full_name: fullName})
		}
		model.fetch()
		return model
	}

}) 