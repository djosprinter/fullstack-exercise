<template>
  <div class="container scan-result">
    <h1>Submit scan result</h1>
    <form class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input
              id="repositoryName"
              data-cy="repositoryName-input"
              type="text"
              class="validate"
              :class="{ invalid: $v.scanResult.repositoryName.$error }"
              v-model.trim="$v.scanResult.repositoryName.$model"
            />
            <label for="repositoryName">Repository Name</label>
            <span class="helper-text left-align"
              >Repository Name must have at least
              {{ $v.scanResult.repositoryName.$params.minLength.min }}
              letters.</span
            >
          </div>
          <div
            class="input-field col s6"
            :class="{ invalid: $v.scanResult.statusId.$error }"
          >
            <select
              v-model.trim="$v.scanResult.statusId.$model"
              data-cy="statusId-select"
            >
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

      <p
        class="findings-error left-align"
        v-if="!$v.scanResult.findings.required"
      >
        Please enter at least one record of findings
      </p>

      <div class="finding-items">
        <FindingItem
          v-for="v in $v.scanResult.findings.$each.$iter"
          :key="v.id"
          :finding="v"
          @deleteItem="deleteFindingItem($event)"
        />
      </div>
    </form>

    <button
      class="btn waves-effect waves-light save-result"
      @click="saveResult()"
    >
      Submit
      <i class="material-icons right">send</i>
    </button>

    <p class="submit-message">{{ message }}</p>
  </div>
</template>

<script>
import M from 'materialize-css'
import FindingItem from '@/components/FindingItem.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'

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
  validations: {
    scanResult: {
      repositoryName: {
        required,
        minLength: minLength(4)
      },
      statusId: { required },
      findings: {
        required,
        $each: {
          type: {
            required
          },
          ruleId: {
            required
          },
          location: {
            path: {
              required
            },
            positions: {
              begin: {
                line: {
                  required
                }
              }
            }
          },
          metadata: {
            description: {
              required
            },
            severity: {
              required
            }
          }
        }
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
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.addScanResult(this.scanResult)
      }
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

.invalid .select-wrapper input {
  border-bottom: 2px solid #f44336;
}

.findings-error {
  color: #f44336;
}
</style>
