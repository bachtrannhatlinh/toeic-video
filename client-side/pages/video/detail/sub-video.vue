<template>
    <section class="gl-container bg-dark min-vh-100">
        <div class="gl-sub-video container bg-white pb-2">
            <div class="text-center">
                <h1>Phiên âm và đặt thời gian</h1>
            </div>
            <div class="d-lg-flex">
                <div class="gl-sub-video__video col-lg-6 gl-video-detail__video px-0 pb-2">
                    <video ref="videoPlayer" id="gl_video_js" class="gl-video-height video-js vjs-default-skin w-100">
                    </video>
                    <div class="gl-controls-bar top d-flex justify-content-center" id="gl_sub_top" v-if="isPlay">
                        {{ sub_show.full_mean }}
                    </div>
                    <div class="gl-controls-bar bottom" v-if="isPlay" id="gl_sub_bottom">
                        <div class="gl-controls-bar_sub px-2">
                            <div class="gl-controls-bar__default-sub text-center">
                                <span class="gl-controls-bar__default-sub__note" v-html="sub_show.raw_mean.default"></span>
                            </div>
                            <div class="gl-controls-bar__custom-sub text-center" v-html="sub_show.pronunciation"></div>
                            <div class="gl-controls-bar__default-sub text-center" v-html="sub_show.raw_mean.vi"></div>
                        </div>
                    </div>
                </div>
                <div class="gl-sub-video__sub col-lg-6 pr-lg-2 px-0 order-first">
                    <div class="sub-option border-bottom">
                        <div class="mb-2">
                            <input type="text" name="" class="w-100 px-2" placeholder="Top sub">
                        </div>
                        <div class="mb-2">
                            <input type="text" name="" class="w-100 px-2" placeholder="En sub">
                        </div>
                        <div class="mb-2">
                            <input type="text" name="" class="w-100 px-2" placeholder="Vi sub">
                        </div>
                        <div class="mb-2 row">
                            <div class="col-6">
                                Phút: <input type="text" name="" class="time-sub col-12">
                            </div>
                            <div class="col-6">
                                Giây: <input type="text" name="" class="time-sub col-12">
                            </div>
                            <div class="col-12 pt-2">
                                <button class="btn btn-primary" type="button">test</button>
                                <button class="btn btn-success" type="button">lưu</button>
                            </div>
                        </div>
                    </div>
                    <div class="sub-content">
                        <div class="content border-bottom p-2">
                            <div>Bài hát này được lấy từ youtube</div>
                            <div>This is a song from youtube</div>
                            <div>Này là một bài hát từ youtube</div>
                            <div class="d-flex py-1">
                                <div class="mr-auto font-12 mt-auto">00:11.0</div>
                                <button class="btn btn-outline-info rounded-circle mr-2 border-0" type="button">
                                    <i class="fal fa-edit"></i>
                                </button>
                                <button class="btn btn-outline-danger rounded-circle border-0" type="button">
                                    <i class="fal fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import videojs from 'video.js';

export default {
    data() {
        return {
            player: null,
            isPlay: false,
            videoOptions: {
                autoplay: false,
                controls: true,
                techOrder: [
                    'youtube'
                ],
                sources: [
                    {
                        src: 'https://www.youtube.com/watch?v=YRLw55eGMn8',
                        type: 'video/youtube'
                    }
                ],
            },
            subs: [
                {   
                    start: 5,
                    end: 10,
                    full_mean: '',
                    raw_mean: {
                        default: 'Kay Nguyễn',
                        vi: '',
                    },
                    pronunciation: '',
                },
                {   
                    start: 11,
                    end: 16,
                    full_mean: 'Bài hát này được lấy từ youtube',
                    raw_mean: {
                        default: 'This &emsp; is &emsp; a &emsp; song &emsp; from &emsp; youtube',
                        vi: 'Này &emsp; là &emsp; một &emsp; bài hát &emsp; từ &emsp; youtube',
                    },
                    pronunciation: '/ðɪs/ &emsp; /ɪz/ &emsp; /ə/ &emsp; /sɑːŋ/ &emsp; /frɑːm/ &emsp; /ˈjuː.tuːb/ ',
                },
                {
                    start: 17,
                    end: 22,
                    full_mean: 'Bài hát này tên là Chill Mix',
                    raw_mean: {
                        default: 'This &emsp; song &emsp; name &emsp; Chill Mix',
                        vi: 'Này &emsp; bài hát &emsp; tên &emsp; Chill Mix',
                    },
                    pronunciation: '/ðɪs/ &emsp; /sɑːŋ/ &emsp; /neɪm/ &emsp; /tʃɪl/ /mɪks/',
                },
                {   
                    start: 23,
                    end: 28,
                    full_mean: 'Demo đến đây kết thúc',
                    raw_mean: {
                        default: 'Demo &emsp; end &emsp; here',
                        vi: 'Mẫu &emsp; kết thúc &emsp; ở đây',
                    },
                    pronunciation: '/ˈdem.oʊ/ &emsp; /end/ &emsp; /hɪr/',
                }
            ],
            sub_show: {
                end: '',
                full_mean: '',
                raw_mean: {
                    default: '',
                    vi: '',
                },
                pronunciation: '',
            },
            sub_index: 0,
            subOptions: 'subs'
        }
    },
    methods: {
        playVideo: function() {
            if( this.isPlay ) {
                this.player.pause();
                this.isPlay = false;
            }else {
                this.player.play();
                this.isPlay = true;
            }
        },
        videoSubOptions: function(value) {
            this.subOptions = value;
        }
    },
    mounted() {
        this.player = videojs(this.$refs.videoPlayer, this.videoOptions, function onPlayerReady() {
        });
        this.player.on('playing', function() {
            this.isPlay = true;
        }.bind(this));
        this.player.on('seeked', function(){
            this.sub_index = 0;
            this.sub_show = {
                end: '',
                full_mean: '',
                raw_mean: {
                    default: '',
                    vi: '',
                },
                pronunciation: '',
            };
        }.bind(this));
        this.player.on('timeupdate', function() {
            let time = this.player.currentTime();
            time = Math.floor(time);
            if(this.sub_index < this.subs.length){
                if(time >= this.subs[this.sub_index].start && time < this.subs[this.sub_index].end){
                    this.sub_show = this.subs[this.sub_index];
                }
                if(time >= this.subs[this.sub_index].end){
                    this.sub_show = {
                        end: '',
                        full_mean: '',
                        raw_mean: {
                            default: '',
                            vi: '',
                        },
                        pronunciation: '',
                    };
                    this.sub_index = this.sub_index + 1;
                }
            }
        }.bind(this));

        //fullScreen function
        this.player.on('fullscreenchange', function() {
            const video = document.getElementById("gl_video_js");
            const topSub = document.getElementById("gl_sub_top");
            const bottomSub = document.getElementById("gl_sub_bottom");

            // move to video
            video.appendChild(topSub);
            video.appendChild(bottomSub);
        });
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>