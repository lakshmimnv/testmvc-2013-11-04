Ext.define('TestMVC.controller.guest.GuestDetail', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            guestPanelRefreshButton: 'guestpanel titlebar button[action=refresh]',
            guestPanelActionButton: 'guestpanel titlebar button[action=action]',
            guestDetail: 'guestdetailform',
            guestDetailSaveButton: 'guestdetailform button[action=save]'
        },
        control: {
            guestDetail: {
                show: 'onGuestDetailShow',
                hide: 'onGuestDetailHide'
            },
            guestPanelActionButton: {
                tap: 'onGuestDetailAction'
            },
            guestDetailSaveButton: {
                tap: 'onGuestDetailSave'
            }
        }
    },


    //***************************************************************************
    // SHOW / HIDE form (adjust the buttons in the navigation view titlebar
    //***************************************************************************
    onGuestDetailShow: function(view) {
        console.log('onGuestDetailShow');
        this.getGuestPanelRefreshButton().setHidden(true);
        this.getGuestPanelActionButton().setHidden(false);
    },
    onGuestDetailHide: function(view) {
        console.log('onGuestDetailHide');
        this.getGuestPanelRefreshButton().setHidden(false);
        this.getGuestPanelActionButton().setHidden(true);
    },


    //***************************************************************************
    // ACTION...
    //***************************************************************************
    onGuestDetailAction: function(button) {
        console.log('onGuestDetailAction');
        Ext.Msg.alert('Guest Detail', 'You have clicked the ACTION button.', Ext.emptyFn);
    },


    //***************************************************************************
    // SAVE item
    //***************************************************************************
    onGuestDetailSave: function(button) {
        console.log('onGuestDetailSave');
        Ext.Msg.alert('Guest Detail', 'You have clicked the SAVE button.', Ext.emptyFn);
    }

});
