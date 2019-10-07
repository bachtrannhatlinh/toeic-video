<template>
    <div class="p-2 pb-3" v-if="!isAuth">
        <div class="loginTop"></div>
        <div class="container forgotPassword col-xl-4 col-lg-5 col-md-6 col-12 border-s1 border-color-ba border-radius-5 p-5">
            <div class="text-center">
                <img :src="globalImageUrl('images-asset/code_qr.png')" alt="xxx">
                <div class="mt-4">
                    <h4>Quên mật khẩu</h4>
                    <div>Vui lòng nhập địa chỉ email của bạn</div>
                </div>
                <div class="form-group mt-4">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" v-model="email" autocomplete="off">
                </div>
                <template v-if="globalObjectLength(errors)">
                    <template v-for="(error, index) in errors['email']">
                        <div class="text-danger" :key="index">{{ error }}</div>
                    </template>
                </template>
            </div>
            <div class="d-flex flex-row-reverse mt-5">
                <button type="button" class="btn btn-success px-4" @click="sendPass" :disabled="disabledSubmit">
                    <span v-if="disabledSubmit">
                        <PulseLoader :color="'white'"/>
                    </span>
                    <span v-else>
                        Gửi
                    </span>
                </button>
            </div>
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
            email: '',
            url: window.location.origin,
            errors: {},
            disabledSubmit: false,
        }
    },
    methods: {
        sendPass(){
            this.disabledSubmit = true;
            this.errors = {};
            let data = {};
            data.email = this.email;
            data.url = this.url;
            this.$http.post("auth/forgot-pass",data)
            .then((response) => {
                this.disabledSubmit = false;
                this.$toastr("success",response.data.message);
            })
            .catch((response) => {
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
}
</script>