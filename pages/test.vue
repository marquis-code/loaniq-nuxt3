<template>
    <main>
        <form>
            <div>
                {{ form }}
                <SignupFormInputFields
                  v-model:fname="form.fname"
                  v-model:lname="form.lname"
                  v-model:email="form.email"
                  v-model:password="form.password"
                />
            </div>
        </form>
    </main>
</template>
<script>
export default {
    data(){
        return {
            form: {
                fname: '',
                lname: '',
                email: '',
                password: ''
            }
        }
    }
}
</script>