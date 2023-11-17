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
                'Oi novamente, bem aqui você saberá algumas coisas do meu coração, coisas que eu não te contei. Porque não já te falar uma? No começo do ano quando eu estava namorando alguém que certamente eu não deveria, te vi no Mr.Mix, mas me fiz que não vi, mas com certeza eu percebi você de longe, naquele momento eu senti uma grande vontade de falar com você, mas devido a situação não falei, imaginei também que você não iria gostar. Bem, foi ali que realmente percebi que você ainda mexia comigo!',
                'No tempo que não nos falávamos, muita coisa aconteceu, comigo e com você. Não sei quantas vezes eu fui no seu perfil do Instagram, entrava e vi sua fotos, sempre tão linda aos meus olhos. Eu sempre imaginava se você estava bem, se estava estudando ou feliz, até que um dia vi que você tinha passado em TI, quando eu vi fiquei pensando “nossa entrou mesmo na área, ela conseguiu e enfrentou tudo!”. Sei que é até feio bisbilhotar ou ficar “curindo”, mas eu fiz isso kkk.',
                'O tempo passou e no começo do ano de 2023, depois de dois dias que eu acabei meu relacionamento, você reage a um stories meu, bem o resto você sabe, conversamos, falamos sobre muita coisa, mas no fim em uma conversa, você, fala “A gente se vê!”, e por mais que tudo eu entendi a situação. Meses depois,voltamos a conversar e em uma partida de LOL kkk, surge o assunto e eu conto que estava namorando, não sei por que, mas, quando eu contei parecia que você não acreditava e me perguntou umas três vezes. Naquele momento eu sabia que eu não queria estar namorando, só para tentar algo com a pessoa que sempre me cativou! ',
                'Então em um dia de evento em natal você e eu nos encontramos, foi aí que ficou claro que se eu achava que tinha superado você, eu estava muito enganado, mas acima de tudo não fiquei mau ou pra baixo eu fiquei feliz de ver você e te querer, como antes. A conclusão é que eu ….',
                'ainda gosto de você, ainda sou apaixonado por te, nem sei como você vai reagir a isso, espero que seja bem, por que hoje eu fico feliz de ter você de volta na minha vida. <3'
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
    max-width: 600px;
    line-height: 20px;
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