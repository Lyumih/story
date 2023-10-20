namespace $.$$ {
	export class $story_app_auth extends $.$story_app_auth {
		
		login(next?: any) {
			console.log( 'login' )
			const result = this.$.$story_fetch.json( `/auth/login?name=${this.name()}`)
		}

		registration( next?: any ) {
			console.log('registration')
		}
		
	}
}
