onEvent('item.registry', event => {
    // Board is used for computercraft
    // the mother board
    event.create('circuit_board', 'create:sequenced_assembly').displayName('Circuit Board')
    // Used for block that do computation
    event.create('processing_unit', 'create:sequenced_assembly').displayName('Processing Unit')
    // Used for block that display anything
    event.create('graphical_unit', 'create:sequenced_assembly').displayName('Graphical Unit')
    // Used for block that display anything
    event.create('screen_translation_layer').displayName('Screen Translation Layer')
    // Used for raycaster
    event.create('laser_pointer', 'create:sequenced_assembly').displayName('Laser Pointer')
    // Used for block that is wireless
    event.create('rednet_port').displayName('Rednet Port')
    // Used for block that can output or input
    event.create('io_port').displayName('I/O Port')
    // Used for block that scan surrounding
    event.create('radar_board', 'create:sequenced_assembly').displayName('Radar board')
})