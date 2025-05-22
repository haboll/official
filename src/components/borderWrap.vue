<template>
    <div class="border-wrap">
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    borderRadius: {
        type: String,
        default: '10px'
    },
    borderWidth: {
        type: String,
        default: '2px'
    },
    borderColor: {
        type: String,
        default: '#fff'
    },
    time: {
        type: String,
        default: '6s'
    },
});

</script>

<style scoped>
.border-wrap {
    position: relative;
}

.border-wrap::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: v-bind(borderRadius);
    border: v-bind(borderWidth) solid v-bind(borderColor);
    box-sizing: border-box;
    animation: clippath v-bind(time) infinite linear;
}

@keyframes clippath {

    100%,
    0% {
        clip-path: inset(0 50% calc(100% - v-bind(borderWidth)) 0);
    }

    12.5% {
        clip-path: inset(0 0 calc(100% - v-bind(borderWidth)) 50%);
    }

    25% {
        clip-path: inset(0 0 50% calc(100% - v-bind(borderWidth)));
    }

    37.5% {

        clip-path: inset(50% 0 0 calc(100% - v-bind(borderWidth)));
    }

    50% {
        clip-path: inset(calc(100% - v-bind(borderWidth)) 0 0 50%);
    }

    62.5% {
        clip-path: inset(calc(100% - v-bind(borderWidth)) 50% 0 0);
    }

    75% {
        clip-path: inset(50% calc(100% - v-bind(borderWidth)) 0 0);
    }

    87.5% {
        clip-path: inset(0 calc(100% - v-bind(borderWidth)) 50% 0);
    }
}
</style>