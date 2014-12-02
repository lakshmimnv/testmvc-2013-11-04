Ext.define('TestMVC.view.SettingsPanel', {
    extend: 'Ext.NavigationView',

    xtype: 'settingspanel',

    requires: [
        'TestMVC.view.settings.CountryList'
    ],

    config: {
        items:[{
            title: 'Countries',
            xtype: 'countrylist'
        }]
    }

});


