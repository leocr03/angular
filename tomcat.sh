#!/usr/bin/env bash

/opt/tomcat/bin/shutdown.sh
/opt/tomcat/bin/startup.sh

until [ "`curl --silent --show-error --connect-timeout 1 -I http://localhost:8080 | grep 'Coyote'`" != "" ];
do
  echo --- sleeping for 1 second
  sleep 1
done

opera http://localhost:8080/test