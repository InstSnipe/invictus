onEvent('block.registry', event => {
    event.create('rubber_log')
        .material('wood')
    
    event.create('rubber_stripped_log')
        .material('wood')
    
    event.create('rubber_wood')
        .material('wood')
    
    event.create('rubber_stripped_wood')
        .material('wood')
    
    event.create('rubber_leaves')
        .material('leaves')
    
    event.create('exposed_rubber_log')
        .material('wood')
    
    event.create('rubber_tap')
        .material('metal')
        .hardness(0.1)
        .resistance(0.3)
        .noCollision(0.2)
        .property(BlockProperty.HORIZONTAL_FACING)
        .randomTick(tick => {
            let level = tick.level
            let blockPos = tick.blockPos
            let block = tick.block
            let direction = block.properties.facing
            let attachmentBlockPos = blockPos.relative(direction.opposite)
            let belowBlockPos = blockPos.below()
            if (level.getBlockState(attachmentBlockPos).block.id != kubejs + 'esposed_rubber_log') { return }
            if (level.getRandom().nextFloat() < 0.5) { return }
            let belowBlock = level.getBlockState(belowBlockPos).block
            if (belowBlock.id == create + 'basin') {
                let basinData = belowBlock.entityData.InputTanks
                if (["minecraft:empty", kubejs + 'raw_rubber_fluid'].includes(basinData[0].TankContent.FluidName)) {
                    let total = basinData[0].TankContent.Amount
                }
            }
        })

    event.create('rubber_block')
        .displayName('Block of Rubber')
        .material('decoration')
        .tagBoth(kubejsTag + 'rubber')
        .hardness(3.0)
        .resistance(2.0)
        .slipperiness(0.3)
        .jumpFactor(2.6)
        .redstoneConductor(false)
})

onEvent('fluid.registry', event => {
    event.create('raw_rubber_fluid')
        .textureThick(0xf5e2d0)
        .bucketColor(0xf5e2d0)
        .viscosity(6000)
    
    event.create('rubber_fluid')
        .textureThick(0x181b1c)
        .bucketColor(0x181b1c)
        .viscosity(8000)
})

onEvent('item.registry', event => {
    event.create('raw_rubber')

    event.create('rubber')
})

onEvent('worldgen.add', event => {
    // later? (if tree genrtion doesnt exist use datapack generation
})