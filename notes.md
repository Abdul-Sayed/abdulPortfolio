https://stackoverflow.com/questions/9082499/custom-domain-for-github-project-pages

commit and push local changes

and refresh www.awsayed.com to see changes

repo root needs CNAME with awsayed.com in it

in repo's settings, enable github pages, source from master branch, and custom domain awsayed.com

on godaddy, find manage DNS, and ensure there are four type A records with name: @ and Value:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.122.153

TTL can be 600 seconds
