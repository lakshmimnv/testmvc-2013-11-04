Ext.define('TestMVC.view.AboutPanel', {
    extend: 'Ext.Panel',

    xtype: 'aboutpanel',

    config: {
        scrollable: 'vertical',
        styleHtmlContent: true,

        items:[{
            xtype: 'titlebar',
            title: 'About',
            docked: 'top'
        }, {
            html: [
                '<p>Built with Sencha Touch V' + Ext.getVersion('touch') + '</p>'
            ].join('')
        }]

    }

});