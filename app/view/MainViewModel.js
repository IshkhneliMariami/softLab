Ext.define('HW.view.MainViewModel', {
    extend: 'Ext.app.ViewModel',

    stores: {
       comments: {
            model: 'HW.model.post',
            autoLoad: true
        }
    }
});
