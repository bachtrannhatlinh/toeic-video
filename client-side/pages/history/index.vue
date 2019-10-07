<template>
    <div class="gl-container gl-wrap--padding-left padding-left">
        <!-- start : màn hình xl -->
        <div class="history">
            <div class="row max-height">
                <!-- start : contentLeft -->
                <div class="col-xl-8 col-12 background-color-fafafa order-last px-0">
                    <div class="px-5">
                        <div class="font-weight-500 font-size-16 mt-4 d-lg-block d-none"> 
                            Lịch sử xem
                        </div>
                        <div class="d-md-flex d-block mt-4 default">
                            <div>
                                <i class="far fa-clock d-none"></i>
                            </div>
                            <div class="changeHoverKidFirst"></div>
                            <div class="changeHoverKidSecond"></div>
                            <div class="defaultRedBar"></div>
                            <div class="defaultTime"></div>
                            <img :src="globalImageUrl('images-asset/No_Image_Available.jpg')" alt="xxx" class="imgFirst imgFirst768">
                            <div class="ml-md-3 ml-0">
                                <div class="font-size-18 col-md-10 col-12 px-0 mt-2 mt-md-0">72 HOURS IN DA NANG | THINGS TO DO | VIETNAM VLOG #015</div>
                                <div class="font-size-14 mt-1 mt-md-0">
                                    <div class="d-flex">
                                        <div>Hongduong La</div>
                                        <div class="mx-1">•</div>
                                        <div>4,8 Tr lượt xem</div>
                                    </div>
                                    <div class="mt-2">
                                        We recently spent three days in Da Nang and thoroughly enjoyed our time there.
                                        This vlog covers everything that we saw, ate and did during our time
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-bottom-s1 border-color-ba d-lg-none d-block pb-3"></div>
                    
                    <div class="px-5">
                        <div class="d-md-flex d-block mt-4 default">
                            <div>
                                <i class="far fa-clock d-none"></i>
                            </div>
                            <div class="changeHoverKidFirst"></div>
                            <div class="changeHoverKidSecond"></div>
                            <div class="defaultRedBar"></div>
                            <div class="defaultTime"></div>
                            <img :src="globalImageUrl('images-asset/No_Image_Available.jpg')" alt="xxx" class="imgFirst imgFirst768">
                            <div class="ml-md-3 ml-0">
                                <div class="font-size-18 col-md-10 col-12 px-0 mt-2 mt-md-0">72 HOURS IN DA NANG | THINGS TO DO | VIETNAM VLOG #015</div>
                                <div class="font-size-14 mt-1 mt-md-0">
                                    <div class="d-flex">
                                        <div>Hongduong La</div>
                                        <div class="mx-1">•</div>
                                        <div>4,8 Tr lượt xem</div>
                                    </div>
                                    <div class="mt-2">
                                        We recently spent three days in Da Nang and thoroughly enjoyed our time there.
                                        This vlog covers everything that we saw, ate and did during our time
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-bottom-s1 border-color-ba d-lg-none d-block pb-3"></div>

                </div>
                <!-- end : contentLeft -->

                <!-- start : contentRight -->
                <div class="col-xl-4 col-12 background-color-f1f1f1 order-first">
                    <div class="d-xl-block d-lg-flex d-md-flex d-block align-items-center px-5">
                        <div class="changePlaceholder editPosition mt-xl-4 mt-md-0 mt-2 col-xl-9 col-lg-4 col-md-3 col-12 margin-left-auto px-0">
                            <i class="fas fa-search editIcon"></i>
                            <input type="text" id="form1" class="form-control" placeholder="Tìm kiếm lịch sử xem">
                        </div>
                        <!-- <div class="d-xl-block d-none">
                            <div class="py-3 color-black  border-bottom-s1 border-color-ba">
                                <div class="ml-2"> Loại lịch sử </div>
                            </div>
                            <nuxt-link to="#" class="d-flex  py-3 border-bottom-s1 border-color-ba">
                                <div class="color-black ">
                                    <div class="ml-2"> Lịch sử xem</div>
                                </div>
                                <div class="form-check ml-auto">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                </div>                        
                            </nuxt-link>
                            <nuxt-link to="#" class="d-flex  py-3 border-bottom-s1 border-color-ba">
                                <div class="color-black ">
                                    <div class="ml-2"> Lịch sử tìm kiếm </div>
                                </div>
                                <div class="form-check ml-auto">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                </div>                        
                            </nuxt-link>
                            <nuxt-link to="#" class="d-flex  py-3 border-bottom-s1 border-color-ba">
                                <div class="color-black ">
                                    <div class="ml-2"> Nhận xét </div>
                                </div>
                                <div class="form-check ml-auto">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                </div>                        
                            </nuxt-link>
                            <nuxt-link to="#" class="d-flex  py-3 border-bottom-s1 border-color-ba">
                                <div class="color-black ">
                                    <div class="ml-2"> Cộng đồng </div>
                                </div>
                                <div class="form-check ml-auto">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                </div>                        
                            </nuxt-link>
                            <nuxt-link to="#" class="d-flex  py-3 border-bottom-s1 border-color-ba">
                                <div class="color-black ">
                                    <div class="ml-2"> Trò chuyện trực tiếp </div>
                                </div>
                                <div class="form-check ml-auto">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                                </div>                        
                            </nuxt-link>
                        </div> -->
                        <div class="py-2 color-606060 font-size-14 font-weight-500 text-transform_uppercase order-first text-center text-lg-left d-xl-block d-md-flex d-block font-size-12lg">
                            <div class="py-lg-2 py-1 px-1 background-color-f8f8f8 boder-color-s1-ebebeb">xóa tất cả lịch sử xem</div>
                            <div class="py-lg-2 py-1 px-1 ml-md-1 ml-0 background-color-f8f8f8 mt-1 mt-md-0 boder-color-s1-ebebeb ">tạm dừng lịch sử xem</div>
                            <div class="py-lg-2 py-1 px-1 d-none d-xl-block">quản lý tất cả hoạt động</div>
                        </div>
                    </div>
                </div>
                <!-- end : contentRight -->
            </div>
        </div>
        <!-- end : màn hình xl -->
    </div>
</template>
