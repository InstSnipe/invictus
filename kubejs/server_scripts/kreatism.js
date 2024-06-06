onEvent('recipes', event => {
	let thrusterCasing = kontraption + 'liquid_fuel_thruster_casing'
	let thrusterValve = kontraption + 'liquid_fuel_thruster_valve'
	let thrusterExhaust = kontraption + 'liquid_fuel_thruster_exhaust'
	
	event.remove({ mod: 'kontraption' })
	
	event.shaped(
		Item.of(kontraption + 'ion_thruster', 1),
		[
			'aba',
			'cdc',
			'aea'
		],
		{
			a: redstone,
			b: infernalMechanism,
			c: mekanism + 'ingot_osmium',
			d: steelBlock,
			e: clockwork + 'wanderlite_matrix'
		}
	)
	
	event.shaped(
		Item.of(kontraption + 'ship_control_interface', 1),
		[
			'aba',
			'cdc',
			' e '
		],
		{
			a: fabrictag + 'glass',
			b: minecraft + 'glowstone',
			c: floatProcessingMechanism,
			d: fabrictag + 'storage_blocks/steel',
			e: integratedCadereMechanism
		}
	)
	
	event.shaped(
		Item.of(kontraption + 'gyro', 1),
		[
			'bcb',
			'ade'
		],
		{
			a: computationMechanism,
			c: create + 'flywheel',
			b: minecraft + 'gold_block',
			d: steelBlock,
			e: integratedCadereMechanism
		}
	)
	
	event.shapeless(
		Item.of(thrusterCasing, 4),
		[
			fabrictag + 'ingots/tin',
			'3x #' + steel,
		]
	)
	event.shapeless(
		Item.of(thrusterCasing, 1),
		[
			thrusterExhaust,
		]
	)
	
	event.shapeless(
		Item.of(thrusterValve, 1),
		[
			thrusterCasing,
			infernalMechanism,
		]
	)
	
	event.shapeless(
		Item.of(thrusterExhaust, 1),
		[
			thrusterCasing
		]
	)
})

onEvent('vs.info.init', event => {
	//event.provider.addPredicateAbdValues(state =)
})