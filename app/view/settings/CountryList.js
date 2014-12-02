Ext.define('TestMVC.view.settings.CountryList', {
    extend: 'Ext.List',

    xtype: 'countrylist',

    config: {
        onItemDisclosure: false,
        emptyText: 'No data found!',
        store: 'Countries',

        itemTpl : [
            '{countryName}'
        ].join('')

	}

});
