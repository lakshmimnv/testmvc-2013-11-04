Ext.define('TestMVC.model.Country', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'countryId', type: 'string' },
            { name: 'countryName', type: 'string' }
            ]
    }
});


