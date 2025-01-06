( rabbitmqctl wait --timeout 60 $RABBITMQ_PID_FILE ; \
rabbitmqctl add_user $RABBITMQ_DEFAULT_USER $RABBITMQ_DEFAULT_PASS 2>/dev/null ; \
rabbitmqctl set_user_tags $RABBITMQ_DEFAULT_USER administrator ; \
rabbitmqctl set_permissions -p / $RABBITMQ_DEFAULT_USER  ".*" ".*" ".*" ; \
# This is just for a test, remove this line
echo "*** User '$RABBITMQ_DEFAULT_USER' with password '$RABBITMQ_DEFAULT_PASS' completed. ***" ; \
echo "*** Log in the WebUI at port 15672 (example: http:/localhost:15672) ***") &
rabbitmq-server $@