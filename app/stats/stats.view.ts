namespace $.$$ {
	export class $story_app_stats extends $.$story_app_stats {
		
		player_name(): string {
			return this.$.$story_app_auth.player()?.name ?? ''
		}
		
	}
}
