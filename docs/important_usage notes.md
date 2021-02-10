---
title: important usage notes 
--- 
⚠️ ATTENTION! THIS WILL REWRITE YOUR GIT HISTORY! ⚠️    
use at your own risk

things to know:
- this version of `git-filter-repo` does **NOT** remove `origin` when done rewriting.
- every `restory` command recreates the commit|s shas.
- you need to have a clean working directory.
- you will have to force push if using the same `origin`.
- when run without commit filter flag (`-s` || `-n` || `-r` - see [options](#options)) - the command will rewrite **ALL** commits with given input.

 