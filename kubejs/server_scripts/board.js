onEvent('recipes', event => {
    // Add mixing recipe for silicon fluid
    event.recipes.create.mixing(
        { mame: kubejs + 'silicon_fluid', amount: 9000}, 
        [minecraft + 'quartz_block', minecraft + 'charcoal']
    ).heated()
    
    // Add compacting recipe for silicon ingort
    event.recipes.create.compacting(
        kubejs + 'silicon_ingot', 
        { mame: kubejs + 'silicon_fluid', amount: 1000}
    )
    
    // Add shaped recipe for silicon alloy
    event.shaped(
        Item.of(kubejs + 'silicon_alloy', 4),
        [
            'ab',
            'ba'
        ], {
            a: redstone,
            b: kubejs + 'silicon_ingot'
        }
    )
    
    // Add shaped recipe for circuit board
    event.shaped(
        Item.of(circuitBoard, 2),
        [
            'aa',
            'bc'
        ], {
            a: kubejs + 'silicon_ingot',
            b: create + 'rose_quartz_lamp',
            c: minecraft + 'emerald'
        }
    )
})