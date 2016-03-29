import DS from 'ember-data';

export default DS.Model.extend({
    author: DS.attr(),
    title: DS.attr(),
    text: DS.attr(),
    image: DS.attr(),
    authorimage: DS.attr()
});
// will be used as a model to push articles from app to database
