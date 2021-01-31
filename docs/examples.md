---
title: examples 
--- 
## `ls`
list all commits
```bash
restory ls
```
![](./ls.png)

list last 5 commits
```bash
restory ls -n 5
```

list range of commits
```bash
restory ls -r 'c884ca6' '0b4be21'
```

## `redate`
rewrite all commits that has `2021` to year to `1987`   
```bash
restory redate 2021 1987
```
> NOTE: this will also automagically update the day and month

rewrites a specific commit's day
```bash
restory redate 'Jan 23' 'Jan 24' -s '0b4be21'
```
rewrites the last 5 commits date to now
```bash
restory redate "$(echo `date`)" -n 5
```
## `reauthor`
rewrite all commit author names to `The Devil`
```bash
restory reauthor 'The Devil'
```
rewrite last 5 commits author to `Jebediah Kerman`
```bash
restory reauthor 'Jebediah Kerman' -n 5
```
## `remail`
rewrite all commit author and committer email to `thedevil@666.com`
```bash
restory remail 'thedevil@666.com'
```
## `remsg`
rewrite specific commit message
```bash
restory remsg 'this is the new commit msg' -s '620a83b'
```
rewrite `Moon` to `Mun` in all commit messages 
```bash
restory remsg 'Moon' 'Mun'
```
 