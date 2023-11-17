<template>
    <div class="contant-home">
        <section class="container hero">
            <div v-if="letter === false">
                <div v-if="start === false" class="box-password">
                    <label>Password:</label>
                    <input :type="toogle ? 'text': 'password'" v-model="password">
                    <div class="eye">
                        <img @click="toogle = false" v-if="toogle" src="../assets/visibly.png" alt="visivel">
                        <img @click="toogle = true" v-else src="../assets/not_visibly.png" alt="não visivel">
                    </div>
                </div>
                <div class="gif" v-if="start === true">
                    <img src="../assets/love_gif.gif" alt="gif de carregamento">
                </div>
            </div>
            <div v-else>
                <h1>carrocel</h1>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data(){
        return{
            password:'',
            toogle: false,
            start: false,
            letter: false
        }
    },
    watch:{
        password(newValue){
            if(newValue === 'meusafadogostoso'){
                this.start = true
            }
        },
        start(newValue){
            if(newValue === true){
                setTimeout(() => {
                    this.letter = true
                }, 3000)
            }
        }
    }
}
</script>
<style scoped>
.contant-home {
    padding: 80px 120px;
}

.hero {
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.box-password{
    font-size: 0.9rem;
    font-style: italic;
    font-weight: 300;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.box-password input{
    color: white;
    height: 20px;
    padding: 4px;
    padding-right: 30px;
    border-radius: 4px;
    transition: 0.2s;
    border: 1px solid #2a0118;
    background-color: #2a0118;
}

.box-password input:focus{
    outline: none;
    border: 1px solid #DE41C5;
}

.eye {
    position: relative;
    top: -28px;
    right: -179px;
}

.eye img {
    cursor: pointer;
    height: 18px;
    width: 18px;
}

.gif img {
    height: 260px;
    width: 260px;
}
</style>