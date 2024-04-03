onEvent('recipes', event => {
  //Removes all default recipes for extreme reactors
  event.remove({ mod: 'bigreactors' })
  
  //Adds custom recipe for verderium
	event.recipes.createMixing('bigreactors:verderium', 2000 [
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
        D: 'kubejs:screen',
        E: 'minecraft:redstone'
  })

  //Adds recipe for reactor casing
  event.shaped('bigreactors:reinforced_reactorcasing', 4 [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: '#forge:concrete',
    B: '#forge:ingots/steel'
  })
  
  //Adds recipe for fuel rod
  event.shaped('bigreactors:reinforced_reactorfuelrod, ', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'bigreactors:reinforced_reactorcasing',
    B: '#forge:ingots/uranium'
  })

  //Adds recipe for control rod
  event.shaped('bigreactors:reinforced_reactorcontrolrod', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'bigreactors:reinforced_reactorcasing',
    B: 'create:mechanical_piston',
    C: '#forge:ingots/steel',
    D: 'create_dd:inductive_mechanism',
    E: 'minecraft:redstone'
  })

  //Recipes that need/can be added

  //Adds recipe for solid access port
  event.shaped('bigreactors:reinforced_reactorsolidaccessport', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'bigreactors:reinforced_reactorcasing',
    B: 'create_dd:inductive_mechanism',
    C: '#forge:ingots/steel',
    D: 'create:fluid_pipe',
    E: 'minecraft:redstone'
  })

  //Adds recipe for fuel injection port
  event.shaped('bigreactors:reinforced_reactorfluidaccessport', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'bigreactors:reinforced_reactorcasing',
    B: 'create_dd:inductive_mechanism',
    C: '#forge:ingots/steel',
    D: 'create:mechanical_pump',
    E: 'minecraft:redstone'
  })

  //Adds recipe for redstone port


  //Adds recipe for computer port


  //Adds recipe for active fluid port
  event.shaped('bigreactors:reinforced_reactorfluidport_forge_active', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'bigreactors:reinforced_reactorcasing',
    B: 'create_dd:inductive_mechanism',
    C: '#forge:ingots/steel',
    D: 'create:mechanical_pump',
    E: 'create:fluid_tank'
  })

  //Adds recipe for passive fluid port
  event.shaped('bigreactors:reinforced_reactorfluidport_forge_passive', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'bigreactors:reinforced_reactorcasing',
    B: 'create_dd:inductive_mechanism',
    C: '#forge:ingots/steel',
    D: 'create:fluid_pipe',
    E: 'create:fluid_tank'
  })

})