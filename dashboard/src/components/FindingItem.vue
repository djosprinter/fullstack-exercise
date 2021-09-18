<template>
  <div class="finding-item">
    <div class="row">
      <div class="col s2 finding-item-label">
        <label for="FType">Type</label>
      </div>
      <div class="col s2">
        <input
          id="FType"
          type="text"
          class="browser-default"
          v-model="finding.type"
        />
      </div>
      <div class="col s2"><label for="FRuleId">RuleId</label></div>
      <div class="col s2">
        <input
          id="FRuleId"
          type="text"
          class="browser-default"
          v-model="finding.ruleId"
        />
      </div>
    </div>
    <h6 class="left-align">Location</h6>
    <div class="row">
      <div class="col s2 finding-item-label">
        <label for="FLocationPath">Path</label>
      </div>
      <div class="col s2">
        <input
          id="FLocationPath"
          type="text"
          class="browser-default"
          v-model="finding.location.path"
        />
      </div>
      <div class="col s2"><label for="FLocationPos">Begin position</label></div>
      <div class="col s2">
        <input
          id="FLocationPos"
          type="text"
          class="browser-default"
          v-model="finding.location.positions.begin.line"
        />
      </div>
    </div>
    <h6 class="left-align">Metadata</h6>
    <div class="row">
      <div class="col s2 finding-item-label">
        <label for="FMetadataDesc">Description</label>
      </div>
      <div class="col s2">
        <input
          id="FMetadataDesc"
          type="text"
          class="browser-default"
          v-model="finding.metadata.description"
        />
      </div>
      <div class="col s2"><label for="FMetadataSev">Severity</label></div>
      <div class="col s2">
        <input
          id="FMetadataSev"
          type="text"
          class="browser-default"
          v-model="finding.metadata.severity"
        />
      </div>
    </div>
    <div class="right-align">
      <a
        class="waves-effect waves-light btn-small red lighten-1"
        @click="deleteItem()"
        ><i class="material-icons left">delete</i>Delete item</a
      >
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'FindingItem',
  props: {
    finding: Object
  },
  methods: {
    deleteItem () {
      this.$emit('deleteItem', this.finding.id)
    }
  }
}
</script>

<style>
.finding-item {
  padding: 20px 0;
}

.finding-item h6 {
  padding-left: 0.75rem;
}

.finding-item-label {
  text-align: left;
}
</style>
