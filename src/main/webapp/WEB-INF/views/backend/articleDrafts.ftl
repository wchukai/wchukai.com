<#include "WEB-INF/views/backend/pageMacro.ftl">     
<@page mainJs="common-main" miancss=[]>
		  <div class="col-md-10">
  			<div class="content-box-large">
  				<div class="panel-heading">
					<div class="panel-title">文章列表</div>
				</div>
  				<div class="panel-body">
  					<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="articleTable">
						<thead>
							<tr>
								<th>ID</th>
								<th>文章ID</th>
								<th>标题</th>
								<th>类型</th>
								<th>作者</th>
								<th>创建日期</th>
								<th>修改日期</th>
								<th>发布状态</th>
								<th>版本</th>
								<th>操作</th>
							</tr>
						</thead>
						<tbody>
						</tbody>
					</table>
  				</div>
  			</div>

</@page>