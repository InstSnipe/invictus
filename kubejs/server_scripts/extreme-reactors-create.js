ServerEvents.recipes(event => {
	event.recipes.createMixing('bigreactors:verderium,2000', [
        '#forge:ingots/uranium',
        '#forge:ingots/uranium',
        'bigreactors:blutonium_ingot'
      ]).superheated()

      event.recipes.createMixing('bigreactors:butonium,', [
        'bigreactors:cyanite_ingot',
        'bigreactors:cyanite_ingot',
        Fluid.of('minecraft:water', 1000)
      ]).heated()
})