<template>
        <div class="modal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1>{{data.name}}</h1>
              </div>
              <div class="modal-body">
                <div class="container-fluid">
                  <label>Title</label><input type="text" class="form-control" v-model="data.name">
                  <label>Content</label><textarea v-model="data.content" class="form-control"></textarea>
                  <!-- <img :src="previewImage" class="uploading-image" />
                  <input type="file" accept="image/jpeg" @change=uploadImage> -->
                  <!--ya salem ya 3l2-->
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="close" aria-label="Close modal">Close</button>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: "modal",
  props: ["data", "index"],
  data(){
            return{
               previewImage:'',
            }
        },
  methods: {
    close() {
      this.$emit("close");
    },
    uploadImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.previewImage = e.target.result;
                    console.log(this.previewImage);
                };
            }
        },
  };
</script>
<style>
.modal
{
  display: block;
  z-index: 9999999;
}
@media (min-width: 768px)
{
  .modal-dialog
  {
    width: 370px;
  }
}
.uploading-image
{
  width: 100%;
  height: 150px;
  margin: 5px 0
}
.modal-header h1
{
 margin:0
}

.modal-footer
{
    padding: 10px 15px;
}

</style>
