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
    }
)