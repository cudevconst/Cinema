package com.example.cinema.api;

import com.example.cinema.dao.UserDAO;
import com.google.gson.Gson;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@WebServlet(name = "UserAPI", value = "/api/user/*")
public class UserAPI extends HttpServlet {
    private UserDAO userDAO = new UserDAO();
    private Gson gson = new Gson();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("application/json; charset=UTF-8");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        Pattern pattern = Pattern.compile("api/user$");
        Matcher matcher = pattern.matcher(request.getRequestURL());
//        if(matcher.find()){
//            try{
//                int idUser = Integer.parseInt(request.getParameter("id"));
//
//            }
//            catch ()
//        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
