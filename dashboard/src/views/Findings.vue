<template>
  <div class="container">
    <h1>Findings</h1>
    <div class="findings-list">
      <div class="left-align">
        <router-link
          to="/result-list"
          class="btn-floating btn-large waves-effect waves-light blue lighten-3 back-to-results"
          ><i class="material-icons">arrow_back</i></router-link
        >
      </div>
      <table>
        <thead>
          <tr>
            <th>RuleId</th>
            <th>Description</th>
            <th>Severity</th>
            <th>Path name : line number</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.ruleId }}</td>
            <td>{{ item.metadata.description }}</td>
            <td>{{ item.metadata.severity }}</td>
            <td>
              {{ item.location.path }} :
              {{ item.location.positions.begin.line }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  }
}
</script>

<style>
.findings-list {
  padding-top: 50px;
}

.findings-list table{
  margin-top: 25px;
}
</style>
