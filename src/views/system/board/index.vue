<template>
  <div>
    <!-- 发表留言 -->
    <el-form ref="messageForm" :model="newMessage" class="message-form">
      <el-form-item label="留言内容" prop="content">
        <el-input v-model="newMessage.content" type="textarea" placeholder="请输入留言内容" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitMessage">发表留言</el-button>
      </el-form-item>
    </el-form>

    <!-- 留言列表 -->
    <el-card class="message-list">
      <div v-for="message in messages" :key="message.id" class="message-item">
        <div class="message-content">{{ message.content }}</div>
        <div class="message-actions">
          <el-button type="text" @click="showReplyForm(message)">回复</el-button>
          <el-button type="text" @click="showReplies(message)">查看回复</el-button>
        </div>
        <!-- 回复留言的表单 -->
        <el-form v-if="showReplyForm" ref="replyForm" :model="replyForm" :rules="replyFormRules" class="reply-form">

          <el-form-item label="回复内容" prop="replyContent">
            <el-input v-model="replyForm.replyContent" type="textarea" placeholder="请输入回复内容" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitReply(message)">回复</el-button>
            <el-button @click="cancelReply(message)">取消</el-button>
          </el-form-item>
        </el-form>

        <!-- 留言的回复列表 -->
        <el-collapse v-model="message.showReplies">
          <el-collapse-item>
            <template #title>
              <div class="reply-title">回复列表</div>
            </template>
            <div class="reply-list">
              <div v-for="reply in message.replies" :key="reply.id" class="reply-item">
                <div class="reply-content">{{ reply.content }}</div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: {
        content: ''
      },
      replyForm: {
        replyContent: ''
      },
      messages: []
    }
  },
  methods: {
    submitMessage() {
      this.$refs.messageForm.validate((valid) => {
        if (valid) {
          // 处理发表留言的逻辑，将留言内容保存到数据库中
          // 留言成功后，可以刷新留言列表或重新获取最新的留言列表
          // 示例代码中省略了保存留言到数据库和获取留言列表的逻辑
          this.messages.unshift({
            id: Date.now(),
            content: this.newMessage.content,
            replies: [],
            showReplyForm: false,
            showReplies: false
          })
          this.newMessage.content = ''
        }
      })
    },
    showReplyForm(message) {
      this.$set(message, 'showReplyForm', true)
    },
    cancelReply(message) {
      this.$set(message, 'showReplyForm', false)
      this.replyForm.replyContent = ''
    },
    submitReply(message) {
      const formRef = this.$refs.replyForm
      if (formRef) {
        formRef.validate((valid) => {
          if (valid) {
            // 处理回复留言的逻辑，将回复内容保存到数据库中
            // 回复成功后，可以刷新留言列表或重新获取最新的留言列表
            // 示例代码中省略了保存回复到数据库和获取回复列表的逻辑
            message.replies.push({
              id: Date.now(),
              content: this.replyForm.replyContent
            })
            this.replyForm.replyContent = ''
            this.$set(message, 'showReplyForm', false)
          }
        })
      }
    },

    showReplies(message) {
      this.$set(message, 'showReplies', !message.showReplies)
    }
  }
}
</script>

<style scoped>
.message-form {
    margin-bottom: 20px;
}

.message-list {
    margin-top: 20px;
}

.message-item {
    margin-bottom: 10px;
}

.message-content {
    margin-bottom: 10px;
}

.message-actions {
    margin-bottom: 10px;
}

.reply-form {
    margin-bottom: 10px;
}

.reply-title {
    margin-bottom: 10px;
}

.reply-list {
    margin-bottom: 10px;
}

.reply-item {
    margin-bottom: 5px;
}
</style>
