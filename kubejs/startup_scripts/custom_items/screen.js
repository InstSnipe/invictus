onEvent('item.registry', event => {
    event.create('mother_screen', 'create:sequenced_assembly').unstackable()
    event.create('screen', 'create:sequenced_assembly').maxStackSize(16)
})