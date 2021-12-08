<template>
<div class="row">
    <div class="col-md-2">
        <div class="form-group d-flex justify-content-center align-items-center mt-2">
          <label class="me-1" for="FilterTask">FilterTask:</label>
          <select v-model="number" @change="filtertask" class="form-select form-select-sm">
            <option>5</option>
            <option>10</option>
            <option>30</option>
            <option>50</option>
          </select>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useStore } from 'vuex'
export default {
    setup(){
        let store=useStore();
        let number=ref(0);
        function filtertask(){
            store.dispatch('task/filtertask',number.value)
        }
        return{filtertask,number}
    }

}
</script>

<style>

</style>