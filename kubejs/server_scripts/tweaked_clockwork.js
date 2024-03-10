onEvent('recipes', event => {
    let minecraft = 'minecraft:'
	let fabric = '#forge:'
	let create = 'create:'
	let createdd = 'create_dd:'
	let clockwork = 'vs_clockwork:'
	let mekanism = 'mekanism:'
	let kontraption = 'kontraption:';
	
	
    event.remove({ output: clockwork + 'gyro'})
    event.shaped(
		Item.of(clockwork + 'gyro', 1),
		[
		    ' b ',
			' c ',
			'ade'
		],
		{
			a: createdd + 'calculation_mechanism',
			b: clockwork + 'wanderlite_matrix',
			c: create + 'flywheel',
			d: create + 'turntable',
			e: createdd + 'integrated_mechanism'
		}
	)
})