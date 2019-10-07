<template>
    <input type="file" class="form-control" @change="convertBase64" :accept="accept ? accept : 'image/x-png,image/gif,image/jpeg'">
</template>

<script>
export default {
    props: {
        name: '',
        accept: '',
    },
    methods: {
        convertBase64: function(event){
            try{
                let f = event.target.files[0];
                let reader = new FileReader();

                // Closure to capture the file information.
                reader.onload = (function(theFile) {
                    return function(e) {
                        let binaryData = e.target.result;
                        this.$emit('onChangeFile', { base64String: window.btoa(binaryData), name: this.name });
                    }.bind(this);
                }.bind(this))(f);
                reader.readAsBinaryString(f);
            }catch(err){
                this.$emit('onChangeFile', { base64String: '', name: this.name });
            }
        },
    }
}
</script>

