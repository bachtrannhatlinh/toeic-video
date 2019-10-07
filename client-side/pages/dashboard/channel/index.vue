<template>
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Danh sách channel</h4>
                <p class="card-description">
                    Channel
                </p>
                <TableList
                    :api-url="apiUrl"
                    :fields="columns"
                    :item-actions="itemActions"
                    :initialPage="$route.query.page"
                    @edit-item="editItem"
                    ref="tableList"
                />
            </div>
        </div>
    </div>
</template>
<script>
import TableList from '~/components/dashboard/table/Vuetable.vue';

export default {
    components: {
        TableList,
    },
    data() {
        return{
            columns: [
                {
                    name: '__link',
                    dataName: 'title',
                    param: 'slug',
                    routeName: 'channel-slug',
                    title: 'Tên channel',
                },
                {
                    name: '__number',
                    dataName: 'subcribes',
                    title: 'Số người đăng ký',
                },
                {
                    name: 'user.username',
                    title: 'Người tạo',
                },
                {
                    name:'__status',
                    dataName:'status',
                    title:'Trạng thái channel',
                },
                {
                    name:'__status',
                    dataName:'statusSub',
                    title:'Trạng thái subcribe channel',
                },
                {
                    name: '__actions',
                    param: 'id',
                    title: 'Hành động',
                },
            ],
            itemActions: [
                { name: 'edit-item', callBack: 'edit-item', icon: 'mdi mdi-table-edit', class: 'btn btn-success mr-2' },
            ],
            apiUrl: '',
            key_words: this.$route.query.key_words ? this.$route.query.key_words : '',
        }
    },
    created() {
        this.$store.commit('setActiveSidebar', { isActive: 'channel', subIsActive: 'channel-list' });
        this.initUrl();
    },
    methods: {
        editItem: function(id){
            this.$router.push({ name: 'dashboard-channel-update-id', params: { id: id }, query: { return: this.$route.query.page } });
        },
        initUrl: function(){
            if(this.globalObjectLength(this.$route.query)){
                let url = '/channel';
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
                this.apiUrl = '/channel';
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