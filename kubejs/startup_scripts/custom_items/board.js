onEvent('item.registry', event => {
    // Board is used for computercraft
    // the mother board
    event.create('circuit_board', 'create:sequenced_assembly').unstackable().subtypes(item => {
        return Utils.newList().add(item.copy().setNbt({content:[]}))
    })
    // Used for block that do computation
    event.create('processing_unit', 'create:sequenced_assembly')
    // Used for block that display anything
    event.create('graphical_unit', 'create:sequenced_assembly')
    // Used for block that display anything
    event.create('screen_translation_layer')
    // Used for raycaster
    event.create('laser_pointer')
    // Used for block that is wireless
    event.create('rednet_port')
    // Used for block that can output or input
    event.create('io_port').displayName('I/O Port')
    // Used for block that scan surrounding
    event.create('radar_board', 'create:sequenced_assembly')
})