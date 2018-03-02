<template>
  <div>
    <span v-if="loading">Please wait...</span>
    <div v-else>
      <div>
        Owner: {{book && book.ISBN}}
      </div>
      <div>
        Language: {{book && book.LanguageCode}}
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      loading: true,
      book: {}
    }
  },

  beforeMount() {
    let api = 'https://www.booknomads.com/api/v0/isbn/9789000010134'

    this.axios.get(api).then((response) => {
      console.log(response)
      this.book = response.data
      this.loading = false;
    })
  }
}
</script>
