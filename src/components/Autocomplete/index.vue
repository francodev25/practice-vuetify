<template>
  <v-autocomplete
    v-model="select"
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    no-filter
    hide-selected
    clearable
    return-object
    :label="label"
    :name="name"
    :required="required"
    :rules="[(v) => !this.required || !!v || 'Необходимо выбрать']"
    :error="error"
    :error-message="errorMessage"
  />
</template>
<script>
import _ from 'lodash'
import { getUsers } from '@/api/users'
export default {
  props: {
    value: [String, Number],
    preload: {
      type: Array,
      default: () => [],
    },
    error: Object,
    errorMessage: Object,
    required: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: 'Select',
    },
    name: String,
  },
  data() {
    return {
      select: null,
      search: null,
      items: [],
      loading: false,
      apiSource: null,
    }
  },
  created() {
    this.preloading()
  },
  watch: {
    select(value) {
      this.$emit('input', value ? value.value : null)
    },
    value(value) {
      this.setValue(value)
    },
    async search(query, oldQuery) {
      console.log('Watch search Old query, ', oldQuery)
      console.log('Watch search new', query)
      if (query && (!this.select || this.select.text !== query)) {
        this.querySearch(query)
      }

      if (!query) {
        this.items = await this.apiQuery();
      }
    },
    items(value) {
      console.log('items length', value.length)
      // if(value.length <= 1 && !this.select && !this.search){
      //     console.log("Entré al if items")
      // }
    },
  },
  methods: {
    setValue(id) {
      if (!id) {
        this.select = null
      } else if (!this.select || this.select.value !== id) {
        const item = this.getItemById(id)
        if (item) {
          this.select = item
        } else {
          this.preloading()
        }
      }
    },
    getItemById(id) {
      return this.items.find((item) => item.value === id)
    },
    getItemByText(text) {
      return this.items.filter(
        (item) => item.toLowerCase().indexOf(text.toLowerCase()) >= 0
      )
    },
    querySearch: _.debounce(function querySearch(query) {
      console.log('debounce: query =>', query)
      this.loading = true
      this.apiQuery()
        .then((response) => {
          console.log('this.items SIN el unionBy', this.items)
          console.log('debounce: response =>', response)
          let elements = this.items.filter((item) => {
            return item.text.toLowerCase().indexOf(query.toLowerCase()) >= 0
          })
          console.log('elements', elements)
          this.items = elements
          // this.items = _.filter(this.items, (o)=> (o.toLowerCase().indexOf(query.toLowerCase()) >= 0));
          console.log('this.items CON  filter', this.items)
        })
        .finally(() => {
          this.loading = false
        })
    }, 500),
    preloading() {
      const preload = this.preload.slice()
      if (this.value) {
        preload.push(this.value)
      }
      if (preload.length >= 0) {
        this.loading = true
        this.apiQuery()
          .then((response) => {
            this.items = response
            if (this.value) {
              const item = this.getItemById(this.value)
              if (!item) {
                const item404 = {
                  value: this.value,
                  text: `[${this.value}]`,
                }
                this.items.push(item404)
                this.select = item404
              } else {
                this.select = item
              }
            }
          })
          .finally(() => {
            this.loading = false
          })
      }
    },
    async apiQuery() {
      //   let data = await getUsers().then(data => data.items.map(item => ({
      //     ...item,
      //     value: item['@id'],
      //     text: item.boardNumber,
      //   })));
      let data = await getUsers().then((data) =>
        data.map((item) => ({
          ...item,
          value: item['id'],
          text: item.name,
        }))
      )
      console.log('data apiQuery', data)
      return data
    },
  },
}
</script>
