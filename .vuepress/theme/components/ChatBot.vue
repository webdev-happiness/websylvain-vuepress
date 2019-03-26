<template>
  <div id="live-chat">
		<header class="clearfix" @click.prevent="close = !close">
			<a href="#" class="chat-close">x</a>
			<h4>Sylvain Pastor</h4>
			<span class="chat-message-counter">3</span>
		</header>

		<div class="chat" :class="{'chat-close': close}">

     	<div class="chat-prepare" v-if="!user.ready">
        <h5>Voulez vous discuter avec Sylvain Pastor <br> maintenant ?</h5>
        <input type="text" placeholder="Votre nom" v-model="user.name" @keyup.enter.prevent="start">
        <a href="" @click.prevent="start">Commencer</a>
      </div>
      <template v-else>
        <div class="chat-history" >
          <div class="chat-message clearfix" v-for="m in messages">
            <div class="chat-message-avatar avatar">
              <img src="../public/img/avatars/pastor-sylvain-avatar.jpg">
              <i class="avatar-presence online"></i>
            </div>
            <div class="chat-message-content clearfix">
              <span class="chat-time"></span>
              <h5>{{m.user}}</h5>
              <p>{{m.message.text}}</p>
            </div> <!-- end chat-message-content -->
          </div> <!-- end chat-message -->
        </div> <!-- end chat-history -->

        <!--
          <p class="chat-feedback">Your partner is typing…</p>
        -->
        <input type="text" placeholder="Type your message…" v-model="newMessage" autofocus @keyup.enter.prevent="sendMessage">
      </template>
		</div> <!-- end chat -->

	</div> <!-- end live-chat -->
</template>

<script>
  const io = require('../../node_modules/socket.io-client/dist/socket.io.js');

export default {
  data() {
    return {
			close: true,
      socket: io('http://localhost:3000'),
      user: {
        name: '',
        ready: false
      },
      newMessage: '',
      messages: []
    }
  },
  mounted () {

    this.socket.on('reply', (data) => {
      console.log('reception message', data)
      this.messages.push(data)
    });

    this.socket.on('open_tchat', () => {
      this.user.ready = true
    })

  },
  methods: {

		sendMessage() {
      let send = {
        text: this.newMessage,
        date: new Date()
			}

      this.messages.push({message: send, user: this.user.name})
      this.socket.emit('message', {message: send, destinator: 'Sylvain Pastor', from: this.user.name})
      this.newMessage = ""
		},

    start() {
      if(this.user.name !== undefined && this.user.name !== ''){
        this.socket.emit('subscribe', this.user.name)
      }
    }

	}
}
</script>

<style>

#live-chat {
	bottom: 0;
	font-size: 12px;
	right: 70px;
	position: fixed;
	width: 300px;
  z-index: 3;
}

#live-chat header {
	background: #293239;
	border-radius: 5px 5px 0 0;
	color: #fff;
	cursor: pointer;
	padding: 16px 24px;
}

#live-chat h4:before {
	background: #1a8a34;
	border-radius: 50%;
	content: "";
	display: inline-block;
	height: 8px;
	margin: 0 8px 0 0;
	width: 8px;
}

#live-chat h4 {
	font-size: 12px;
}

#live-chat h5 {
	font-size: 10px;
}

#live-chat form {
	padding: 24px;
}

#live-chat input[type="text"] {
	border: 1px solid #ccc;
	border-radius: 3px;
	padding: 8px;
	outline: none;
	width: 100%;
}

.chat-message-counter {
	background: #e62727;
	border: 1px solid #fff;
	border-radius: 50%;
	display: none;
	font-size: 12px;
	font-weight: bold;
	height: 28px;
	left: 0;
	line-height: 28px;
	margin: -15px 0 0 -15px;
	position: absolute;
	text-align: center;
	top: 0;
	width: 28px;
}

.chat-close {
	background: #1b2126;
	border-radius: 50%;
	color: #fff;
	display: block;
	float: right;
	font-size: 10px;
	line-height: 16px;
	margin: 2px 0 0 0;
	text-align: center;
	width: 16px;
}

.chat {
	background: #fff;
}

.chat-prepare{
	height: 252px;
	padding: 8px 24px;
}

.chat-history {
	height: 252px;
	padding: 8px 24px;
	overflow-y: scroll;
}

.chat-message{
	margin: 16px 0;
}

.chat-message .chat-message-avatar, .chat-message-content{
	display: inline-block;
  vertical-align: top;
}

.chat-message-content {
  width: 85%;
  padding-left: 15px;
}

.chat-time {
	float: right;
	font-size: 10px;
}

.chat-feedback {
	font-style: italic;
	margin: 0 0 0 80px;
}

.chat-close .chat-history, .chat-close input, .chat-close .chat-prepare{
	display:none;
}

@media only screen and (max-width: 960px){
  #live-chat{
    display: none;
  }
}
</style>
