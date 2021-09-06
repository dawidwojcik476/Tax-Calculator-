import Vue from 'vue';
import Calculator from './components/Calculator.vue';

window.Vue = Vue;

const taxCalculator = document.querySelector("#tax-calculator");

if(taxCalculator) {
    Vue.component('taxcalculator', Calculator);
    
    new Vue({
        el: '#tax-calculator',
    });
}
