Ext.define('TestMVC.view.Main', {
    extend: 'Ext.tab.Panel',

    xtype: 'main',

    requires: [
        'TestMVC.view.GuestPanel',
        'TestMVC.view.SettingsPanel',
        'TestMVC.view.AboutPanel'
    ],

    config: {
        tabBar: {
            docked: 'bottom'
        },

        items: [{
            title: 'Guests',
            iconCls: 'user',
            xtype: 'guestpanel'
        }, {
            title: 'Settings',
            iconCls: 'settings',
            xtype: 'settingspanel'
        }, {
            title: 'About',
            iconCls: 'more',
            xtype: 'aboutpanel'
        }]
    }
});
