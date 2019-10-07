<template>
    <div class="OtherType">
        <div class="mt-4 content-One px-0 row justify-content-around ">
            <span class="color-ba">Hoặc đăng nhập qua</span>
            <div class="bar-below"></div>
        </div>
        <div class="d-lg-flex d-md-flex d-sm-block justify-content-between mt-3 text-center pb-4"> 
            <div v-if="facebook_client_id" >
                <!-- facebook_client_id -->
                <button type="button" class="btn btn-outline-primary px-4 rounded-pill d-flex">
                    <i class="fab fa-facebook-square font-size-24 mx-2"></i>
                        <fb-signin-button
                            :params="fbSignInParams"
                            @success="onSignInSuccess"
                            @error="onSignInError">
                        </fb-signin-button>
                           <span>Facebook</span>
                    </button>
                </div>
                <!-- google_client_id -->
            <div v-if="google_client_id" >
                <button v-google-signin-button="google_client_id" 
                type="button" class="btn btn-outline-danger px-4 rounded-pill mt-3 mt-sm-0 d-flex">
                    <i class="fab fa-google-plus-square font-size-24 mx-2"></i>
                   <span> Google Plus </span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import AuthService from '~/services/auth.service';
import SocketService from '~/services/socket.service';

export default {
    data(){
        return{
            isAuth: AuthService.isAuth,
            FB: undefined,
            facebook_client_id : '',
            google_client_id: '',
            fbSignInParams: {
                scope: '',
                return_scopes: true
            },
        }
    },
    created() {
        this.getClientId('facebook_client_id') ;
        this.getClientId('google_client_id') ;
    },
    methods:{
        // Function load SDK Facebook
        loadFbSdk(appId, version) {
            return new Promise(resolve => {
                window.fbAsyncInit = function () {
                    // eslint-disable-line func-names
                    FB.init({
                    appId,
                    xfbml: true, // parse XFBML
                    status : false, // check login status
                    version,
                    cookie: false // enable cookies to allow the server to access the session
                    });
                    FB.AppEvents.logPageView();
                    resolve('SDK Loaded!');
                };
                (function (d, s, id) {
                    // eslint-disable-line func-names
                    const fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) { return; }
                    const js = d.createElement(s); js.id = id;
                    js.src = '//connect.facebook.net/en_US/sdk.js';
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            });
        },

        // Login with Facebook
        onSignInSuccess (response) {
            FB.api('/me', 'GET', { fields: 'id , name , email , picture.type(large)' },
            userInformation => {
                let data = {};
                data.id = userInformation.id;
                data.name = userInformation.name;
                data.email = userInformation.email;
                data.picture = userInformation.picture.data.url;
                this.$http.post('auth/facebook' , data)
                .then(response => {
                    const { loginRedirect } = this.$store.state;
                    AuthService.setAccessToken(response.data.token);
                    if(loginRedirect){
                        this.$router.push(loginRedirect);
                        this.$store.commit('setLoginRedicret', '');
                    }else{
                        this.$router.push({ name: 'index' });
                    }
                })
                .catch(response => {
                    if(response.data.error){
                        this.$toastr('error', response.data.error);
                    }
                });
            })
        },
        onSignInError (error) {
            console.log('OH NOES', error)
        },

        // Function get CLIENT_ID facebook & google from setting
        getClientId(key) {
            this.$http.get("/auth/client-id?id=" + key)
            .then( res => {
                const data = res.data.data;
                if(key == "google_client_id")
                    this.google_client_id = data;
                else{
                    this.facebook_client_id = data;
                    this.loadFbSdk(data , 'v2.10');
                }
            })
            .catch( res => {
                console.log(res);
            });
        },

        // Login with google
        OnGoogleAuthSuccess (idToken) {
            let data = {};
            // Receive the idToken and make your magic with the backend
            this.$http.get('/auth/get-info-google?token='+idToken)
            .then( res => {
                data.id = res.data.payload.sub;
                data.name = res.data.payload.family_name +' '+ res.data.payload.given_name;
                data.picture = res.data.payload.picture;
                data.email = res.data.payload.email;
                this.$http.post('/auth/google' , data)
                .then( response => {
                    const { loginRedirect } = this.$store.state;
                    AuthService.setAccessToken(response.data.token);
                    if(loginRedirect){
                        this.$router.push(loginRedirect);
                        this.$store.commit('setLoginRedicret', '');
                    }else{
                        this.$router.push({ name: 'index' });
                    }
                })
                .catch( response => {
                    if(response.data.error){
                        this.$toastr('error', response.data.error);
                    }
                })
            })
            .catch( res => {
                console.log(res);
            })

        },
        OnGoogleAuthFail (error) {},
    },
}
</script>