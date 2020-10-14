Ext.define('HW.view.Main',{
    extend: 'Ext.panel.Panel',
    layout: 'border',
    requires: ['HW.model.post'],
    viewModel: {
        xclass: 'HW.view.MainViewModel'
    },

    items: [{
        xtype: 'panel',
        reference: 'header',
        height: 50,
        bodyPadding: 10,
        region: 'north',
        layout: {
            type: 'hbox',
            align: 'stretch'
        }
    },
        {
            xclass: 'HW.view.comments.grid',
            region: 'center'
        }]
});