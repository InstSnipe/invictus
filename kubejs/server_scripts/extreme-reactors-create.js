ServerEvents.recipes(event => {
  event.remove({ mod: 'bigreactors' })
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

      event.shaped('bigreactors:reinforced_reactorcontroller', [
        'ABA',
        'CDC',
        'AEA'
      ], {
        A: 'bigreactors:reinforced_reactorcasing',
        B: 'create_dd:calculation_mechanism',
        C: 'create_dd:infernal_mechanism',
        D: 'minecraft:diamond_block',
        E: 'minecraft:redstone'
      })
})