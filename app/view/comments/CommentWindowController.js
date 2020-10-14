Ext.define('HW.view.comments.CommentWindowController', {
    extend: 'Ext.app.ViewController',

    formAfterRender: function() {
        const form = this.lookup('form');
        let post = this.getView().getPost();
        if(!post) {
            post = Ext.create('HW.model.post');
        }
        form.loadRecord(post);
    },

    saveComment: function(){
      const me = this;
      const form = this.lookup('form');
      if(!form.isValid()) return ;
      form.setLoading('მიმდინარეობს შენახვა...');
      const post = form.getForm().getRecord();
      form.updateRecord(post);
      post.save({
        success: function() {
          Ext.Msg.alert('სტატუსი', 'წარმატებით დასრულდა');
          me.getView().close();
        },
        failure: function() {
          Ext.Msg.alert('შეცდომა', 'error');
          form.setLoading(false);
        }
      });
    }
});