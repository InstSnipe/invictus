onEvent('recipes', event => {
    // Add custom assembly for mother screen
    let inter = kubejs + 'incomplete_processing_unit'
    event.recipes.create.sequenced_assembly([
		Item.of(kubejs + 'mother_screen').withChance(100.0),
		Item.of(minecraft + 'glowstone').withChance(8.0),
		Item.of(minecraft + 'glass').withChance(8.0)
	], minecraft + 'glass', [
		event.recipes.createPressing(inter, inter),
		event.recipes.createDeploying(inter, [inter, redstone]),
		event.recipes.createPressing(inter, inter),
		event.recipes.createDeploying(inter, [inter, minecraft + 'glass']),
		event.recipes.createPressing(inter, inter)
	]).transitionalItem(inter)
	
	// Add ccreat cuttinf recipe for screen
	event.recipes.create.cutting(
        kubejs + 'mother_screen', 
        { name: kubejs + 'silicon_fluid', count: 4 }
    )
})