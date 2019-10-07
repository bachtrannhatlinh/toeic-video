<template>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title mb-3">Cài đặt</h4>
            <div class="text-center" v-if="isSettingLoad">
                <PulseLoader :color="'#da8cff'" :size="'20px'"/>
            </div>
            <template v-else>
                <div class="tab">
                    <template v-for="(type, index) in types">
                        <button :key="index" type="button" class="tablinks" :class="index == typeSelected ? 'active' : ''" @click="selectTabs(index)">{{ type }}</button>
                    </template>
                </div>
                <template v-for="(type, index) in types">
                    <div class="tabcontent" :key="index" :style="index == typeSelected ? 'display:block' : 'display:none'">
                        <template v-if="index == 'mail'">
                            <div class="forms-sample mt-2">
                                <div class="form-group col-6">
                                    <label>Host:</label>
                                    <input type="text" v-model="mail.mail_host" class="form-control" placeholder="Mail Host">
                                    <template v-if="globalObjectLength(errors)">
                                        <template v-for="error in errors['mail_host']">
                                            <div :key="error" class="text-danger mt-2">
                                                {{ error }}
                                            </div>
                                        </template>
                                    </template>
                                </div>
                                <div class="form-group col-6">
                                    <label>Port:</label>
                                    <input type="text" v-model="mail.mail_port" class="form-control" placeholder="Mail Port">
                                    <template v-if="globalObjectLength(errors)">
                                        <template v-for="error in errors['mail_port']">
                                            <div :key="error" class="text-danger mt-2">
                                                {{ error }}
                                            </div>
                                        </template>
                                    </template>
                                </div>
                                <div class="form-group col-6">
                                    <label>Username:</label>
                                    <input type="text" v-model="mail.mail_username" class="form-control" placeholder="Mail Username">
                                    <template v-if="globalObjectLength(errors)">
                                        <template v-for="error in errors['mail_username']">
                                            <div :key="error" class="text-danger mt-2">
                                                {{ error }}
                                            </div>
                                        </template>
                                    </template>
                                </div>
                                <div class="form-group col-6">
                                    <label>Password:</label>
                                    <input type="text" v-model="mail.mail_password" class="form-control" placeholder="Mail Password">
                                    <template v-if="globalObjectLength(errors)">
                                        <template v-for="error in errors['mail_password']">
                                            <div :key="error" class="text-danger mt-2">
                                                {{ error }}
                                            </div>
                                        </template>
                                    </template>
                                </div>
                            </div>
                        </template>
                        <template v-if="index == 'social'">
                            <div>
                                <label>Google</label>
                                <div class="forms-sample mx-5 mt-2">
                                    <div class="form-group col-6">
                                        <label>ID client:</label>
                                        <input type="text" v-model="social.google_client_id" class="form-control" placeholder="ID client Google">
                                        <template v-if="globalObjectLength(errors)">
                                            <template v-for="error in errors['google_client_id']">
                                                <div :key="error" class="text-danger mt-2">
                                                    {{ error }}
                                                </div>
                                            </template>
                                        </template>
                                    </div>
                                    <div class="form-group col-6">
                                        <label>Secret Code:</label>
                                        <input type="text" v-model="social.google_secret_code" class="form-control" placeholder="Customer secret code"/>
                                    </div>
                                    <div class="form-group col-6">
                                        <label>Callback:</label>
                                        <input type="text" v-model="social.google_callback" class="form-control" placeholder="Callback URL Google">
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label>Facebook</label>
                                <div class="forms-sample mt-2 mx-5">
                                    <div class="form-group col-6">
                                        <label>App ID:</label>
                                        <input type="text" v-model="social.facebook_client_id" class="form-control" placeholder="Application ID">
                                        <template v-if="globalObjectLength(errors)">
                                            <template v-for="error in errors['facebook_client_id']">
                                                <div :key="error" class="text-danger mt-2">
                                                    {{ error }}
                                                </div>
                                            </template>
                                        </template>
                                    </div>
                                    <div class="form-group col-6">
                                        <label>Secret Code:</label>
                                        <input type="text" v-model="social.facebook_secret_code" class="form-control" placeholder="Customer secret code">
                                    </div>
                                    <div class="form-group col-6">
                                        <label>Callback:</label>
                                        <input type="text" v-model="social.facebook_callback" class="form-control" placeholder="Callback URL Facebook">
                                    </div>
                                </div>
                            </div>   
                        </template>
                        <template v-if="index == 'more'">
                            <div class="forms-sample mt-2">
                                <div class="form-group col-6">
                                    <label>Banner 1 trang chủ:</label>
                                    <img class="d-flex" v-if="more.homepage_banner_1" :src="globalImageUrl(more.homepage_banner_1)" width="200" />
                                    <UploadFile :name="`more.homepage_banner_1_str`" @onChangeFile="changeImage" />
                                </div>
                                <div class="form-group col-6">
                                    <label>Banner 2 trang chủ:</label>
                                    <img class="d-flex" v-if="more.homepage_banner_2" :src="globalImageUrl(more.homepage_banner_2)" width="200" />
                                    <UploadFile :name="`more.homepage_banner_2_str`" @onChangeFile="changeImage" />
                                </div>
                                <div class="form-group col-6">
                                    <label>Banner 3 trang chủ:</label>
                                    <img class="d-flex" v-if="more.homepage_banner_3" :src="globalImageUrl(more.homepage_banner_3)" width="200" />
                                    <UploadFile :name="`more.homepage_banner_3_str`" @onChangeFile="changeImage" />
                                </div>
                                <div class="form-group col-6">
                                    <label>Slider trang chủ:</label>
                                    <template v-if="more.homepage_sliders">
                                        <div class="row">
                                            <div class="mb-3 mx-2 position-relative" v-for="(image, index) in more.homepage_sliders">
                                                <img class="" :src="globalImageUrl(image)" width="200" />
                                                <button class="btn btn-danger position-absolute right-0 top-0" type="button" @click="deleteMeta(index, 'more.homepage_sliders')">
                                                    <i class="mdi mdi-delete"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </template>
                                    <UploadFiles :name="'more.homepage_sliders_str'" @onChangeFiles="changeImages"/>
                                </div>
                            </div>
                        </template>
                        <button type="button" class="btn btn-success ml-2 mb-2" @click="updateSetting" :disabled="disabledSubmit">{{ disabledSubmit ? '' : 'Cập nhật' }}
                            <span v-if="disabledSubmit">
                                <PulseLoader :color="'white'" :size="'10px'"/>
                            </span>
                        </button>
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>
<script type="text/javascript">
import UploadFile from '~/components/common/UploadFile.vue';
import UploadFiles from '~/components/common/UploadFiles.vue';
import CkEditor from '../ckeditor/CkEditor.vue';
import SocketService from '~/services/socket.service';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
    components: {
        UploadFile,
        UploadFiles,
        CkEditor,
        PulseLoader
    },
    data() {
        return {
            mail: {},
            social: {},
            more: {},
            isSettingLoad: true,
            typeSelected: '',
            disabledSubmit: false,
            errors: {},
            types: {
                mail: 'Mail SMTP',
                social: 'Social login',
                more: 'Cài đặt thêm',
            },
        }
    },
    methods: {
        selectTabs: function(index, action = ''){
            if(index !== null){
                this[index] = {};
                this.isSettingLoad = true;
                this.typeSelected = index;
                this.disabledSubmit = false;
                this.errors = {};
                if((index && !this.globalObjectLength(this[index])) || action == 'update'){
                    this.$http.get('settings?type='+index)
                    .then( response => {
                        this[index] = response.data.data;
                        this.isSettingLoad = false;
                    })
                }
            }
        },
        updateSetting: function(){
            this.disabledSubmit = true;
            this.errors = {};
            if(this.typeSelected){
                let type = this.typeSelected;
                let data = {};
                data = this[type];
                this.$http.post("settings/update?type=" + type, data)
                .then( response => {
                    this.$toastr('success', response.data.message);
                    this.disabledSubmit = false;
                    this.selectTabs(type, 'update');
                })
                .catch( response => {
                    this.disabledSubmit = false;
                    if( response.status == 400 ){
                        this.errors = response.data.errors;
                        this.$toastr('error', 'Có lỗi trong quá trình xử lí');
                    }else{
                        this.$toastr('error', response.data.message);
                    }
                })
            }
        },
        changeImage: function(data) {
            let index = data.name.split('.');
            this[index[0]][index[1]] = data.base64String;
        },
        changeImages: function(data) {
            let index = data.name.split('.');
            this[index[0]][index[1]] = data.files;
        },
        deleteMeta: function(index, obj_index){
            obj_index = obj_index.split('.');
            this[obj_index[0]][obj_index[1]].splice(index, 1);
        },
    },
    created(){
        this.selectTabs('mail'); 
    },
   
}
</script>