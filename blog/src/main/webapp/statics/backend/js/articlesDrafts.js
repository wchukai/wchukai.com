$(document).ready(function() {
	ajaxData(1);
});

function ajaxData(page) {
	$.ajax({
		url : '/backend/articleDrafts/list',
		type : 'get',
		data : {
			'page' : page,
			'pageSize' : '20'
		},
		dataType : 'json',
		success : function(data) {
			$tbody = $('#articleTable').find('tbody');
			$(data).each(
					function(index, item) {
						$tr = $('<tr>').appendTo($tbody);
						$('<th>').html(item.id).appendTo($tr);
						$('<th>').html(item.articleId).appendTo($tr);
						$('<th>').html(item.title).appendTo($tr);
						$('<th>').html(item.author).appendTo($tr);
						$('<th>').html(item.createTime).appendTo($tr);
						$('<th>').html(item.updateTime).appendTo($tr);
						$('<th>').html(item.mender).appendTo($tr);
						$('<th>').html(item.isPublish == 'PUBLISHED' ? "已发布" : "未发布")
								.appendTo($tr);
						$('<th>').addClass('version').html(item.version)
								.appendTo($tr);
						$('<th>').append(
								$('<a>').html('编辑').attr('href',
										'/backend/editors?id=' + item.id))
								.appendTo($tr);
						$('<th>').append(
								$('<a>').html('删除')
										.attr('href', 'javascript:;').addClass(
												"delete").data("id",item.id)).appendTo($tr);
					});
			$("a.delete").click(
					function() {
						if (confirm("确认删除")) {
							$.ajax({
								url : "/backend/articleDraft/"
										+ $(this).data("id"),
								type : 'delete',
								dataType : 'json',
								success : function(data) {
									if (data.success != 1) {
										alert(data.message || "请求失败!");
										return;
									}
									$(this).parents("tr").remove();
								}
							});
						}
					})
		}
	});
}