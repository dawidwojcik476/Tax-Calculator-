


<template>
<div class="tax-form">
 <form method="post">
    <h1>Kalkulator Podatku</h1>
    <div class="tax-form__productname">
    <label for="productname">Nazwa produktu</label>
      <input type="text" name="productname" id="productname" required v-model="productname" placeholder="Nazwa produktu">
      <div class="error" v-if="productnameError"> {{productnameError}}</div>
    
    </div>
    <div class="tax-form__netto">
        <label for="netto">Kwota netto</label>
      <input tpye="text" name="netto" id="netto" required v-model="netto" placeholder="Kwota netto">
       <div class="error" v-if="nettoError"> {{nettoError}}</div>
   </div>
   <div class="tax-form__currency">
         <label for="currency-choice">Wybierz walutę</label>
         
    <select name="currency-choice" id="currency-choice" required v-model="currency" placeholder="Waluta">
  <option class="currency-choice__pln" value="PLN">PLN</option>
  <option class="currency-choice__euro" value="EURO">EURO</option>
      </select>
       <div class="error" v-if="currencyError"> {{currencyError}}</div>
    </div>
   <div class="tax-form__vat-choice">
         <label for="vat-choice">Wybierz stawkę VAT</label>
    <select name="vat-choice" id="vat-choice" required v-model="vatchoice" placeholder="Stawka VAT">
  <option class="vat-choice__first" value="23%">23%</option>
  <option class="vat-choice__second" value="22%">22%</option>
  <option class="vat-choice__third" value="8%">8%</option>
  <option class="vat-choice__fourth" value="7%">7%</option>
  <option class="vat-choice__fifth" value="5%">5%</option>
  <option classs="vat-choice__sixth" value="0%">0%</option>
      </select>
       <div class="error" v-if="vatchoiceError"> {{productnameError}}</div>
    </div>
         <input name="brutto" v-model="brutto" style="display:none">
         <input name="taxresult" v-model="taxresult" style="display:none">
          <input v-if="flag==true"
          class="submit"
            type="submit"
            value="Zapisz produkt"
          />

 
</form> 
 <button class="submit" @click="handleSubmit">Oblicz</button>
         <div v-if="flag==true" class="tax-form__result">Cena produktu brutto wynosi: <b> {{brutto}} </b> <br> Cena produktu netto wynosi: <b> {{nettoResult}}  </b><br> Kwota podatku wynosi <b> {{taxresult}} </b><br></div>
          
</div>
  
</template>
  
<script>
export default {
  data() {
    return {
    productname:'',
    productnameError:'',
    netto:'',
    nettoResult: '',
    brutto: '',
    currency: '',
    vatchoice: '',
    taxresult: '',
    flag: false

    };
  },
  mounted() {
 
  },
  methods: {
    handleSubmit() {
      this.productnameError = this.productname.length > 1 ? '' : 'Uzupełnij polę'
      this.nettoError = this.netto.length > 1 ? '' : 'Uzupełnij polę'
      this.currencyError = this.currency.length > 1 ? '' : 'Uzupełnij polę'
      this.vatchoiceError = this.vatchoice.length > 1 ? '' : 'Uzupełnij polę'

      if(!this.productnameError && !this.nettoError && !this.currencyError && !this.vatchoices) {
  this.calculateTax(); 
  this.brutto = Number(this.brutto).toFixed(2) + ' ' + this.currency;
  this.netto = Number(this.netto).toFixed(2) + ' ' + this.currency;
  this.nettoResult = this.netto;
  this.taxresult = Number(this.taxresult).toFixed(2) + ' ' + this.currency;
  this.flag = true;
  }
    },
    calculateTax() {
      if (this.vatchoice == '23%') {
     this.taxresult = this.netto * 0.23;
     this.brutto = +this.netto + +this.taxresult;
      } else if (this.vatchoice == '22%') {
     this.taxresult = this.netto * 0.22;
     this.brutto = +this.netto + +this.taxresult;
      }else if (this.vatchoice == '8%') {
     this.taxresult = this.netto * 0.08;
     this.brutto = +this.netto + +this.taxresult;
      }else if (this.vatchoice == '7%') {
     this.taxresult = this.netto * 0.07;
     this.brutto = +this.netto + +this.taxresult;
      }else if (this.vatchoice == '5%') {
     this.taxresult = this.netto * 0.05;
     this.brutto = +this.netto + +this.taxresult;
      }else if (this.vatchoice == '0%') {
     this.brutto = this.netto 
      }
    }
  }
}
</script>
