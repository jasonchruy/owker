<template>
	<div class="owkr-board">
		<!-- <div class="owkr-board-col">
			<div class="owkr-board-col-title">
				<h5>Todo</h5>
			</div>
			<div class="owkr-board-col-cards">
				<card/>
				<card/>
				<card/>
				<card/>
				<card/>
				<card/>
				<card/>
				<card/>
				<card/>
			</div>
		</div> -->
		<drag-drop
	      :dropzones="dropGroups"
	      :dropzonesTitle="'XYZ Company Teams'"
	      :originalData="stories"
	      :originalTitle="'Tasks to be distributed'"
	      :inPlace="true"
	      :enableSave="false"
	      :enableCancel="false"
	      @save="save"
	      @cancel="cancel"
	    >
	      <template #dd-card="{ cardData }">
	      	<!-- <span>{{cardData.title}}</span> -->
	      	<card :data="cardData"/>
	        <!-- <custom-card
	          :data="cardData"
	          @done="doneMarked"
	        /> -->
	      </template>
	    </drag-drop>
	</div> 
</template>

<script type="text/javascript">
	import Card from '@/components/board/card/Card'
	import DragDrop from 'vue-drag-n-drop'

	export default {
	  data () {
	    return {
	      stories: [
	        {
	          title: 'Strategy 101',
	          description: 'Create a draft of business plan',
	          time: '3 days',
	          done: false
	        },
	        {
	          title: 'Strategy 102',
	          description: 'Finalize the plan',
	          time: '4 days',
	          done: false
	        },
	        {
	          title: 'Tech diagram',
	          description: 'Draw the tech data',
	          time: '4 days',
	          done: false
	        },
	        {
	          title: 'Place Holder',
	          description: 'Data Science Team',
	          time: '5 days',
	          done: false
	        }
	      ],
	      dropGroups: [
	        {
	          name: 'Business Team',
	          children: []
	        },
	        {
	          name: 'Tech Dept',
	          children: []
	        },
	        {
	          name: 'Marketing Dept',
	          children: []
	        }
	      ],
	      save: false,
	      cancel: false
	    }
	  },
	  components: {Card, DragDrop}
	}
</script>

<style type="text/css">
	.owkr-board {
		padding: 20px;
		height: 100%;
		width: 100vw;
	}

	.owkr-board-col {
		border: 1px solid #dddddd;
	    height: -webkit-fill-available;
	    overflow: scroll;
	    width: 300px;
	}

	.dd-drop-container {
		width: 310px !important;
	}

	.smooth-dnd-container {
		min-height: 45px;
	}
</style>