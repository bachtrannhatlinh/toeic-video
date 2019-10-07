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
                <h3 class="mt-3">Đăng ký</h3>
            </div>
            <div class="mt-4">
                 <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputEmail1" v-model="username" placeholder="Tên tài khoản" autocomplete="off">
                </div>
                <template v-if="globalObjectLength(errors)">
                    <template v-for="(error, index) in errors['username']">
                        <div class="text-danger" :key="index">{{ error }}</div>
                    </template>
                </template>
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
            </div>
            <div class="mt-4">
                <div class="form-group editPosition">
                    <input :type="passwordType" class="form-control" id="passsword" v-model="password" placeholder="Mật khẩu" autocomplete="off">
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
            <div class="mt-4">
                <div class="form-group editPosition">
                    <input :type="password_cType" class="form-control" id="password_c" v-model="password_c" placeholder="Xác nhận mật khẩu" autocomplete="off">
                    <span @click="showPwd_c" class="editEye">
                        <i :class="password_cType == 'password' ? 'fas fa-eye' : 'fas fa-eye-slash' "></i>
                    </span>
                </div>
                <template v-if="globalObjectLength(errors)">
                    <template v-for="(error, index) in errors['password_c']">
                        <div class="text-danger" :key="index">{{ error }}</div>
                    </template>
                </template>
            </div>
            <div class="pb-2 mt-4">
                <button type="button" class="btn btn-success w-100 font-size-24 " @click="register" :disabled="disabledSubmit">
                    <span v-if="disabledSubmit">
                        <PulseLoader :color="'white'"/>
                    </span>
                    <span v-else>
                        Đăng kí
                    </span>
                </button>
            </div>
            <div class="border-bottom-s1 border-color-ba mt-3"></div>
            <div class="font-size-14 mt-3">Bạn đã có tài khoản?<nuxt-link to="/login" class="font-size-14 ml-1"> Đăng nhập </nuxt-link></div>
        </div>
    </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import AuthService from '~/services/auth.service';

export default {
    components: {
        PulseLoader,
    },
    data() {
        return {
            isAuth: AuthService.isAuth,
            disabledSubmit: false,
            username: '',
            email: '',
            password: '',
            password_c: '',
            url: window.location.origin,
            passwordType: 'password',
            password_cType: 'password',
            errors: {},
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
        showPwd_c() {
            if (this.password_cType === 'password') {
                this.password_cType = 'text'
            } else {
                this.password_cType = 'password'
            }
        },
        register() {
            if(!this.disabledSubmit){
                this.disabledSubmit = true;
                let data = {};
                data.username = this.username;
                data.email = this.email;
                data.password = this.password;
                data.password_c = this.password_c;
                data.url = this.url;
                this.$http.post("auth/register",data)
                .then(response => {
                    this.$toastr("success",response.data.message);
                    this.$router.push({ name: 'login' });
                }).catch(response => {
                    this.disabledSubmit = false;
                    if(response.status == 400){
                        this.errors = response.data.errors;
                        this.$toastr("error","Có lỗi trong quá trình xử lí dữ liệu");
                    }else{
                        this.$toastr("error",response.data.message);
                    }
                });
            }
        },
    },
}
</script>