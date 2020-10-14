Ext.define('HW.model.post',{
    extend: 'Ext.data.Model',
    fields: ['postId','id','name','email','body'],
    proxy:{
        url: 'https://jsonplaceholder.typicode.com/comments',
        type: 'rest',
        writer: {
            writeRecordId: false,
            writeAllFields: true
        }
    }
});