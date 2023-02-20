export default {
    state:{
        isCollapse:false
    },
    mutations:{
        collapseMenu(state){
            console.log("it works")
            state.isCollapse = !state.isCollapse
        }
    }
}