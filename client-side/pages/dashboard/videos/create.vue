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
            <div class="col-12 grid-margin stretch-card">
                <VideoForm :video="video"/>
            </div>
        </template>
    </div>
</template>

<script>
import VideoForm from '~/components/dashboard/form/Video.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
    components:{
        VideoForm,
        PulseLoader
    },
    data() {
        return {
            video: '',
            isLoad: true,
        }
    },
    created() {
        this.$store.commit('setActiveSidebar', { isActive: 'videos', subIsActive: 'video-create' });
        this.initVideo();
    },
    methods: {
        initVideo: function(){
            setTimeout(function() {
                this.isLoad = false;
            }.bind(this), 1000);
            this.video = {
                title: '',
                imageStr: '',
                status: 'active',
                categories: [],
            };
        }
    },
    
}
</script>