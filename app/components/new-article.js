import Ember from 'ember';

export default Ember.Component.extend({
  submitNewArticle: false,
  actions: {
    showArticleSubmitter() {
      this.set('submitNewArticle', true);
    },
     save1() {
       var params = {
        author: this.get('author') ? this.get('author') : "",
        title: this.get('title') ? this.get('title') : "",
        text: this.get('text') ? this.get('text') : "",
        image: this.get('image') ? this.get('image') : "",
        authorimage: this.get('authorimage') ? this.get('authorimage') : "",
      }
      this.set("submitNewArticle", false);
      this.sendAction('save2', params);
     }
  }
});
