<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>Encrypted Conversation</title>

	<link href="{{ asset('css/app.css') }}" rel="stylesheet">
	<style type="text/css">
		.messageBox{
			overflow-y: scroll; 
			max-height: 250px;
		}
	</style>
</head>
<body>
	<div class="container">
		<div class="row" id="app">
			<div class="offset-4 col-4">
				<li class="list-group-item active">SecurityGossip</li>

				<ul class="list-group messageBox" v-chat-scroll>
				  <message
				   v-for="value,index in chat.message" :key="value.id"
				   :user = chat.user[index]
				   :color = chat.color[index]
				   :time = chat.time[index]
				  >
				  	@{{ value }}
				  </message>
				</ul>

				<ul class="list-group">
					<input type="text" name="message" placeholder="Type your message here ..." v-model="message" @keyup.enter='send'>
					
				</ul>

			</div>
		</div>
	</div>

	<script src="{{asset('js/app.js')}}"></script>
</body>
</html>