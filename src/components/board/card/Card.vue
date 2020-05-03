<template>
	<div class="owkr-card">
		<div class="owkr-card-header">
			<div class="owkr-card-title">{{data.title}}</div>
			<span class="badge">Important</span>
			<font-awesome-icon icon="ellipsis-v" class="owkr-card-setting-icon"/>
		</div>
		<div class="owkr-card-details">
			<span>In Progress</span>
			<span>Asignee Faces</span>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
	  props: ['data']
	}
</script>
	
<style>
	.owkr-card {
		box-shadow: 0px 0px 1px 1px #ddd;
		margin: 7px;
		width: match-parent;
	}
	.owkr-card-header,
	.owkr-card-details {
		display: flex;
		justify-content: space-between;
		padding: 7px;
		width: match-parent;
	}

	.owkr-card-title {
		font-weight: bold;
	}

	.owkr-card-details{
		justify-content: space-between;
	}
</style>