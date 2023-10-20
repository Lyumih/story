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
			return [ 1, 2, 3, 4 ].map( y => this.X( y ) )
		}

		x_list( id_y: string ): readonly any[] {
			return [ 1, 2, 3 ].map( x => this.Cell( id_y + '_' + x ) )
		}

		cell_title( id: string ): string {
			return id
		}

		click_cell(id?: string) {
			console.log(this.Cell(id).attr)
			console.log('cell', id)
			this.cell_active(id, !this.cell_active(id))
		}

		// @ $mol_mem
		// cell_type( id: any, next?: any ): string {
		// 	const rand_cell = Math.random()
		// 	return rand_cell < 0.3 ? 'hero' : rand_cell < 0.7 ? 'enemy' : ''
		// }
	}
}
