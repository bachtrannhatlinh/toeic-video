<template>
    <div class="gl-container gl-wrap--padding-left ">
        <div class="background-color-fafafa">
            <div class="watch-later px-5">
                <div class="row max-height">
                    <!-- start : contentLeft -->
                    <div class="col-lg-4 col-12 background-color-fafafa px-5 d-lg-block d-flex background-color-white">
                        <nuxt-link to="#" class="pictureFirst editPosition mt-3 d-lg-block d-flex">
                            <img :src="globalImageUrl('images-asset/No_Image_Available.jpg')" alt="xxx">
                            <div class="content background-color-hsla py-2 d-flex justify-content-center align-items-center order-last">
                                <div class="d-flex">
                                    <i class="fas fa-caret-right font-size-24"></i>
                                    <span class="ml-2"> PHÁT TẤT CẢ </span>
                                </div>
                                <div class="d-lg-none d-flex">
                                    <button class="px-1 py-1 d-flex align-items-center font-size-14 mx-1">
                                        <i class="fas fa-cog font-size-20"></i>
                                        <span class="font-weight-500 ml-2">Cài đặt danh sách phát</span>
                                    </button>
                                    <button class="px-1 py-1 d-flex align-items-center font-size-14 mx-1">
                                        <i class="fas fa-minus-circle font-size-20"></i>
                                        <span class="font-weight-500 ml-2">Xóa video đã xem</span>
                                    </button>
                                    <button class="px-1 py-1 d-flex align-items-center font-size-14 mx-1">
                                        <i class="fas fa-plus font-size-20"></i>
                                        <span class="font-weight-500 ml-2">Thêm video</span>
                                    </button>
                                </div>
                            </div>
                        </nuxt-link> 
                        <div class="">
                            <div class="font-size-26 cucursor-pointer font-size-24">Watch Later</div>
                            <div class="d-flex align-items-center py-3">
                                <div class="font-size-12">
                                    <div class="background-color-ededed px-2 text-center color-606060">
                                        <i class="fas fa-lock mt-1"></i>
                                        <span class="ml-2 font-weight-500">Riêng tư</span>
                                    </div>
                                </div>
                                <div class="color-606060 d-flex ml-2">
                                    <div>30 video</div>
                                    <div class="d-flex align-items-center ml-2">
                                        <i class="fas fa-circle font-size-4h"></i>
                                        <span class="ml-2"> Cập nhật hôm nay </span>
                                    </div>
                                </div>
                            </div>
                            <div class="pb-4 col-1 pl-0 transition">
                                <nuxt-link to="#" class="color-ba">
                                    <i class="fas fa-external-link-alt font-size-20"></i>
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="border-bottom-s1 border-color-ba ">
                            
                        </div>
                        <div class="d-flex mt-4 mt-0">
                            <nuxt-link to="#" class="pictureSecond d-flex align-items-center color-black font-weight-500">
                                <img :src="globalImageUrl('images-asset/No_Image_Available.jpg')" alt="xxx">
                                <div class="ml-3">Name</div>
                            </nuxt-link>
                            <nuxt-link to="#" class="d-flex align-items-center ml-auto ml-5 color-black font-weight-500">
                                <i class="fas fa-pen pr-2"></i>
                                <span class="ml-1">CHỈNH SỬA</span>
                            </nuxt-link>
                        </div>
                    </div>
                    <!-- end : contentLeft -->
                    <!-- start : contentRight -->
                    <div class="col-lg-8 col-12 mt-3 px-0">
                        <div class="d-lg-none d-block border-bottom-s1 border-color-ba">
                            
                        </div>
                        <div class="d-lg-block d-none">
                            <nuxt-link to="#" class="color-606060 ml-4 pl-3">
                                <i class="fas fa-align-left">
                                    <span class="ml-3">SẮP XẾP THEO</span> 
                                </i>
                            </nuxt-link>
                        </div>
                        <div class="mt-3 pr-5">
                            <nuxt-link to="" class="d-flex align-items-center changeHoverBackground-color">
                                <div class="ml-3">1</div>
                                <div class="d-flex pictureThird ml-3 py-3 border-bottom-s1 border-color-ba ">
                                    <img :src="globalImageUrl('images-asset/No_Image_Available.jpg')" alt="xxx">
                                    <div class="px-3">
                                        <div class="font-weight-500 color-black">
                                            Quái vật lạ gây xôn xao New Zealand http://sunday.b1u.org Sunday Chess Tv I giải trí ✔️ 
                                        </div>
                                        <div class="color-606060 font-size-14 ">
                                            sundaychessTV
                                        </div>
                                    </div>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                    <!-- end : contentRight -->
                </div>
            </div>
        </div>
    </div>
</template>
