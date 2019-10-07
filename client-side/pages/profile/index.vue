<template>
    <div class="ml-lg-auto mr-lg-4 mx-xl-auto gl-container transition-normal">
        <div class="profileUser d-lg-flex d-block mt-5 pt-1">
            <!-- start : contentRight -->
            <div class="pb-5 mt-3 mt-lg-0 px-2 ">
                <!-- start : file -->
                <div>
                    <div class="text-center">
                        <h3>Thông tin cá nhân </h3>
                        <div>Thông tin cơ bản, như tên và ảnh của bạn, mà bạn sử dụng trên các dịch vụ của Langadvisor</div>
                    </div>
                    <div class="border-s1 border-color-ba border-radius-5 pt-1 pb-3 mt-4">
                        <div class="font-size-24 font-weight-500 mx-5">Hồ sơ</div>
                        <div class="d-xl-flex d-block mx-5">
                            <div>Một số thông tin có thể hiển thị cho những người khác đang sử dụng dịch vụ của Langadvisor.</div>
                            <div>
                                <nuxt-link to="#">Tìm hiểu thêm</nuxt-link>
                            </div>
                        </div>
                        <!-- image -->
                        <div class="py-2  pr-4 mt-1">
                            <div class="d-md-flex d-block align-items-center mx-5">
                                <div class="col-3 pl-0 ">Ảnh đại diện</div>
                                <div class="d-md-flex d-block col-12 col-md-9 pl-0 align-items-center">
                                    <div>
                                        <UploadFile :name="`profile.avatarStr`" @onChangeFile="changeImage" :key="avatarKey"/>
                                    </div>
                                    <div class="ml-auto"> 
                                        <img :src="$store.state.user.data.avatar ? globalImageUrl($store.state.user.data.avatar) : globalImageUrl('images-asset/No_Image_Available.jpg')" alt="avatar">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="border-bottom-s1 border-color-dadce0 "></div> -->

                        <!-- Name -->
                        <div class="py-2  pr-4 py-3">
                            <div class="d-flex align-items-center mx-5">
                                <div class="col-3 pl-0">Họ và Tên</div>
                                <div class="col-12 col-md-9  pl-0 align-items-center">
                                    <input type="text" class="form-control" id="inputUsername" aria-describedby="usernameHelp" placeholder="Nhập Họ và Tên" v-model="profile.username" autocomplete="off"/>
                                    <template v-if="globalObjectLength(errors)">
                                        <template v-for="(error, id) in errors[`username`]">
                                            <div :key="id" class="text-danger d-flex mt-2">{{ error }}</div>
                                        </template>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="border-bottom-s1 border-color-dadce0 "></div> -->

                        <!-- birthday -->
                        <!-- <div class="py-2  pr-4 py-3">
                            <div class="d-flex align-items-center mx-5">
                                <div class="col-3 pl-0">Ngày sinh</div>
                                <div class="d-flex col-12 col-md-9  pl-0 align-items-center">
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập tên của bạn">
                                </div>
                            </div>
                        </div>
                        <div class="border-bottom-s1 border-color-dadce0 "></div> -->

                        <!-- sex -->
                        <!-- <div class="py-2  pr-4 py-3">
                            <div class="d-flex align-items-center mx-5">
                                <div class="col-3 pl-0">Giới tính</div>
                                <div class="d-flex col-12 col-md-9  pl-0 align-items-center">
                                    <div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                                            <label class="form-check-label" for="inlineRadio1">Nam</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                            <label class="form-check-label" for="inlineRadio2">Nữ</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div class="border-bottom-s1 border-color-dadce0 "></div> -->

                        <!-- password -->
                        <template  v-if="this.profile.isChangePsw==false">
                            <div class="py-2 pr-4 py-3 ">
                                <div class="d-flex align-items-center mx-5">
                                    <div class="col-3 pl-0">Mật khẩu hiện tại</div>
                                    <div class="d-flex col-12 col-md-9  pl-0 align-items-center">
                                        <label>************</label>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template class="py-2 pr-4 py-3 "  v-else>
                            <div class="py-2 pr-4 py-3 ">
                                <div class="d-flex align-items-center mx-5">
                                    <div class="col-3 pl-0">Mật khẩu hiện tại</div>
                                    <div class="col-12 col-md-9  pl-0 align-items-center">
                                        <input type="password" class="form-control" id="inputPassword" v-model="profile.current_psw" aria-describedby="passwordlHelp" placeholder="Nhập mật khẩu hiện tại">
                                        <template v-if="globalObjectLength(errors)">
                                            <template v-for="(error, id) in errors[`current_psw`]">
                                                <div :key="id" class="text-danger d-flex mt-2">{{ error }}</div>
                                            </template>
                                        </template>
                                    </div>
                                </div>
                            </div>
                            <div class="py-2 pr-4 py-3 ">
                                <div class="d-flex align-items-center mx-5">
                                    <div class="col-3 pl-0">Mật khẩu mới</div>
                                    <div class="col-12 col-md-9  pl-0 align-items-center">
                                        <input type="password" class="form-control" id="inputPassword" v-model="profile.new_psw" aria-describedby="passwordlHelp" placeholder="Nhập mật khẩu mới">
                                        <template v-if="globalObjectLength(errors)">
                                            <template v-for="(error, id) in errors[`new_psw`]">
                                                <div :key="id" class="text-danger d-flex mt-2">{{ error }}</div>
                                            </template>
                                        </template>
                                    </div>
                                </div>
                            </div>
                            <div class="py-2 pr-4 py-3 ">
                                <div class="d-flex align-items-center mx-5">
                                    <div class="col-3 pl-0">Xác nhận lại mật khẩu</div>
                                    <div class="col-12 col-md-9  pl-0 align-items-center">
                                        <input type="password" class="form-control" id="inputPassword" v-model="profile.confirm_psw" aria-describedby="passwordlHelp" placeholder="Xác nhận mật khẩu mới">
                                        <template v-if="globalObjectLength(errors)">
                                            <template v-for="(error, id) in errors[`confirm_psw`]">
                                                <div :key="id" class="text-danger d-flex mt-2">{{ error }}</div>
                                            </template>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </template>
                        
                        <!-- change password -->
                        <div class="checkbox d-flex align-items-center mx-5">
                            <div class="col-3 pl-0"></div>
                            <div class="">
                                <input type="checkbox" value="" class="" v-model="profile.isChangePsw"> Bạn muốn thay đổi mật khẩu !
                            </div>
                        </div>
                            <!-- Input password again -->
                        <!-- <div class="py-2 pr-4 py-3">
                            <div class="d-flex align-items-center mx-5">
                                <div class="col-3 pl-0">Nhập mật khẩu muốn thay đổi</div>
                                <div class="d-flex col-12 col-md-9  pl-0 align-items-center">
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập mật khẩu">
                                </div>
                            </div>
                        </div> -->

                    </div>
                </div>
                <!-- end : file -->

                <!-- start : contactInformation -->
                <div class="pb-3">
                   <div class="border-s1 border-color-ba border-radius-5 pt-1 pb-3 mt-4">
                        <div class="font-size-24 font-weight-500 mx-5">Thông tin liên hệ</div>
                        <!-- <div class="d-flex ">
                            <div>Một số thông tin có thể hiển thị cho những người khác đang sử dụng dịch vụ của xxx.</div>
                            <div>
                                <nuxt-link to="#">Tìm hiểu thêm</nuxt-link>
                            </div>
                        </div> -->

                        <!-- Email -->
                        <div class="py-2  pr-4 py-3">
                            <div class="d-flex align-items-center mx-5">
                                <div class="col-3 pl-0">Email</div>
                                <div class="d-flex col-12 col-md-9  pl-0 align-items-center">
                                    <label>{{ profile.email }}</label>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="border-bottom-s1 border-color-dadce0 "></div> -->

                        <!-- phoneNumber -->
                        <div class="py-2  pr-4 py-3">
                            <div class="d-flex align-items-center mx-5">
                                <div class="col-3 pl-0">Điện thoại</div>
                                <div class="col-12 col-md-9  pl-0 align-items-center">
                                    <input type="text" class="form-control" id="inputPhone" aria-describedby="phoneHelp" placeholder="Nhập số điện thoại" v-model="profile.phone" autocomplete="off"/>
                                    <template v-if="globalObjectLength(errors)">
                                        <template v-for="(error, id) in errors[`phone`]">
                                            <div :key="id" class="text-danger d-flex mt-2">{{ error }}</div>
                                        </template>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="border-bottom-s1 border-color-dadce0 "></div> -->
                    </div>
                </div>
                <!-- end : contactInformation -->
            </div>
            <!-- end : contentRight -->
        </div>
         <!-- start : bottom -->
        <div class="d-block d-md-flex pb-5 justify-content-between editButton px-2">
            <button type="submit" @click="submitProfile" :disabled="disabledSubmit" class="btn btn-success px-5">
                <span v-if="disabledSubmit">
                    <PulseLoader :color="'white'" :size="'10px'"/>
                </span>
                <span v-else>
                    Đồng ý
                </span>
            </button>
            <button @click="resetUserInfo()" class="btn btn-outline-success px-5 ">
                Nhập lại
            </button>
        </div>
        <!-- end : bottom -->
    </div>
</template>

<script type="text/javascript">
import UploadFile from '~/components/common/UploadFile.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import AuthService from '~/services/auth.service';

export default {
    components: {
        PulseLoader,
        UploadFile,
    },
    data() {
        return {
            disabledSubmit: false,
            errors: {},
            avatarKey: 0,
            profile: {
                email: this.$store.state.user.data.email,
                username: this.$store.state.user.data.username,
                phone: this.$store.state.user.data.phone,
                current_psw: '',
                new_psw: '',
                confirm_psw: '',
                avatarStr: '',
                isChangePsw: false,
            }
        }
    },
    created() {
        this.$store.dispatch('user/authentication', { url: '', route: this.$route });
    },
    methods: {
        submitProfile: function(){
            this.disabledSubmit = true;
            this.errors = {};
            let data = this.profile;
            this.$http.post('/user/update', data)
            .then( response => {
                AuthService.setAccessToken(response.data.token);
                this.$store.commit('user/set', AuthService.setUser());
                this.disabledSubmit = false;
                this.profileDt.isChangePsw = false;
                this.profileDt.current_psw = '';
                this.profileDt.new_psw = '';
                this.profileDt.confirm_psw = '';
                this.avatarKey++;
                this.$toastr('success', response.data.message);
            })
            .catch( response => {
                this.disabledSubmit = false;
                if(response.status == 400){
                    this.errors = response.data.errors;
                    this.$toastr('error', 'Có lỗi trong quá trình xử lí dữ liệu');
                }
            })

        },
        resetUserInfo: function() {
            this.profile = {
                email: this.$store.state.user.data.email,
                username: this.$store.state.user.data.username,
                phone: this.$store.state.user.data.phone,
                current_psw: '',
                new_psw: '',
                confirm_psw: '',
                avatarStr:'',
                isChangePsw: this.profile.isChangePsw,
            }
            this.avatarKey++;
        },
        changeImage: function(data) {
            let index = data.name.split('.');
            this[index[0]][index[1]] = data.base64String
        },
    },
}
</script>