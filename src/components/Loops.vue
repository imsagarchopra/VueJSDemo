<template>
    <div>
        <table border="2">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tr v-for="user in users" v-bind:key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name:'Loop',
    data(){
        return{
            users: [
                {id : 1, name: "Sam", email: "sam@sam.com"},
                {id : 2, name: "Tom", email: "tom@tom.com"},
                {id : 3, name: "Harry", email: "harry@harry.com"},
                {id : 4, name: "John", email: "john@john.com"},
            ]
        }
    }
}
</script>