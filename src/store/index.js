import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      
      test: '',
      
              english: [
              
            {nav: {
                home: 'home',
                about: 'about'
              }},
            {home: {
                  h1: 'This is the home page in engish',
                  p: 'This a short description of the home page in engish'
              }},
            {about: {
                  h1: 'This is the about page in english',
                  p: 'this is a short description of the about page in english'
              }}
          
        ],
      
              french: [
              
            {nav: {
                home: 'accueil',
                about: 'à propos'
              }},
            {home: {
                  h1: "Ceci est la page d'accueil en française",
                  p: "Voici une brève description de la page d'accueil en française"
              }},
            {about: {
                  h1: 'Ceci est la page à propos en française',
                  p: 'ceci est une brève description de la page à propos en française'
              }}          
          
            ],
      
              arabe: [
              
            {nav: {
                home: 'الصفحة الرئيسية',
                about: 'حول'
              }},
            {home: {
                  h1: "هذه هي الصفحة الرئيسية في العربي",
                  p: "هذا وصف موجز للصفحة الرئيسية باللغة العربية"
              }},
            {about: {
                  h1: 'هذه هي صفحة عن العربي',
                  p: 'هذا وصف موجز لصفحة "حول" باللغة العربية'
              }}          
          
            ]      
      
      
  },
    mutations: {
        givetestavalue(state) {
            
            if(navigator.language == "en-US") {
                
            state.test = state.english
                
            }else if(navigator.language == "fr-FR") {
                
                state.test = state.french
                
            }else if(navigator.language == "ar") {
            state.test = state.arabe
                
            }else {
               
            state.test = state.english
                
            }
        }
    },
  getters: {
      
      testfunc: state => state.test
      
  },
  actions: {
      
      async disparts(state) {
          state.commit('givetestavalue')
      }
      
  }
});
