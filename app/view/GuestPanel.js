Ext.define('TestMVC.view.GuestPanel', {
    extend: 'Ext.NavigationView',

    xtype: 'guestpanel',

    requires: [
        'TestMVC.view.guest.GuestList',
        'TestMVC.view.guest.GuestDetail'
    ],

    config: {
        navigationBar: {
            items: [{
                xtype: 'button',
                align: 'right',
                iconCls: 'refresh',
                iconMask: true,
                hidden: false,
                action: 'refresh'
            }, {
                xtype: 'button',
                align: 'right',
                iconCls: 'action',
                iconMask: true,
                hidden: true,
                ui: 'confirm',  // >> usually a green button
                action: 'action'
            }]
        },

        items:[{
            title: 'Guests',
            xtype: 'guestlist'
        }]
    }

});


