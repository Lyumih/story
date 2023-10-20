namespace $.$$ {
	export class $story_app_auth extends $.$story_app_auth {
		
		login(next?: any) {
			console.log( 'login' )
			const result = this.$.$story_fetch.json( `/auth/login?name=${this.name()}`)
		}

		registration( next?: any ) {
			console.log('registration')
			const result = this.$.$story_fetch.json_post( `/auth/login`, {
				body: JSON.stringify({
					name: this.name()
				})
			})
		}

		valid() {
			return this.name()?.length > 3
		}

		demo( next?: any ) {
			this.name('Mikhail')
			this.login()
		}
		
	}
}
