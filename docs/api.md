---
title: api 
--- 
every command in `restory` can either set a new value or replace an existing value.   
`restory <cmd> [optional-subject-to-replace] <value>`

## `list`
list all commits   
alias `ls`   
## `redate`
rewrite commit|s date   
alias `rd`   
## `reauthor`
rewrite commit|s author name   
alias `ra`
## `remail`
rewrite commit|s author email   
alias `re`
## `remsg`
rewrite commit|s message   
alias `rm`   

## `rewrite`
rewrite multiple commit fields   
this command is a combination of all of the commands above, and is controlled with flags    
see `restory rewrite --help`   
alias `rm`
