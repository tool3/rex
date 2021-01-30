---
title: api 
--- 

## `list`
list all commits   
alias `ls`   
### example
```bash
restory ls
```

output:
<!-- ![](./list.png) -->

show 5 last commits
```bash
restory ls -n 5
```

## `redate`
rewrite commit|s date   
alias `rd`   
### usage
```bash
restory redate [string-to-replace] <value>
```
### examples
- rewrite all commits that has `2021` to year to `1987`   
```bash
restory redate 2021 1987
```
> NOTE: this will also automagically update the day and month

- rewrites a specific commit's day

```bash
restory redate 'Sat Jan 23' 'Sun Jan 24' -s <commit-sha>
```
- rewrites the last 5 commits date to now

```bash
restory redate "$(echo `date`)" -n 5
```

## `reauthor`
rewrite commit|s author name   
alias `ra`

### usage
```bash
restory reauthor <author-name>
```
### example
rewrite all commit author names to `The Devil`
```bash
restory reauthor 'The Devil'
```
rewrite last 5 commits author to `Jebediah Kerman`
```bash
restory reauthor 'Jebediah Kerman' -n 5
```

## `remail`
rewrite commit|s author email   
alias `re`

### usage
```bash
restory remail <author-email>
```

### example
rewrite all commit author email to `thedevil@666.com`
```bash
restory remail 'thedevil@666.com'
```
## `remsg`
rewrite commit|s message   
alias `rm` 
### usage
```bash
restory remsg <commit-msg>
```
### example
rewrite specific commit message
```bash
restory remsg 'this is the new commit msg' -s '620a83b'
```
 