package com.wenchukai.tracker.model;

import java.time.LocalDateTime;

import javax.persistence.Id;

import com.wenchukai.base.BaseModel;

public class UserTracker extends BaseModel {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2330020531291304589L;
	@Id
	private Integer id;
	private String ip;
	private String tuid;
	private String href;
	private String referer;
	private LocalDateTime createTime;
	private String paramsString;
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	public String getTuid() {
		return tuid;
	}

	public void setTuid(String tuid) {
		this.tuid = tuid;
	}

	public String getHref() {
		return href;
	}

	public void setHref(String href) {
		this.href = href;
	}

	public String getReferer() {
		return referer;
	}

	public void setReferer(String referer) {
		this.referer = referer;
	}

	public LocalDateTime getCreateTime() {
		return createTime;
	}

	public void setCreateTime(LocalDateTime createTime) {
		this.createTime = createTime;
	}

	public String getParamsString() {
		return paramsString;
	}

	public void setParamsString(String paramsString) {
		this.paramsString = paramsString;
	}

}
