Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function () {
        return Meteor.subscribe('posts');
    }
});

Router.route('/', {
    name: 'homepage'
});
Router.route('/posts/:_id', {
    name: 'postContent',
    data: function () {
        return Post.findOne(this.params._id);
    }
})

Router.onBeforeAction('dataNotFound', {
    only: 'postPage'
});