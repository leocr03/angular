#!/usr/bin/env bash

mkdir -p /opt/tomcat/webapps/test;
cp -Rap angular_study.html /opt/tomcat/webapps/test/index.html;
cp -Rap controllers.js myData.json /opt/tomcat/webapps/test/;
