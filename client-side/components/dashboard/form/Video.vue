<template>
    <div class="card" v-if="video">
        <div class="card-body">
            <h4 class="card-title">{{ $route.params.id ?  'Sửa': 'Tạo mới' }}</h4>
            <p class="card-description">
                Video
            </p>
            <hr>
            <div class="forms-sample mt-2">
                <template v-if="categories">
                    <div class="forms-sample mt-2">
                        <div class="form-group col-6">
                            <label>Chọn danh mục (*):</label>
                            <v-select
                                placeholder="Chọn danh mục"
                                label="title"
                                track-by="title"
                                v-model="videoDt.categories"
                                :options="categories" 
                                :multiple="true" 
                            >
                            </v-select>
                            <template v-if="globalObjectLength(errors)">
                                <template v-for="(error, id) in errors[`categories`]">
                                    <div :key="id" class="text-danger mt-2">{{ error }}</div>
                                </template>
                            </template>
                        </div>
                    </div>
                </template>
                <div class="form-group col-6" v-if="$route.params.id">
                    <label>Trạng thái:</label>
                    <select class="form-control" v-model="videoDt.status" >
                        <option value="active">Hoạt động</option>
                        <option value="inactive">Không hoạt động</option>
                        <option value="pending">Đang chờ</option>
                        <option value="banned">Cấm</option>
                    </select>
                    <template v-if="globalObjectLength(errors)">
                        <template v-for="(error, id) in errors[`status`]">
                            <div :key="id" class="text-danger mt-2">{{ error }}</div>
                        </template>
                    </template>
                </div>
                <div class="form-group col-6">
                    <label>Tên <template>(*)</template>:</label>
                    <input type="text" class="form-control" placeholder="Tiêu đề" v-model="videoDt.title">
                    <template v-if="globalObjectLength(errors)">
                        <template v-for="(error, id) in errors[`title`]">
                            <div :key="id" class="text-danger mt-2">{{ error }}</div>
                        </template>
                    </template>
                </div>
                <div class="form-group col-6">
                    <label>Mô tả <template></template>:</label>
                    <CkEditor :name="`videoDt.description`" :model="videoDt.description" @changeContent="changeContent" />
                </div>
                <div class="form-group col-6">
                    <label>Link video <template>(*)</template>:</label>
                    <input type="text" class="form-control" placeholder="Link video" v-model="videoDt.link">
                    <template v-if="globalObjectLength(errors)">
                        <template v-for="(error, id) in errors[`link`]">
                            <div :key="id" class="text-danger mt-2">{{ error }}</div>
                        </template>
                    </template>
                </div>
                <div class="form-group col-6">
                    <label>Ảnh đại diện:</label>
                    <img class="d-flex" v-if="$route.params.id && videoDt.image" :src="globalImageUrl(videoDt.image)" width="550">
                    <UploadFile :name="`videoDt.imageStr`" @onChangeFile="changeImage"/>
                </div>
            </div>
            <button type="button" class="btn btn-success ml-2 mt-2 pd-2" @click="submitForm" :disabled="disabledSubmit">
                <span v-if="disabledSubmit">
                    <PulseLoader :color="'white'" :size="'10px'"/>
                </span>
                <span v-else>
                    {{ $route.params.id ? 'Cập nhật' : 'Tạo' }}
                </span>
            </button>
        </div>
    </div>
</template>
<script type="text/javascript">
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import UploadFile from '~/components/common/UploadFile.vue';
import CkEditor from '~/components/dashboard/ckeditor/CkEditor.vue';

export default {
    components: {
        PulseLoader,
        UploadFile,
        CkEditor,
    },
    props: {
        video: '',
    },
    data() {
        return {
            videoDt: this.video,
            errors: {},
            disabledSubmit: false,
            categories: [],
        }
    },
    created() {
        this.initCategories();
    },
    methods: {
        initCategories: function() {
            this.$http.get('categories/all')
            .then(response => {
                this.categories = response.data.data;
            })
        },
        submitForm: function() {
            this.disabledSubmit = true;
            this.errors = {};
            this.$http.post(this.$route.params.id ? 'videos/update/'+ this.$route.params.id : 'videos/create', this.videoDt)
            .then( response => {
                this.$router.push({ name: 'dashboard-videos', query: { page: this.$route.query.return } });
                this.$toastr('success', response.data.message);
            })
            .catch( response => {
                this.disabledSubmit = false;
                if(response.status == 400){
                    this.errors = response.data.errors;
                    this.$toastr('error', 'Có lỗi trong quá trình xử lí dữ liệu');
                }else{
                    this.$toastr('error', response.data.message);
                }
            });
        },
        changeImage: function(data) {
            let index = data.name.split('.');
            this[index[0]][index[1]] = data.base64String
        },
        changeContent: function(data) {
            let index = data.name.split('.');
            this[index[0]][index[1]] = data.content;
        },
    },
}

</script>