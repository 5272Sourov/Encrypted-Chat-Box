
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('message', require('./components/message.vue'));
// let test = require('./components/test.vue');

// const app = new Vue({
//     el: '#app',
//     components:{test}
// });


const app = new Vue({
    el: '#app',
    data:{
    	message:'',
    	chat:{
    		message:[],
    		user:[],
    		color:[],
    		time:[]
    	}
    },



    // watch:{
    // 	message(){
    // 		Echo.channel('chat')
    // 		    .whisper('typing', {
    // 		        name: this.message
    // 		    });
    // 	}
    // },

    methods:{
    	send(){
    		if (this.message.length != 0) {
               var data = this.message,
        key = 'I am sourov';

    var encrypted = CryptoJS.AES.encrypt(data, key).toString();
    			this.chat.message.push(this.encrypted);
    			this.chat.user.push('you');
    			this.chat.color.push('success');
    			this.chat.time.push(this.getTime());
    			axios.post('send', {
    			    message: this.encrypted
    			  })
    			  .then(response => {
    			    // console.log(response);
    			    this.message =''
    			  })
    			  .catch(error => {
    			    // console.log(error);
    			  });
    		}
    	},
    	getTime(){
    		let time = new Date();
    		return time.getHours()+':'+time.getMinutes();
    	}
    },

    mounted(){
    	Echo.channel('chat')
    	    .listen('ChatEvent', (e) => {
    	    	this.chat.message.push(e.encrypted);
    	    	this.chat.user.push(e.user);
    	    	this.chat.color.push('primary');
    	    	this.chat.time.push(this.getTime());
    	        // console.log(e);
    	    });

    	    // Echo.join('chat')
    	    //     .here((users) => {
    	    //         //
    	    //     })
    	    //     .joining((user) => {
    	    //         console.log(user.name);
    	    //     })
    	    //     .leaving((user) => {
    	    //         //console.log(user.name);
    	    //     });
    }
});


/*
    Uncomment below when compiling to production
*/

/*Vue.config.devtools = false
Vue.config.debug = false
Vue.config.silent = true
*/
