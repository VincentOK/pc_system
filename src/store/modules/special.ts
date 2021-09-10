interface actionsModel {
  commit:Function,
  state: { [key: string]: unknown }
}
export default {
  namespaced: true,
  state: {
    token: 'xxxxxx',
    isCollapse: false,
    title: 'setting标题'
  },
  mutations: {
    setIsCollapse(state: Record<string | number | symbol, any> = {}, status:boolean):void {
      state.isCollapse = status;
    },
    setTitle(state:Record<string | number | symbol, any> = {}, status:string):void {
      state.title = status;
    }
  },
  actions: {
    actionSetTitle(action:actionsModel):void {
      action.commit('setTitle', '新标题');
    }
  }
};
