<template>
<div class='song'>
    <div v-for='item in songList' :key='item.id'>
        <span v-text='item.name'></span>
    </div>
</div>
</template>


<script>

import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState('song',['songList'])
    },

    methods: {
       ...mapActions('song',['getQQMusic']) 
    },

    mounted: function() {
        
        let params = {
            ct:24,
            qqmusic_ver:1298,
            new_json:1,
            remoteplace:'txt.yqq.song',
            searchid: 54616638128860322,
            t:0,
            aggr:1,
            cr:1,
            catZhida:1,
            lossless:0,
            flag_qc:0,
            p:1,
            n:10,
            w:'周杰伦',
            g_tk_new_20200303:5381,
            g_tk:5381,
            loginUin:0,
            hostUin:0,
            format:'json',
            inCharset:'utf8',
            outCharset:'utf-8',
            notice:0,
            platform:'yqq.json',
            needNewCode:0
        } 
        this.getQQMusic(params)

        // fetch调取接口
        // 成功之后能直接使用this调用数据，也可以使用vuex状态管理

        // fetch({
        //     url: '/soso/fcgi-bin/client_search_cp', // 域名后、问号前的查询路径，webpage自动拼接baseURL和url
        //     method: 'GET',
        //     params: params,
        //     // data: data  // 当method为'POST'时为data,而不是params
        // }).then(res=>{
        //     console.log(res)
        // }).catch(err=>{
        //     console.log(err)
        // }).finally(()=>{
        //     console.log('无论成功或失败，都会执行')
        // })
    }

}

</script>


<style lang='scss' scoped>

</style>