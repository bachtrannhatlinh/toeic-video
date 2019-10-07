<template>
    <div class="px-2 pb-3" v-if="!isAuth">
        <div class="loginTop"></div>
        <div class="container loginBetween col-xl-3 col-lg-4 col-md-6 col-12 border-s1 border-color-ba border-radius-5 p-4">
            <div>
                <i class="fas fa-chevron-left color-1a73e8"></i>
                <nuxt-link to="/" class="font-size-16">Quay trở lại trang chủ</nuxt-link>
            </div>
            <div class="text-center mt-3">
                <img :src="globalImageUrl('images-asset/No_Image_Available.jpg')" alt="xxx">
                <h3 class="mt-3">Đăng nhập</h3>
            </div>
            <div class="mt-4">
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" placeholder="Email đăng nhập" autocomplete="off">
                </div>
                <template v-if="globalObjectLength(errors)">
                    <template v-for="(error, index) in errors['email']">
                        <div class="text-danger" :key="index">{{ error }}</div>
                    </template>
                </template>
                <div class="form-group editPosition">
                    <input :type="passwordType" class="form-control" id="exampleInputEmail1" v-model="password" placeholder="Mật khẩu" autocomplete="off">
                    <span @click="showPwd" class="editEye">
                        <i :class="passwordType == 'password' ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
                    </span>
                </div>
                <template v-if="globalObjectLength(errors)">
                    <template v-for="(error, index) in errors['password']">
                        <div class="text-danger" :key="index">{{ error }}</div>
                    </template>
                </template>
            </div>
            <div class="pb-2 mt-4">
                <button type="button" class="btn btn-success w-100 font-size-24 " @click="login" :disabled="disabledSubmit">
                    <span v-if="disabledSubmit">
                        <PulseLoader :color="'white'"/>
                    </span>
                    <span v-else>
                        Đăng nhập
                    </span>
                </button>
            </div>
            <!-- <div class="d-flex mt-4">
                <div class="background-color-4267b2 color-white font-size-12 p-1">Sign in with Facebook</div>
                <div class="ml-auto background-color-dd4b39 color-white font-size-12 p-1">Sign in with Google</div>
            </div> -->
            <div class="mt-2 text-center font-weight-500">
                <nuxt-link to="/forgot-pass" class="color-e11d21">Quên mật khẩu?</nuxt-link>
            </div>
            <div class="border-bottom-s1 border-color-ba mt-3"></div>
            <div class="font-size-14 mt-3">Bạn chưa có tài khoản? <nuxt-link to="/register" class="font-size-14"> Đăng kí</nuxt-link></div>
        </div>
    </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import AuthService from '~/services/auth.service';
export default {
    components: {
        PulseLoader,
        AuthService,
    },
    data() {
        return {
            isAuth: AuthService.isAuth,
            disabledSubmit: false,
            email: 'member@member.com',
            password: '123123123',
            errors: {},
            passwordType: 'password',
        }
    },
    methods: {
        showPwd() {
            if (this.passwordType === 'password') {
                this.passwordType = 'text'
            } else {
                this.passwordType = 'password'
            }
        },
        login: function() {
            if(!this.disabledSubmit){
                this.disabledSubmit = true;
                let data = {};
                data.email = this.email;
                data.password = this.password;
                this.$http.post('/auth/login', data)
                .then(response => {
                    const { loginRedirect } = this.$store.state;
                    AuthService.setAccessToken(response.data.token);
                    if(loginRedirect) {
                        this.$router.push(loginRedirect);
                        this.$store.commit('setLoginRedicret', '');
                    }else {
                        this.$router.push({name: 'index'});
                    }
                })
                .catch(response => {
                    this.disabledSubmit = false;
                    if(response.status == 400){
                        this.errors = response.data.errors;
                        this.$toastr('error', 'Có lỗi trong quá trình xử lí dữ liệu');
                    }else{
                        this.$toastr('error', response.data.message);
                    }
                })  
            } 
        },
    },
}
</script>