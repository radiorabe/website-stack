# run only when stuff is running or your sure that you dont need it 

# ----- All together (without volumes)
# docker system prune # will remove all unused containers, networks, images (both dangling and unreferenced)

# ----- One by One
# docker volume prune
# docker image prune
# docker container prune
# docker network prune