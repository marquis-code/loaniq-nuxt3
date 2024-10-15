<template>
    <main>
        <div>
            <label>First Name</label>
            <input :value="fname" @input="$emit('update:fname', $event.target.value)"  />
        </div>

        <div>
            <label>Last Name</label>
            <input :value="lname" @input="$emit('update:lname', $event.target.value)"  />
        </div>

        <div>
            <label>Email</label>
            <input :value="email" @input="$emit('update:email', $event.target.value)"  />
        </div>

        <div>
            <label>Password</label>
            <input :value="password" @input="$emit('update:password', $event.target.value)"  />
        </div>
        
    </main>
</template>

<script>
export default {
    props: {
       fname: {
        type: String
       },
       lname: {
        type: String
       },
       email: {
        type: String
       },
       password: {
        type: String
       }
    }
}
</script>