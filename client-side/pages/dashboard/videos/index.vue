<template>
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Danh sách video</h4>
                <p class="card-description">
                    Danh sách
                </p>
                <TableList
                    :api-url="apiUrl"
                    :fields="columns"
                    :item-actions="itemActions"
                    :initialPage="$route.query.page"
                    @edit-item="editItem"
                    @delete-item="deleteItem"
                    ref="tableList"
                />
            </div>
        </div>
    </div>
</template>
<script>
import TableList from '~/components/dashboard/table/Vuetable.vue';
export default{
    components: {
        TableList,
    },
    data(){
        return{
            columns:[
                {
                    name:'title',
                    title:'Tiêu đề video',
                },
                {
                    name:'user.username',
                    title:'Người tạo'
                },
                {
                    name:'__list',
                    listName: 'categories',
                    dataName:'title',
                    title:'Danh mục'
                },
                {
                    name:'__status',
                    dataName:'status',
                    title:'Trạng thái',
                },
                {
                    name:'__actions',
                    param:'id',
                    title:'Hành động',
                },
            ],
            itemActions: [
                { name: 'edit-item', callBack: 'edit-item', icon: 'mdi mdi-table-edit', class: 'btn btn-success mr-2' },
                { name: 'delete-item', callBack: 'delete-item', icon: 'mdi mdi-delete', class: 'btn btn-danger' }
            ],
            apiUrl: '',
            key_words: this.$route.query.key_words ? this.$route.query.key_words : '',
        }
    },
    created() {
        this.$store.commit('setActiveSidebar',{isActive:'videos',subIsActive:'video-list'});
        this.initUrl();
    },
    methods:{
        editItem: function(id){
            this.$router.push({ name: 'dashboard-videos-update-id', params: { id: id }, query: { return: this.$route.query.page } });
        },
        deleteItem: function(id){
            this.$http.post('videos/delete/' + id)
            .then( response => {
                this.$refs.tableList.refresh();
                this.$toastr('success', response.data.message);
            })
        },
        initUrl: function(){
            if(this.globalObjectLength(this.$route.query)){
                let url = '/videos/all';
                let i = 0;
                for(let key in this.$route.query){
                    if(key != 'page'){
                        let query = this.$route.query[key];
                        if(i == 0){
                            url = `${url}?${key}=${query}`;
                        }else{
                            url = `${url}&${key}=${query}`;
                        }
                        i++;
                    }
                }
                this.apiUrl = url;
            }else{
                this.apiUrl = '/videos';
            }
        },
    },
    watch: {
        '$route.query.key_words': function(newVal, oldVal){
            if(newVal !== oldVal){
                this.initUrl();
            }
        }
    }
}
</script>