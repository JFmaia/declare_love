<template>
    <div class="carrosel">
        <p class="declares">{{ paragraphs[i] }}</p>
        <div class="box_arrows">
            <button @click="clickBack()">
                <img src="../assets/angulo-esquerdo.png" alt="voltar">
            </button>
            <button @click="clickNext()">
                <img src="../assets/angulo-direito.png" alt="proximo">
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            i: 0,
            paragraphs: [
                'Oii!',
                'tudo bem?',
                'sabia que eu te amo?'
            ]
        }
    },

    watch: {
        i(newValue){
            if(newValue === this.paragraphs.length){
                this.i = 0
            }
        }
    },
    methods:{
        clickBack() {
            if(this.i !== 0){
                this.i = this.i - 1
            }   
        },
        clickNext() {
            if(this.i < this.paragraphs.length){
                this.i = this.i + 1
            }   
        }
    }
}
</script>
<style scoped>
.carrosel {
    height: 600px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.declares {
    font-size: 1rem;
    font-weight: 600;
    font-style: normal;
    max-width: 400px;
}

.box_arrows{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 80%;
}

.box_arrows button {
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 10px;
    border: none;
    border-radius: 100%;
    background-color: #2a0118;
    cursor: pointer;
}

.box_arrows button img{
    height: 18px;
    width: 18px;
}

</style>