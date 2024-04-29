onEvent('item.registry', event => {
    // Board is used for computercraft
    // Used for infernal mechanism (not going to be used)
    event.create('amber_shard')
    
    // Just silicon
    event.create('silicon_ingot').displayName('Silicon')
    // Just silicon alloy
    event.create('silicon_alloy').displayName('Silicon Alloy')
})

onEvent('fluid.registry', event => {
    // Just silicon fluid
    event.create('silicon_fluid')
    .textureThick(0x212426)
    .bucketColor(0x212426)
    .displayName('Silicon Fluid')
    .luminosity(2)
    .viscosity(3000)
})