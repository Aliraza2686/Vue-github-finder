<template>
  <div class="jumbotron bg-dark text-light">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
   <div class="search text-center">
          <input type="text" class=" " placeholder="Search Users" v-model="searchTerm">
         <a class="btn btn-primary mb-1 " href="#" role="button" @click="searches">Search</a>
   </div>
</div>

 <div class="container mt-5">
      <div class="cards">
         <div class="user" v-for="user in allUsers" :key="user.id">
                <div class="card">
                     <div class="text-center mt-1">
                              <img :src="user.avatar_url"  class="avatar" alt="" srcset="">
                      </div>
                
                      <h3 class="card-title text-center text-muted">{{user.login}}</h3>
      
                      <div class="body">
                        <p>User Type : <span class="text-danger">{{user.type}}</span></p>
                    </div>
                  <div class="info">
                      <a :href="user.html_url" target="blank" class="btn btn-info btn-block">View Profile</a>
                    
                  </div>
               </div>
         </div>
    </div>
 </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
      return {
          searchTerm : ''
      }
  },
  computed : mapGetters(["allUsers"]),
  methods : {
    ...mapActions(["fetchUsers", "searchUser"]),
    searches() {
        this.searchUser(this.searchTerm)
    }
  },
  created() {
    this.fetchUsers()
  }
}
</script>

<style scoped>
.avatar {
  border: 0.3rem solid rgba(#fff, 0.3);
  border-radius: 50%;
  margin-bottom: 1rem;
  max-width: 7rem;
}

.cards {
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font: 1em/1.4 Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #fafafa;
}

img {
  max-width: 100%;
}

.cards {
  margin: 0 auto;
  max-width: 960px;
}

.card {
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
}

.card header {
  padding: 10px;
  background-color: #0084AD;
    color: #fff;
}

.card header h2 {
  font-size: 1.4rem;
  font-weight: normal;
  margin: 0;
  padding: 0;
}

.card .body {
  padding: 10px;
  font-size: .9rem;
  color: #757575;
}
.search input {
    width: 50%;
    height: 6vh;
    border-radius: 5px;
    border: 2px #fff solid;
}

</style>