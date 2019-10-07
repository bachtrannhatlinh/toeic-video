<template>
    <div class="gl-container gl-wrap--padding-left transition-normal channel overflow-hidden mb-n3" >
        <div v-if="channel" class="gl-position-center">
            <img :src="globalImageUrl(channel.banner ? channel.banner:'images-asset/channels4_banner.jpg')"
                class="w-100 d-block channel__banner img-cover transition-normal" id="channelBanner" alt />
        </div>
        <div v-if="!isExist" class="gl-position-center">
            <img :src="globalImageUrl('images-asset/channels4_banner.jpg')"
                class="w-100 d-block channel__banner img-cover transition-normal" id="channelBanner" alt />
                <div class="gl-text-warning text-center">
                    Channel này không tồn tại
                </div>
        </div>
        <div class="container" v-if="channel">
            <div class="overflow-hidden">
                <div class="d-sm-flex align-content-center my-md-4 my-2 justify-content-between px-lg-5">
                    <div class="d-flex align-items-center">
                        <div>
                            <img :src="globalImageUrl(channel.user.avatar ? channel.user.avatar : 'images-asset/unnamed.jpg')" alt
                                class="square-img channel__avatar rounded-circle img-contain" />
                        </div>
                        <div class="ml-3">
                            <div class="font-md-24">{{ channel.title }}</div>
                            <div class="text-secondary" v-if="channel.statusSub=='show'">
                                {{ globalFormatNumber(channel.subcribes, ".") }} người đăng ký
                            </div>
                        </div>
                    </div>
                    <template v-if="$store.state.user.data.id != channel.user_id">
                        <div class="d-flex align-items-center mt-2 mt-md-0">
                            <button :class="channel.subcribers.length ? 'bg-secondary' : 'bg-main'" class="text-white btn rounded-0 px-4 d-inline-block mx-auto" @click="globalAuthDirect('channel-slug', '', $route.query, $route.params), registerChannel()">
                                <template v-if="channel.subcribers.length">
                                    HỦY ĐĂNG KÝ
                                </template>
                                <template v-else>
                                    ĐĂNG KÝ
                                </template>
                                {{ channel.statusSub == 'show' ? globalFormatNumber(channel.subcribes, "."):'' }}
                            </button>
                        </div>
                    </template>
                </div>
                <div class="d-flex align-items-center px-lg-5 my-4 text-nowrap font-12 font-md-16 overflow-auto">
                    <div class="p-md-3 p-2 border-bottom cursor-pointer border-2 bg-hover-light transition-normal">
                        TRANG CHỦ
                    </div>
                    <div
                        class="p-md-3 p-2 border-bottom cursor-pointer border-2 transition-normal border-transparent bg-hover-light">
                        VIDEO
                    </div>
                    <div
                        class="p-md-3 p-2 border-bottom cursor-pointer border-2 transition-normal border-transparent bg-hover-light">
                        DANH SÁCH PHÁT
                    </div>
                    <div
                        class="p-md-3 p-2 border-bottom cursor-pointer border-2 transition-normal border-transparent bg-hover-light">
                        GIỚI THIỆU
                    </div>
                </div>
                <template v-if="featuredVideos.length">
                    <div class="d-md-flex my-4 mx-md-3">
                        <div class="video-preview">
                            <nuxt-link class="d-block w-100" to="/">
                                <img :src="globalImageUrl(featuredVideos[0].image ? featuredVideos[0].image : 'images-asset/unnamed.jpg')"
                                    class="img-cover image-thumbnail d-block w-100">
                            </nuxt-link>
                        </div>
                        <div class="position-relative ml-md-3 mt-2 mt-md-0 video-description">
                            <nuxt-link to="" class="d-block mr-md-4 text-secondary pr-md-2 font-13 font-md-16 my-md-1">
                                {{ featuredVideos[0].title }}
                            </nuxt-link>
                            <div class="text-secondary font-12 my-md-2 my-1">
                                <span>
                                    {{ channel.title }} <i class="fas fa-check-circle"></i>
                                </span>
                                <span>
                                    {{ globalFormatNumber(featuredVideos[0].view, ".") }} lượt xem
                                </span>
                                <span class="mx-1">
                                    •
                                </span>
                                <span>
                                    {{ globalFormatDate(featuredVideos[0].createdAt) }}
                                </span>
                            </div>
                            <div class="font-13 d-none d-md-block" v-html="globalLimitDescription(featuredVideos[0].description)">
                            </div>
                        </div>
                    </div>
                    <template v-if="featuredVideos.length > 1">
                        <hr class="mx-md-3">
                        <div class="mx-md-3 d-flex align-items-center my-2 font-14 font-md-16">
                            <div>
                                Video tải lên
                            </div>
                            <nuxt-link to="" class="text-black ml-2 d-flex align-items-center">
                                <i class="fas fa-caret-right mx-2 font-20"></i> <span>PHÁT TẤT CẢ</span>
                            </nuxt-link>
                        </div>
                        <div class="mx-md-2">
                            <Slick :options="listImageOption1">
                                <template v-for="index in featuredVideos.length">
                                    <div class="px-2" :key="index" v-if="index < featuredVideos.length">
                                        <nuxt-link class="d-block" to="">
                                            <div class="position-relative">
                                                <img :src="globalImageUrl(featuredVideos[index].image ? featuredVideos[index].image : 'images-asset/unnamed.jpg')"
                                                    class="w-100 image-thumbnail transition-normal">
                                                <div
                                                    class="position-absolute bottom-0 right-0 mr-2 mb-2 time-status px-1 text-white rounded transition-normal font-10 font-lg-14">
                                                    3:28
                                                </div>
                                            </div>
                                        </nuxt-link>
                                        <div class="position-relative">
                                            <nuxt-link to=""
                                                class="mt-1 h-3em overflow-hidden text-dark pr-3 mr-2 font-12 font-lg-16">
                                                {{ featuredVideos[index].title }}
                                            </nuxt-link>
                                            <nuxt-link to="" class="text-secondary d-flex align-items-baseline font-14 mt-n1">
                                                <div class="mr-1 text-truncate font-12">{{ channel.title }}</div>
                                                <div>
                                                    <i class="fas fa-check-circle"></i>
                                                </div>
                                            </nuxt-link>
                                            <nuxt-link class="d-flex align-items-baseline font-12 mt-1 text-secondary" to="">
                                                <div>{{ globalFormatNumber(featuredVideos[index].view, ".") }} lượt xem</div>
                                                <div class="mx-1">•</div>
                                                <div>{{ globalFormatDate(featuredVideos[index].createdAt) }}</div>
                                            </nuxt-link>
                                            <div class="cursor-pointer position-absolute mt-1 top-0 right-0 z-index-99">
                                                <div class="position-relative video-more-options">
                                                    <i class="fas fa-ellipsis-h fa-rotate-90 text-secondary p-1 rounded-circle bg-event-gray transition-normal showDrop"
                                                        @click="globalShowDrop('showVideoMoreOptions1')" />
                                                    <div id="showVideoMoreOptions1"
                                                        class="dropdown-menu d-none top-100 right-0 rounded-0 box-shadow-normal py-2 font-12 font-lg-14">
                                                        <div class="position-relative">
                                                            <div class="text-nowrap">
                                                                <div
                                                                    class="cursor-pointer bg-event-gray px-3 py-2 transition-normal">
                                                                    <div class="d-flex align-items-center">
                                                                        <div class="d-flex align-items-center mr-1 mr-md-3 font-16">
                                                                            <i class="fas fa-clock"></i>
                                                                        </div>
                                                                        <div>
                                                                            Lưu vào danh sách Xem sau
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="cursor-pointer bg-event-gray px-3 py-2 transition-normal"
                                                                    data-toggle="modal" data-target="#listPlylist">
                                                                    <div class="d-flex align-items-center">
                                                                        <div class="d-flex align-items-center mr-1 mr-md-3 font-16">
                                                                            <i class="fas fa-folder-plus"></i>
                                                                        </div>
                                                                        <div>
                                                                            Lưu vào danh sách phát
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </Slick>
                        </div>
                    
                        <!--  -->
                        <hr class="mx-3">
                        <div class="mx-md-3 d-flex align-items-center my-2 font-14 font-md-16">
                            <div>
                                Video tải lên phổ biến
                            </div>
                            <nuxt-link to="" class="text-black ml-2 d-flex align-items-center">
                                <i class="fas fa-caret-right mx-2 font-20"></i> <span>PHÁT TẤT CẢ</span>
                            </nuxt-link>
                        </div>
                        <template v-for="index in popularVideos.length">
                            <div class="d-md-flex my-4 mx-3" :key="index" v-if="index-- <= popularVideos.length">
                                <div class="video-preview" :key="index">
                                    <nuxt-link class="d-block w-100" to="/">
                                        <img :src="globalImageUrl(popularVideos[index].image ? popularVideos[index].image : 'images-asset/unnamed.jpg')"
                                            class="img-cover image-thumbnail d-block w-100">
                                    </nuxt-link>
                                </div>
                                <div class="position-relative ml-md-3 video-description">
                                    <nuxt-link to="" class="d-block mr-4 text-secondary pr-2 font-13 font-md-16 my-md-1">
                                        {{ popularVideos[index].title }}
                                    </nuxt-link>
                                    <div class="text-secondary font-12 my-md-2 my-1">
                                        <span>
                                            {{ channel.title }} <i class="fas fa-check-circle"></i>
                                        </span>
                                        <span class="d-block d-sm-inline mt-1 mt-sm-0">
                                            {{ globalFormatNumber(popularVideos[index].view, ".") }} lượt xem • {{ globalFormatDate(popularVideos[index].createdAt) }}
                                        </span>
                                    </div>
                                    <div class="font-13 d-none d-md-block" v-html="globalLimitDescription(popularVideos[index].description)"></div>
                                    <div class="position-absolute top-0 right-0 video-more-options">
                                        <i class="fas fa-ellipsis-h fa-rotate-90 text-secondary p-1 rounded-circle bg-event-gray transition-normal showDrop"
                                            @click="globalShowDrop('showVideoMoreOptions7')" />
                                        <div id="showVideoMoreOptions7"
                                            class="dropdown-menu d-none top-100 right-0 rounded-0 box-shadow-normal py-2 font-12 font-lg-14">
                                            <div class="position-relative">
                                                <div class="text-nowrap">
                                                    <div class="cursor-pointer bg-event-gray px-3 py-2 transition-normal">
                                                        <div class="d-flex align-items-center">
                                                            <div class="d-flex align-items-center mr-1 mr-md-3 font-16">
                                                                <i class="fas fa-clock"></i>
                                                            </div>
                                                            <div>
                                                                Lưu vào danh sách Xem sau
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="cursor-pointer bg-event-gray px-3 py-2 transition-normal"
                                                        data-toggle="modal" data-target="#listPlylist">
                                                        <div class="d-flex align-items-center">
                                                            <div class="d-flex align-items-center mr-1 mr-md-3 font-16">
                                                                <i class="fas fa-folder-plus"></i>
                                                            </div>
                                                            <div>
                                                                Lưu vào danh sách phát
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listImageOption1: {
                    // autoplay: true,
                    arrows: true,
                    prevArrow: '<i class="fal fa-chevron-left left-0"/>',
                    nextArrow: '<i class="fal fa-chevron-right right-0"/>',
                    mobileFirst: true,
                    infinite: false,
                    responsive: [{
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4,
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            }
                        },
                        {
                            breakpoint: 400,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            }
                        },
                        {
                            breakpoint: 0,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        }
                    ],
                },
                channel: '',
                featuredVideos: '',
                popularVideos: '',
                isExist: true,
            }
        },
        created() {
            this.initChannel();
        },
        methods: {
            initChannel(){
                this.$http.get(`channel/detail/${this.$route.params.slug}/?limitFeatured=10&limitPopular=6`)
                .then((response) => {
                    this.channel = response.data.data;
                    this.featuredVideos = response.data.featuredVideos;
                    this.popularVideos = response.data.popularVideos;
                })
                .catch((response) => {
                    if(response.status == 404){
                        this.isExist = false;
                    }
                });
            },
            registerChannel(){
                this.$http.post(`channel/sub/${this.channel.id}`)
                .then((response) => {
                    this.initChannel();
                    this.$toastr("success",response.data.message);
                })
            },
            setHeightOfBanner: function() {
                var imageBanner = document.getElementById("channelBanner");
                if(imageBanner) {
                    imageBanner.style.height = `${imageBanner.offsetWidth / 5}px`;
                }
            }
        },
        mounted() {
            this.changeBannerHeight = setInterval(function() {
                this.setHeightOfBanner();
            }.bind(this), 100);
        },
        beforeDestroy() {
            clearInterval(this.changeBannerHeight)
        },
    };
</script>