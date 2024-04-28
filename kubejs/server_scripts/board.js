onEvent('recipes', event => {
    // Add mixing recipe for silicon fluid
    event.recipes.create.mixing(
        { mame: kubejs + 'silicon_fluid', amount: 9000}, 
        [minecraft + 'quartz_block', minecraft + 'charcoal']
    ).heated()
    
    // Add compacting recipe for silicon ingort
    event.recipes.create.compacting(
        kubejs + 'silicon_ingot', 
        { mame: kubejs + 'silicon_fluid', amount: 1000}
    )
    
    // Add shaped recipe for silicon alloy
    event.shaped(
        Item.of(kubejs + 'silicon_alloy', 4),
        [
            'ab',
            'ba'
        ], {
            a: redstone,
            b: kubejs + 'silicon_ingot'
        }
    )
    
    
    
    // Add shaped recipe for circuit board
    event.shaped(
        Item.of(circuitBoard, 2),
        [
            'aa',
            'bc'
        ], {
            a: kubejs + 'silicon_ingot',
            b: create + 'rose_quartz_lamp',
            c: redstone
        }
    )
    
    // Add custom assembly for processing unit
    let inter = kubejs + 'incomplete_processing_unit'
    event.recipes.create.sequenced_assembly([
		Item.of(processingUnit, 4).withChance(100.0),
		Item.of(redstone).withChance(8.0),
		Item.of(quartz).withChance(8.0)
	], siliconAlloy, [
		event.recipes.createPressing(inter, inter),
		event.recipes.createDeploying(inter, [inter, redstone]),
		event.recipes.createDeploying(inter, [inter, quartz]),
		event.recipes.createDeploying(inter, [inter, create + 'copper_sheet']),
		event.recipes.createPressing(inter, inter),
		event.recipes.createDeploying(inter, [inter, redstone]),
		event.recipes.createDeploying(inter, [inter, quartz]),
		event.recipes.createDeploying(inter, [inter, minecraft + 'dried_kelp']),
		event.recipes.createPressing(inter, inter),
		event.recipes.createCutting(inter, inter)
	]).transitionalItem(inter)
	
	// Add custom assembly for graphical unit
	inter = kubejs + 'incomplete_graphical_unit'
    event.recipes.create.sequenced_assembly([
		Item.of(graphicalUnit, 4).withChance(100.0),
		Item.of(quartz).withChance(12.0),
		Item.of(redstone).withChance(4.0)
	], siliconAlloy, [
		event.recipes.createPressing(inter, inter),
		event.recipes.createDeploying(inter, [inter, quartz]),
		event.recipes.createDeploying(inter, [inter, quartz]),
		event.recipes.createDeploying(inter, [inter, minecraft + 'lapis_lazuli']),
		event.recipes.createPressing(inter, inter),
		event.recipes.createDeploying(inter, [inter, redstone]),
		event.recipes.createDeploying(inter, [inter, quartz]),
		event.recipes.createDeploying(inter, [inter, quartz]),
		event.recipes.createDeploying(inter, [inter, minecraft + 'dried_kelp']),
		event.recipes.createPressing(inter, inter),
		event.recipes.createCutting(inter, inter)
	]).transitionalItem(inter)
	
	// Add shaped recipe for screen translation layer
	event.shaped(
        Item.of(screenTranslationLayer, 6),
        [
            ' a ',
            'bcd',
            'eee'
        ], {
            a: processingUnit,
            b: minecraft + 'red_dye',
            c: minecraft + 'blue_dye',
            d: minecraft + 'lime_dye',
            e: ioPort
        }
    )
    
    // Add shaped recipe for laser pointer
    event.shaped(
        Item.of(laserPointer, 2),
        [
            'a',
            'b',
            'c'
        ], {
            a: minecraft + 'amethyst_shard',
            b: redstone,
            c: steelRod
        }
    )
})