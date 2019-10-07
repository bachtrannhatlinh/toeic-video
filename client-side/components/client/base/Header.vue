<template>
	<div v-if="window.width > 991" class="container-fluid bg-light fixed-top">
		<nav class="navbar navbar-expand-lg navbar-light gl-header flex-nowrap">
			<div class="left-content d-flex align-items-center mr-3">
				<nuxt-link to="/" class="ml-5 logo text-black text-event-black">Toeic Video</nuxt-link>
			</div>
			<div class="center-content mx-auto">
				<div class="d-flex header-search position-relative">
					<input class="form-control flex-grow-1 rounded-0 border-right-0 border" type="search"
						placeholder="Tìm kiếm" aria-label="Search" @blur="closeSearchSuggestions()"
						v-model="searchData">
					<button class="btn btn-light border px-4 my-2 my-sm-0 rounded-0 text-secondary"><i
							class="fal fa-search" /></button>
					<!-- Search Suggestions -->
					<div class="position-absolute top-100 w-100 left-0 transition-normal opacity-0 mt-2 bg-white box-shadow-normal overflow-auto"
						id="search-suggestions" :class="{ 'd-none': !searchSuggestions }">
						<div class="position-relative w-100 bg-white bd-radius-4 box-shadow-normal overflow-auto h-100">
							<div class="py-1 px-2 cursor-pointer transition-normal text-truncate"
								@click="showSearchResult(1)">
								Nước hoa Thái
							</div>
							<div class="py-1 px-2 cursor-pointer transition-normal text-truncate"
								@click="showSearchResult(2)">
								Dầu bôi trơn
							</div>
							<div class="py-1 px-2 cursor-pointer transition-normal text-truncate"
								@click="showSearchResult(3)">
								Combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
								combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
							</div>
							<div class="py-1 px-2 cursor-pointer transition-normal text-truncate"
								@click="showSearchResult(3)">
								Combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
								combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
							</div>
							<div class="py-1 px-2 cursor-pointer transition-normal text-truncate"
								@click="showSearchResult(3)">
								Combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
								combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
							</div>
							<div class="py-1 px-2 cursor-pointer transition-normal text-truncate"
								@click="showSearchResult(3)">
								Combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
								combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
							</div>
							<div class="py-1 px-2 cursor-pointer transition-normal text-truncate"
								@click="showSearchResult(3)">
								Combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
								combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
							</div>
							<div class="py-1 px-2 cursor-pointer transition-normal text-truncate"
								@click="showSearchResult(3)">
								Combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
								combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
							</div>
							<div class="py-1 px-2 cursor-pointer transition-normal text-truncate"
								@click="showSearchResult(3)">
								Combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
								combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
							</div>
							<div class="py-1 px-2 cursor-pointer transition-normal text-truncate"
								@click="showSearchResult(3)">
								Combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
								combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
							</div>
							<div class="py-1 px-2 cursor-pointer transition-normal text-truncate"
								@click="showSearchResult(3)">
								Combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
								combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
							</div>
							<div class="py-1 px-2 cursor-pointer transition-normal text-truncate"
								@click="showSearchResult(3)">
								Combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
								combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
							</div>
							<div class="py-1 px-2 cursor-pointer transition-normal text-truncate"
								@click="showSearchResult(3)">
								Combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
								combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
							</div>
							<div class="py-1 px-2 cursor-pointer transition-normal text-truncate"
								@click="showSearchResult(3)">
								Combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
								combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
							</div>
							<div class="py-1 px-2 cursor-pointer transition-normal text-truncate"
								@click="showSearchResult(3)">
								Combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
								combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="right-content d-flex align-items-center justify-content-end ml-3">
				<div class="mr-3">
					<div class="text-nowrap">
						Số dư: $3.00
					</div>
				</div>
				<div class="mr-3 position-relative">
					<div class="position-relative" @click="globalShowDrop('showNotify')">
						<i class="fas fa-bell cursor-pointer text-event-main transition-normal showDrop" />

                        <div
                            class="position-absolute notify-banner top-0 bg-secondary rounded-circle text-white showDrop cursor-pointer">
                            9
                        </div>
                    </div>
                    <div id="showNotify"
                        class="position-absolute top-100 dropdown-menu d-none right-0 top-100 rounded-0 p-0">
                        <div class="position-relative">
                            <div class="bg-gray p-3 d-flex justify-content-between align-items-center">
                                <div>
                                    THÔNG BÁO
                                </div>
                                <div>
                                    <i class="fas fa-cog" />
                                </div>
                            </div>
                            <div class="">
                                <nuxt-link to=""
                                    class="d-flex font-12 font-md-16 text-black text-event-black bg-event-gray px-4 py-2 position-relative">
                                    <i class="fas fa-circle top-center position-absolute font-10 text-main ml-n3" />
                                    <!-- UNCHECK NOTIFICATION -->
                                    <div>
                                        <img :src="globalImageUrl('images-asset/test.jpg')" height="30" width="30"
                                            class="img-cover mt-1 rounded-circle">
                                    </div>
                                    <div class="mx-2 flex-grow-1">
                                        <div class="mb-2">
                                            W2W Cartoon đã tải lên: 30 Trang Bị NGẦU LÒI Trong Totally Spies
                                        </div>
                                        <small class="text-secondary">
                                            22 giờ trước
                                        </small>
                                    </div>
                                    <div>
                                        <img :src="globalImageUrl('images-asset/test.jpg')" height="60" width="80"
                                            class="img-contain mt-1">
                                    </div>
                                </nuxt-link>
                                <nuxt-link to=""
                                    class="d-flex font-12 font-md-16 text-black text-event-black bg-event-gray px-4 py-2 position-relative">
                                    <div>
                                        <img :src="globalImageUrl('images-asset/test.jpg')" height="30" width="30"
                                            class="img-cover mt-1 rounded-circle">
                                    </div>
                                    <div class="mx-2 flex-grow-1">
                                        <div class="mb-2">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis id quo
                                            odio
                                            praesentium doloribus tenetur omnis accusantium nam magnam provident? Eius
                                            reiciendis cumque veritatis autem tenetur dolore optio eum atque?
                                            <!-- shortand messenger if you want, but with me, i dont, just show them all -->
                                        </div>
                                        <small class="text-secondary">
                                            7749 giờ trước
                                        </small>
                                    </div>
                                    <div>
                                        <img :src="globalImageUrl('images-asset/test.jpg')" height="60" width="80"
                                            class="img-contain mt-1">
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="position-relative">
                    <img :src="globalImageUrl('images-asset/test.jpg')" width="30" height="30"
                        class="rounded-circle img-cover cursor-pointer showDrop" @click="globalShowDrop('userNavi')">
                        <div id="userNavi" class="dropdown-menu d-none top-100 right-0 rounded-0 p-0">
                            <nuxt-link to="" class="d-flex align-items-center py-1 px-2 text-dark bg-hover-light">
                                <i class="fas fa-user-circle mr-2 w-1em"></i>
                                <div class="font-14">
                                    Kênh của bạn
                                </div>
                            </nuxt-link>
                            <nuxt-link to="" class="d-flex align-items-center py-1 px-2 text-dark bg-hover-light">
                                <i class="fas fa-cog mr-2 w-1em"></i>
                                <div class="font-14">
                                    Cài đặt
                                </div>
                            </nuxt-link>
                            <hr class="m-0">
                            <nuxt-link to="" class="d-flex align-items-center py-1 px-2 text-dark bg-hover-light">
                                <div class="font-14">
                                    Tính năng 3
                                </div>
                            </nuxt-link>
                            <nuxt-link to="" class="d-flex align-items-center py-1 px-2 text-dark bg-hover-light">
                                <i class="far fa-sign-out mr-2 w-1em"></i>
                                <div class="font-14">
                                    Đăng xuất
                                </div>
                            </nuxt-link>
                        </div>
                </div> -->
                <div class="position-relative ml-1 cursor-pointer">
                    <div class="showDrop text-nowrap" @click="globalShowDrop('loginTable')">
                        Đăng nhập
                    </div>
                    <div class="d-none dropdown-menu rounded-0 p-2 top-100 right-0 border-0 text-nowrap"
                        id="loginTable">
                        <nuxt-link to="/login" class="d-block text-center py-1 px-4 font-14 bg-main text-white rounded">
                            Đăng nhập
                        </nuxt-link>
                        <nuxt-link to="/register"
                            class="d-block text-center py-1 px-4 font-14 bg-light text-secondary rounded mt-2">
                            Đăng ký
                        </nuxt-link>
                        <nuxt-link to=""
                            class="d-block text-center py-1 px-4 font-14 bg-facebook text-white rounded mt-2">
                            Đăng nhập bằng Facebook
                        </nuxt-link>
                        <nuxt-link to=""
                            class="d-block text-center py-1 px-4 font-14 bg-google text-white rounded mt-2">
                            Đăng nhập bằng Facebook
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <div v-else>
        <nav class="navbar navbar-light bg-light fixed-top flex-nowrap px-2 px-sm-3 px-md-4 navbar-mobile__header transition-normal w-100"
            id="navbarOnMobile1" :class="isSearchOnMobile? 'right-100' : 'right-0'">
            <nuxt-link to="/" class="navbar-brand p-0 mr-auto">LOGO</nuxt-link>
            <button class="text-danger bg-transparent border-0" type="submit" @click="showSearchBoxOnMobile">
                <i class="fal fa-search" /></button>
            <div class="position-relative d-none">
                <img :src="globalImageUrl('images-asset/test.jpg')" class="img-cover rounded-circle ml-1 showDrop"
                    width="30" height="30" @click="globalShowDrop('userInfoOnMobile')">
                <div id="userInfoOnMobile" class="dropdown-menu d-none top-100 right-0 rounded-0 p-0 z-index-99">
                    <div class="bg-light text-secondary py-1 px-2 font-14">
                        Số dư: $3.00
                    </div>
                    <nuxt-link to="/about" class="font-12 text-black text-event-black pl-4 pr-2 py-2 position-relative">
                        <i class="fas fa-circle top-center position-absolute font-10 text-main ml-n3" />
                        <!-- UNCHECK NOTIFICATION -->
                        <div class="d-flex">
                            <div class="mr-2 flex-grow-1">
                                <div class="mb-2">
                                    W2W Cartoon đã tải lên: 30 Trang Bị NGẦU LÒI Trong Totally Spies
                                </div>
                            </div>
                            <div>
                                <img :src="globalImageUrl('images-asset/test.jpg')" height="60" width="80"
                                    class="img-contain">
                            </div>
                        </div>
                        <small class="text-secondary">
                            22 giờ trước
                        </small>
                    </nuxt-link>
                    <nuxt-link to="/about"
                        class="font-12 text-black text-event-black pl-4 pr-2 py-2 position-relative border-top">
                        <div class="d-flex">
                            <div class="mr-2 flex-grow-1">
                                <div class="mb-2">
                                    W2W Cartoon đã tải lên: 30 Trang Bị NGẦU LÒI Trong Totally Spies Lorem ipsum dolor,
                                    sit amet consectetur adipisicing elit. Alias, quis! Laboriosam rem, labore
                                    perspiciatis odio omnis sint, eos repudiandae quos expedita voluptatem fuga unde?
                                    Aliquid blanditiis nobis sit maxime assumenda?
                                </div>
                            </div>
                            <div>
                                <img :src="globalImageUrl('images-asset/test.jpg')" height="60" width="80"
                                    class="img-contain">
                            </div>
                        </div>
                        <small class="text-secondary">
                            22 giờ trước
                        </small>
                    </nuxt-link>
                </div>
            </div>

            <div class="position-relative ml-1 cursor-pointer">
                <div class="showDrop text-nowrap" @click="globalShowDrop('loginTable')">
                    Đăng nhập
                </div>
                <div class="d-none dropdown-menu rounded-0 p-2 top-100 right-0 border-0 text-nowrap" id="loginTable">
                    <nuxt-link to="" class="d-block text-center py-1 px-4 font-14 bg-main text-white rounded">
                        Đăng nhập
                    </nuxt-link>
                    <nuxt-link to="" class="d-block text-center py-1 px-4 font-14 bg-light text-secondary rounded mt-2">
                        Đăng ký
                    </nuxt-link>
                    <nuxt-link to="" class="d-block text-center py-1 px-4 font-14 bg-facebook text-white rounded mt-2">
                        Đăng nhập bằng Facebook
                    </nuxt-link>
                    <nuxt-link to="" class="d-block text-center py-1 px-4 font-14 bg-google text-white rounded mt-2">
                        Đăng nhập bằng Facebook
                    </nuxt-link>
                </div>
            </div>
        </nav>
        <nav class="navbar navbar-light bg-light fixed-top flex-nowrap px-2 px-sm-3 px-md-4 navbar-mobile__header transition-normal w-100"
            id="navbarOnMobile2" :class="isSearchOnMobile ? 'left-0' : 'left-100'">
            <button class="text-black bg-transparent border-0" type="submit" @click="showSearchBoxOnMobile">
                <i class="fal fa-arrow-left" /></button>
            <div class="position-relative d-flex flex-grow-1">
                <input type="text" class="searchBoxOnMobil flex-grow-1 border px-2 font-14 border-right-0"
                    placeholder="Tìm kiếm trên Toeic-Video" @focus="showSearchResultOnMobile"
                    @blur="closeSearchResultOnMobile">
                <button class="bg-transparent border"><i class="fal fa-search" /></button>

                <!-- search box -->
                <div class="position-absolute top-100 w-100 left-0 transition-normal opacity-0 mt-2 bg-white box-shadow-normal"
                    id="searchResultOnMobile" :class="{ 'd-none': !isOpenSearchResultOnMobile }">
                    <div class="position-relative w-100 bg-white bd-radius-4 box-shadow-normal overflow-hidden">
                        <div class="py-1 px-2 cursor-pointer transition-normal text-truncate font-12"
                            @click="showSearchResult(1)">
                            Nước hoa Thái
                        </div>
                        <div class="py-1 px-2 cursor-pointer transition-normal text-truncate font-12"
                            @click="showSearchResult(2)">
                            Dầu bôi trơn
                        </div>
                        <div class="py-1 px-2 cursor-pointer transition-normal text-truncate font-12"
                            @click="showSearchResult(3)">
                            Combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
                            combo nước hoa Thái, dầu bôi trơn và dầu ăn combo nước hoa Thái, dầu bôi trơn và dầu ăn
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light gl-header fixed-bottom navbar-mobile px-0">
            <div class="d-flex w-100">
                <nuxt-link to="" class="w-20 d-flex flex-column align-items-center text-main">
                    <i class="fas fa-home" />
                    <div>
                        Trang chủ
                    </div>
                </nuxt-link>
                <nuxt-link to="" class="w-20 d-flex flex-column align-items-center text-black">
                    <i class="far fa-fire-alt" />
                    <div>
                        Thịnh hành
                    </div>
                </nuxt-link>
                <nuxt-link to="" class="w-20 d-flex flex-column align-items-center text-black">
                    <i class="fas fa-paper-plane" />
                    <div>
                        Đăng ký
                    </div>
                </nuxt-link>
                <nuxt-link to="" class="w-20 d-flex flex-column align-items-center text-black">
                    <i class="fas fa-envelope" />
                    <div>
                        Hộp thư đến
                    </div>
                </nuxt-link>
                <nuxt-link to="" class="w-20 d-flex flex-column align-items-center text-black">
                    <i class="fas fa-folder" />
                    <div>
                        Thư viện
                    </div>
                </nuxt-link>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                window: {
                    width: 0,
                },
                searchSuggestions: false,
                searchData: '',
                isSearchOnMobile: false,
                isOpenSearchResultOnMobile: false,
            }
        },
        created() {
            window.addEventListener('resize', this.handleWindowSize);
            this.handleWindowSize();
        },
        methods: {
            logOut: function () {
                AuthService.logOut();
                this.$store.commit('user/set', AuthService.setUser());
                this.$router.go({
                    name: this.$route.name,
                    query: this.$route.query,
                    params: this.$route.params,
                    force: true
                });
            },
            handleWindowSize() {
                this.window.width = window.innerWidth;
            },
            openSearchSuggestions() {
                this.searchSuggestions = true;
                setTimeout(() => {
                    document.getElementById("search-suggestions").classList.remove("opacity-0");
                }, 10);
            },
            closeSearchSuggestions() {
                document.getElementById("search-suggestions").classList.add("opacity-0");
                setTimeout(() => {
                    this.searchSuggestions = false;
                }, 300);
            },
            showSearchResult(index) {
                document.getElementById("search-suggestions").classList.add("opacity-0");
                setTimeout(() => {
                    this.searchSuggestions = false;
                }, 300);
                console.log(index);
                this.searchData = '';
            },
            // mobile function
            showSearchBoxOnMobile() {
                this.isSearchOnMobile = !this.isSearchOnMobile;
            },
            showSearchResultOnMobile() {
                this.isOpenSearchResultOnMobile = true;
                setTimeout(() => {
                    document.getElementById("searchResultOnMobile").classList.remove("opacity-0");
                }, 10);
            },
            closeSearchResultOnMobile() {
                document.getElementById("searchResultOnMobile").classList.add("opacity-0");
                setTimeout(() => {
                    this.isOpenSearchResultOnMobile = false;
                }, 300);
            },
        },
        watch: {
            searchData(newValue, oldValue) {
                if (newValue) {
                    this.searchSuggestions = true;
                    setTimeout(() => {
                        document.getElementById("search-suggestions").classList.remove("opacity-0");
                    }, 10);
                } else {
                    document.getElementById("search-suggestions").classList.add("opacity-0");
                    setTimeout(() => {
                        this.searchSuggestions = false;
                    }, 300);
                }
            },
        },
    }
</script>