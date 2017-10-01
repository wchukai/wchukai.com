package com.wchukai.web.controller;

import com.wchukai.web.model.ArticleVisit;
import com.wchukai.web.service.VisitorInfoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("/api/tracker")
public class TrackerController extends BaseController {
    @Resource
    private VisitorInfoService visitorInfoService;

    @RequestMapping(value = "/articleClick", method = RequestMethod.POST)
    public ResponseEntity postUserTracker(@RequestBody ArticleVisit articleVisit) {
        visitorInfoService.handArticleVisit(articleVisit);
        return success();
    }

}