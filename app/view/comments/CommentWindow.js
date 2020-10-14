Ext.define('HW.view.comments.CommentWindow', {
    extend: 'Ext.window.Window',
    title: 'Comment Editor',
    modal: true,
    layout: 'fit',
    width: 500,
    height: 400,
    config: {
      post: null
    },
    controller: {
        xclass: 'HW.view.comments.CommentWindowController'
    },
    items: [{
        xtype: 'form',
        reference: 'form',
        bodyPadding: 10,
        fieldDefaults: {
            anchor: '100%',
            allowBlank: false
        },
        listeners: {
            afterrender: 'formAfterRender'
        },
        items: [{
            xtype: 'numberfield',
            name: 'postId',
            fieldLabel: 'Post ID'
        },{
            xtype: 'numberfield',
            name: 'id',
            fieldLabel: 'ID'
        }, {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Name'
        }, {
            xtype: 'textfield',
            name: 'email',
            fieldLabel: 'Email'
        }, {
            xtype: 'textarea',
            name: 'body',
            fieldLabel: 'Body'
        }],
        buttons: [{
            text: 'save',
            handler: 'saveComment'
        }]
    }]
});