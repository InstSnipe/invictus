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

  // Common ingredient
  // Create
  let fluidPipe = create + 'fluid_pipe'
  let fluidTank = create + 'fluid_tank'
  let mechanicalPump = create + 'mechanical_pump'
  // Create dream and desire
  let calculationMechanism = createdd + 'calculation_mechanism'
  let inductiveMechanism = createdd + 'inductive_mechanism'
  let infernalMechanism = createdd + 'infernal_mechanism'
  // Fabric tag
  let concrete = fabricTag + 'concrete'
  let steel = fabricTag + 'ingots/steel'
  // Extreme Reactor
  let reactorCasing = bigreactorsReactor + 'casing'
  // Minecraft
  let redstone = minecraft + 'redstone'

  // Helper function
  function encasedTopBottom(output, topInput, SideInput, middleInput, BottomInput) {
    event.shaped(output, [
      'ABA',
      'CDC',
      'AEA'
    ], {
      A: reactorCasing,
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
      A: reactorCasing,
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
    calculationMechanism,
    infernalMechanism,
    kubejs + 'screen',
    redstone
  )

  //Add shapeless recipe for reactor casing
  event.shapeless(
  Item.of(bigreactorsReactor + 'casing', 6), [
    '8x ' + concrete,
    steel
  ])
  
  //Add shaped recipe for fuel rod
  event.shaped(
    Item.of(bigreactorsReactor + 'fuelrod', 4), [
    ' A ',
    'A A',
    ' A '
  ], {
    A: reactorCasing
  })

  //Adds recipe for control rod
  encasedTopBottom(
    Item.of(bigreactorsReactor + 'controlrod', 2),
    minecraft + 'piston',
    kubejs + 'control_rod',
    inductiveMechanism,
    redstone
  )

  //Recipes that need/can be added

  //Add shaped recipe for solid access port
  encasedTop(
    Item.of(bigreactorsReactor + 'solidaccessport', 2),
    inductiveMechanism,
    redstone,
    fluidPipe
  )

  //Add shaped recipe for fuel injection port
  encasedTopBottom(
    Item.of(bigreactorsReactor + 'fluidaccessport', 2),
    infernalMechanism,
    redstone,
    fluidPipe,
    fluidTank
  )

  //Adds recipe for redstone port


  //Adds recipe for computer port


  //Add shaped recipe for active fluid port
  encasedTopBottom(
    Item.of(bigreactorsReactor + 'fluidport_forge_active', 2),
    inductiveMechanism,
    redstone,
    mechanical_pump,
    fluidTank
  )

  //Adds recipe for passive fluid port
  encasedTopBottom(
    Item.of(bigreactorsReactor + 'fluidport_forge_passive', 2),
    inductiveMechanism,
    redstone,
    fluidPipe,
    fluidTank
  )
})