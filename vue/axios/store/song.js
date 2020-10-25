import fetch from '@/utils/fetch'

const songModule = {
    namespaced: true,
    state: {
        songList: []  // 音乐列表
    },

    getters: {

    },

    mutations: {
        updateSongList(state,payload) {
            state.songList = payload
        }
    },

    actions: {
        getQQMusic(store,payload) {
            fetch({
                url: '/soso/fcgi-bin/client_search_cp',
                method: 'GET',
                params: payload
            }).then(res=>{
                store.commit('updateSongList')
            })
        }
    }

}

export default xxx