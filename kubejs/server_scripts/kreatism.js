

onEvent('recipes', event => {
	let minecraft = 'minecraft:'
	let fabrictag = '#forge:'
	let create = 'create:'
	let createdd = 'create_dd:'
	let createbc = 'createbigcannons:'
	let clockwork = 'vs_clockwork:'
	let mekanism = 'mekanism:'
	let kontraption = 'kontraption:'
	event.remove({ mod: 'kontraption' })
	
	event.shaped(
		Item.of(kontraption + 'ion_thruster', 1),
		[
			'aba',
			'cdc',
			'aea'
		],
		{
			a: minecraft + 'redstone',
			b: create + 'precision_mechanism',
			c: mekanism + 'ingot_osmium',
			d: fabrictag + 'storage_blocks/steel',
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
			c: createdd + 'calculation_mechanism',
			d: fabrictag + 'storage_blocks/steel',
			e: createdd + 'integrated_mechanism'
		}
	)
	
	event.shaped(
		Item.of(kontraption + 'gyro', 1),
		[
			'bcb',
			'ade'
		],
		{
			a: createdd + 'calculation_mechanism',
			c: create + 'flywheel',
			b: minecraft + 'gold_block',
			d: fabrictag + 'storage_blocks/steel',
			e: createdd + 'integrated_mechanism'
		}
	)
	
	event.shapeless(
		Item.of(kontraption + 'liquid_fuel_thruster_casing', 4),
		[
			fabrictag + 'ingots/tin',
			'3x #' + createbc + 'ingot_steel',
		]
	)
	event.shapeless(
		Item.of(kontraption + 'liquid_fuel_thruster_casing', 1),
		[
			kontraption + 'liquid_fuel_thruster_exhaust',
		]
	)
	
	event.shapeless(
		Item.of(kontraption + 'liquid_fuel_thruster_valve', 1),
		[
			kontraption + 'liquid_fuel_thruster_casing',
			createdd + 'infernal_mechanism',
		]
	)
	
	event.shapeless(
		Item.of(kontraption + 'liquid_fuel_thruster_exhaust', 1),
		[
			kontraption + 'liquid_fuel_thruster_casing',
		]
	)
	
	event.shapeless(
		Item.of(kontraption + 'rubber_block', 1),
		[
			'9x ' + createdd + 'rubber',
		]
	)
})

onEvent('vs.info.init', event => {
	//event.provider.addPredicateAbdValues(state =)
})