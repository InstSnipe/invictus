ServerEvents.recipes(event => {
  //Removes all default recipes for extreme reactors
  event.remove({ mod: 'bigreactors' })
  
  //Adds custom recipe for verderium
	event.recipes.createMixing('bigreactors:verderium,2000', [
        '#forge:ingots/uranium',
        '#forge:ingots/uranium',
        'bigreactors:blutonium_ingot'
  ]).superheated()
  
  //Adds custom recipe for blutonium
  event.recipes.createMixing('bigreactors:butonium,', [
        'bigreactors:cyanite_ingot',
        'bigreactors:cyanite_ingot',
        Fluid.of('minecraft:water', 1000)
  ]).heated()
  
  //Adds custom recipe for reactor controller
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

  //Adds recipe for reactor casing
  event.shaped('bigreactors:reinforced_reactorcontroller', [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: '#forge:concrete',
    B: '#forge:ingots/steel'
  })
})