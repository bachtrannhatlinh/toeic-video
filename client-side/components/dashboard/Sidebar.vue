<template>
    <!-- Main navigation -->
    <div class="card card-sidebar-mobile">
        <ul class="nav nav-sidebar" data-nav-type="accordion">
            <!-- Main -->
            <li class="nav-item" :class="$store.state.isActive == 'dashboard' ? 'active' : ''">
                <nuxt-link class="nav-link" :to="'/dashboard'">
                    <i class="mdi mdi-home menu-icon"></i>
                    <span class="menu-title">Bảng điều khiển</span>
                </nuxt-link>
            </li>
            <li class="nav-item nav-item-submenu" :class="$store.state.isActive == 'categories' ? 'active' : ''" aria-expanded="false">
                <a class="nav-link" data-toggle="collapse" href="#ui-categories" aria-controls="ui-categories">
                    <i class="mdi mdi-food-variant menu-icon"></i>
                    <span class="menu-title">Danh mục</span>
                </a>
                <div class="" :class="$store.state.isActive == 'categories' ? '' : 'collapse'" id="ui-categories">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item"> 
                            <nuxt-link 
                                class="nav-link" 
                                :class="$store.state.subIsActive == 'category-list' ? 'active' : ''" 
                                :to="'/dashboard/categories?page=1'"
                            >
                                <span class="ml-5">Danh sách</span>
                            </nuxt-link>
                        </li>
                        <li class="nav-item"> 
                            <nuxt-link 
                                class="nav-link" 
                                :class="$store.state.subIsActive == 'category-create' ? 'active' : ''" 
                                :to="globalBaseUrl('dashboard/categories/create')"
                            >
                                <span class="ml-5">Tạo mới</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="nav-item nav-item-submenu" :class="$store.state.isActive == 'news' ? 'active' : ''" aria-expanded="false">
                <a class="nav-link" data-toggle="collapse" href="#ui-news" aria-controls="ui-news">
                    <i class="mdi mdi-newspaper menu-icon"></i>
                    <span class="menu-title">Tin tức</span>
                </a>
                <div class="" :class="$store.state.isActive == 'news' ? '' : 'collapse'" id="ui-news">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item"> 
                            <nuxt-link 
                                class="nav-link" 
                                :class="$store.state.subIsActive == 'new-list' ? 'active' : ''" 
                                :to="'/dashboard/news?page=1'"
                            >
                                <span class="ml-5">Danh sách</span>
                            </nuxt-link>
                        </li>
                        <li class="nav-item"> 
                            <nuxt-link 
                                class="nav-link" 
                                :class="$store.state.subIsActive == 'new-create' ? 'active' : ''" 
                                :to="globalBaseUrl('dashboard/news/create')"
                            >
                                <span class="ml-5">Tạo mới</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="nav-item nav-item-submenu" :class="$store.state.isActive == 'channel' ? 'active' : ''" aria-expanded="false">
                <a class="nav-link" data-toggle="collapse" href="#ui-channel" aria-controls="ui-channel">
                    <i class="mdi mdi-shield-half-full menu-icon"></i>
                    <span class="menu-title">Channel</span>
                </a>
                <div class="" :class="$store.state.isActive == 'channel' ? '' : 'collapse'" id="ui-channel">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item"> 
                            <nuxt-link 
                                class="nav-link" 
                                :class="$store.state.subIsActive == 'channel-list' ? 'active' : ''" 
                                :to="'/dashboard/channel?page=1'"
                            >
                                <span class="ml-5">Danh sách</span>
                            </nuxt-link>
                        </li>
                        <li class="nav-item"> 
                            <nuxt-link
                                class="nav-link" 
                                :class="$store.state.subIsActive == 'channel-create' ? 'active' : ''" 
                                :to="globalBaseUrl('dashboard/channel/create')"
                            >
                                <span class="ml-5">Tạo mới</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="nav-item nav-item-submenu" :class="$store.state.isActive == 'videos' ? 'active' : ''" aria-expanded="false">
                <a class="nav-link" data-toggle="collapse" href="#ui-videos" aria-controls="ui-videos">
                    <i class="mdi mdi-video menu-icon"></i>
                    <span class="menu-title">Videos</span>
                </a>
                <div class="" :class="$store.state.isActive == 'videos' ? '' : 'collapse'" id="ui-videos">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item"> 
                            <nuxt-link 
                                class="nav-link" 
                                :class="$store.state.subIsActive == 'video-list' ? 'active' : ''" 
                                :to="'/dashboard/videos?page=1'"
                            >
                                <span class="ml-5">Danh sách</span>
                            </nuxt-link>
                        </li>
                        <li class="nav-item"> 
                            <nuxt-link 
                                class="nav-link" 
                                :class="$store.state.subIsActive == 'video-create' ? 'active' : ''" 
                                :to="globalBaseUrl('dashboard/videos/create')"
                            >
                                <span class="ml-5">Tạo mới</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="nav-item nav-item-submenu" :class="$store.state.isActive == 'settings' ? 'active' : ''" aria-expanded="false">
                <a class="nav-link" data-toggle="collapse" href="#ui-settings" aria-controls="ui-settings">
                    <i class="mdi mdi-settings menu-icon"></i>
                    <span class="menu-title">Cài đặt</span>
                </a>
                <div :class="$store.state.isActive == 'settings' ? '' : 'collapse'" id="ui-settings">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item active"> 
                            <nuxt-link 
                                class="nav-link" 
                                :class="$store.state.subIsActive == 'setting-general' ? 'active' : ''" 
                                :to="'/dashboard/settings'"
                            >
                                <span class="ml-5">Cài đặt chung</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    <!-- /main navigation -->
</template>
<script type="text/javascript">
    export default {
    }
</script>