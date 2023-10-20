namespace $.$$ {
	export class $story_app_auth extends $.$story_app_auth {
		
		login(next?: any) {
			const result = this.$.$story_fetch.json( `/auth/login?name=${this.name()}`) as {name: string}[]

			if (result.length > 0) {
				this.$.$mol_state_local.value('player', result[0])
			}

		}

		registration( next?: any ) {
			const result = this.$.$story_fetch.json_post( `/auth/login`, {
				body: JSON.stringify({
					name: this.name()
				})
			}) as []
		}

		static player() {
			return this.$.$mol_state_local.value('player') as {name: string}
		}

		static logout() {
			this.$.$mol_state_local.value('player', null)
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
