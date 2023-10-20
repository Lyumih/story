namespace $.$$ {
	export class $story_app extends $.$story_app {
		
		logout( next?: any ) {
			console.log('logout')
			this.$.$story_app_auth.logout()
		}

		menu_body(): readonly any[] {
			const auth = this.$.$story_app_auth.player()
			return auth ? [this.Stats(), this.Menu_links()] : [this.Auth()]
		}
		
	}
}
