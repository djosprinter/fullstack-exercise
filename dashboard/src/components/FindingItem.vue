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
          :class="{ invalid: finding.type.$error }"
          v-model.trim="finding.type.$model"
        />
      </div>
      <div class="col s2"><label for="FRuleId">RuleId</label></div>
      <div class="col s2">
        <input
          id="FRuleId"
          type="text"
          class="browser-default"
          :class="{ invalid: finding.ruleId.$error }"
          v-model="finding.ruleId.$model"
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
          :class="{ invalid: finding.location.path.$error }"
          v-model="finding.location.path.$model"
        />
      </div>
      <div class="col s2"><label for="FLocationPos">Begin position</label></div>
      <div class="col s2">
        <input
          id="FLocationPos"
          type="text"
          class="browser-default"
          :class="{ invalid: finding.location.positions.begin.line.$error }"
          v-model="finding.location.positions.begin.line.$model"
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
          :class="{ invalid: finding.metadata.description.$error }"
          v-model="finding.metadata.description.$model"
        />
      </div>
      <div class="col s2"><label for="FMetadataSev">Severity</label></div>
      <div class="col s2">
        <input
          id="FMetadataSev"
          type="text"
          class="browser-default"
          :class="{ invalid: finding.metadata.severity.$error }"
          v-model="finding.metadata.severity.$model"
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

.browser-default.invalid {
  border: 2px solid #f44336;
}
</style>
