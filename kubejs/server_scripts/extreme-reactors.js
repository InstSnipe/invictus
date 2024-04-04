onEvent('recipes', event => {
  // Namespace variable
  let minecraft = 'minecraft:'
  let kubejs = 'kubejs:'
  let createdd = 'create_dd:'
  let mekanism = 'mekanism:'
  let bigreactors = 'bigreactors:'
  let bigreactorsReactor = 'bigreactors:reinforced_reactor'

  // Namespace tag variable
  let fabricTag = '#forge:'

  // Helper function
  function encasedTopBottom(output, topInput, SideInput, middleInput, BottomInput) {
    event.shaped(output, [
      'ABA',
      'CDC',
      'AEA'
    ], {
      A: bigreactorsReactor + 'casing',
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
      A: bigreactorsReactor + 'casing',
      B: topInput,
      C: sideBottomInput,
      D: middleInput
    })
  }
  

  //Removes all default recipes for extreme reactors
  event.remove({ mod: bigreactors })
  
    //Add mixing recipe for verderium
  event.recipes.createMixing(bigreactors + 'verderium', 2000 [
        fabricTag + 'ingots/uranium',
        fabricTag + 'ingots/uranium',
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
    Item.of(bigreactorsReactor + 'controller', 1),
    createdd + 'calculation_mechanism',
    createdd + 'infernal_mechanism',
    kubejs + 'screen',
    minecraft + 'redstone'
  )

  //Add shapeless recipe for reactor casing
  event.shapeless(
  Item.of(bigreactorsReactor + 'casing', 6), [
    '8x ' fabricTag + 'concrete',
    fabricTag + 'ingots/steel'
  ])
  
  //Add shaped recipe for fuel rod
  event.shaped(
    Item.of(bigreactorsReactor + 'fuelrod', 4), [
    ' A ',
    'A A',
    ' A '
  ], {
    A: bigreactorsReactor + 'casing'
  })

  //Adds recipe for control rod
  encasedTopBottom(
    Item.of(bigreactorsReactor + 'controlrod', 1),
    minecraft + 'piston',
    kubejs + 'control_rod',
    createdd + 'inductive_mechanism',
    minecraft + 'redstone'
  )

  //Recipes that need/can be added

  //Add shaped recipe for solid access port
  encasedTop(
    Item.of(bigreactorsReactor + 'solidaccessport', 1),
    createdd + 'inductive_mechanism',
    minecraft + 'redstone',
    create + 'fluid_pipe'
  )

  //Add shaped recipe for fuel injection port
  encasedTopBottom(
    Item.of(bigreactorsReactor + 'fluidaccessport', 1),
    createdd + 'inductive_mechanism',
    minecraft + 'redstone',
    create + 'fluid_pipe',
    create + 'fluid_tank'
  )

  //Adds recipe for redstone port


  //Adds recipe for computer port


  //Add shaped recipe for active fluid port
  encasedTopBottom(
    Item.of(bigreactorsReactor + 'fluidport_forge_active', 1),
    createdd + 'inductive_mechanism',
    minecraft + 'redstone',
    create + 'mechanical_pump',
    create + 'fluid_tank'
  )

  //Adds recipe for passive fluid port
  encasedTopBottom(
    Item.of(bigreactorsReactor + 'fluidport_forge_passive', 1),
    createdd + 'inductive_mechanism',
    minecraft + 'redstone',
    create + create + 'fluid_pipe',
    create + 'fluid_tank'
  )
})