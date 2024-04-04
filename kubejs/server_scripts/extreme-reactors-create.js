onEvent('recipes', event => {
  let minecraft = 'minecraft:'
  let kubejs = 'kubejs:'
  let createdd = 'create_dd:'
  let mekanism = 'mekanism:'
  let bigreactors = 'bigreactors:'
  let bigreactorsreinforced = 'bigreactors:reinforced_'

  let fabrictag = '#forge:'

  function encasedTopBottom(output, topInput, SideInput, middleInput, BottomInput) {
    event.shaped(output, [
      'ABA',
      'CDC',
      'AEA'
    ], {
      A: bigreactorsreinforced + 'reactorcasing',
      B: topInput,
      C: sideInput,
      D: middleInput,
      E: bottomInput
    })
  }

  function encasedTop(output, topInput, SideBottomInput, middleInput) {
    event.shaped(output, [
      'ABA',
      'CDC',
      'ACA'
    ], {
      A: bigreactorsreinforced + 'reactorcasing',
      B: topInput,
      C: sideBottomInput,
      D: middleInput
    })
  }

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
   encasedTopBottom(
    Item.of(bigreactorsreinforced + 'reactorcontroller', 1),
    createdd + 'calculation_mechanism',
    createdd + 'infernal_mechanism',
    kubejs + 'screen',
    minecraft + 'redstone'
  )

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
  encasedTopBottom(
    Item.of(bigreactorsreinforced + 'reactorcontrolrod', 1),
    minecraft + 'piston',
    kubejs + 'control_rod',
    createdd + 'inductive_mechanism',
    minecraft + 'redstone'
  )

  //Recipes that need/can be added

  //Add shaped recipe for solid access port
  encasedTop(
    Item.of(bigreactorsreinforced + 'reactorsolidaccessport', 1),
    createdd + 'inductive_mechanism',
    minecraft + 'redstone',
    create + 'fluid_pipe'
  )

  //Add shaped recipe for fuel injection port
  encasedTopBottom(
    Item.of(bigreactorsreinforced + 'reactorfluidaccessport', 1),
    createdd + 'inductive_mechanism',
    minecraft + 'redstone',
    create + 'fluid_pipe',
    create + 'fluid_tank'
  )

  //Adds recipe for redstone port


  //Adds recipe for computer port


  //Add shaped recipe for active fluid port
  encasedTopBottom(
    Item.of(bigreactorsreinforced + 'reactorfluidport_forge_active', 1),
    createdd + 'inductive_mechanism',
    minecraft + 'redstone',
    create + 'mechanical_pump',
    create + 'fluid_tank'
  )

  //Adds recipe for passive fluid port
  encasedTopBottom(
    Item.of(bigreactorsreinforced + 'reactorfluidport_forge_passive', 1),
    createdd + 'inductive_mechanism',
    minecraft + 'redstone',
    create + create + 'fluid_pipe',
    create + 'fluid_tank'
  )
})