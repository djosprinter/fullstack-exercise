<template>
  <div class="container">
    <h1>List of security scan results</h1>
    <div class="scan-results">
      <table>
        <thead>
          <tr>
            <th>Repository Name</th>
            <th>Status</th>
            <th>Timestamp</th>
            <th>Findings count</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in resultsList" :key="item.id">
            <td>{{ item.repositoryName ? item.repositoryName : "none" }}</td>
            <td>{{ item.status ? item.status.value : "none" }}</td>
            <td>{{ statusTime(item) }}</td>
            <td>
              <a class="finding-badge" @click="openFindings(item.findings)"
                ><span class="new badge" data-badge-caption="">{{
                  item.findings.length
                }}</span></a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  computed: mapGetters(['message', 'resultsList']),
  methods: {
    ...mapActions(['fetchScanResults']),
    ...mapMutations(['setMessage']),
    statusTime (item) {
      let statusTime
      switch (item.statusId) {
        case 1:
          statusTime = item.queuedAt
          break
        case 2:
          statusTime = item.scanningAt
          break
        case 3:
          statusTime = item.finishedAt
          break
      }

      return statusTime
    },
    openFindings (items) {
      this.$router.push({
        name: 'Findings',
        params: {
          items: items
        }
      })
    }
  },
  created () {
    this.setMessage()
  },
  async mounted () {
    await this.fetchScanResults()
  }
}
</script>

<style>
.scan-results {
  padding-top: 50px;
}

.finding-badge {
  cursor: pointer;
}
</style>
