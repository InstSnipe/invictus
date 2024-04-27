onEvent('item.registry', event => {
    event.create('screen').maxStackSize(16).displayName('Screen')
    event.create('control_rod').maxStackSize(16).displayName('Control Rod')
})