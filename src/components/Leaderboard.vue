<template>
  <div>
    <table class="table">
      <thead>
        <th>User</th>
        <th>Score</th>
        <th>Badges</th>
        <th>Level</th>
        <th>Progression</th>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>
            <h1>{{user.name}}</h1>
          </td>
          <td>
            <h1>{{user.score}}</h1>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array
    }
  }
};
</script>