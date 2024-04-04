onEvent('recipes', event => {
  let minecraft = 'minecraft:'
  let kubejs = 'kubejs:'
  let createdd = 'create_dd:'
  let mekanism = 'mekanism:'
  let bigreactors = 'bigreactors:'
  let bigreactorsreinforced = 'bigreactors:reinforced_'

  let fabrictag = '#forge:'

  //Removes all default recipes for extreme reactors
  event.remove({ mod: bigreactors })
  
    //Add mixing recipe for verderium
  event.recipes.createMixing(bigreactors + 'verderium', 2000 [
        fabrictag + 'ingots/uranium',
        fabrictag + 'ingots/uranium',
        bigreactors + 'blutonium_ingot'
  ]).superheated()
  
  //Add mixing recipe for blutonium
  event.recipes.createMixing(bigreactors + 'butonium', [
        bigreactors + 'cyanite_ingot',
        bigreactors + 'cyanite_ingot',
        Fluid.of(minecraft + 'water', 1000)
  ]).heated()
  
  //Add shaped recipe for reactor controller
  event.shaped(
    Item.of(kontraption + 'ion_thruster', 1)
    bigreactorsreinforced + 'reactorcontroller', [
        'ABA',
        'CDC',
        'AEA'
      ], {
        A: bigreactorsreinforced + 'reactorcasing',
        B: createdd + 'calculation_mechanism',
        C: createdd + 'infernal_mechanism',
        D: kubejs + 'screen',
        E: minecraft + 'redstone'
  })

  //Add shapeless recipe for reactor casing
  event.shapeless(
  Item.of(bigreactorsreinforced + 'reactorcasing', 6), [
    '8x ' fabrictag + 'concrete',
    fabrictag + 'ingots/steel'
  ])
  
  //Add shaped recipe for fuel rod
  event.shaped(
    Item.of(bigreactorsreinforced + 'reactorfuelrod', 4), [
    ' A ',
    'A A',
    ' A '
  ], {
    A: bigreactorsreinforced + 'reactorcasing'
  })

  //Adds recipe for control rod
  event.shaped(
    Item.of(bigreactorsreinforced + 'reactorcontrolrod', 1), [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: bigreactorsreinforced + 'reactorcasing',
    B: minecraft + 'piston',
    C: kubejs + 'control_rod',
    D: createdd + 'inductive_mechanism',
    E: minecraft + 'redstone'
  })

  //Recipes that need/can be added

  //Add shaped recipe for solid access port
  event.shaped(
    Item.of(bigreactorsreinforced + 'reactorsolidaccessport', 1), [
    'ABA',
    'CDC',
    'ACA'
  ], {
    A: bigreactorsreinforced + 'reactorcasing',
    B: createdd + 'inductive_mechanism',
    C: minecraft + 'redstone',
    D: create + 'fluid_pipe'
  })

  //Add shaped recipe for fuel injection port
  event.shaped(
    Item.of(bigreactorsreinforced + 'reactorfluidaccessport', 1), [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: bigreactorsreinforced + 'reactorcasing',
    B: createdd + 'inductive_mechanism',
    C: minecraft + 'redstone',
    D: create + 'fluid_pipe',
    E: create + 'fluid_tank'
  })

  //Adds recipe for redstone port


  //Adds recipe for computer port


  //Add shaped recipe for active fluid port
  event.shaped(
    Item.of(bigreactorsreinforced + 'reactorfluidport_forge_active', 1), [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: bigreactorsreinforced + 'reactorcasing',
    B: createdd + 'inductive_mechanism',
    C: minecraft + 'redstone',
    D: create + 'mechanical_pump',
    E: create + 'fluid_tank'
  })

  //Adds recipe for passive fluid port
  event.shaped(
    Item.of(bigreactorsreinforced + 'reactorfluidport_forge_passive', 1), [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: bigreactorsreinforced + 'reactorcasing',
    B: createdd + 'inductive_mechanism',
    C: minecraft + 'redstone',
    D: create + 'fluid_pipe',
    E: create + 'fluid_tank'
  })

})