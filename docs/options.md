---
title: options 
--- 
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

 