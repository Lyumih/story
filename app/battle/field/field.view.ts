namespace $ {
	export type CellType = {
		hero_id?: string,
		active?: boolean,
	}
}

namespace $.$$ {
	export class $story_app_battle_field extends $.$story_app_battle_field {

		click_skill( next?: any ) {
			console.log( 'skill', next )
		}

		y_list() {
			return [ 1, 2, 3 ].map( y => this.X( y ) )
		}

		x_list( id_y: string ): readonly any[] {
			return [ 1, 2, 3 ].map( x => this.Cell( id_y + '_' + x ) )
		}
	}
}
