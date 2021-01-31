<!--{"title": "restory", "main": true}-->
# restory
rewrite git history

# install
```bash
yarn add @tool3/restory -g
```
or 
```bash
npx @tool3/restory <cmd> [args] [options]
```
<!--{"title": "api"}-->
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

<!--{"title": "options"}-->
### `sha`
type: `string`   
alias: `s`   
description: rewrite a specific commit sha.    
usage: `restory <cmd> [args] -s <short-sha>`
### `range`
type: `array`   
alias: `r`      
description: range of commits to operate on.    
usage: `restory <cmd> [args] -r <start-sha> <end-sha>`
### `number`
type: `number`   
alias: `n`      
description: number of commits.
default: 0 (all commits)    
usage: `restory <cmd> [args] -n <number>`
### `committer`
type: `boolean`   
alias: `c`      
description: include committer fields. for example: `author_date` will also include `committer_date` in the rewrite.   
default: `true`
### `git-filter-repo`
type: `boolean`   
alias: `g`      
description: use [`git filter-repo`](https://github.com/newren/git-filter-repo) insteads of `git filter-branch` - this method is extremely fast compared to filter-branch.   
default: `true`

<!--{"title": "important usage notes"}-->
⚠️ ATTENTION! THIS WILL REWRITE YOUR GIT HISTORY! ⚠️    
use at your own risk

things to know:
- every `restory` command recreates the commit|s shas.
- you need to have a clean working directory.
- you will have to force push.
- when run without `--sha || -s` flag - the command will rewrite **ALL** commits with given input.

<!--{"title": "examples"}-->
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
