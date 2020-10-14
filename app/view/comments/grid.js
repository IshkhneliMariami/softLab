Ext.define('HW.view.comments.grid', {
    extend: 'Ext.grid.Panel',
    reference: 'mainGrid',
    bind: '{comments}',
    controller: {
        xclass: 'HW.view.comments.GridController'
    },

    tbar:[{
        text: 'add',
        handler: 'addComment'
    },

    {
      text: 'delete',
      disabled: true,
      bind: {
        disabled: '{!mainGrid.selection}'
      },
      handler: 'deleteComment'
    }],


    columns: [{
        text: 'PostID',
        dataIndex: 'postId'
    }, {
        text: 'ID',
        dataIndex: 'id'
    }, {
        text: 'Name',
        dataIndex: 'name',
        flex: 1
    }, {
        text: 'Email',
        dataIndex: 'email',
        flex: 1
    }, {
            text: 'Body',
            dataIndex: 'body',
            flex: 2

        }],
    listeners: {
        itemdblclick: 'editComment',
        select: 'onSelect'
    }

});