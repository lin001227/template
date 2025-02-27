<template>
    <div>{{ $t("message.hello") }}</div>
</template>

<script>
    import { useI18n } from "vue-i18n";

    export default {
        setup() {
            const { t } = useI18n();
            return {
                t
            };
        }
    };
</script>
