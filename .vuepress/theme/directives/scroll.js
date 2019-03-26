import Vue from 'vue'

export default Vue.directive('scroll', {
    inserted: function (el, binding) {
        let f = function (evt) {
            //console.log(binding.value);
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
})