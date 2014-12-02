Ext.define('TestMVC.view.guest.GuestDetail', {
    extend: 'Ext.form.Panel',

    xtype: 'guestdetailform',

    config: {
        items: [{
            xtype: 'fieldset',
            title: 'Guest Details',
            defaults: {
                labelAlign: 'left',
                labelWidth: '35%',
                labelWrap: true
            },
            items: [{
                xtype: 'textfield',
                label: 'ID',
                name: 'guestId',
                readOnly: true
            }, {
                xtype: 'textfield',
                label: 'Name',
                name: 'guestName'
            }, {
                xtype: 'selectfield',
                label: 'Country of Origin',
                name: 'guestOrigin',
                displayField: 'countryName',
                valueField: 'countryName',
                store: 'Countries'
            }]
        }, {
            xtype: 'spacer',
            height: '2em'
        }, {
            xtype: 'fieldset',
            items: [{
                xtype: 'button',
                width: '100%',
                height: '3em',
                text: 'Save Changes',
                ui: 'decline',  // >> usually a red button
                action: 'save'
            }]
        }]
    }
});