namespace $ {
	export class $story_fetch extends $mol_fetch {
		static json( url: string, init?: RequestInit ) {
			const back_url = 'http://localhost:3000/api/v1'
			return super.json( ( back_url + url ) )
		}

		static json_post( url: string, init?: RequestInit ) {
			return this.json( url, { method: 'POST', ...init } )
		}

		static json_put( url: string, init?: RequestInit ) {
			return this.json( url, { method: 'PUT', ...init } )
		}
	}
}
