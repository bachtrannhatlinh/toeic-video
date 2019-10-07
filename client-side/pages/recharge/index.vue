<template>
    <div class="gl-container gl-wrap--padding-left transition-normal gl-recharge">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nuxt-link to="/" class="d-flex text-primary align-items-center my-3">
                        <i class="fal fa-chevron-square-left mr-2"></i>
                        <div>Quay lại trang chủ</div>
                    </nuxt-link>
                    <div class="font-size-18 my-3">Phương pháp nạp tiền</div>
                    <div class="d-flex flex-wrap mx-n2 list-of-way-to-recharge my-3">
                        <div class="w-25 px-2">
                            <div class="rounded overflow-hidden cursor-pointer border transition-normal"
                                :class="{ 'bd-main': methodToRecharge == 0 }" @click="topUpWithPhonecard">
                                <img :src="globalImageUrl('images-asset/phonecard.jpg')" alt
                                    class="w-100 img-cover image-thumbnail" />
                            </div>
                        </div>
                        <div class="w-25 px-2">
                            <div class="rounded overflow-hidden cursor-pointer border transition-normal"
                                :class="{ 'bd-main': methodToRecharge == 1 }" @click="topUpWithAirPay">
                                <img :src="globalImageUrl('images-asset/air-pay.jpg')" alt
                                    class="w-100 img-cover image-thumbnail" />
                            </div>
                        </div>
                        <div class="w-25 px-2">
                            <div class="rounded overflow-hidden cursor-pointer border transition-normal"
                                :class="{ 'bd-main': methodToRecharge == 2 }" @click="topUpWithAtm">
                                <img :src="globalImageUrl('images-asset/mo-the-ATM-mien-phi.jpg')" alt
                                    class="w-100 img-cover image-thumbnail" />
                            </div>
                        </div>
                        <div class="w-25 px-2">
                            <div class="rounded overflow-hidden cursor-pointer border transition-normal"
                                :class="{ 'bd-main': methodToRecharge == 3 }" @click="topUpWithVisa">
                                <img :src="globalImageUrl('images-asset/vn-visa-classic-card-498x280.webp')" alt
                                    class="w-100 img-cover image-thumbnail" />
                            </div>
                        </div>
                    </div>
                </div>
                <template v-if="methodToRecharge == 0">
                    <div class="font-size-18 my-3 col-12">Thẻ điện thoại</div>
                    <div class="col-md-6 text-center">
                        <table class="w-100 text-center text-nowrap">
                            <tr>
                                <th class="px-3">Giá trị thẻ nạp</th>
                                <th class="px-4">Điểm</th>
                            </tr>
                            <tr>
                                <td>20,000 VND</td>
                                <td>20,000 P</td>
                            </tr>
                            <tr>
                                <td>50,000 VND</td>
                                <td>50,000 P</td>
                            </tr>
                            <tr>
                                <td>100,000 VND</td>
                                <td>100,000 P</td>
                            </tr>
                            <tr>
                                <td>200,000 VND</td>
                                <td>200,000 P</td>
                            </tr>
                            <tr>
                                <td>500,000 VND</td>
                                <td>500,000 P</td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-md-6 mt-3 mt-md-0">
                        <div class="font-14">Điền mã thẻ:</div>
                        <div class="my-2">
                            <input type="text" class="w-100 p-2 border bg-white font-14 w-lg-75 w-100 rounded"
                                placeholder="Mã thẻ" />
                        </div>
                        <template v-if="!rechargeYourself">
                            <div class="font-14">Email của bạn bè:</div>
                            <div class="my-2">
                                <input type="text" class="w-100 p-2 border bg-white font-14 w-lg-75 w-100 rounded"
                                    placeholder="Email của bạn bè" />
                            </div>
                        </template>
                        <div class="my-2">Nạp cho:</div>
                        <div class="d-flex my-2">
                            <button class="border bg-white px-2 py-1" :class="{ 'bd-main': rechargeYourself }"
                                @click="changeToRechargeYourself">Cho bạn</button>
                            <button class="border bg-white px-2 py-1 ml-2" :class="{ 'bd-main': !rechargeYourself }"
                                @click="changeToRechargeYourFriend">Cho bạn bè</button>
                        </div>
                        <div class="mt-5">
                            <button class="border bd-main bg-main text-white p-2 w-100 w-lg-75 text-center">Xác
                                nhận</button>
                        </div>
                    </div>
                </template>
                <template v-else-if="methodToRecharge == 1">
                    <div class="font-size-18 my-3 col-12">
                        Ví Air-Pay 
                        <i class="font-12">
                            (Click chọn gói cần mua, sau đó bấm tiến hành thanh toán để hiển thị mã QR)
                        </i>
                    </div>
                    <div class="col-md-6 text-center">
                        <div class="rounded border air-pay__list-of-denominations-of-money">
                            <div class="d-flex w-100 py-1 border-bottom font-weight-bold">
                                <div class="w-50 card-value border-right">Giá</div>
                                <div class="w-50 received-point">Điểm</div>
                            </div>
                            <div class="d-flex w-100 py-1 border-bottom item-of-denominations cursor-pointer">
                                <div class="w-50 card-value border-right">20,000 VND</div>
                                <div class="w-50 received-point">20,000 P</div>
                            </div>
                            <div class="d-flex w-100 py-1 border-bottom item-of-denominations cursor-pointer">
                                <div class="w-50 card-value border-right">50,000 VDN</div>
                                <div class="w-50 received-point">50,000 P</div>
                            </div>
                            <div class="d-flex w-100 py-1 border-bottom item-of-denominations cursor-pointer">
                                <div class="w-50 card-value border-right">100,000 VND</div>
                                <div class="w-50 received-point">100,000 P</div>
                            </div>
                            <div class="d-flex w-100 py-1 border-bottom item-of-denominations cursor-pointer">
                                <div class="w-50 card-value border-right">200,000 VND</div>
                                <div class="w-50 received-point">200,000 P</div>
                            </div>
                            <div class="d-flex w-100 py-1 item-of-denominations cursor-pointer">
                                <div class="w-50 card-value border-right">500,000 VND</div>
                                <div class="w-50 received-point">500,000 P</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-3 mt-md-0">
                        <template v-if="paymentStep == 1">
                            <div class="w-lg-75">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>Gói được chọn:</div>
                                    <div>20.000 P</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between my-2">
                                    <div>Mệnh giá</div>
                                    <div>20.000 VND</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between my-2">
                                    <div>Phương thức thanh toán</div>
                                    <div>Airpay</div>
                                </div>
                                <div class="mt-5">
                                    <button class="border bd-main bg-main text-white p-2 w-100 text-center" @click="paymentStep = 2">
                                        Tiến hành thanh toán
                                    </button>
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="w-lg-75">
                                <div class="text-center">
                                    Quét mã QR dưới đây trong Airpay APP
                                </div>
                                <div class="my-3 text-center">
                                    <img :src="globalImageUrl('images-asset/airpay-payment.png')" class="square-img w-100 img-cover qr-img">
                                </div>
                                <div>
                                    Sau khi thanh toán, nhấp vào nút bên dưới.
                                </div>
                                <div class="mt-5">
                                    <button class="border bd-main bg-main text-white p-2 w-100 text-center">
                                        Hoàn tất thanh toán
                                    </button>
                                </div>
                            </div>
                        </template>
                    </div>
                </template>
                <template v-else-if="methodToRecharge == 2">
                    <div class="font-size-18 my-3 col-12">Thanh toán bằng thẻ ATM</div>
                    <div class="col-md-6 text-center">
                        <div class="rounded border air-pay__list-of-denominations-of-money">
                            <div class="d-flex w-100 py-1 border-bottom font-weight-bold">
                                <div class="w-50 card-value border-right">Giá</div>
                                <div class="w-50 received-point">Điểm</div>
                            </div>
                            <div class="d-flex w-100 py-1 border-bottom item-of-denominations cursor-pointer">
                                <div class="w-50 card-value border-right">20,000 VND</div>
                                <div class="w-50 received-point">20,000 P</div>
                            </div>
                            <div class="d-flex w-100 py-1 border-bottom item-of-denominations cursor-pointer">
                                <div class="w-50 card-value border-right">50,000 VDN</div>
                                <div class="w-50 received-point">50,000 P</div>
                            </div>
                            <div class="d-flex w-100 py-1 border-bottom item-of-denominations cursor-pointer">
                                <div class="w-50 card-value border-right">100,000 VND</div>
                                <div class="w-50 received-point">100,000 P</div>
                            </div>
                            <div class="d-flex w-100 py-1 border-bottom item-of-denominations cursor-pointer">
                                <div class="w-50 card-value border-right">200,000 VND</div>
                                <div class="w-50 received-point">200,000 P</div>
                            </div>
                            <div class="d-flex w-100 py-1 item-of-denominations cursor-pointer">
                                <div class="w-50 card-value border-right">500,000 VND</div>
                                <div class="w-50 received-point">500,000 P</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-3 mt-md-0">
                        <template>
                            <div class="w-lg-75">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>Gói được chọn:</div>
                                    <div>20.000 P</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between my-2">
                                    <div>Mệnh giá</div>
                                    <div>20.000 VND</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between my-2">
                                    <div>Phương thức thanh toán</div>
                                    <div>ATM</div>
                                </div>
                                <div class="mt-5">
                                    <button class="border bd-main bg-main text-white p-2 w-100 text-center" @click="paymentStep = 2">
                                        Tiến hành thanh toán
                                    </button>
                                </div>
                                <i class="font-12">
                                    (Sau khi chuyển khoản, hãy thông báo vs chúng tôi qua cổng dịch vụ)
                                </i>
                            </div>
                        </template>
                    </div>
                </template>
                <template v-else-if="methodToRecharge == 3">
                    <div class="font-size-18 my-3 col-12">Thanh toán bằng thẻ Mastercard/Visa</div>
                    <div class="col-md-6 text-center">
                        <div class="rounded border air-pay__list-of-denominations-of-money">
                            <div class="d-flex w-100 py-1 border-bottom font-weight-bold">
                                <div class="w-50 card-value border-right">Giá</div>
                                <div class="w-50 received-point">Điểm</div>
                            </div>
                            <div class="d-flex w-100 py-1 border-bottom item-of-denominations cursor-pointer">
                                <div class="w-50 card-value border-right">20,000 VND</div>
                                <div class="w-50 received-point">20,000 P</div>
                            </div>
                            <div class="d-flex w-100 py-1 border-bottom item-of-denominations cursor-pointer">
                                <div class="w-50 card-value border-right">50,000 VDN</div>
                                <div class="w-50 received-point">50,000 P</div>
                            </div>
                            <div class="d-flex w-100 py-1 border-bottom item-of-denominations cursor-pointer">
                                <div class="w-50 card-value border-right">100,000 VND</div>
                                <div class="w-50 received-point">100,000 P</div>
                            </div>
                            <div class="d-flex w-100 py-1 border-bottom item-of-denominations cursor-pointer">
                                <div class="w-50 card-value border-right">200,000 VND</div>
                                <div class="w-50 received-point">200,000 P</div>
                            </div>
                            <div class="d-flex w-100 py-1 item-of-denominations cursor-pointer">
                                <div class="w-50 card-value border-right">500,000 VND</div>
                                <div class="w-50 received-point">500,000 P</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mt-3 mt-md-0">
                        <template>
                            <div class="w-lg-75">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>Gói được chọn:</div>
                                    <div>20.000 P</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between my-2">
                                    <div>Mệnh giá</div>
                                    <div>20.000 VND</div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between my-2">
                                    <div>Phương thức thanh toán</div>
                                    <div>Mastercard/Visa</div>
                                </div>
                                <div class="mt-5">
                                    <button class="border bd-main bg-main text-white p-2 w-100 text-center" @click="paymentStep = 2">
                                        Tiến hành thanh toán
                                    </button>
                                </div>
                                <i class="font-12">
                                    (Sau khi chuyển khoản, hãy thông báo vs chúng tôi qua cổng dịch vụ)
                                </i>
                            </div>
                        </template>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                methodToRecharge: 0,
                rechargeYourself: true,
                paymentStep: 1,
            };
        },
        methods: {
            topUpWithPhonecard() {
                this.methodToRecharge = 0;
                this.paymentStep = 1;
            },
            topUpWithAirPay() {
                this.methodToRecharge = 1;
                this.paymentStep = 1;
            },
            topUpWithAtm() {
                this.methodToRecharge = 2;
                this.paymentStep = 1;
            },
            topUpWithVisa() {
                this.methodToRecharge = 3;
                this.paymentStep = 1;
            },
            changeToRechargeYourself() {
                this.rechargeYourself = true;
            },
            changeToRechargeYourFriend() {
                this.rechargeYourself = false;
            }
        },
        created() {},
        mounted() {}
    };
</script>