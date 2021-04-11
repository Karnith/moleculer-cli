"use strict";

import { Service, ServiceBroker, Context } from "moleculer";

export default class OlaService extends Service {

	public constructor(public broker: ServiceBroker) {
		super(broker);
		this.parseServiceSchema({
			name:"ola",

			/**
			 * Service settings
			 */
			settings: {},

			/**
			 * Service metadata
			 */
			metadata: {},

			/**
			 * Service dependencies
			 */
			dependencies: [],

			/**
			 * Actions
			 */

			actions:{
				/**
				 * Test action
				 */
				test: {
					async handler(ctx: Context<{name: string}>): Promise<string> {
						return this.ActionWelcome(ctx.params.name);
					}
				}
			},
		});

	}


	public ActionWelcome(name: string): string {
		return `Welcome, ${name}`;
	}

}
