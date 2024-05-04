onEvent('item.registry', event => {
    // Mechanism is used for kinetic specific block
    // Umm umm, yeah guh
    event.create('diodic_mechanism')
    event.create('triodic_mechanism')
    event.create('tetrodic_mechanism')
    // Used for block that has computercraft integration
    event.create('computation_mechanism', 'create:sequenced_assembly')
    // Better version of the computation mechanism
    event.create('float_processing_mechanism', 'create:sequenced_assembly')
    // Used for block that cause physic
    event.create('cadere_mechanism', 'create:sequenced_assembly')
    // Used for block that cause physic and has computercraft integration
    event.create('integrated_cadere_mechanism')
    // Used for block that could generate heat or explode
    event.create('infernal_mechanism', 'create:sequenced_assembly')
    // Used for block that is used extensively underwater
    event.create('sealed_mechanism', 'create:sequenced_assembly').
    // Used for block that generate kinetic force from fabric energy
    event.create('kinetic_motor', 'create:sequenced_assembly')
})