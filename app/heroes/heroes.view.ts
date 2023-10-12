namespace $.$$ {
	export class $story_app_heroes extends $.$story_app_heroes {


		@$mol_mem
		heroes() {
			console.log( 'heroes' )
			return this.$.$story_fetch.json( '/hero' ) as { name: string, '@rid': string, level: number }[]
		}

		heroes_list(): readonly any[] {
			return this.heroes().map( hero => this.Hero( hero[ '@rid' ] ) )
		}

		hero_name( id: any ): string {
			const hero = this.heroes().find( hero => hero[ '@rid' ] === id )
			return hero ? `${ hero.name } - ${ hero.level } уровень` : ''
		}

	}
}
