onEvent('block.right_click', event => {
    // let mineableByAxe = new ResourceLoaction('mineable')
    if (event.block.id == kubejs + 'rubber_log' && event.item.hasTag(minecraft + 'axes'))  {
        event.block.set(kubejs + 'rubber_stripped_log')
    }
    
    if (event.block.id == kubejs + 'rubber_wood' && event.item.hasTag(minecraft + 'axes'))  {
        event.block.set(kubejs + 'rubber_stripped_wood')
    }
    
    if (event.block.id == kubejs + 'rubber_log' && event.item.hasTag(minecraft + 'pickaxes'))  {
        event.block.set(kubejs + 'exposed_rubber_log')
    }
})