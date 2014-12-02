Ext.define('TestMVC.store.Countries', {
    extend: 'Ext.data.Store',

    requires: [
        'TestMVC.model.Country'
    ],

    config: {
        model: 'TestMVC.model.Country',

        data: '',

        sorters: [{
            property : 'countryName',
            direction: 'ASC'
        }]

    }
});