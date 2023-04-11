<template>
  <ChatIdentities ref="chatIdentity" />
  <!-- <el-scrollbar>
    <ChatInput reqAddress="https://api.openai.com/v1/models" />
  </el-scrollbar> -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import ChatIdentities from "~/components/chats/ChatIdentities.vue";
export default defineComponent({
  name: "GPT",

  setup() {
    const chatIdentity = ref();

    return {
      chatIdentity,
    };
  },
});
</script>
