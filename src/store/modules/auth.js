const auth = {
	namespaced: true,
	state: {
		isLogin: localStorage.getItem("galiando-auth") ? true : false,
	},
	getters: {
		getStatusLogin: (state) => state.isLogin,
	},
	actions: {
		setIsLogin({ commit }, payload = false) {
			commit("SET_IS_LOGIN", payload);
		},
		logout({ commit }) {
			localStorage.removeItem("galiando-auth");
			commit("SET_IS_LOGIN", false);
		},
	},
	mutations: {
		SET_IS_LOGIN(state, payload) {
			state.isLogin = payload;
		},
	},
};

export default auth;
