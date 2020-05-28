package com.rajasi.rest.webservices.restfulwebservices.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "dummy ",
        "$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));
    
    inMemoryUserList.add(new JwtUserDetails(2L, "rajasi",
            "$2a$10$5PEnD54jYAC2NHX/XNYCzeKxIp8FYUl4F4OiwjiWTcRmln0Ujmq.6", "ROLE_USER_2"));
  }

  
  

  
  
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}


//{
//"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYWphc2kiLCJleHAiOjE1ODcwODQ1ODIsImlhdCI6MTU4NjQ3OTc4Mn0.Ob0-tGxbwAzAH9AETyn7RgbTfKOngD3ygWSfcHt7VFVOgmiFJZDKOCplGCPeyheA2c620kagr5kwdeuEWFhOkw"
//}