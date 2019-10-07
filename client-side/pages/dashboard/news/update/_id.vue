<template>
    <div>
        <template v-if="isLoad">
            <div class="col-12 grid-margins tretch-card">
                <div class="text-center mt-3">
                    <PulseLoader :color="'#da8cff'" :size="'20px'"/>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="col-12 grid-margin stretch-card" v-if="_new">
                <NewForm :_new="_new"/>
            </div>
        </template>
    </div>
</template>
<script>
import NewForm from '~/components/dashboard/form/New.vue';
import SocketService from '~/services/socket.service';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
    components:{
        NewForm,
        PulseLoader
    },
    data() {
        return {
            _new: '',
            isLoad: true,
        }
    },
    created() {
        this.$store.commit('setActiveSidebar', { isActive: 'news' });
        this.initNew();
    },
    methods: {
        initNew: function() {
            this.isLoad = true;
            this.$http.get('news/update/' + this.$route.params.id)
            .then( response => {
                this._new = response.data.data;
                this._new.imageStr = '';
                this.isLoad = false;
            })
            .catch( response => {
                this._new = '';
                this.isLoad = false;
                if(response.status == 404){
                    this.$toastr('error', response.data.message);
                    this.$router.push({ name: 'dashboard-news', query: { page: this.$route.query.return } });
                }
            })
        }
    },
    mounted(){
    }
}
</script>