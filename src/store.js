import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    TotalBalance : 0,
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some comment",
        id: 1
      },
      2: {
        type: "OUTCOME",
        value: 50,
        comment: "Some outcome comment",
        id: 2
      }
    }
  },
  getters:{
    list: state => state.list,
    //вычисляем сумму state.list
    totalBalance(state) {
      return Object.values(state.list).reduce((acc, item)=> 
         acc + (item.type === "INCOME" ? 1 : -1)* item.value,
         state.TotalBalance
      );
    }
  },
  mutations: {
    setList(state, payload){
      const newObj = {
        ...payload,
        id: String(Math.random())
      };
      Vue.set(state.list, newObj.id, newObj);
    },
    delItemList(state, id){
      Vue.delete(state.list, id);
    }
  },
  actions: {
    addListItem({ commit }, payload){
      commit('setList', payload)
    },
    deleteListItem({ commit }, id){
      commit('delItemList', id)
    }   
  }
}) 