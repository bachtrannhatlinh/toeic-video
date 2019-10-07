<template>
    <div class="gl-container gl-wrap--padding-left transition-normal ">
        <!-- Modal -->
        <div class="modal fade" id="listPlylist" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        
                        <h5 class="modal-title" id="exampleModalLabel">
                            Lưu vào ...
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h1 class=" text-danger">
                            check this later/ i dont really know if it exists or not
                        </h1>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save
                            changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- content -->
        <div class="container">
            <div class="row">
                <!-- title -->
                <div class="col-12 font-weight-bolder mt-2">
                    Đề xuất
                </div>
                <!-- content -->
                <template v-for="(video, index) in videoRecommend">
                    <div class="col-lg-3 col-md-4 col-sm-6 item-video mt-2" :key="index">
                        <nuxt-link class="d-block" :to="`video/detail/` + video.slug">
                            <div class="position-relative">
                                <img :src="globalImageUrl(video.image ? video.image : 'images-asset/test.jpg')" class="w-100 image-thumbnail transition-normal">
                                <div
                                    class="position-absolute bottom-0 right-0 mr-2 mb-2 time-status px-1 text-white rounded transition-normal font-10 font-lg-14">
                                    3:28
                                </div>
                            </div>
                        </nuxt-link>
                        <div class="position-relative">
                            <nuxt-link :to="`video/detail/` + video.slug" class="mt-1 h-3em overflow-hidden text-dark pr-3 mr-2 font-12 font-lg-16">
                                {{ video.title}}
                            </nuxt-link>
                            <nuxt-link :to="`channel/` + video.user.channel.slug" class="text-secondary d-flex align-items-baseline font-14 mt-n1">
                                <div class="mr-1 text-truncate font-12">{{ video.user.channel.title }}</div>
                                <div>
                                    <i class="fas fa-check-circle"></i>
                                </div>
                            </nuxt-link>
                            <nuxt-link class="d-flex align-items-baseline font-10 font-9 font-lg-12 mt-1 text-secondary"
                                to="">
                                <div>{{ globalFormatNumber(video.view,".") }} lượt xem</div>
                                <div class="mx-1">•</div>
                                <div>{{ globalFormatDate(video.createdAt) }}</div>
                            </nuxt-link>
                            <div class="cursor-pointer position-absolute mt-1 top-0 right-0 z-index-99">
                                <div class="position-relative video-more-options">
                                    <i class="fas fa-ellipsis-h fa-rotate-90 text-secondary p-1 rounded-circle bg-event-gray transition-normal showDrop"
                                        @click="globalShowDrop('showVideoMoreOptions1')" />
                                    <div id="showVideoMoreOptions1"
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
                                                <!-- another options -->
                                                <hr class="my-1">
                                                <div class="cursor-pointer bg-event-gray px-3 py-2 transition-normal">
                                                    <div class="d-flex align-items-center">
                                                        <div class="d-flex align-items-center mr-1 mr-md-3 font-16">
                                                            <i class="fal fa-ban"></i>
                                                        </div>
                                                        <div>
                                                            Không quan tâm
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="cursor-pointer bg-event-gray px-3 py-2 transition-normal">
                                                    <div class="d-flex align-items-center">
                                                        <div class="d-flex align-items-center mr-1 mr-md-3 font-16">
                                                            <i class="fas fa-flag"></i>
                                                        </div>
                                                        <div>
                                                            Báo cáo vi phạm
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
            </div>
            <div class="row">
                <div class="col-12 px-0">
                    <hr>
                </div>
                <!-- title -->
                <div class="col-12 font-weight-bolder mt-2">
                    Mới tải lên gần đây
                </div>
                <!-- content -->
                <template v-for="(video, index) in videoLatest">
                    <div class="col-lg-3 col-md-4 col-sm-6 item-video mt-2" :key="index">
                        <nuxt-link class="d-block" :to="`video/detail/` + video.slug">
                            <div class="position-relative">
                                <img :src="globalImageUrl(video.image ? video.image : 'images-asset/test.jpg')" class="w-100 image-thumbnail transition-normal">
                                <div
                                    class="position-absolute bottom-0 right-0 mr-2 mb-2 time-status px-1 text-white rounded transition-normal font-10 font-lg-14">
                                    3:28
                                </div>
                            </div>
                        </nuxt-link>
                        <div class="position-relative">
                            <nuxt-link :to="`video/detail/` + video.slug" class="mt-1 h-3em overflow-hidden text-dark pr-3 mr-2 font-12 font-lg-16">
                                {{ video.title }}
                            </nuxt-link>
                            <nuxt-link :to="`channel/` + video.user.channel.slug" class="text-secondary d-flex align-items-baseline font-14 mt-n1">
                                <div class="mr-1 text-truncate font-12">
                                    {{ video.user.channel.title }}
                                </div>
                                <div>
                                    <i class="fas fa-check-circle"></i>
                                </div>
                            </nuxt-link>
                            <nuxt-link class="d-flex align-items-baseline font-10 font-9 font-lg-12 mt-1 text-secondary"
                                to="">
                                <div>{{ globalFormatNumber(video.view,".") }} lượt xem</div>
                                <div class="mx-1">•</div>
                                <div>{{ globalFormatDate(video.createdAt) }}</div>
                            </nuxt-link>
                            <div class="cursor-pointer position-absolute mt-1 top-0 right-0 z-index-99">
                                <div class="position-relative video-more-options">
                                    <i class="fas fa-ellipsis-h fa-rotate-90 text-secondary p-1 rounded-circle bg-event-gray transition-normal showDrop"
                                        @click="globalShowDrop('showVideoMoreOptions6')" />
                                    <div id="showVideoMoreOptions6"
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
                                                <!-- another options -->
                                                <hr class="my-1">
                                                <div class="cursor-pointer bg-event-gray px-3 py-2 transition-normal">
                                                    <div class="d-flex align-items-center">
                                                        <div class="d-flex align-items-center mr-1 mr-md-3 font-16">
                                                            <i class="fal fa-ban"></i>
                                                        </div>
                                                        <div>
                                                            Không quan tâm
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="cursor-pointer bg-event-gray px-3 py-2 transition-normal">
                                                    <div class="d-flex align-items-center">
                                                        <div class="d-flex align-items-center mr-1 mr-md-3 font-16">
                                                            <i class="fas fa-flag"></i>
                                                        </div>
                                                        <div>
                                                            Báo cáo vi phạm
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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                videoRecommend: '',
                videoLatest: '',
            }
        },
        created() {
            this.initVideo();
        },
        methods: {
            initVideo(){
                this.$http.get(`videos/recommend?recommendLimit=8&latestLimit=8`)
                .then((response) => {
                    this.videoRecommend = response.data.recommend;
                    this.videoLatest = response.data.latest;
                })
                .catch((response) => {
                    if(response.status == 404){
                        this.$toastr("error",response.data.message);
                    }
                });
            }
        },
    }
</script>