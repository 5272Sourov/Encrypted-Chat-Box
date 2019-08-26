<template>
	<div>
		<li class="list-group-item" :class="className"><slot></slot></li>
		<small class="badge float-right" :class="bageClass">{{user}} <span id="time">{{time}}</span></small>
	</div>
</template>

<script>
export default {

  name: 'message',

  props:[
  	'color',
  	'user',
  	'time'
  ],

  computed:{
  	className(){
  		return 'list-group-item-'+this.color;
  	},
  	bageClass(){
  		return 'badge-'+this.color;
  	}
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>

	.list-group-item{
		font-size: 16px !important;
	}
	
	#time{
		font-size: 9px;
		color: #000;
		margin-top: 10px;
		background-color: #fff;
	}
</style>