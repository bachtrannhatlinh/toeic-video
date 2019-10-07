import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _4cb865d8 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages_dashboard_index" */))
const _d44d4d66 = () => interopDefault(import('..\\pages\\forgot-pass\\index.vue' /* webpackChunkName: "pages_forgot-pass_index" */))
const _409eca94 = () => interopDefault(import('..\\pages\\history\\index.vue' /* webpackChunkName: "pages_history_index" */))
const _4c95301f = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _63236639 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages_news_index" */))
const _4eb9965f = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages_profile_index" */))
const _3289b4e5 = () => interopDefault(import('..\\pages\\recharge\\index.vue' /* webpackChunkName: "pages_recharge_index" */))
const _1a29212e = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages_register_index" */))
const _1ead8c06 = () => interopDefault(import('..\\pages\\search-result\\index.vue' /* webpackChunkName: "pages_search-result_index" */))
const _47a9bcf5 = () => interopDefault(import('..\\pages\\terms-of-use\\index.vue' /* webpackChunkName: "pages_terms-of-use_index" */))
const _c4fbe84c = () => interopDefault(import('..\\pages\\watch-later\\index.vue' /* webpackChunkName: "pages_watch-later_index" */))
const _558b12f8 = () => interopDefault(import('..\\pages\\dashboard\\categories\\index.vue' /* webpackChunkName: "pages_dashboard_categories_index" */))
const _05190e9d = () => interopDefault(import('..\\pages\\dashboard\\channel\\index.vue' /* webpackChunkName: "pages_dashboard_channel_index" */))
const _031be53e = () => interopDefault(import('..\\pages\\dashboard\\news\\index.vue' /* webpackChunkName: "pages_dashboard_news_index" */))
const _19444511 = () => interopDefault(import('..\\pages\\dashboard\\settings\\index.vue' /* webpackChunkName: "pages_dashboard_settings_index" */))
const _bf583588 = () => interopDefault(import('..\\pages\\dashboard\\videos\\index.vue' /* webpackChunkName: "pages_dashboard_videos_index" */))
const _70325e61 = () => interopDefault(import('..\\pages\\login\\dashboard.vue' /* webpackChunkName: "pages_login_dashboard" */))
const _1514fd66 = () => interopDefault(import('..\\pages\\video\\detail.vue' /* webpackChunkName: "pages_video_detail" */))
const _6a750f38 = () => interopDefault(import('..\\pages\\video\\detail\\sub-video.vue' /* webpackChunkName: "pages_video_detail_sub-video" */))
const _8bd011d8 = () => interopDefault(import('..\\pages\\video\\detail\\_slug.vue' /* webpackChunkName: "pages_video_detail__slug" */))
const _f8e8d274 = () => interopDefault(import('..\\pages\\dashboard\\categories\\create.vue' /* webpackChunkName: "pages_dashboard_categories_create" */))
const _7485e07e = () => interopDefault(import('..\\pages\\dashboard\\channel\\create.vue' /* webpackChunkName: "pages_dashboard_channel_create" */))
const _10f82d06 = () => interopDefault(import('..\\pages\\dashboard\\news\\create.vue' /* webpackChunkName: "pages_dashboard_news_create" */))
const _dc45e5fc = () => interopDefault(import('..\\pages\\dashboard\\videos\\create.vue' /* webpackChunkName: "pages_dashboard_videos_create" */))
const _7b602337 = () => interopDefault(import('..\\pages\\dashboard\\categories\\update\\_id.vue' /* webpackChunkName: "pages_dashboard_categories_update__id" */))
const _61aa0f1c = () => interopDefault(import('..\\pages\\dashboard\\channel\\update\\_id.vue' /* webpackChunkName: "pages_dashboard_channel_update__id" */))
const _2fdc2a40 = () => interopDefault(import('..\\pages\\dashboard\\news\\update\\_id.vue' /* webpackChunkName: "pages_dashboard_news_update__id" */))
const _79eb327b = () => interopDefault(import('..\\pages\\dashboard\\videos\\update\\_id.vue' /* webpackChunkName: "pages_dashboard_videos_update__id" */))
const _85177506 = () => interopDefault(import('..\\pages\\channel\\_slug.vue' /* webpackChunkName: "pages_channel__slug" */))
const _48e1f060 = () => interopDefault(import('..\\pages\\confirm-register\\_token.vue' /* webpackChunkName: "pages_confirm-register__token" */))
const _a9cd2fe2 = () => interopDefault(import('..\\pages\\forgot-pass\\_token.vue' /* webpackChunkName: "pages_forgot-pass__token" */))
const _b10e2af6 = () => interopDefault(import('..\\pages\\video\\_slug.vue' /* webpackChunkName: "pages_video__slug" */))
const _ddc2b028 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/dashboard",
      component: _4cb865d8,
      name: "dashboard"
    }, {
      path: "/forgot-pass",
      component: _d44d4d66,
      name: "forgot-pass"
    }, {
      path: "/history",
      component: _409eca94,
      name: "history"
    }, {
      path: "/login",
      component: _4c95301f,
      name: "login"
    }, {
      path: "/news",
      component: _63236639,
      name: "news"
    }, {
      path: "/profile",
      component: _4eb9965f,
      name: "profile"
    }, {
      path: "/recharge",
      component: _3289b4e5,
      name: "recharge"
    }, {
      path: "/register",
      component: _1a29212e,
      name: "register"
    }, {
      path: "/search-result",
      component: _1ead8c06,
      name: "search-result"
    }, {
      path: "/terms-of-use",
      component: _47a9bcf5,
      name: "terms-of-use"
    }, {
      path: "/watch-later",
      component: _c4fbe84c,
      name: "watch-later"
    }, {
      path: "/dashboard/categories",
      component: _558b12f8,
      name: "dashboard-categories"
    }, {
      path: "/dashboard/channel",
      component: _05190e9d,
      name: "dashboard-channel"
    }, {
      path: "/dashboard/news",
      component: _031be53e,
      name: "dashboard-news"
    }, {
      path: "/dashboard/settings",
      component: _19444511,
      name: "dashboard-settings"
    }, {
      path: "/dashboard/videos",
      component: _bf583588,
      name: "dashboard-videos"
    }, {
      path: "/login/dashboard",
      component: _70325e61,
      name: "login-dashboard"
    }, {
      path: "/video/detail",
      component: _1514fd66,
      name: "video-detail",
      children: [{
        path: "sub-video",
        component: _6a750f38,
        name: "video-detail-sub-video"
      }, {
        path: ":slug?",
        component: _8bd011d8,
        name: "video-detail-slug"
      }]
    }, {
      path: "/dashboard/categories/create",
      component: _f8e8d274,
      name: "dashboard-categories-create"
    }, {
      path: "/dashboard/channel/create",
      component: _7485e07e,
      name: "dashboard-channel-create"
    }, {
      path: "/dashboard/news/create",
      component: _10f82d06,
      name: "dashboard-news-create"
    }, {
      path: "/dashboard/videos/create",
      component: _dc45e5fc,
      name: "dashboard-videos-create"
    }, {
      path: "/dashboard/categories/update/:id?",
      component: _7b602337,
      name: "dashboard-categories-update-id"
    }, {
      path: "/dashboard/channel/update/:id?",
      component: _61aa0f1c,
      name: "dashboard-channel-update-id"
    }, {
      path: "/dashboard/news/update/:id?",
      component: _2fdc2a40,
      name: "dashboard-news-update-id"
    }, {
      path: "/dashboard/videos/update/:id?",
      component: _79eb327b,
      name: "dashboard-videos-update-id"
    }, {
      path: "/channel/:slug?",
      component: _85177506,
      name: "channel-slug"
    }, {
      path: "/confirm-register/:token?",
      component: _48e1f060,
      name: "confirm-register-token"
    }, {
      path: "/forgot-pass/:token?",
      component: _a9cd2fe2,
      name: "forgot-pass-token"
    }, {
      path: "/video/:slug?",
      component: _b10e2af6,
      name: "video-slug"
    }, {
      path: "/",
      component: _ddc2b028,
      name: "index"
    }],

    fallback: false
  })
}
