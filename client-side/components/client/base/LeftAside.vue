<template>
    <div class="position-fixed top-0 left-aside vh-100 d-none d-lg-block font-14 transition-normal" id :class="{'': !isLeftAsideHidden }">
        <div class="position-relative h-100 aside-wrapper">
            <div class="vw-100 h-100 bg-dark-alpha position-absolute z-index-99"
                :class="{'translateX--100': isLeftAsideHidden, 'd-none': $route.name == 'index' || this.$route.name == 'search-result' }"
                @click="toggleLeftAside"></div>
            <div class="position-absolute navi-icon cursor-pointer z-index-101">
                <i class="fal fa-bars" @click="toggleLeftAside"></i>
            </div>
            <div class="overflow-auto content-box h-100 bg-light z-index-100 transition-normal position-relative"
                id="leftAside" :class="{'zoom-out': isLeftAsideHidden, 'translateX--100': ($route.name == 'profile' || $route.name == 'video-detail-slug') && isLeftAsideHidden }">
                <div class="original-list">
                    <template v-if="!isLeftAsideHidden">
                        <div class>
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-main">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-home"></i>
                                </div>
                                <div>Trang chủ</div>
                            </nuxt-link>
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="far fa-fire-alt"></i>
                                </div>
                                <div>Thịnh hành</div>
                            </nuxt-link>
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-paper-plane"></i>
                                </div>
                                <div>Kênh đăng ký</div>
                            </nuxt-link>
                        </div>
                        <hr />
                        <div class="transition-normal position-relative" id="headerPlaylist">
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-folder"></i>
                                </div>
                                <div>Thư viện</div>
                            </nuxt-link>
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fal fa-history"></i>
                                </div>
                                <div>Lịch sử</div>
                            </nuxt-link>
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div>Xem sau</div>
                            </nuxt-link>
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-thumbs-up"></i>
                                </div>
                                <div>Đã thích</div>
                            </nuxt-link>
                            <nuxt-link to :class=" isSeeMorePlaylist ? 'd-flex' : 'd-none' "
                                class="align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-stream"></i>
                                </div>
                                <div>Danh sách số 1</div>
                            </nuxt-link>
                            <nuxt-link to :class=" isSeeMorePlaylist ? 'd-flex' : 'd-none' "
                                class="align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-stream"></i>
                                </div>
                                <div>Danh sách số 1</div>
                            </nuxt-link>
                            <nuxt-link to :class=" isSeeMorePlaylist ? 'd-flex' : 'd-none' "
                                class="align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-stream"></i>
                                </div>
                                <div>Danh sách số 1</div>
                            </nuxt-link>
                            <nuxt-link to :class=" isSeeMorePlaylist ? 'd-flex' : 'd-none' "
                                class="align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-stream"></i>
                                </div>
                                <div>Danh sách số 1</div>
                            </nuxt-link>
                            <nuxt-link to :class=" isSeeMorePlaylist ? 'd-flex' : 'd-none' "
                                class="align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-stream"></i>
                                </div>
                                <div>Danh sách số 1</div>
                            </nuxt-link>
                            <div class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary cursor-pointer text-event-main transition-normal"
                                @click="showMorePlaylist">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-chevron-down transition-normal"
                                        :class=" isSeeMorePlaylist ? 'fa-rotate-180' : '' "></i>
                                </div>
                                <div>{{ isSeeMorePlaylist ? 'Rút gọn' : 'Xem thêm' }}</div>
                            </div>
                        </div>
                        <hr />
                        <div class="transition-normal position-relative" id="headerSubcribe">
                            <div class="pl-4 font-weight-bold text-uppercase text-secondary mb-2">kênh đăng ký</div>
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <img :src="globalImageUrl('images-asset/test.jpg')" class="img-cover" />
                                </div>
                                <div class="text-truncate">Thư viện</div>
                            </nuxt-link>
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <img :src="globalImageUrl('images-asset/test.jpg')" class="img-cover" />
                                </div>
                                <div class="text-truncate">Thư viện</div>
                            </nuxt-link>
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <img :src="globalImageUrl('images-asset/test.jpg')" class="img-cover" />
                                </div>
                                <div class="text-truncate">Thư viện</div>
                            </nuxt-link>
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <img :src="globalImageUrl('images-asset/test.jpg')" class="img-cover" />
                                </div>
                                <div class="text-truncate">Thư viện</div>
                            </nuxt-link>
                            <nuxt-link to :class=" isSeeMoreSubscribe ? 'd-flex' : 'd-none' "
                                class="align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <img :src="globalImageUrl('images-asset/test.jpg')" class="img-cover" />
                                </div>
                                <div class="text-truncate">Thư viện</div>
                            </nuxt-link>
                            <nuxt-link to :class=" isSeeMoreSubscribe ? 'd-flex' : 'd-none' "
                                class="align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <img :src="globalImageUrl('images-asset/test.jpg')" class="img-cover" />
                                </div>
                                <div class="text-truncate">Thư viện</div>
                            </nuxt-link>
                            <nuxt-link to :class=" isSeeMoreSubscribe ? 'd-flex' : 'd-none' "
                                class="align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <img :src="globalImageUrl('images-asset/test.jpg')" class="img-cover" />
                                </div>
                                <div class="text-truncate">Thư viện</div>
                            </nuxt-link>
                            <nuxt-link to :class=" isSeeMoreSubscribe ? 'd-flex' : 'd-none' "
                                class="align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <img :src="globalImageUrl('images-asset/test.jpg')" class="img-cover" />
                                </div>
                                <div class="text-truncate">Thư viện</div>
                            </nuxt-link>
                            <nuxt-link to :class=" isSeeMoreSubscribe ? 'd-flex' : 'd-none' "
                                class="align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <img :src="globalImageUrl('images-asset/test.jpg')" class="img-cover" />
                                </div>
                                <div class="text-truncate">Thư viện</div>
                            </nuxt-link>
                            <div class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary cursor-pointer text-event-main transition-normal"
                                @click="showMoreSubcribe">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-chevron-down transition-normal"
                                        :class=" isSeeMoreSubscribe ? 'fa-rotate-180' : '' "></i>
                                </div>
                                <div>{{ isSeeMoreSubscribe ? 'Rút gọn' : 'Xem thêm' }}</div>
                            </div>
                        </div>
                        <hr />
                        <div class="transition-normal position-relative" id="anotherServices">
                            <div class="pl-4 font-weight-bold text-uppercase text-secondary mb-2">dịch vụ khác của
                                ABCXYZ</div>
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-poll"></i>
                                </div>
                                <div class="text-truncate">Dịch vụ A</div>
                            </nuxt-link>
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-poll"></i>
                                </div>
                                <div class="text-truncate">Dịch vụ B</div>
                            </nuxt-link>
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-poll"></i>
                                </div>
                                <div class="text-truncate">Dịch vụ C</div>
                            </nuxt-link>
                        </div>
                        <hr />
                        <div class="transition-normal position-relative">
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-cog"></i>
                                </div>
                                <div>Cài đặt</div>
                            </nuxt-link>
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-flag"></i>
                                </div>
                                <div>Báo cáo</div>
                            </nuxt-link>
                            <nuxt-link to
                                class="d-flex align-items-center py-2 bg-event-gray cursor-pointer pl-4 text-secondary">
                                <div class="mr-3 d-flex align-items-center">
                                    <i class="fas fa-comment-alt-exclamation"></i>
                                </div>
                                <div>Phản hồi</div>
                            </nuxt-link>
                        </div>
                        <hr />
                        <div class="d-flex flex-wrap pl-4">
                            <nuxt-link to class="mr-3 text-secondary">Giới thiệu</nuxt-link>
                            <nuxt-link to class="mr-3 text-secondary">Bản quyền</nuxt-link>
                            <nuxt-link to class="mr-3 text-secondary">Liên hệ với chúng tôi</nuxt-link>
                            <nuxt-link to class="mr-3 text-secondary">Giới thiệu</nuxt-link>
                            <nuxt-link to class="mr-3 text-secondary">Giới thiệu</nuxt-link>
                            <nuxt-link to class="mr-3 text-secondary">Giới thiệu</nuxt-link>
                            <nuxt-link to class="mr-3 text-secondary">Giới thiệu</nuxt-link>
                            <nuxt-link to class="mr-3 text-secondary">Giới thiệu</nuxt-link>
                            <nuxt-link to class="mr-3 text-secondary">Giới thiệu</nuxt-link>
                        </div>
                        <div class="pl-4 my-4">&copy; 2019 TOEIC-VIDEO</div>
                    </template>
                    <template v-else-if="$route.name != 'profile' && $route.name != 'video-detail-slug'">
                        <nuxt-link to class="d-block py-3 bg-event-gray text-center text-main">
                            <div>
                                <i class="fas fa-home"></i>
                            </div>
                            <div class="font-10">Trang chủ</div>
                        </nuxt-link>
                        <nuxt-link to class="d-block py-3 bg-event-gray text-center text-dark">
                            <div>
                                <i class="far fa-fire-alt"></i>
                            </div>
                            <div class="font-10">Thịnh hành</div>
                        </nuxt-link>
                        <nuxt-link to class="d-block py-3 bg-event-gray text-center text-dark">
                            <div>
                                <i class="fas fa-paper-plane"></i>
                            </div>
                            <div class="font-10">Kênh đăng ký</div>
                        </nuxt-link>
                        <nuxt-link to class="d-block py-3 bg-event-gray text-center text-dark">
                            <div>
                                <i class="fas fa-folder"></i>
                            </div>
                            <div class="font-10">Thư viện</div>
                        </nuxt-link>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isLeftAsideHidden: false,
                isSeeMorePlaylist: false,
                heightOfPlaylistWhenShorted: 0,
                isSeeMoreSubscribe: false,
                heightOfSubcribeWhenShorted: 0,
                windowWidth: 0,
            };
        },
        methods: {
            // toggle left aside
            toggleLeftAside() {
                this.isLeftAsideHidden = !this.isLeftAsideHidden;
                document
                    .querySelector(".gl-container")
                    .classList.toggle("gl-wrap--padding-left");

                this.getHeightOfTwoLists();
            },
            showMorePlaylist() {
                if (this.isSeeMorePlaylist) {
                    document.getElementById(
                        "headerPlaylist"
                    ).style.height = `${this.heightOfPlaylistWhenShorted}px`;
                } else {
                    document.getElementById("headerPlaylist").style.height = "";
                }

                this.isSeeMorePlaylist = !this.isSeeMorePlaylist;

                if (this.isSeeMoreSubscribe) {
                    this.isSeeMoreSubscribe = false;
                    document.getElementById(
                        "headerSubcribe"
                    ).style.height = `${this.heightOfSubcribeWhenShorted}px`;
                }
            },
            showMoreSubcribe() {
                if (this.isSeeMoreSubscribe) {
                    document.getElementById(
                        "headerSubcribe"
                    ).style.height = `${this.heightOfSubcribeWhenShorted}px`;
                } else {
                    document.getElementById("headerSubcribe").style.height = "";
                }

                this.isSeeMoreSubscribe = !this.isSeeMoreSubscribe;

                if (this.isSeeMorePlaylist) {
                    this.isSeeMorePlaylist = false;
                    document.getElementById(
                        "headerPlaylist"
                    ).style.height = `${this.heightOfPlaylistWhenShorted}px`;
                }
            },
            getHeightOfTwoLists() {
                this.heightOfPlaylistWhenShorted = document.getElementById(
                        "headerPlaylist"
                    ) ?
                    document.getElementById("headerPlaylist").offsetHeight :
                    "";
                this.heightOfSubcribeWhenShorted = document.getElementById(
                        "headerSubcribe"
                    ) ?
                    document.getElementById("headerSubcribe").offsetHeight :
                    "";
            },
            handleWindowSize() {
                this.windowWidth = window.innerWidth;

                if (this.windowWidth > 991) document.querySelector(".gl-container").style.paddingLeft = "75px";
                else document.querySelector(".gl-container").style.paddingLeft = "";
            }
        },
        mounted() {
            window.addEventListener('resize', this.handleWindowSize);
            this.handleWindowSize();
            
            if (this.$route.name != "index" && this.$route.name != 'search-result') {
                this.isLeftAsideHidden = true;
                let container = document.querySelector(".gl-container");
                if (container) {
                    container.classList.remove("gl-wrap--padding-left");
                }
            }

            if (
                this.$route.name !== "video-detail-slug" &&
                this.$route.name !== "profile" &&
                this.windowWidth > 991
            ) {
                document.querySelector(".gl-container").style.paddingLeft = "75px";
            } else {

            }

            // see more options in two list
            this.getHeightOfTwoLists();
        },
        watch: {
            'window.innerWidth': (newValue, oldValue) => {
                console.log(newValue);
            }
        }
    };
</script>