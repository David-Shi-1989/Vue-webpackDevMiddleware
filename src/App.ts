import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
})
export default class App extends Vue{
  created () {
    console.log(`App created`)
  }
}