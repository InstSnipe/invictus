onEvent('item.registry', event => {
    //Makes nugget items for nuclear fuel
    event.create('u_235_nugget').displayName('U-235 Nugget')

    event.create('u_238_nugget').displayName('U-238 Nugget')

    //Makes chunk items for nuclear fuel
    event.create('u_235_chunk').displayName('U-235 Chunk')

    event.create('u_238_chunk').displayName('U-238 Chunk')

    //Makes nuclear fuel items
    event.create('leu_fuel').displayName('LEU Fuel')

    event.create('heu_fuel').displayName('HEU Fuel')

    //Makes depleted uranium fuel
    event.create('depleted_leu_fuel').displayName('Depleted LEU Fuel')

    event.create('depleted_heu_fuel').displayName('Depleted HEU Fuel')
    
    //Makes plutonium nuggets
    event.create('pu_238_nugget').displayName('Pu-238 Nugget')

    event.create('pu_241_nugget').displayName('Pu-241 Nugget')

    //Makes plutonium chunks
    event.create('pu_238_chunk').displayName('Pu-238 Chunk')

    event.create('pu_241_chunk').displayName('Pu-241 Chunk')

    //Makes plutonium fuel
    event.create('lep_fuel').displayName('LEP Fuel')

    event.create('hep_fuel').displayName('HEP Fuel')

    //Makes depleted plutonium fuel
    event.create('depleted_lep_fuel').displayName('Depleted LEP Fuel')

    event.create('depleted_hep_fuel').displayName('Depleted HEP Fuel')

    //Makes americium nuggets
    event.create('am_241_nugget').displayName('Am-241 Nugget')

    event.create('am_243_nugget').displayName('Am-243 Nugget')

    //Makes americium chunks
    event.create('am_241_chunk').displayName('Am-241 Chunk')

    event.create('am_243_chunk').displayName('Am-243 Chunk')

    //Makes americium fuel
    event.create('lea_fuel').displayName('LEA Fuel')

    event.create('hea_fuel').displayName('HEA Fuel')

    //Makes depleted americium fuel
    event.create('depleted_lea_fuel').displayName('Depleted LEA Fuel')

    event.create('depleted_hea_fuel').displayName('Depleted HEA Fuel')
    
    //Makes weapons grade items (may not be needed)
    //Makes weapons grade plutonium
    event.create('weapons_grade_plutonium').displayName('Weapons Grade Plutonium').stackSize(16)

    //Makes weapons grade americium
    event.create('weapons_grade_americium').displayName('Weapons Grade Americium').stackSize(16)

    //Makes weapons grade uranium
    event.create('weapons_grade_uranium').displayName('Weapons Grade Uranium').stackSize(16)
}
)