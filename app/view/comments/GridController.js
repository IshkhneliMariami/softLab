Ext.define('HW.view.comments.GridController',{
    extend: 'Ext.app.ViewController',

    addComment: function(){
        Ext.create('HW.view.comments.CommentWindow',{
            autoShow: true,
        });
    },


    editComment: function(view, record) {
        Ext.create('HW.view.comments.CommentWindow', {
            autoShow: true,
            post: record,
            });

    },
    deleteComment:function(){
          const grid = this.getView();
          const selected = grid.getSelectionModel().getSelection()[0];
          if(!selected) return ;

          grid.setLoading('მიმდინარეობს წაშლა...');

          selected.erase({
            success: function() {
              Ext.Msg.alert('სტატუსი', 'წარმატებით დასრულდა');
            },
            failure: function(record, operation) {
              Ext.Msg.alert('შეცდომა', operation.error.response.statusText);
            },
            callback: function() {
              grid.setLoading(false);
            }
          });

    }

});