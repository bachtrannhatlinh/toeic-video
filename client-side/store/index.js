import HttpConfig from '~/plugins/http/http.config'

const http = HttpConfig.get();
export const state = () => ({
    template: '',
    isActive: '',
    subIsActive: '',
    loginRedirect: '',
})

export const mutations = {
    setTemplate(state, template){
        state.template = template;
    },
    setActiveSidebar(state, data){
        const { isActive, subIsActive } = data;
        state.isActive = isActive;
        state.subIsActive = subIsActive;
    },
    setLoginRedicret(state, data){
        state.loginRedirect = data;
    },
}

export const actions = {
}