package com.cognizant.account.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @GetMapping("/{number}")
    public Map<String, Object> getAccountDetails(@PathVariable String number){
        Map<String, Object> map = new HashMap<>();
        map.put("number", number);
        map.put("type", "savings");
        map.put("balance", 234343);
        return map;
    }
}
