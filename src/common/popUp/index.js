export function Loading(Vue){
	let count = 0;
	let instance;
	let LoadingConstructor = Vue.extend(require('./loading.vue'));
	let loading = (isLoading=true) => {
	  if ( isLoading && count === 0 ) {  //loading
	    count ++;
	    if(!instance){
	      instance = new LoadingConstructor({
	        data: {
	          coverVisible: false,
	          visible : false
	        }
	      });
	      instance.vm = instance.$mount();
	      document.body.appendChild(instance.vm.$el);
	    }
	    instance.vm.visible = true;
	  }
	  else if ( !isLoading && count === 1 ) {  // remove
	    count = 0;
	    instance.vm.visible = false;
	  }
	};
	Vue.prototype.$loading = loading;
}