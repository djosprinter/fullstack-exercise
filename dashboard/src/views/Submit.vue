<template>
  <div class="container scan-result">
    <h1>Submit scan result</h1>
    <form class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input
              id="repositoryName"
              type="text"
              class="validate"
              v-model="scanResult.repositoryName"
            />
            <label for="repositoryName">Repository Name</label>
          </div>
          <div class="input-field col s6">
            <select v-model="scanResult.statusId">
              <option value="" disabled selected>Choose option</option>
              <option :value="s.id" v-for="s in statusesList" :key="s.id">
                {{ s.value }}
              </option>
            </select>
            <label>Status</label>
          </div>
        </div>
      </div>

      <h4>Findings</h4>
      <div class="left-align">
        <a
          class="waves-effect waves-light btn-small"
          @click="addNewFindingItem()"
          ><i class="material-icons left">add</i>Add item</a
        >
      </div>

      <FindingItem
        v-for="item in scanResult.findings"
        :key="item.id"
        :finding="item"
        @deleteItem="deleteFindingItem($event)"
      />
    </form>

    <button class="btn waves-effect waves-light" @click="saveResult()">
      Submit
      <i class="material-icons right">send</i>
    </button>

    <p>{{ message }}</p>

  </div>
</template>

<script>
import M from 'materialize-css'
import FindingItem from '@/components/FindingItem.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data () {
    return {
      scanResult: {
        statusId: null,
        repositoryName: null,
        findings: []
      }
    }
  },
  computed: mapGetters(['message', 'statusesList']),
  methods: {
    ...mapActions(['fetchStatuses', 'addScanResult']),
    ...mapMutations(['setMessage']),
    addNewFindingItem () {
      const item = {
        id: new Date().getTime(),
        type: null,
        ruleId: null,
        location: {
          path: null,
          positions: {
            begin: {
              line: null
            }
          }
        },
        metadata: {
          description: null,
          severity: null
        }
      }
      this.scanResult.findings.push(item)
    },
    deleteFindingItem (id) {
      const index = this.scanResult.findings.findIndex(
        (elem) => elem.id === id
      )

      this.scanResult.findings.splice(index, 1)
    },
    saveResult () {
      console.log(this.scanResult)
      this.addScanResult(this.scanResult)
    }
  },
  created () {
    this.setMessage('')
    this.addNewFindingItem()
  },
  async mounted () {
    await this.fetchStatuses()
    var elems = document.querySelectorAll('select')
    M.FormSelect.init(elems)
  },
  components: {
    FindingItem
  }
}
</script>

<style>
.scan-result {
  padding: 50px;
}
</style>
