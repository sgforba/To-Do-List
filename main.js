$(document).ready(function(){
	var count = 0;

	function updateTotal(){
		count = $('#todos li').not('.done').length;
		$('#count').html(count);

	};

	function addNewItem(event){
		event.preventDefault();
		var newItem = $('#newItem').val();
		if (newItem == ''){
			
		}else {
			$('#todos').append('<li><span class="item">' + newItem + '</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');
		}
		$('#newItem').val('');
		updateTotal();
	};

	function removeItem(event){
		event.preventDefault();
		$(this).parent().remove();
		updateTotal();
	};

	function editItem(event){
		event.preventDefault();
		var itemText = $(this).siblings('.item').html();
		var listItem = $(this).parent();
		listItem.html('<form class="editor"><input value="'+ itemText+'"></form>')
		listItem.find('input').focus();
	};

	function saveItem(event){
		event.preventDefault();
		var itemText = $(this).children('input').val();
		var listItem = $(this).parent();
		listItem.html('<span class="item">' + itemText + '</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');
		$('#newItem');
	}

	function switchStatus(){
		var listItem = $(this).parent();
		listItem.toggleClass('done');
		updateTotal();
	}

	function clearComplete(){
		$('#todos').find('.done').remove();
		updateTotal();

	}
	function clearList(){
		$('#todos').children().remove();
		updateTotal();
	};
	$('#new').on('submit', addNewItem);
	$('#todos').on('click','.remove', removeItem);
	$('#todos').on('click','.edit', editItem);
	$('#todos').on('submit','.editor', saveItem);
	$('#todos').on('blur','.editor', saveItem);
	$('#todos').on('click','.item', switchStatus);
	$('#clear').on('click', clearList);
	$('#clearCompleted').on('click', clearComplete);

});