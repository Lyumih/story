namespace $.$$ {
	export class $story_app_heroes extends $.$story_app_heroes {


		heroes() {
			console.log( 'heroes' )
			return this.$.$story_fetch.json( '/hero' ) as []
		}

		heroes_list(): readonly any[] {
			return this.heroes().map( hero => this.Hero( hero[ '@rid' ] ) )
		}

	}
}
