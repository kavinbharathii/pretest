
<script>

export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div id="dev">
        <h1>Select a certification</h1>
        <div class="buttons">
            <router-link to="/iso9001">
                <button>iso9001</button>
            </router-link>
            <router-link to="/iso14001">
                <button>iso14001</button>
            </router-link>
            <router-link to="/Iso22000">
                <button>Iso22000</button>
            </router-link>
            <router-link to="/Iso27001">
                <button>Iso27001</button>
            </router-link>
            <router-link to="/Iso45001">
                <button>Iso45001</button>
            </router-link>
        </div>
    </div>
</template>


<style scoped>
#dev {
    width: 100vw;
    height: 100vh;
    background-color: #121212;
    color: #00b0f0;
    margin: 0;
    padding: 2em;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
}

#dev > .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 1em;
}

button {
    width: 200px;
    padding: 1.3em 1.5em;
    background-color: #121212;
    color: #00b0f0;
    border: 2px solid #00b0f0;
    border-radius: 10px;
}

#dev > h1 {
    font-size: 3em;
    font-weight: 800;
}

</style>