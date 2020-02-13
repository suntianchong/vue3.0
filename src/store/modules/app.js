export default {
  state: {
    appName:"Mango Platform", //应用名称
    themeColor:"#14889A",//主题颜色
    oldThemeColor:"#14889A",//上一次主题颜色
    collapse:flase,//导航栏收缩状态
    menuRouteLoaded:false
  },
  getters:{
    collapse(state){
      return state.collapse
    }
  },
  mutations:{
    onCollapse(state) {
      state.collapse =!state.collapse
    },
    setThemeColor(state,themeColor) {
      state.oldThemeColor =state.themeColor
      state.themeColor =themeColor
    },
    menuRouteLoaded(state,menuRouteLoaded) {
      state.menuRouteLoaded = menuRouteLoaded;
    }
  },
  actions:{

  }
}
