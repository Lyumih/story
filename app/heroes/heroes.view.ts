namespace $.$$ {
	export class $story_app_heroes extends $.$story_app_heroes {


		@$mol_mem
		heroes() {
			return this.$.$story_fetch.json( '/hero' ) as {
				name: string, '@rid': string, level: number, skills: {
					level: number,
					in: string,
					skill: {
						name: string,
						description: string,
					}
				}[],
				weapons: {
					level: number,
					in: string,
					weapon: {
						name: string,
						description: string,
						params: string,
					}
				}[]
			}[]
		}

		get_hero( id: string ) {
			return this.heroes().find( hero => hero[ '@rid' ] === id )
		}

		heroes_list(): readonly any[] {
			return this.heroes().map( hero => this.Hero( hero[ '@rid' ] ) )
		}

		hero_name( id: any ): string {
			const hero = this.heroes().find( hero => hero[ '@rid' ] === id )
			return hero ? `# ${ hero.name } - ${ hero.level } уровень` : ''
		}

		skill_list( id: string ): readonly any[] {
			return this.get_hero( id )?.skills?.map( skill => this.Skill( id + '_' + skill.in ) ) || []
		}

		get_skill( ids: string ) {
			const [ hero_id, skill_id ] = ids.split( '_' )
			return this.get_hero( hero_id )?.skills.find( skill => skill.in === skill_id )
		}

		skill_name( id: any ): string {
			return `*${this.get_skill( id )?.skill.name}*` || 'no skill'
		}


		skill_level( id: any ): string {
			return 'Ур. '  + this.get_skill( id )?.level
		}

		skill_description( id: any ): string {
			return this.get_skill( id )?.skill.description || 'no description'
		}

		weapon_list(id: string): readonly any[] {
			return this.get_hero( id )?.weapons?.map( weapon => this.Weapon( id + '_' + weapon.in ) ) || []
		}

		get_weapon( ids: string ) {
			const [ hero_id, weapon_id ] = ids.split( '_' )
			return this.get_hero( hero_id )?.weapons.find( weapon => weapon.in === weapon_id )
		}

		weapon_name(id: string): string {
			return `*${this.get_weapon( id )?.weapon.name}*` || 'no weapon name'
		}

		weapon_params(id:string): string {
			return`${this.get_weapon( id )?.weapon.params}` || 'no params'
		}
	}
}
