<template>
    <section class="container-fulid d-flex flex-column justify-content-start vh-min-100 gl-body bg-gray-3">
        <template v-if="!pageLoading">
            <Header />
            <LeftAside />
            <nuxt />
            <Footer />
        </template>
    </section>
</template>
<script>
import Header from '~/components/client/base/Header';
import Footer from '~/components/client/base/Footer';
import LeftAside from '~/components/client/base/LeftAside';

export default {
    components: {
        Header,
        Footer,
        LeftAside,
    },
    props: {
        pageLoading: '',
    },
    created() {
        this.$store.dispatch('user/authentication', { url: '', route: this.$route });
    },
    head() {
        return {
            link: [
                {
                    rel: 'stylesheet',
                    href: '/library-asset/css/bootstrap.min.css'
                },
                {
                    rel: 'stylesheet',
                    href: '/client-asset/css/main.css'
                },
                {
                    rel: 'stylesheet',
                    href: '/library-asset/css/toastr.min.css'
                },
                {
                    rel: 'stylesheet',
                    href: '/library-asset/css/slick.min.css'
                }
            ],
            script: [
                {
                    src: '/client-asset/js/script-min.js'
                },
                {
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
                }
            ]
        }
    },
    mounted() {
        this.handleWindowSize();
    },
    methods: {
        handleWindowSize() {
            setInterval(() => {
                // thumbnail image (height * 1.7 = width)
                var arrOfThumbnailImage = document.getElementsByClassName('image-thumbnail');

                for (const iterator of arrOfThumbnailImage) {
                    iterator.style.height = `${ iterator.offsetWidth / 1.7 }px`
                }

                // square image ( width = height )
                var arrOfSquareImage = document.getElementsByClassName('square-img');

                for (const iterator of arrOfSquareImage) {
                    iterator.style.height = `${ iterator.offsetWidth }px`
                }
            }, 100);
        }
    },
}
</script>