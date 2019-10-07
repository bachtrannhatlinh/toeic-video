import Vue from "vue";
import httpPlugin from "./http";
import FBSignInButton from "vue-facebook-signin-button";
import VueToastr from "@deveodk/vue-toastr";
import vSelect from "vue-select";
import GoogleSignInButton from "./google-signin-button";
import VueSession from "vue-session";
import VueDropzone from "vue2-dropzone";
import Slick from "vue-slick";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import "video.js/dist/video-js.min.css";
import "videojs-youtube/dist/Youtube.min.js";

Vue.use(GoogleSignInButton);
Vue.component("v-select", vSelect);
Vue.component("VueDropzone", VueDropzone);
Vue.component("Slick", Slick);
Vue.use(httpPlugin);
Vue.use(FBSignInButton);
Vue.use(VueToastr, {
	defaultPosition: "toast-top-right",
	defaultType: "success",
	defaultTimeout: 3000
});
Vue.use(VueSession);

/**
 * Every functions here must have 'global' prefix
 */
import AuthService from "~/services/auth.service";
import moment from "moment";

Vue.mixin({
	methods: {
		globalImageUrl: function(path) {
			if (path) {
				return `${window.location.origin}/${path}`;
			}
			return "";
		},
		globalObjectLength: function(obj) {
			return Object.keys(obj).length;
		},
		globalBaseUrl(path) {
			return `/${path}`;
		},
		globalAuthDirect: function(name, action = "", query = {}, params = {}) {
			if (action && action == "login") {
				this.$store.commit("setLoginRedicret", { name, query, params });
				this.$router.push({ name: "login" });
			} else {
				if (!AuthService.isAuth) {
					alert("Vui lòng đăng nhập để thực hiện tính năng này!");
					this.$store.commit("setLoginRedicret", { name, query, params });
					this.$router.push({ name: "login" });
				} else {
					if (action == "redirect") {
						this.$router.push({ name, query, params });
					}
				}
			}
		},
		globalFormatNumber: function(number, seperator) {
			return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, seperator);
		},
		globalConvertTimestamp(timestamp, format) {
			return moment.unix(timestamp).format(format);
		},
		globalDecodeJson(json) {
			return JSON.parse(json);
		},
		globalProcessDescription: function(description) {
			return description
				.slice(1, -1)
				.replace(/\\/g, "")
				.replace("top", "")
				.replace("position", "")
				.replace("style", "");
		},
		globalShowDrop: function(drop_id) {
			let elements = document.querySelectorAll("div.dropdown-menu");
			elements.forEach(element => {
				let element_id = element.id;
				if (element_id != drop_id) {
					if (element.classList.contains("d-block")) {
						element.classList.add("d-none");
						element.classList.remove("d-block");
					}
				}
			});
			let element = document.getElementById(drop_id);
			if (element) {
				if (element.classList.contains("d-block")) {
					element.classList.add("d-none");
					element.classList.remove("d-block");
				} else if (element.classList.contains("d-none")) {
					element.classList.add("d-block");
					element.classList.remove("d-none");
				}
			}
		},
		globalEncodeData: function(data) {
			const SALT_OBJECT = process.env.SALT_OBJECT;
			const SALT_DECODE = process.env.SALT_DECODE;
			data = JSON.stringify(data).split("");
			for (let i = 0, l = data.length; i < l; i++) {
				if (data[i] == "{") {
					data[i] = "}";
				} else if (data[i] == "}") {
					data[i] = "{";
				}
			}
			let encodeData = encodeURI(SALT_OBJECT + data.join(""));
			let cipher = salt => {
				let textToChars = text => text.split("").map(c => c.charCodeAt(0));
				let byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
				let applySaltToChar = code =>
					textToChars(salt).reduce((a, b) => a ^ b, code);

				return text =>
					text
						.split("")
						.map(textToChars)
						.map(applySaltToChar)
						.map(byteHex)
						.join("");
			};
			let initCipher = cipher(SALT_DECODE);
			encodeData = initCipher(encodeData);
			return encodeData;
		},
		globalFormatDate: function(date) {
			return moment(date).format("DD/MM/YYYY HH:mm");
		},
		globalLimitDescription: function(description) {
			let des = "";
			if (description.length < 200) {
				des = description.slice(0, 200);
			} else {
				des = description.slice(0, 200) + "...";
			}
			return des;
		}
	}
});
