var app = new Vue({
    el: '#app',
    components: {
        'mock': httpVueLoader('./component/mock.vue'),
    },

});