<template>
    <div class="gl-container transition-normal gl-wrap--padding-left">
        <div class="container">
            <div class="row">
                <div class="col-12 mt-3">
                    <div class="group-search-result">
                        <!-- filter result -->
                        <div class="border-bottom pb-2">
                            <div class="d-flex align-items-center cursor-pointer mb-2" data-toggle="collapse"
                                data-target="#filterConfig" aria-expanded="false" aria-controls="filterConfig">
                                <i class="far fa-sliders-h mr-2"></i>
                                <span class="font-weight-500">Filter</span>
                            </div>
                            <div id="filterConfig" class="collapse my-2">
                                <div class="d-grid search-filter-group">
                                    <div class>
                                        <div
                                            class="font-weight-500 font-12 font-md-16 text-uppercase border-bottom pb-2 mb-2 text-nowrap">
                                            Ngày tải lên</div>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Giờ
                                            qua</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Hôm
                                            nay</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Tuần
                                            này</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Tháng
                                            này</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Năm
                                            này</button>
                                    </div>
                                    <div class>
                                        <div
                                            class="font-weight-500 font-12 font-md-16 text-uppercase border-bottom pb-2 mb-2 text-nowrap">
                                            Loại</div>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Video</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Kênh</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Danh
                                            sách phát</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Phim</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Hiển
                                            thị</button>
                                    </div>
                                    <div class>
                                        <div
                                            class="font-weight-500 font-12 font-md-16 text-uppercase border-bottom pb-2 mb-2 text-nowrap">
                                            thời lượng</div>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Ngắn
                                            (&#60; 4 phút)</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Dài
                                            (&#62; 20 phút)</button>
                                    </div>
                                    <div class>
                                        <div
                                            class="font-weight-500 font-12 font-md-16 text-uppercase border-bottom pb-2 mb-2 text-nowrap">
                                            video nổi bật</div>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Trực
                                            tiếp</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">4K</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">HD</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Phụ
                                            đề</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Giấy
                                            phép Creative Commons</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">360&#176;</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">VR180</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">3D</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">HDR</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Vị
                                            trí</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Đã
                                            mua</button>
                                    </div>
                                    <div class>
                                        <div
                                            class="font-weight-500 font-12 font-md-16 text-uppercase border-bottom pb-2 mb-2 text-nowrap">
                                            sắp xếp theo</div>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 font-weight-500">Mức
                                            độ liên quan</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Ngày
                                            tải lên</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Lượt
                                            xem</button>
                                        <button
                                            class="bg-transparent border-0 p-0 d-block my-1 font-10 font-md-14 text-left">Xếp
                                            hạng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- List results -->
                        <div class="border-bottom pb-2 search-results__list-results">
                            <nuxt-link to="" class="my-3 d-sm-flex w-100 text-dark">
                                <div class="position-relative search-result__img-preview mr-sm-3">
                                    <img :src="globalImageUrl('images-asset/404-not-found.jpg')"
                                        class="image-thumbnail img-cover d-block mr-md-3 w-100" />
                                    <div
                                        class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center video__icon-play-on-hover text-secondary opacity-0 transition-normal bg-dark-alpha">
                                        <i class="fas fa-play font-30"></i>
                                    </div>
                                    <div
                                        class="position-absolute bottom-0 right-0 font-10 p-1 rounded my-1 mx-2 text-light">
                                        12:23</div>
                                </div>
                                <div class="search-results__info-video mt-2 mt-sm-0">
                                    <div class="mr-md-5 font-12 font-md-16">The Hobbit: The Desolation of Smaug - Ed Sheeran "I See Fire" [HD]
                                    </div>
                                    <div class="d-flex align-items-center font-10 font-md-14 mt-1 text-secondary">
                                        <button class="bg-transparent p-0 border-0 text-dark">SCS Videos</button>
                                        <div class="font-10 font-md-14 ml-1">&middot; 312 Tr lượt xem &middot; 5 năm
                                            trước</div>
                                    </div>
                                    <div class="mt-1 text-secondary font-10 font-md-14">
                                        {{ shortContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!') }}
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="" class="my-3 d-sm-flex w-100 text-dark">
                                <div class="position-relative search-result__img-preview mr-sm-3">
                                    <img :src="globalImageUrl('images-asset/404-not-found.jpg')"
                                        class="image-thumbnail img-cover d-block mr-md-3 w-100" />
                                    <div
                                        class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center video__icon-play-on-hover text-secondary opacity-0 transition-normal bg-dark-alpha">
                                        <i class="fas fa-play font-30"></i>
                                    </div>
                                    <div
                                        class="position-absolute bottom-0 right-0 font-10 p-1 rounded my-1 mx-2 text-light">
                                        12:23</div>
                                </div>
                                <div class="search-results__info-video mt-2 mt-sm-0">
                                    <div class="mr-md-5 font-12 font-md-16">The Hobbit: The Desolation of Smaug - Ed Sheeran "I See Fire" [HD]
                                    </div>
                                    <div class="d-flex align-items-center font-10 font-md-14 mt-1 text-secondary">
                                        <button class="bg-transparent p-0 border-0 text-dark">SCS Videos</button>
                                        <div class="font-10 font-md-14 ml-1">&middot; 312 Tr lượt xem &middot; 5 năm
                                            trước</div>
                                    </div>
                                    <div class="mt-1 text-secondary font-10 font-md-14">
                                        {{ shortContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!') }}
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="" class="my-3 d-sm-flex w-100 text-dark">
                                <div class="position-relative search-result__img-preview mr-sm-3">
                                    <img :src="globalImageUrl('images-asset/404-not-found.jpg')"
                                        class="image-thumbnail img-cover d-block mr-md-3 w-100" />
                                    <div
                                        class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center video__icon-play-on-hover text-secondary opacity-0 transition-normal bg-dark-alpha">
                                        <i class="fas fa-play font-30"></i>
                                    </div>
                                    <div
                                        class="position-absolute bottom-0 right-0 font-10 p-1 rounded my-1 mx-2 text-light">
                                        12:23</div>
                                </div>
                                <div class="search-results__info-video mt-2 mt-sm-0">
                                    <div class="mr-md-5 font-12 font-md-16">The Hobbit: The Desolation of Smaug - Ed Sheeran "I See Fire" [HD]
                                    </div>
                                    <div class="d-flex align-items-center font-10 font-md-14 mt-1 text-secondary">
                                        <button class="bg-transparent p-0 border-0 text-dark">SCS Videos</button>
                                        <div class="font-10 font-md-14 ml-1">&middot; 312 Tr lượt xem &middot; 5 năm
                                            trước</div>
                                    </div>
                                    <div class="mt-1 text-secondary font-10 font-md-14">
                                        {{ shortContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!') }}
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="" class="my-3 d-sm-flex w-100 text-dark">
                                <div class="position-relative search-result__img-preview mr-sm-3">
                                    <img :src="globalImageUrl('images-asset/404-not-found.jpg')"
                                        class="image-thumbnail img-cover d-block mr-md-3 w-100" />
                                    <div
                                        class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center video__icon-play-on-hover text-secondary opacity-0 transition-normal bg-dark-alpha">
                                        <i class="fas fa-play font-30"></i>
                                    </div>
                                    <div
                                        class="position-absolute bottom-0 right-0 font-10 p-1 rounded my-1 mx-2 text-light">
                                        12:23</div>
                                </div>
                                <div class="search-results__info-video mt-2 mt-sm-0">
                                    <div class="mr-md-5 font-12 font-md-16">The Hobbit: The Desolation of Smaug - Ed Sheeran "I See Fire" [HD]
                                    </div>
                                    <div class="d-flex align-items-center font-10 font-md-14 mt-1 text-secondary">
                                        <button class="bg-transparent p-0 border-0 text-dark">SCS Videos</button>
                                        <div class="font-10 font-md-14 ml-1">&middot; 312 Tr lượt xem &middot; 5 năm
                                            trước</div>
                                    </div>
                                    <div class="mt-1 text-secondary font-10 font-md-14">
                                        {{ shortContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!') }}
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="" class="my-3 d-sm-flex w-100 text-dark">
                                <div class="position-relative search-result__img-preview mr-sm-3">
                                    <img :src="globalImageUrl('images-asset/404-not-found.jpg')"
                                        class="image-thumbnail img-cover d-block mr-md-3 w-100" />
                                    <div
                                        class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center video__icon-play-on-hover text-secondary opacity-0 transition-normal bg-dark-alpha">
                                        <i class="fas fa-play font-30"></i>
                                    </div>
                                    <div
                                        class="position-absolute bottom-0 right-0 font-10 p-1 rounded my-1 mx-2 text-light">
                                        12:23</div>
                                </div>
                                <div class="search-results__info-video mt-2 mt-sm-0">
                                    <div class="mr-md-5 font-12 font-md-16">The Hobbit: The Desolation of Smaug - Ed Sheeran "I See Fire" [HD]
                                    </div>
                                    <div class="d-flex align-items-center font-10 font-md-14 mt-1 text-secondary">
                                        <button class="bg-transparent p-0 border-0 text-dark">SCS Videos</button>
                                        <div class="font-10 font-md-14 ml-1">&middot; 312 Tr lượt xem &middot; 5 năm
                                            trước</div>
                                    </div>
                                    <div class="mt-1 text-secondary font-10 font-md-14">
                                        {{ shortContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!') }}
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="" class="my-3 d-sm-flex w-100 text-dark">
                                <div class="position-relative search-result__img-preview mr-sm-3">
                                    <img :src="globalImageUrl('images-asset/404-not-found.jpg')"
                                        class="image-thumbnail img-cover d-block mr-md-3 w-100" />
                                    <div
                                        class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center video__icon-play-on-hover text-secondary opacity-0 transition-normal bg-dark-alpha">
                                        <i class="fas fa-play font-30"></i>
                                    </div>
                                    <div
                                        class="position-absolute bottom-0 right-0 font-10 p-1 rounded my-1 mx-2 text-light">
                                        12:23</div>
                                </div>
                                <div class="search-results__info-video mt-2 mt-sm-0">
                                    <div class="mr-md-5 font-12 font-md-16">The Hobbit: The Desolation of Smaug - Ed Sheeran "I See Fire" [HD]
                                    </div>
                                    <div class="d-flex align-items-center font-10 font-md-14 mt-1 text-secondary">
                                        <button class="bg-transparent p-0 border-0 text-dark">SCS Videos</button>
                                        <div class="font-10 font-md-14 ml-1">&middot; 312 Tr lượt xem &middot; 5 năm
                                            trước</div>
                                    </div>
                                    <div class="mt-1 text-secondary font-10 font-md-14">
                                        {{ shortContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!') }}
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="" class="my-3 d-sm-flex w-100 text-dark">
                                <div class="position-relative search-result__img-preview mr-sm-3">
                                    <img :src="globalImageUrl('images-asset/404-not-found.jpg')"
                                        class="image-thumbnail img-cover d-block mr-md-3 w-100" />
                                    <div
                                        class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center video__icon-play-on-hover text-secondary opacity-0 transition-normal bg-dark-alpha">
                                        <i class="fas fa-play font-30"></i>
                                    </div>
                                    <div
                                        class="position-absolute bottom-0 right-0 font-10 p-1 rounded my-1 mx-2 text-light">
                                        12:23</div>
                                </div>
                                <div class="search-results__info-video mt-2 mt-sm-0">
                                    <div class="mr-md-5 font-12 font-md-16">The Hobbit: The Desolation of Smaug - Ed Sheeran "I See Fire" [HD]
                                    </div>
                                    <div class="d-flex align-items-center font-10 font-md-14 mt-1 text-secondary">
                                        <button class="bg-transparent p-0 border-0 text-dark">SCS Videos</button>
                                        <div class="font-10 font-md-14 ml-1">&middot; 312 Tr lượt xem &middot; 5 năm
                                            trước</div>
                                    </div>
                                    <div class="mt-1 text-secondary font-10 font-md-14">
                                        {{ shortContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!') }}
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="" class="my-3 d-sm-flex w-100 text-dark">
                                <div class="position-relative search-result__img-preview mr-sm-3">
                                    <img :src="globalImageUrl('images-asset/404-not-found.jpg')"
                                        class="image-thumbnail img-cover d-block mr-md-3 w-100" />
                                    <div
                                        class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center video__icon-play-on-hover text-secondary opacity-0 transition-normal bg-dark-alpha">
                                        <i class="fas fa-play font-30"></i>
                                    </div>
                                    <div
                                        class="position-absolute bottom-0 right-0 font-10 p-1 rounded my-1 mx-2 text-light">
                                        12:23</div>
                                </div>
                                <div class="search-results__info-video mt-2 mt-sm-0">
                                    <div class="mr-md-5 font-12 font-md-16">The Hobbit: The Desolation of Smaug - Ed Sheeran "I See Fire" [HD]
                                    </div>
                                    <div class="d-flex align-items-center font-10 font-md-14 mt-1 text-secondary">
                                        <button class="bg-transparent p-0 border-0 text-dark">SCS Videos</button>
                                        <div class="font-10 font-md-14 ml-1">&middot; 312 Tr lượt xem &middot; 5 năm
                                            trước</div>
                                    </div>
                                    <div class="mt-1 text-secondary font-10 font-md-14">
                                        {{ shortContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!') }}
                                    </div>
                                </div>
                            </nuxt-link>
                        </div>
                        <!-- Related searches -->
                        <div class="search-result__related-searches my-3">
                            <Slick :options="listImageOption1" class="mx-n2">
                                <div class="related-searches-item">
                                    <nuxt-link to class="d-block text-dark border rounded overflow-hidden mx-2">
                                        <img :src="globalImageUrl('images-asset/404-not-found.jpg')" alt
                                            class="d-block image-thumbnail img-cover w-100" />
                                        <div class="px-3 text-truncate font-10 font-md-14 my-2 text-truncate">i see fire hd aufshanfa</div>
                                    </nuxt-link>
                                </div>
                                <div class="related-searches-item">
                                    <nuxt-link to class="d-block text-dark border rounded overflow-hidden mx-2">
                                        <img :src="globalImageUrl('images-asset/404-not-found.jpg')" alt
                                            class="d-block image-thumbnail img-cover w-100" />
                                        <div class="px-3 text-truncate font-10 font-md-14 my-2 text-truncate">i see fire hd</div>
                                    </nuxt-link>
                                </div>
                                <div class="related-searches-item">
                                    <nuxt-link to class="d-block text-dark border rounded overflow-hidden mx-2">
                                        <img :src="globalImageUrl('images-asset/404-not-found.jpg')" alt
                                            class="d-block image-thumbnail img-cover w-100" />
                                        <div class="px-3 text-truncate font-10 font-md-14 my-2 text-truncate">i see fire hd</div>
                                    </nuxt-link>
                                </div>
                                <div class="related-searches-item">
                                    <nuxt-link to class="d-block text-dark border rounded overflow-hidden mx-2">
                                        <img :src="globalImageUrl('images-asset/404-not-found.jpg')" alt
                                            class="d-block image-thumbnail img-cover w-100" />
                                        <div class="px-3 text-truncate font-10 font-md-14 my-2 text-truncate">i see fire hd</div>
                                    </nuxt-link>
                                </div>
                                <div class="related-searches-item">
                                    <nuxt-link to class="d-block text-dark border rounded overflow-hidden mx-2">
                                        <img :src="globalImageUrl('images-asset/404-not-found.jpg')" alt
                                            class="d-block image-thumbnail img-cover w-100" />
                                        <div class="px-3 text-truncate font-10 font-md-14 my-2 text-truncate">i see fire hd</div>
                                    </nuxt-link>
                                </div>
                                <div class="related-searches-item">
                                    <nuxt-link to class="d-block text-dark border rounded overflow-hidden mx-2">
                                        <img :src="globalImageUrl('images-asset/404-not-found.jpg')" alt
                                            class="d-block image-thumbnail img-cover w-100" />
                                        <div class="px-3 text-truncate font-10 font-md-14 my-2 text-truncate">i see fire hd</div>
                                    </nuxt-link>
                                </div>
                                <div class="related-searches-item">
                                    <nuxt-link to class="d-block text-dark border rounded overflow-hidden mx-2">
                                        <img :src="globalImageUrl('images-asset/404-not-found.jpg')" alt
                                            class="d-block image-thumbnail img-cover w-100" />
                                        <div class="px-3 text-truncate font-10 font-md-14 my-2 text-truncate">i see fire hd</div>
                                    </nuxt-link>
                                </div>
                                <div class="related-searches-item">
                                    <nuxt-link to class="d-block text-dark border rounded overflow-hidden mx-2">
                                        <img :src="globalImageUrl('images-asset/404-not-found.jpg')" alt
                                            class="d-block image-thumbnail img-cover w-100" />
                                        <div class="px-3 text-truncate font-10 font-md-14 my-2 text-truncate">i see fire hd</div>
                                    </nuxt-link>
                                </div>
                                <div class="related-searches-item">
                                    <nuxt-link to class="d-block text-dark border rounded overflow-hidden mx-2">
                                        <img :src="globalImageUrl('images-asset/404-not-found.jpg')" alt
                                            class="d-block image-thumbnail img-cover w-100" />
                                        <div class="px-3 text-truncate font-10 font-md-14 my-2 text-truncate">i see fire hd</div>
                                    </nuxt-link>
                                </div>
                                <div class="related-searches-item">
                                    <nuxt-link to class="d-block text-dark border rounded overflow-hidden mx-2">
                                        <img :src="globalImageUrl('images-asset/404-not-found.jpg')" alt
                                            class="d-block image-thumbnail img-cover w-100" />
                                        <div class="px-3 text-truncate font-10 font-md-14 my-2 text-truncate">i see fire hd</div>
                                    </nuxt-link>
                                </div>
                                <div class="related-searches-item">
                                    <nuxt-link to class="d-block text-dark border rounded overflow-hidden mx-2">
                                        <img :src="globalImageUrl('images-asset/404-not-found.jpg')" alt
                                            class="d-block image-thumbnail img-cover w-100" />
                                        <div class="px-3 text-truncate font-10 font-md-14 my-2 text-truncate">i see fire hd</div>
                                    </nuxt-link>
                                </div>
                            </Slick>
                            <hr class="mb-0 mt-2">
                        </div>
                        <!-- List results -->
                        <div class="border-bottom pb-2 search-results__list-results">
                            <nuxt-link to="" class="my-3 d-sm-flex w-100 text-dark">
                                <div class="position-relative search-result__img-preview mr-sm-3">
                                    <img :src="globalImageUrl('images-asset/404-not-found.jpg')"
                                        class="image-thumbnail img-cover d-block mr-md-3 w-100" />
                                    <div
                                        class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center video__icon-play-on-hover text-secondary opacity-0 transition-normal bg-dark-alpha">
                                        <i class="fas fa-play font-30"></i>
                                    </div>
                                    <div
                                        class="position-absolute bottom-0 right-0 font-10 p-1 rounded my-1 mx-2 text-light">
                                        12:23</div>
                                </div>
                                <div class="search-results__info-video mt-2 mt-sm-0">
                                    <div class="mr-md-5 font-12 font-md-16">The Hobbit: The Desolation of Smaug - Ed Sheeran "I See Fire" [HD]
                                    </div>
                                    <div class="d-flex align-items-center font-10 font-md-14 mt-1 text-secondary">
                                        <button class="bg-transparent p-0 border-0 text-dark">SCS Videos</button>
                                        <div class="font-10 font-md-14 ml-1">&middot; 312 Tr lượt xem &middot; 5 năm
                                            trước</div>
                                    </div>
                                    <div class="mt-1 text-secondary font-10 font-md-14">
                                        {{ shortContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!') }}
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="" class="my-3 d-sm-flex w-100 text-dark">
                                <div class="position-relative search-result__img-preview mr-sm-3">
                                    <img :src="globalImageUrl('images-asset/404-not-found.jpg')"
                                        class="image-thumbnail img-cover d-block mr-md-3 w-100" />
                                    <div
                                        class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center video__icon-play-on-hover text-secondary opacity-0 transition-normal bg-dark-alpha">
                                        <i class="fas fa-play font-30"></i>
                                    </div>
                                    <div
                                        class="position-absolute bottom-0 right-0 font-10 p-1 rounded my-1 mx-2 text-light">
                                        12:23</div>
                                </div>
                                <div class="search-results__info-video mt-2 mt-sm-0">
                                    <div class="mr-md-5 font-12 font-md-16">The Hobbit: The Desolation of Smaug - Ed Sheeran "I See Fire" [HD]
                                    </div>
                                    <div class="d-flex align-items-center font-10 font-md-14 mt-1 text-secondary">
                                        <button class="bg-transparent p-0 border-0 text-dark">SCS Videos</button>
                                        <div class="font-10 font-md-14 ml-1">&middot; 312 Tr lượt xem &middot; 5 năm
                                            trước</div>
                                    </div>
                                    <div class="mt-1 text-secondary font-10 font-md-14">
                                        {{ shortContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!') }}
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="" class="my-3 d-sm-flex w-100 text-dark">
                                <div class="position-relative search-result__img-preview mr-sm-3">
                                    <img :src="globalImageUrl('images-asset/404-not-found.jpg')"
                                        class="image-thumbnail img-cover d-block mr-md-3 w-100" />
                                    <div
                                        class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center video__icon-play-on-hover text-secondary opacity-0 transition-normal bg-dark-alpha">
                                        <i class="fas fa-play font-30"></i>
                                    </div>
                                    <div
                                        class="position-absolute bottom-0 right-0 font-10 p-1 rounded my-1 mx-2 text-light">
                                        12:23</div>
                                </div>
                                <div class="search-results__info-video mt-2 mt-sm-0">
                                    <div class="mr-md-5 font-12 font-md-16">The Hobbit: The Desolation of Smaug - Ed Sheeran "I See Fire" [HD]
                                    </div>
                                    <div class="d-flex align-items-center font-10 font-md-14 mt-1 text-secondary">
                                        <button class="bg-transparent p-0 border-0 text-dark">SCS Videos</button>
                                        <div class="font-10 font-md-14 ml-1">&middot; 312 Tr lượt xem &middot; 5 năm
                                            trước</div>
                                    </div>
                                    <div class="mt-1 text-secondary font-10 font-md-14">
                                        {{ shortContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!') }}
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="" class="my-3 d-sm-flex w-100 text-dark">
                                <div class="position-relative search-result__img-preview mr-sm-3">
                                    <img :src="globalImageUrl('images-asset/404-not-found.jpg')"
                                        class="image-thumbnail img-cover d-block mr-md-3 w-100" />
                                    <div
                                        class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center video__icon-play-on-hover text-secondary opacity-0 transition-normal bg-dark-alpha">
                                        <i class="fas fa-play font-30"></i>
                                    </div>
                                    <div
                                        class="position-absolute bottom-0 right-0 font-10 p-1 rounded my-1 mx-2 text-light">
                                        12:23</div>
                                </div>
                                <div class="search-results__info-video mt-2 mt-sm-0">
                                    <div class="mr-md-5 font-12 font-md-16">The Hobbit: The Desolation of Smaug - Ed Sheeran "I See Fire" [HD]
                                    </div>
                                    <div class="d-flex align-items-center font-10 font-md-14 mt-1 text-secondary">
                                        <button class="bg-transparent p-0 border-0 text-dark">SCS Videos</button>
                                        <div class="font-10 font-md-14 ml-1">&middot; 312 Tr lượt xem &middot; 5 năm
                                            trước</div>
                                    </div>
                                    <div class="mt-1 text-secondary font-10 font-md-14">
                                        {{ shortContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!') }}
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="" class="my-3 d-sm-flex w-100 text-dark">
                                <div class="position-relative search-result__img-preview mr-sm-3">
                                    <img :src="globalImageUrl('images-asset/404-not-found.jpg')"
                                        class="image-thumbnail img-cover d-block mr-md-3 w-100" />
                                    <div
                                        class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center video__icon-play-on-hover text-secondary opacity-0 transition-normal bg-dark-alpha">
                                        <i class="fas fa-play font-30"></i>
                                    </div>
                                    <div
                                        class="position-absolute bottom-0 right-0 font-10 p-1 rounded my-1 mx-2 text-light">
                                        12:23</div>
                                </div>
                                <div class="search-results__info-video mt-2 mt-sm-0">
                                    <div class="mr-md-5 font-12 font-md-16">The Hobbit: The Desolation of Smaug - Ed Sheeran "I See Fire" [HD]
                                    </div>
                                    <div class="d-flex align-items-center font-10 font-md-14 mt-1 text-secondary">
                                        <button class="bg-transparent p-0 border-0 text-dark">SCS Videos</button>
                                        <div class="font-10 font-md-14 ml-1">&middot; 312 Tr lượt xem &middot; 5 năm
                                            trước</div>
                                    </div>
                                    <div class="mt-1 text-secondary font-10 font-md-14">
                                        {{ shortContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!') }}
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="" class="my-3 d-sm-flex w-100 text-dark">
                                <div class="position-relative search-result__img-preview mr-sm-3">
                                    <img :src="globalImageUrl('images-asset/404-not-found.jpg')"
                                        class="image-thumbnail img-cover d-block mr-md-3 w-100" />
                                    <div
                                        class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center video__icon-play-on-hover text-secondary opacity-0 transition-normal bg-dark-alpha">
                                        <i class="fas fa-play font-30"></i>
                                    </div>
                                    <div
                                        class="position-absolute bottom-0 right-0 font-10 p-1 rounded my-1 mx-2 text-light">
                                        12:23</div>
                                </div>
                                <div class="search-results__info-video mt-2 mt-sm-0">
                                    <div class="mr-md-5 font-12 font-md-16">The Hobbit: The Desolation of Smaug - Ed Sheeran "I See Fire" [HD]
                                    </div>
                                    <div class="d-flex align-items-center font-10 font-md-14 mt-1 text-secondary">
                                        <button class="bg-transparent p-0 border-0 text-dark">SCS Videos</button>
                                        <div class="font-10 font-md-14 ml-1">&middot; 312 Tr lượt xem &middot; 5 năm
                                            trước</div>
                                    </div>
                                    <div class="mt-1 text-secondary font-10 font-md-14">
                                        {{ shortContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!') }}
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="" class="my-3 d-sm-flex w-100 text-dark">
                                <div class="position-relative search-result__img-preview mr-sm-3">
                                    <img :src="globalImageUrl('images-asset/404-not-found.jpg')"
                                        class="image-thumbnail img-cover d-block mr-md-3 w-100" />
                                    <div
                                        class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center video__icon-play-on-hover text-secondary opacity-0 transition-normal bg-dark-alpha">
                                        <i class="fas fa-play font-30"></i>
                                    </div>
                                    <div
                                        class="position-absolute bottom-0 right-0 font-10 p-1 rounded my-1 mx-2 text-light">
                                        12:23</div>
                                </div>
                                <div class="search-results__info-video mt-2 mt-sm-0">
                                    <div class="mr-md-5 font-12 font-md-16">The Hobbit: The Desolation of Smaug - Ed Sheeran "I See Fire" [HD]
                                    </div>
                                    <div class="d-flex align-items-center font-10 font-md-14 mt-1 text-secondary">
                                        <button class="bg-transparent p-0 border-0 text-dark">SCS Videos</button>
                                        <div class="font-10 font-md-14 ml-1">&middot; 312 Tr lượt xem &middot; 5 năm
                                            trước</div>
                                    </div>
                                    <div class="mt-1 text-secondary font-10 font-md-14">
                                        {{ shortContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!') }}
                                    </div>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="" class="my-3 d-sm-flex w-100 text-dark">
                                <div class="position-relative search-result__img-preview mr-sm-3">
                                    <img :src="globalImageUrl('images-asset/404-not-found.jpg')"
                                        class="image-thumbnail img-cover d-block mr-md-3 w-100" />
                                    <div
                                        class="position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center video__icon-play-on-hover text-secondary opacity-0 transition-normal bg-dark-alpha">
                                        <i class="fas fa-play font-30"></i>
                                    </div>
                                    <div
                                        class="position-absolute bottom-0 right-0 font-10 p-1 rounded my-1 mx-2 text-light">
                                        12:23</div>
                                </div>
                                <div class="search-results__info-video mt-2 mt-sm-0">
                                    <div class="mr-md-5 font-12 font-md-16">The Hobbit: The Desolation of Smaug - Ed Sheeran "I See Fire" [HD]
                                    </div>
                                    <div class="d-flex align-items-center font-10 font-md-14 mt-1 text-secondary">
                                        <button class="bg-transparent p-0 border-0 text-dark">SCS Videos</button>
                                        <div class="font-10 font-md-14 ml-1">&middot; 312 Tr lượt xem &middot; 5 năm
                                            trước</div>
                                    </div>
                                    <div class="mt-1 text-secondary font-10 font-md-14">
                                        {{ shortContent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aliquid, sint magni ut itaque perspiciatis eius neque aut repellat ullam, ab non laudantium ex nobis consequuntur officia veniam eos necessitatibus!') }}
                                    </div>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listImageOption1: {
                    infinite: false,
                    arrows: true,
                    dots: false,
                    mobileFirst: true,
                    prevArrow: "<i class='fal fa-chevron-left position-absolute top-center left-0 z-index-100 px-2 py-1 bg-light text-dark box-shadow-normal rounded-circle'></i>",
                    nextArrow: "<i class='fal fa-chevron-right position-absolute top-center right-0 z-index-100 px-2 py-1 bg-light text-dark box-shadow-normal rounded-circle'></i>",
                    responsive: [{
                            breakpoint: 0,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 450,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 5
                            }
                        }
                    ]
                }
            };
        },
        components: {},
        methods: {
            shortContent(loremText) {
                let shotedString = loremText.slice(0, 150);

                if (shotedString[shotedString.length - 1] == " ")
                    shotedString = loremText.slice(0, 149);

                return `${shotedString}...`;
            }
        }
    };
</script>