onEvent('block.right_click', event => {
    // let mineableByAxe = new ResourceLoaction('mineable')
    if (event.block.id == kubejs + 'rubber_log' && event.item.hasTag(minecraft + 'axes'))  {
        event.block.set(kubejs + 'rubber_stripped_log')
    }
    
    if (event.block.id == kubejs + 'rubber_wood' && event.item.hasTag(minecraft + 'axes'))  {
        event.block.set(kubejs + 'rubber_stripped_wood')
    }
})