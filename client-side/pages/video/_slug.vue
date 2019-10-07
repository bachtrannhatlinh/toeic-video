<template>
    <div class="container-fluid gl-container transition-normal mt-3">
        <div class="container px-1 mx-auto px-sm-0 gl-video-detail">
            <div class="d-lg-flex mb-3">
                <div class="col-lg-8 col-12 px-0 gl-video-detail__video mb-2 mb-lg-0">
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
                <div class="col-lg-4 col-12 px-0 pl-lg-3 gl-video-detail__options">
                    <div class="gl-video-height">
                        <div class="gl-video-detail__options__top">
                            <button 
                                class="w-50 text-center p-2 gl-btn__videos__subs active" type="button" 
                                @click="videoSubOptions('subs')"
                            >
                                Sub content
                            </button>
                            <button 
                                class="w-50 text-center p-2 gl-btn__videos__subs" type="button"
                                @click="videoSubOptions('options')"
                            >
                                sub
                            </button>
                        </div>
                        <template v-if="this.subOptions == 'subs'">
                            <div class="gl-video-detail__options__content border border-success">
                                <div class="items px-2 py-3 border-bottom position-relative active">
                                    <div class="default-sub mb-1">
                                        This is the story of Bridget and Annie, who share a flat in London.  
                                    </div>
                                    <div class="custom-sub">
                                        Đây là câu chuyện của Bridget và Annie, họ cùng sống 
                                    </div>
                                    <div class="position-absolute font-size-12 time px-1 rounded">
                                        15:00
                                    </div>
                                    <!-- <span class="position-absolute options">
                                        <i class="fal fa-ellipsis-v"></i>
                                    </span> -->
                                </div>
                                <div class="items px-2 py-3 border-bottom position-relative">
                                    <div class="default-sub mb-1">
                                        This is the story of Bridget and Annie, who share a flat in London.  
                                    </div>
                                    <div class="custom-sub">
                                        Đây là câu chuyện của Bridget và Annie, họ cùng sống 
                                    </div>
                                    <div class="position-absolute font-size-12 time px-1 rounded">
                                        15:00
                                    </div>
                                    <!-- <span class="position-absolute options">
                                        <i class="fal fa-ellipsis-v"></i>
                                    </span> -->
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="gl-video-detail__options__content border border-success">
                                
                            </div>
                        </template>
                        <!-- <div class="gl-video-detail__options__bottom"></div> -->
                    </div>
                </div>
            </div>
            <div class="position-relative">
                <div class="col-lg-8 col-12 mx-0 px-0 gl-video-detail__content pb-3">
                    <div class="pb-1 border-bottom">
                        <!-- <div class="tag">#bobo</div> -->
                        <div class="title">
                            <h1>Title For Video</h1>
                        </div>
                        <div class="social d-sm-flex">
                            <div class="view">199k Lượt xem</div>
                            <div class="d-flex ml-sm-auto justify-content-between py-1 py-sm-0">
                                <div class="like">
                                    <i class="fal fa-thumbs-up isLike"></i> 500
                                 </div>
                                 <div class="disLike mx-sm-3 mx-2">
                                    <i class="fal fa-thumbs-down"></i> 500
                                 </div>
                                <div class="save">
                                    <i class="fal fa-save"></i> Lưu
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-sm-flex justify-content-between text-center py-2">
                        <div class="user py-2 py-sm-0 text-left">
                            <div class="avatar rounded-circle">
                                <nuxt-link to="">
                                    <img :src="globalImageUrl('images-asset/No_Image_Available.jpg')" height="50px" width="50px">
                                </nuxt-link>
                            </div>
                            <div class="">
                                <div>
                                    <nuxt-link to="" class="name">
                                        Hoang
                                    </nuxt-link>
                                </div>
                                <div>
                                    <span class="single-time">
                                        Xuất bản 18 thg 7, 2019
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="subscribe py-2 py-sm-0">
                            <button type="button" class="btn btn-danger">
                                Đăng ký
                            </button>
                        </div>
                    </div>
                    <div class="description">
                        <p>
                            Bộ phim Extra English gồm 30 tập đây là một phim học tiếng Anh được rất nhiều người ưa thích trên thế giới. Ra đời sau các tập phim Friends trước, Extra dường như ưu việt hơn về mặt học tiếng Anh giao tiếp, nhất là những người mới bắt đầu học.
                        </p>
                        <p>
                            Phim có tính chất tâm lý nhưng rất hài hước. Sự hài hước và sựu lôi cuốn của nội dung phim và nhân vật nói tiếng Anh chậm, rõ ràng khiến cho phim Extra và phim Friends hiện nay được xem như là một công cụ không thể thiếu cho người học tiếng Anh trên toàn thế giới.
                        </p>
                        <div class="cat d-flex mt-2">
                            <div class="cat-name pr-sm-5 pr-2">
                                Danh mục:
                            </div>
                            <div class="cat-content">
                                <nuxt-link to="">Video Học tiếng Anh</nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="show-more-description mt-3">
                        <span class="cursor-pointer font-weight-bold">
                            Hiển thị thêm
                        </span>
                    </div>
                </div>
                <div class="col-lg-4 col-12 px-0 pl-lg-3 gl-video-detail__suggest-video pb-3">
                    <div class="border-top pt-3 pt-lg-0"></div>
                    <nuxt-link to="" class="d-flex py-2">
                        <div class="image col-5 px-0">
                            <img :src="globalImageUrl('images-asset/No_Image_Available.jpg')">
                        </div>
                        <div class="col pr-0">
                            <div class="title">
                                Phim Extra English 1: Hectors arrival - Phụ Đề Song Ngữ Thông Minh
                            </div>
                            <div class="view mt-auto">
                                500.887 lượt xem
                            </div>
                            <div class="language">
                                <img :src="globalImageUrl('images-asset/No_Image_Available.jpg')" width="20px" height="10px">
                                <img :src="globalImageUrl('images-asset/No_Image_Available.jpg')" width="20px" height="10px">
                            </div>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="" class="d-flex py-2">
                        <div class="image col-5 px-0">
                            <img :src="globalImageUrl('images-asset/No_Image_Available.jpg')">
                        </div>
                        <div class="col pr-0">
                            <div class="title">
                                Phim Extra English 1: Hectors arrival - Phụ Đề Song Ngữ Thông Minh
                            </div>
                            <div class="view mt-auto">
                                500.887 lượt xem
                            </div>
                            <div class="language">
                                <img :src="globalImageUrl('images-asset/No_Image_Available.jpg')" width="20px" height="10px">
                                <img :src="globalImageUrl('images-asset/No_Image_Available.jpg')" width="20px" height="10px">
                            </div>
                        </div>
                    </nuxt-link>
                </div>
                <div class="col-lg-8 col-12 mx-0 px-0 gl-video-detail__comments py-3 border-top">
                    <div class="count-comments font-weight-bold pb-2 border-bottom">34 comments</div>
                    <div class="alert-warning p-2 my-2">
                        Vui lòng đăng nhập để gửi bình luận.
                    </div>
                    <div class="py-2 user-comments">
                        <div class="d-flex">
                            <div class="avatar rounded-circle">
                                <a href="/video/detail" class="nuxt-link-exact-active nuxt-link-active">
                                    <img src="http://localhost:3000/images-asset/No_Image_Available.jpg" height="50px" width="50px">
                                </a>
                            </div>
                            <div class="col px-0">
                                <textarea class="w-100 px-2" placeholder="Thêm nhận xét công khai..." rows="1"></textarea>
                            </div>
                        </div>
                        <div class="text-right">
                            <button class="btn btn-success" type="button">Nhận xét</button>
                        </div>
                    </div>
                    <div class="cmt">
                        <div class="d-flex py-2 default-comments">
                            <div class="avatar rounded-circle">
                                <a href="/video/detail" class="nuxt-link-exact-active nuxt-link-active">
                                    <img src="http://localhost:3000/images-asset/No_Image_Available.jpg" height="50px" width="50px">
                                </a>
                            </div>
                            <div class="user-cmt-inf">
                                <div class="d-flex">
                                    <nuxt-link to="" class="user-name text-dark font-weight-bold font-size-14">
                                        NadeKing
                                    </nuxt-link>
                                    <span class="font-size-12 gl-color-777 my-auto ml-2">1 ngày trước</span>
                                </div>
                                <div>
                                    Smoke grenade: I can extinguish fire. Players: Extinguish this fire.
                                </div>
                                <div>
                                    <nuxt-link to="">
                                        Reply
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex py-2 reply-comments">
                            <div class="avatar rounded-circle">
                                <a href="/video/detail" class="nuxt-link-exact-active nuxt-link-active">
                                    <img src="http://localhost:3000/images-asset/No_Image_Available.jpg" height="50px" width="50px">
                                </a>
                            </div>
                            <div>
                                <div class="d-flex">
                                    <nuxt-link to="" class="user-name text-dark font-weight-bold font-size-14">
                                        NadeKing
                                    </nuxt-link>
                                    <span class="font-size-12 gl-color-777 my-auto ml-2">1 ngày trước</span>
                                </div>
                                <div>
                                    Smoke grenade: I can extinguish fire. Players: Extinguish this fire.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cmt">
                        <div class="d-flex py-2 default-comments">
                            <div class="avatar rounded-circle">
                                <a href="/video/detail" class="nuxt-link-exact-active nuxt-link-active">
                                    <img src="http://localhost:3000/images-asset/No_Image_Available.jpg" height="50px" width="50px">
                                </a>
                            </div>
                            <div class="user-cmt-inf">
                                <div class="d-flex">
                                    <nuxt-link to="" class="user-name text-dark font-weight-bold font-size-14">
                                        NadeKing
                                    </nuxt-link>
                                    <span class="font-size-12 gl-color-777 my-auto ml-2">1 ngày trước</span>
                                </div>
                                <div>
                                    Smoke grenade: I can extinguish fire. Players: Extinguish this fire.
                                </div>
                                <div>
                                    <nuxt-link to="">
                                        Reply
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex py-2 reply-comments">
                            <span class="cursor-pointer font-weight-bold">
                                Xem 17 câu trả lời <i class="far fa-chevron-down"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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